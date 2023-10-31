import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const jobsRouter = createTRPCRouter({
    find: protectedProcedure
        .input(z.object({
            // Some input
        }))
        .query(async ({ ctx, input }) => {
            // Some query
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
            // Some input
        }))
        .query(async ({ ctx, input }) => {
            // Some query
        }
    ),

    saveJob: protectedProcedure
        .input(z.object({
            // Some input
        }))
        .mutation(async ({ ctx, input }) => {
            // Some mutation
        }
    ),

    removeSavedJob: protectedProcedure
        .input(z.object({
            // Some input
        }))
        .mutation(async ({ ctx, input }) => {
            // Some mutation
        }
    ),
});

