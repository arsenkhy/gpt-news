# Database Utility Scripts

Collection of utility scripts for managing the news database.

## Scripts

### `populate-all.js`
Populates all news categories with articles from NewsAPI.
- Fetches articles for all 6 categories
- Generates AI summaries using OpenAI
- Waits appropriately between categories
- **Usage**: `node scripts/populate-all.js`
- **Time**: ~7-9 minutes for all categories

### `check-db.js`
Quick database status check.
- Shows total post count
- Lists 5 most recent posts
- **Usage**: `node scripts/check-db.js`

### `check-categories.js`
Shows post distribution across all categories.
- Displays count per category
- Shows which categories need more content
- **Usage**: `node scripts/check-categories.js`

### `populate-db.js`
Basic population script (can be customized for single categories).
- **Usage**: `node scripts/populate-db.js`

## Notes

- All scripts use environment variables from `.env`
- Requires dev server to be running on `http://localhost:3000`
- Uses the `/api/generateNews` endpoint
