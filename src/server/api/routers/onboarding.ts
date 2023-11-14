import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { sendSlackMessage } from "~/lib/sendSlack"

export const onboardingRouter = createTRPCRouter({
    getOnboardingStatus: protectedProcedure
        .query(async ({ ctx, input }) => {
            // Some query
            const didUserFinishOnboarding = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    didCompleteOnboarding: true,
                },
            });
            return didUserFinishOnboarding;
        }),
});