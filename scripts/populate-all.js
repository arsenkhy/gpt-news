const axios = require('axios');

const APP_KEY = process.env.APP_KEY || '4c9e4a12-2609-4385-a6af-9db6941b71cb';
const BASE_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

const categories = ['today', 'bigTech', 'AI', 'gadgets', 'science', 'culture'];

async function populateCategory(category) {
  console.log(`\n🔄 Starting category: ${category}...`);

  try {
    const response = await axios.post(
      `${BASE_URL}/api/generateNews`,
      { category },
      {
        headers: {
          'Content-Type': 'application/json',
          'requestKey': APP_KEY
        }
      }
    );

    console.log(`✅ ${category}: ${response.data.message}`);

    if (response.data.message.includes('already in progress')) {
      console.log(`⏳ Waiting for previous category to complete...`);
      await new Promise(resolve => setTimeout(resolve, 30000)); // Wait 30 seconds
      return await populateCategory(category); // Retry
    }

    return true;
  } catch (error) {
    console.error(`❌ ${category}: ${error.message}`);
    return false;
  }
}

async function waitForCompletion() {
  // Wait 60 seconds for each category to process
  // Each category processes ~5 articles with AI summaries
  console.log('⏳ Processing articles (this takes ~60-90 seconds per category)...\n');

  let dots = 0;
  const interval = setInterval(() => {
    process.stdout.write('.');
    dots++;
    if (dots % 60 === 0) process.stdout.write('\n');
  }, 1000);

  await new Promise(resolve => setTimeout(resolve, 75000)); // Wait 75 seconds
  clearInterval(interval);
  console.log('\n');
}

async function populateAll() {
  console.log('🚀 Starting database population...\n');
  console.log(`📍 API URL: ${BASE_URL}`);
  console.log(`📊 Categories to populate: ${categories.length}`);
  console.log(`⏱️  Estimated time: ${categories.length * 1.5} minutes\n`);

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`📂 Category ${i + 1}/${categories.length}: ${category}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

    await populateCategory(category);

    if (i < categories.length - 1) {
      await waitForCompletion();
    }
  }

  console.log('\n\n✨ ═══════════════════════════════════════ ✨');
  console.log('🎉 DATABASE POPULATION COMPLETED! 🎉');
  console.log('✨ ═══════════════════════════════════════ ✨\n');
}

populateAll().catch(console.error);
