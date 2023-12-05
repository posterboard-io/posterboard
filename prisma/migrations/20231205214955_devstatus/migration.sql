/*
  Warnings:

  - The values [Offer] on the enum `JobPostingStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "JobPostingStatus_new" AS ENUM ('Saved', 'Applied', 'RecievedResponse', 'Interviewing', 'PendingOffer', 'Rejected');
ALTER TABLE "UserSavedJobs" ALTER COLUMN "jobPostingStatus" DROP DEFAULT;
ALTER TABLE "UserSavedJobs" ALTER COLUMN "jobPostingStatus" TYPE "JobPostingStatus_new" USING ("jobPostingStatus"::text::"JobPostingStatus_new");
ALTER TYPE "JobPostingStatus" RENAME TO "JobPostingStatus_old";
ALTER TYPE "JobPostingStatus_new" RENAME TO "JobPostingStatus";
DROP TYPE "JobPostingStatus_old";
ALTER TABLE "UserSavedJobs" ALTER COLUMN "jobPostingStatus" SET DEFAULT 'Saved';
COMMIT;
