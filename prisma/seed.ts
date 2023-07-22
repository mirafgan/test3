import { PrismaClient } from "@prisma/client";
import { create } from "domain";

const prisma = new PrismaClient();

async function main() {
  const product = await prisma.product.create({
    data: {
      name: "Elsa",
      description: "elsa@prisma.io",
    },
  });

  const category = await prisma.category.create({
    data: {
      vegetable: "Meyveler",
      cars: ["bmw", "mercedes", "nissan", "tayota"],
    },
  });

  console.log({ product });
  console.log({ category });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
