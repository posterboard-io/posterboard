import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const jobsRouter = createTRPCRouter({
  searchJobs: publicProcedure
    .input(z.object({
      page: z.number().optional().default(1),
      pageSize: z.number().optional().default(100),
      query: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      techStack: z.string().optional().nullable(),
      compensationRange: z.string().optional().nullable(),
      roleLevel: z.string().array().optional().nullable(),
    }))
    .query(async ({ ctx, input }) => {
      const { page, pageSize, query, location } = input;
      const skip = (page - 1) * pageSize;

      const where = {
        ...(query && { title: { contains: query, mode: 'insensitive' as const } }),
        ...(location && { location: { contains: location, mode: 'insensitive' as const } }),
      };

      return await ctx.db.jobPostings.findMany({
        where: where,
        orderBy: { updatedInDbAt: "desc" },
        skip: skip,
        take: pageSize,
      });
    }),

  getTotalJobsForQuery: publicProcedure
    .input(z.object({
      query: z.string().optional().nullable(),
    }))
    .query(async ({ ctx, input }) => {
      const where = {
        ...(input.query ? { title: { contains: input.query, mode: 'insensitive' as const } } : {}),
      };

      const count = await ctx.db.jobPostings.count({
        where: where,
      });

      return count;
    }
    ),

  getJobStatsTechStack: publicProcedure
    .input(z.object({
      query: z.string().optional().nullable(),
    }))
    .query(async ({ ctx, input }) => {
      const where = {
        ...(input.query ? { title: { contains: input.query } } : {}),
      };

      const jobStats = await ctx.db.jobPostings.groupBy({
        by: ["companyTechStack"],
        where: where,
        _count: {
          companyTechStack: true,
        },
      });

      return jobStats;
    }
    ),


  getLatest: publicProcedure
    .input(z.object({
      page: z.number().optional().default(1),
      pageSize: z.number().optional().default(10),
    }))
    .query(({ ctx, input }) => {
      const skip = (input.page - 1) * input.pageSize;
      const take = input.pageSize;

      return ctx.db.jobPostings.findMany({
        orderBy: { updatedInDbAt: "desc" },
        skip: skip,
        take: take,
      });
    }),

  getRecommended: protectedProcedure
    .input(z.object({
      jobTitle: z.array(z.string())
    }))
    .query(async ({ ctx, input }) => {
      const getRecommendedJobs = await ctx.db.jobPostings.findMany({
        where: {
          title: { in: input.jobTitle },
        },
        orderBy: { updatedInDbAt: "desc" },
      });

      return getRecommendedJobs;
    }),


  getSavedJobs: protectedProcedure
    .query(async ({ ctx }) => {
      const savedJobs = await ctx.db.userSavedJobs.findMany({
        where: {
          userId: ctx.session.user.id,
        },
        include: {
          jobPosting: true, // Assuming you want to include the details of the job postings
        },
      });

      return savedJobs.map((savedJob) => ({
        ...savedJob,
        jobPosting: savedJob.jobPosting,
      }));
    }),

  saveJob: protectedProcedure
    .input(z.object({
      jobId: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
      const jobSaved = await ctx.db.userSavedJobs.create({
        data: {
          userId: ctx.session.user.id,
          jobPostingId: input.jobId,
        },
      });
      return jobSaved;
    }
    ),

  removeJob: protectedProcedure
    .input(z.object({
      jobId: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
      // Check if the record exists
      const existingRecord = await ctx.db.userSavedJobs.findUnique({
        where: {
          userId_jobPostingId: {
            userId: ctx.session.user.id,
            jobPostingId: input.jobId,
          },
        },
      });

      if (!existingRecord) {
        throw new Error("Job not found or you don't have permission to delete it.");
      }

      // If the record exists, proceed to delete
      const jobUnsaved = await ctx.db.userSavedJobs.delete({
        where: {
          userId_jobPostingId: {
            userId: ctx.session.user.id,
            jobPostingId: input.jobId,
          },
        },
      });

      return jobUnsaved;
    }
    ),

  getJobsAppliedToSortedByMonths: protectedProcedure
    .query(async ({ ctx }) => {
      const jobsAppliedTo = await ctx.db.userSavedJobs.groupBy({
        by: ["jobPostingId"],
        where: {
          userId: ctx.session.user.id,
        },
        _count: {
          jobPostingId: true,
        },
      });

      return jobsAppliedTo;
    }
    ),

  getJobDetails: publicProcedure
    .input(z.object({
      jobId: z.string()
    }))
    .query(async ({ ctx, input }) => {
      const jobData = await ctx.db.jobPostings.findUnique({
        where: {
          externalJobId: input.jobId
        }
      })
      return jobData
    }),

    updateJobStatus: protectedProcedure
      .input(z.object({
        jobId: z.number(),
        status: z.enum(["Saved", "Applied", "RecievedResponse", "Interviewing", "PendingOffer", "Rejected"])
      }))
      .mutation(async ({ ctx, input }) => {
        const jobStatusUpdated = await ctx.db.userSavedJobs.update({
          where: {
            userId_jobPostingId: {
              userId: ctx.session.user.id,
              jobPostingId: input.jobId,
            },
          },
          data: {
            jobPostingStatus: input.status,
          },
        });

        return jobStatusUpdated;
      }),

    getStatusOfSavedJobs: protectedProcedure
      .query(async ({ ctx }) => {
        const savedJobs = await ctx.db.userSavedJobs.findMany({
          where: {
            userId: ctx.session.user.id,
          },
          include: {
            jobPosting: true, // Assuming you want to include the details of the job postings
          },
        });

        return savedJobs.map((savedJob) => ({
          ...savedJob,
          jobPosting: savedJob.jobPosting,
        }));
      }),

    getAllJobsSortedByRoleLevel: publicProcedure
      .query(async ({ ctx }) => {
        const jobs = await ctx.db.jobPostings.groupBy({
          by: ["roleLevel", "company"],
          _count: {
            roleLevel: true,
            company: true,
          },
        });

        return jobs;
      }),
});

