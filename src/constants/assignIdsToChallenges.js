/*
node assignIdsToChallenges.js
*/ 
import fs from 'fs/promises';

const filePath = './challenge.json';

async function assignIdsToChallenges() {
  try {
    // Read the JSON file
    const data = await fs.readFile(filePath, 'utf8');

    // Parse the JSON array
    const challenges = JSON.parse(data);

    // Ensure it's an array
    if (!Array.isArray(challenges)) {
      throw new Error('Invalid data format: Expected an array.');
    }

    // Assign incrementing IDs
    challenges.forEach((challenge, index) => {
      challenge.id = (index + 1).toString(); // Assign ID as a string
    });

    // Write back to the file
    await fs.writeFile(filePath, JSON.stringify(challenges, null, 2));

    console.log('IDs have been assigned successfully!');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

assignIdsToChallenges();
