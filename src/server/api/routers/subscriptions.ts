import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const subscriptionsRouter = createTRPCRouter({
    // availablePlans: publicProcedure        
        
    // subscribePlan: protectedProcedure

    // unsubscribePlan: protectedProcedure

    // updatePaymentMethod: protectedProcedure


});

