-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "imageUrl" TEXT,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "published" DROP NOT NULL;
