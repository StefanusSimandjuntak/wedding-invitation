-- CreateTable
CREATE TABLE "rsvp" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "attendance" TEXT NOT NULL,
    "message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rsvp_pkey" PRIMARY KEY ("id")
);

