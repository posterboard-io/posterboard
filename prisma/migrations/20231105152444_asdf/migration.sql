-- CreateEnum
CREATE TYPE "StripeSubscriptionStatus" AS ENUM ('incomplete', 'incomplete_expired', 'trialing', 'active', 'past_due', 'canceled', 'unpaid', 'paused');

-- CreateEnum
CREATE TYPE "Companies" AS ENUM ('Amazon', 'Apple', 'Facebook', 'Google', 'Microsoft', 'Netflix', 'Nvidia', 'Tesla', 'Twitter', 'Uber', 'Other');

-- CreateEnum
CREATE TYPE "RoleLevel" AS ENUM ('Intern', 'Entry', 'Mid', 'Senior', 'Lead', 'Manager', 'Director', 'VP', 'CLevel');

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token_expires_in" INTEGER,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StripeEvent" (
    "id" TEXT NOT NULL,
    "api_version" TEXT,
    "data" JSONB NOT NULL,
    "request" JSONB,
    "type" TEXT NOT NULL,
    "object" TEXT NOT NULL,
    "account" TEXT,
    "created" TIMESTAMP(3) NOT NULL,
    "livemode" BOOLEAN NOT NULL,
    "pending_webhooks" INTEGER NOT NULL,

    CONSTRAINT "StripeEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "isTest" BOOLEAN NOT NULL DEFAULT false,
    "didCompleteOnboarding" BOOLEAN NOT NULL DEFAULT false,
    "onboardingTechStack" TEXT[],
    "onboardingLevel" TEXT[],
    "onboardingLocation" TEXT[],
    "onboardingCompanySize" TEXT[],
    "onboardingCompanyIndustry" TEXT[],
    "onboardingTotalCompensation" TEXT[],
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "lastUpdatedProfileAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "stripeSubscriptionStatus" "StripeSubscriptionStatus",
    "phoneNumber" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "JobPostings" (
    "id" SERIAL NOT NULL,
    "company" "Companies" NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "locationCity" TEXT NOT NULL,
    "locationState" TEXT NOT NULL,
    "locationCountry" TEXT NOT NULL,
    "roleLevel" "RoleLevel" NOT NULL,
    "companyLogoBase64" TEXT,
    "companyLogoUrl" TEXT,
    "companyTechStack" TEXT[],
    "urlJobSlug" TEXT NOT NULL,
    "urlJob" TEXT NOT NULL,
    "compensation" TEXT,
    "compensationLow" TEXT,
    "compensationHigh" TEXT,
    "externalJobId" TEXT,
    "jobDescription" TEXT,
    "jobSearchText" TEXT,
    "internalTeam" TEXT,
    "createdInDBAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedInDbAt" TIMESTAMP(3) NOT NULL,
    "posterboardId" TEXT NOT NULL,

    CONSTRAINT "JobPostings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSavedJobs" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "jobPostingId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSavedJobs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_name_idx" ON "Post"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "StripeEvent_id_key" ON "StripeEvent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "JobPostings_externalJobId_key" ON "JobPostings"("externalJobId");

-- CreateIndex
CREATE UNIQUE INDEX "JobPostings_posterboardId_key" ON "JobPostings"("posterboardId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSavedJobs_userId_jobPostingId_key" ON "UserSavedJobs"("userId", "jobPostingId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSavedJobs" ADD CONSTRAINT "UserSavedJobs_jobPostingId_fkey" FOREIGN KEY ("jobPostingId") REFERENCES "JobPostings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSavedJobs" ADD CONSTRAINT "UserSavedJobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
