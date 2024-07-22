-- CreateTable
CREATE TABLE "Wishes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "wish" TEXT NOT NULL,
    "kehadiran" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wishes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wishes_id_key" ON "Wishes"("id");
