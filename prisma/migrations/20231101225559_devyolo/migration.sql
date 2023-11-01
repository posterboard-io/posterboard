/*
  Warnings:

  - A unique constraint covering the columns `[jobPostingId]` on the table `UserSavedJobs` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserSavedJobs" DROP CONSTRAINT "UserSavedJobs_jobPostingId_fkey";

-- AlterTable
ALTER TABLE "UserSavedJobs" ALTER COLUMN "jobPostingId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "UserSavedJobs_jobPostingId_key" ON "UserSavedJobs"("jobPostingId");

-- AddForeignKey
ALTER TABLE "UserSavedJobs" ADD CONSTRAINT "UserSavedJobs_jobPostingId_fkey" FOREIGN KEY ("jobPostingId") REFERENCES "JobPostings"("posterboardId") ON DELETE CASCADE ON UPDATE CASCADE;
