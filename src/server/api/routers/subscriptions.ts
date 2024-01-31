import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const subscriptionsRouter = createTRPCRouter({
  availablePlans: publicProcedure.query(async ({ ctx }) => {

  }),

  subscribePlan: protectedProcedure.mutation(async ({ ctx }) => {

  }),

  unsubscribePlan: protectedProcedure.mutation(async ({ ctx }) => {

  }),

  updatePaymentMethod: protectedProcedure.mutation(async ({ ctx }) => {

  }),
});

