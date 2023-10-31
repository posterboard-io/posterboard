import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    userSavedJobs: protectedProcedure
        .input(z.object({
            // Some input
        }))
        .query(async ({ ctx, input }) => {
            // Some query
        }),

    userAppliedJobs: protectedProcedure
        .input(z.object({
            // Some input
        }))
        .query(async ({ ctx, input }) => {
            // Some query
        }),

    userSubscription: protectedProcedure
        .input(z.object({
            // Some input
        }))
        .query(async ({ ctx, input }) => {
            // Some query
        }),
})