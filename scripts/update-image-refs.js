/**
 * Update Image References Script
 * 
 * Automatically updates all .png/.jpg references to .webp in your codebase.
 * Run AFTER converting images: node scripts/update-image-refs.js
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to update
const FILES_TO_UPDATE = [
  path.join(__dirname, '..', 'src', 'projectsData.ts'),
  path.join(__dirname, '..', 'src', 'App.tsx'),
  path.join(__dirname, '..', 'src', 'App.css'),
  path.join(__dirname, '..', 'src', 'Hero.tsx'),
  path.join(__dirname, '..', 'src', 'About.tsx'),
  path.join(__dirname, '..', 'src', 'Works.tsx'),
  path.join(__dirname, '..', 'src', 'Contact.tsx'),
  path.join(__dirname, '..', 'src', 'ProjectDetail.tsx'),
  path.join(__dirname, '..', 'src', 'index.css'),
  path.join(__dirname, '..', 'index.html'),
];

// Image extensions to replace
const EXTENSIONS_PATTERN = /\.(png|jpg|jpeg)(?=['"`\)\s])/gi;

console.log('\n🔄 Update Image References Script');
console.log('━'.repeat(40));

async function updateFile(filePath) {
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);
  
  try {
    // Check if file exists
    await fs.access(filePath);
    
    const content = await fs.readFile(filePath, 'utf-8');
    const matches = content.match(EXTENSIONS_PATTERN);
    
    if (!matches || matches.length === 0) {
      console.log(`⏭️  ${relativePath} - no image refs found`);
      return { file: relativePath, updated: 0 };
    }
    
    const updatedContent = content.replace(EXTENSIONS_PATTERN, '.webp');
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    
    console.log(`✅ ${relativePath} - ${matches.length} refs updated`);
    return { file: relativePath, updated: matches.length };
    
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`⏭️  ${relativePath} - file not found, skipping`);
    } else {
      console.error(`❌ ${relativePath} - ${error.message}`);
    }
    return { file: relativePath, updated: 0 };
  }
}

async function main() {
  console.log(`Scanning ${FILES_TO_UPDATE.length} files...\n`);
  
  let totalUpdated = 0;
  
  for (const file of FILES_TO_UPDATE) {
    const result = await updateFile(file);
    totalUpdated += result.updated;
  }
  
  console.log('\n' + '━'.repeat(40));
  console.log(`📊 Total references updated: ${totalUpdated}`);
  console.log('━'.repeat(40));
  
  if (totalUpdated > 0) {
    console.log('\n✅ All done! Your image references now point to .webp files.');
  } else {
    console.log('\n⚠️  No image references were updated. Make sure you have .png/.jpg refs in your files.');
  }
}

main();

