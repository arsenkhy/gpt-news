const axios = require('axios');

const APP_KEY = process.env.APP_KEY || '4c9e4a12-2609-4385-a6af-9db6941b71cb';
const BASE_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

const categories = ['today', 'bigTech', 'AI', 'gadgets', 'science', 'culture'];

async function populateCategory(category) {
  console.log(`\n🔄 Fetching news for category: ${category}...`);

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
    return true;
  } catch (error) {
    console.error(`❌ ${category}: ${error.message}`);
    if (error.response) {
      console.error(`   Response: ${JSON.stringify(error.response.data)}`);
    }
    return false;
  }
}

async function populateAll() {
  console.log('🚀 Starting database population...\n');
  console.log(`📍 API URL: ${BASE_URL}`);
  console.log(`📊 Categories: ${categories.length}`);

  for (const category of categories) {
    await populateCategory(category);
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\n✨ Database population completed!');
  console.log('🔍 Check your database at: http://localhost:5555 (Prisma Studio)');
}

populateAll().catch(console.error);
