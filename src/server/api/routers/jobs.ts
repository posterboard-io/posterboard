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

