/*
  Warnings:

  - A unique constraint covering the columns `[posterboardId]` on the table `JobPostings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "JobPostings_posterboardId_key" ON "JobPostings"("posterboardId");
