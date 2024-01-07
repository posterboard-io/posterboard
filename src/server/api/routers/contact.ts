import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { sendSlackMessage } from "~/lib/sendSlack"

export const contactRouter = createTRPCRouter({
  sendSlackMessageToUs: publicProcedure
    .input(z.object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      email: z.string().min(1),
      message: z.string().min(1),
    }))
    .mutation(async ({ input }) => {
      sendSlackMessage({
        logString: `Contact Form Submission from ${input.firstName} ${input.lastName} - ${input.email} - ${input.message}`,
        status: "Success",
        failure: false,
      });
      return "Message sent! ✅ We will get back to you as soon as possible.";
    }
    ),
});
