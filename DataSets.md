# Datasets

## WordData.json
The **local fallback** word dataset shipped with the app.
- Contains **10 words per category** (140 words total)
- Used when the device is offline or Firestore is unreachable
- Tracked by git — safe to commit

## WordData_Full.json
The **complete** word dataset used to populate Firestore.
- Contains **631 words** across 14 categories
- Used **only** by `migrate.js` to upload data to Firestore
- **NOT tracked by git** (listed in `.gitignore`) — do not commit this file
- If you need to run the migration on a new machine, obtain this file separately

## Running the migration
1. Place `WordData_Full.json` in this folder
2. Run `node migrate.js` from the project root
3. This uploads all 631 words to the Firestore `words` collection
   and computes/uploads counts to the `counts` collection
4. Delete or keep `WordData_Full.json` locally — it will never be committed

## Adding new words
1. Add words to `WordData_Full.json`
2. Run `node migrate.js` again to re-upload
3. If the new words are common/universal enough to be offline words,
   add them to `WordData.json` as well