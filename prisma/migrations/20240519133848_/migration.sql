-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fingerprintId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fingerprintId" INTEGER NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_fingerprintId_key" ON "User"("fingerprintId");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_fingerprintId_fkey" FOREIGN KEY ("fingerprintId") REFERENCES "User"("fingerprintId") ON DELETE RESTRICT ON UPDATE CASCADE;
