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
    
    updateUserOnboardingStatus: protectedProcedure
        .input(z.object({
            status: z.boolean(),
        }))
        .mutation(async ({ ctx, input }) => {
            // Some mutation
            const updatedUser = await ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    didCompleteOnboarding: input.status,
                },
            });
            return updatedUser;
        }),

    getUserTechStack: protectedProcedure
        .query(async ({ ctx, input }) => {
            // Some query
            const userTechStack = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    onboardingTechStack: true,
                },
            });
            return userTechStack;
        }),
    
    updateUserTechStack: protectedProcedure
        .input(z.object({
            techStack: z.array(z.string()),
        }))
        .mutation(async ({ ctx, input }) => {
            // Some mutation
            const updatedUser = await ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    onboardingTechStack: input.techStack,
                },
            });
            return updatedUser;
        }),

    updateUserOnboardingLevel: protectedProcedure
        .input(z.object({
            level: z.array(z.string()),
        }))
        .mutation(async ({ ctx, input }) => {
            // Some mutation
            const updatedUser = await ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    onboardingLevel: input.level,
                },
            });
            return updatedUser;
        }),

    getUserOnboardingLevel: protectedProcedure
        .query(async ({ ctx, input }) => {
            // Some query
            const userOnboardingLevel = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    onboardingLevel: true,
                },
            });
            return userOnboardingLevel;
        }),

    getUserOnboardingLocations: protectedProcedure
        .query(async ({ ctx, input }) => {
            // Some query
            const userOnboardingLocations = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    onboardingLocation: true,
                },
            });
            return userOnboardingLocations;
        }),
    
    updateUserOnboardingLocations: protectedProcedure
        .input(z.object({
            locations: z.array(z.string()),
        }))
        .mutation(async ({ ctx, input }) => {
            // Some mutation
            const updatedUser = await ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    onboardingLocation: input.locations,
                },
            });
            return updatedUser;
        }),

    getUserOnboardingCompanySize: protectedProcedure
        .query(async ({ ctx, input }) => {
            // Some query
            const userOnboardingCompanySize = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    onboardingCompanySize: true,
                },
            });
            return userOnboardingCompanySize;
        }),

    updateUserOnboardingCompanySize: protectedProcedure
        .input(z.object({
            companySize: z.array(z.string()),
        }))
        .mutation(async ({ ctx, input }) => {
            // Some mutation
            const updatedUser = await ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    onboardingCompanySize: input.companySize,
                },
            });
            return updatedUser;
        }),

    getUserOnboardingCompanyIndustry: protectedProcedure
        .query(async ({ ctx, input }) => {
            // Some query
            const userOnboardingCompanyIndustry = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    onboardingCompanyIndustry: true,
                },
            });
            return userOnboardingCompanyIndustry;
        }),

    updateUserOnboardingCompanyIndustry: protectedProcedure
        .input(z.object({
            companyIndustry: z.array(z.string()),
        }))
        .mutation(async ({ ctx, input }) => {
            // Some mutation
            const updatedUser = await ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    onboardingCompanyIndustry: input.companyIndustry,
                },
            });
            return updatedUser;
        }),

    getUserOnboardingTotalCompensation: protectedProcedure
        .query(async ({ ctx, input }) => {
            // Some query
            const userOnboardingTotalCompensation = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    onboardingTotalCompensation: true,
                },
            });
            return userOnboardingTotalCompensation;
        }),

    updateUserOnboardingTotalCompensation: protectedProcedure
        .input(z.object({
            totalCompensation: z.array(z.string()),
        }))
        .mutation(async ({ ctx, input }) => {
            // Some mutation
            const updatedUser = await ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    onboardingTotalCompensation: input.totalCompensation,
                },
            });
            return updatedUser;
        }),

    getUserOnboardingRole: protectedProcedure
        .query(async ({ ctx, input }) => {
            // Some query
            const userOnboardingRole = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    onboardingRoleType: true,
                },
            });
            return userOnboardingRole;
        }),

    updateUserOnboardingRole: protectedProcedure
        .input(z.object({
            role: z.array(z.string()),
        }))
        .mutation(async ({ ctx, input }) => {
            // Some mutation
            const updatedUser = await ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    onboardingRoleType: input.role,
                },
            });
            return updatedUser;
        }),

    setUserOnboardingAsComplete: protectedProcedure
        .mutation(async ({ ctx, input }) => {
            // Some mutation
            const updatedUser = await ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    didCompleteOnboarding: true,
                },
            });
            return updatedUser;
        }),

    getUserJobPrefrences: protectedProcedure
        .query(async ({ ctx, input }) => {
            // Some query
            const userJobPrefrences = await ctx.db.user.findUnique({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    onboardingCompanyIndustry: true,
                    onboardingCompanySize: true,
                    onboardingLevel: true,
                    onboardingLocation: true,
                    onboardingRoleType: true,
                    onboardingTechStack: true,
                    onboardingTotalCompensation: true, 
                },
            });
            return userJobPrefrences;
        }),
});