/*
  Warnings:

  - The values [Facebook] on the enum `Companies` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Companies_new" AS ENUM ('Amazon', 'Apple', 'Meta', 'Google', 'Microsoft', 'Netflix', 'Nvidia', 'Tesla', 'Twitter', 'Uber', 'Other');
ALTER TABLE "JobPostings" ALTER COLUMN "company" TYPE "Companies_new" USING ("company"::text::"Companies_new");
ALTER TYPE "Companies" RENAME TO "Companies_old";
ALTER TYPE "Companies_new" RENAME TO "Companies";
DROP TYPE "Companies_old";
COMMIT;
