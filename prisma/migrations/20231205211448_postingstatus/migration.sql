-- CreateEnum
CREATE TYPE "JobPostingStatus" AS ENUM ('Saved', 'Applied', 'Interviewing', 'Offer', 'Rejected');

-- AlterTable
ALTER TABLE "UserSavedJobs" ADD COLUMN     "jobPostingStatus" "JobPostingStatus" DEFAULT 'Saved';

-- CreateTable
CREATE TABLE "LeetcodeCompany" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "LeetcodeCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeetcodeQuestion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "numOccur" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "LeetcodeQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LeetcodeCompany_name_key" ON "LeetcodeCompany"("name");

-- AddForeignKey
ALTER TABLE "LeetcodeQuestion" ADD CONSTRAINT "LeetcodeQuestion_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "LeetcodeCompany"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
