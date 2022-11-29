-- CreateTable
CREATE TABLE "Notebooks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Notebooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Words" (
    "id" SERIAL NOT NULL,
    "book_id" INTEGER,
    "name" TEXT NOT NULL,
    "detail" TEXT,

    CONSTRAINT "Words_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Words" ADD CONSTRAINT "Words_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Notebooks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
