// scripts/optimize-images.js
// Image optimization script using Sharp
// Scans public/images recursively, converts to optimized WebP, preserving folder structure under public/optimized.
// Does not delete original files.

import path from 'path';
import { promises as fs } from 'fs';
import sharp from 'sharp';

const INPUT_ROOT = path.join(process.cwd(), 'public', 'images');
const OUTPUT_ROOT = path.join(process.cwd(), 'public', 'optimized');

// Supported extensions (lowercase)
const SUPPORTED_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

let totalFiles = 0;
let totalOriginalSize = 0;
let totalOptimizedSize = 0;

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!SUPPORTED_EXT.has(ext)) return; // skip unsupported (including svg)

  const relativePath = path.relative(INPUT_ROOT, filePath);
  const outputPath = path.join(OUTPUT_ROOT, relativePath);
  const outputDir = path.dirname(outputPath);
  const outputFile = outputPath.replace(ext, '.webp');

  try {
    const inputBuffer = await fs.readFile(filePath);
    const metadata = await sharp(inputBuffer).metadata();
    const originalSize = inputBuffer.length;
    totalOriginalSize += originalSize;

    let pipeline = sharp(inputBuffer);
    // Resize if width > 1600, do not enlarge.
    if (metadata.width && metadata.width > 1600) {
      pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
    }
    // For JPEG input, apply mozjpeg before conversion.
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
    }
    // Convert to WebP with quality 80 and strip metadata.
    pipeline = pipeline.toFormat('webp', { quality: 80, lossless: false });

    const outputBuffer = await pipeline.toBuffer();
    const optimizedSize = outputBuffer.length;
    totalOptimizedSize += optimizedSize;

    await ensureDir(outputDir);
    await fs.writeFile(outputFile, outputBuffer);
    totalFiles++;
    console.log(`✓ ${relativePath}`);
  } catch (err) {
    console.error(`⚠ Failed ${relativePath}:`, err.message);
    // Continue processing other files.
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (entry.isFile()) {
      await processFile(fullPath);
    }
  }
}

async function main() {
  console.log('Optimizing images...');
  await walk(INPUT_ROOT);
  console.log('Finished');
  console.log(`Total Images: ${totalFiles}`);
  const origMB = (totalOriginalSize / (1024 * 1024)).toFixed(2);
  const optMB = (totalOptimizedSize / (1024 * 1024)).toFixed(2);
  const savedPct = totalOriginalSize
    ? ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(2)
    : '0';
  console.log(`Original Size: ${origMB} MB`);
  console.log(`Optimized Size: ${optMB} MB`);
  console.log(`Saved: ${savedPct}%`);
}

main().catch((e) => {
  console.error('Unexpected error:', e);
  process.exit(1);
});
