const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    const count = await prisma.post.count();
    console.log(`📊 Total posts in database: ${count}`);

    if (count > 0) {
      const recentPosts = await prisma.post.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          title: true,
          category: true,
          createdAt: true,
        }
      });

      console.log('\n📰 Recent posts:');
      recentPosts.forEach((post, i) => {
        console.log(`${i + 1}. [${post.category}] ${post.title.substring(0, 60)}...`);
      });
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
