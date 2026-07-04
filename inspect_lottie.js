const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('=== Lottie Container IDs ===');
const idRegex = /id=["']([^"']*lottie[^"']*)["']/gi;
let match;
while ((match = idRegex.exec(html)) !== null) {
  console.log('Found ID:', match[1]);
}

console.log('\n=== Lottie Load Code Blocks ===');
const loadRegex = /lottie\.loadAnimation\s*\(\s*\{[\s\S]*?\}\s*\)/gi;
let count = 0;
while ((match = loadRegex.exec(html)) !== null) {
  count++;
  console.log(`\n--- Match #${count} ---`);
  console.log(match[0]);
}
