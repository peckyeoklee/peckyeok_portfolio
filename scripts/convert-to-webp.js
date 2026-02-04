/**
 * WebP Image Conversion Script
 * 
 * Converts all PNG/JPG images in public/images to WebP format.
 * Run: node scripts/convert-to-webp.js
 * 
 * Options:
 *   --replace    Delete originals after conversion
 *   --quality=N  Set quality (1-100, default: 85)
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const IMAGE_DIR = path.join(__dirname, '..', 'public', 'images');
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

// Parse command line arguments
const args = process.argv.slice(2);
const shouldReplace = args.includes('--replace');
const qualityArg = args.find(arg => arg.startsWith('--quality='));
const quality = qualityArg ? parseInt(qualityArg.split('=')[1]) : 85;

console.log('\n🖼️  WebP Conversion Script');
console.log('━'.repeat(40));
console.log(`📁 Source: ${IMAGE_DIR}`);
console.log(`⚙️  Quality: ${quality}`);
console.log(`🗑️  Replace originals: ${shouldReplace ? 'Yes' : 'No'}`);
console.log('━'.repeat(40) + '\n');

/**
 * Recursively find all image files
 */
async function findImages(dir, files = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await findImages(fullPath, files);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (SUPPORTED_EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * Convert a single image to WebP
 */
async function convertToWebP(inputPath) {
  const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const relativePath = path.relative(IMAGE_DIR, inputPath);
  
  try {
    const inputStats = await fs.stat(inputPath);
    
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    
    const outputStats = await fs.stat(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✅ ${relativePath}`);
    console.log(`   ${formatBytes(inputStats.size)} → ${formatBytes(outputStats.size)} (${savings}% smaller)\n`);
    
    if (shouldReplace) {
      await fs.unlink(inputPath);
    }
    
    return {
      success: true,
      originalSize: inputStats.size,
      newSize: outputStats.size
    };
  } catch (error) {
    console.error(`❌ ${relativePath}: ${error.message}\n`);
    return { success: false };
  }
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

/**
 * Main execution
 */
async function main() {
  try {
    // Check if sharp is available
    const images = await findImages(IMAGE_DIR);
    
    if (images.length === 0) {
      console.log('No PNG/JPG images found.');
      return;
    }
    
    console.log(`Found ${images.length} images to convert:\n`);
    
    let totalOriginal = 0;
    let totalNew = 0;
    let successCount = 0;
    
    for (const imagePath of images) {
      const result = await convertToWebP(imagePath);
      if (result.success) {
        successCount++;
        totalOriginal += result.originalSize;
        totalNew += result.newSize;
      }
    }
    
    // Summary
    console.log('━'.repeat(40));
    console.log('📊 Summary');
    console.log('━'.repeat(40));
    console.log(`✅ Converted: ${successCount}/${images.length} images`);
    console.log(`📦 Original total: ${formatBytes(totalOriginal)}`);
    console.log(`📦 WebP total: ${formatBytes(totalNew)}`);
    console.log(`💾 Total savings: ${formatBytes(totalOriginal - totalNew)} (${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`);
    
    if (!shouldReplace) {
      console.log('\n💡 Tip: Run with --replace to delete originals after conversion');
      console.log('   Example: node scripts/convert-to-webp.js --replace');
    }
    
    console.log('\n⚠️  Next steps:');
    console.log('   1. Update image references in your code (.png/.jpg → .webp)');
    console.log('   2. Update projectsData.ts image paths');
    console.log('   3. Update index.html favicon if needed\n');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();

