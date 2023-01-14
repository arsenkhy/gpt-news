import { PrismaClient } from "@prisma/client";

const prisma: any = new PrismaClient();

const posts = [
  {
    publishedAt: '2023',
    source: "Fake",
    url: "https://www.wired.com/",
    category: "Today",
    title: "AI",
    content:
      "",
    author: "",
    image: "",
    snippet:
      "",
  }
];

async function main() {
  console.log(`Start seeding...`);
  for (const post of posts) {
    await prisma.post.create({ data: post });
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
