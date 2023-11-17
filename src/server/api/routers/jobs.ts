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
            fullTime: z.boolean().optional().nullable(),
        }))
        .query(async ({ ctx, input }) => {
            const skip = (input.page - 1) * input.pageSize;
            const take = input.pageSize;

            const where = {            
                ...(input.query ? { title: { contains: input.query } } : {}),
                ...(input.location ? { location: { contains: input.location } } : {}),
                ...(input.fullTime ? { fullTime: input.fullTime } : {}),
            };
            const jobs = await ctx.db.jobPostings.findMany({
                where: where,
                orderBy: { updatedInDbAt: "desc" },
                skip: skip,
                take: take,
            });
            return jobs;
        }),

    getTotalJobsForQuery: publicProcedure
        .input(z.object({
            query: z.string().optional().nullable(),           
        }))
        .query(async ({ ctx, input }) => {
            const where = {
                ...(input.query ? { title: { contains: input.query } } : {}),
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

});

