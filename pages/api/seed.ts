import { PrismaClient } from "@prisma/client";
import { create } from "domain";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

async function main() {
  const product = await prisma.product.createMany({
    data: [
      {
        name: "Elsa",
        description: "elsa@prisma.io",
      },
      {
        name: "miri",
        description: "miri@prisma.io",
      },
    ]
  });

  // const category = await prisma.category.create({
  //   data: {
  //     vegetable: "Meyveler",
  //     cars: ["bmw", "mercedes", "nissan", "tayota"],
  //   },
  // });
  
  const salam = await prisma.product.findFirst({
    where: {
      name: { startsWith: "miri", }
    }
  })
  console.log(salam);
}

main()
  // .then(() => prisma.$disconnect())
  // .catch(async (e) => {
  //   console.error(e);
  //   await prisma.$disconnect();
  //   process.exit(1);
  // });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'Miri' })
}