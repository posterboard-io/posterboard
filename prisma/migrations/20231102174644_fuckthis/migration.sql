/*
  Warnings:

  - A unique constraint covering the columns `[userId,jobPostingId]` on the table `UserSavedJobs` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `jobPostingId` on the `UserSavedJobs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "UserSavedJobs" DROP CONSTRAINT "UserSavedJobs_jobPostingId_fkey";

-- DropIndex
DROP INDEX "UserSavedJobs_jobPostingId_key";

-- AlterTable
ALTER TABLE "UserSavedJobs" DROP COLUMN "jobPostingId",
ADD COLUMN     "jobPostingId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserSavedJobs_userId_jobPostingId_key" ON "UserSavedJobs"("userId", "jobPostingId");

-- AddForeignKey
ALTER TABLE "UserSavedJobs" ADD CONSTRAINT "UserSavedJobs_jobPostingId_fkey" FOREIGN KEY ("jobPostingId") REFERENCES "JobPostings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
