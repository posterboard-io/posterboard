import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    checkUserLoggedIn: protectedProcedure
        .input(z.object({
            // TODO: Add input validation
        }))
        .query(async ({ ctx }) => {
        const user = await ctx.db.user.findUnique({
            where: { id: ctx.session.user.id },
        });

        return user;
    }),
})