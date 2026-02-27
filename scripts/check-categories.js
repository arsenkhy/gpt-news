const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkCategories() {
  try {
    const categories = ['today', 'bigTech', 'AI', 'gadgets', 'science', 'culture'];

    console.log('📊 Posts by Category:\n');

    for (const category of categories) {
      const count = await prisma.post.count({
        where: { category }
      });

      const icon = count >= 3 ? '✅' : count > 0 ? '⚠️' : '❌';
      console.log(`${icon} ${category.padEnd(12)} ${count} posts`);
    }

    const total = await prisma.post.count();
    console.log(`\n📈 Total: ${total} posts`);

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkCategories();
