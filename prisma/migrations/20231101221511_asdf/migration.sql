/*
  Warnings:

  - Made the column `posterboardId` on table `JobPostings` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "JobPostings" ALTER COLUMN "posterboardId" SET NOT NULL;
