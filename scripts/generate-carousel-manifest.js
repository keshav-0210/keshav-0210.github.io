#!/usr/bin/env node

/**
 * Scans public/images/carousel/ and writes a manifest.json listing every
 * image file found there. The carousel component fetches this manifest at
 * runtime, so dropping new images into the folder is all that's needed —
 * no manual JSON editing.
 */

const fs = require('fs');
const path = require('path');

const carouselDir = path.join(__dirname, '..', 'public', 'images', 'carousel');
const manifestPath = path.join(carouselDir, 'manifest.json');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];

if (!fs.existsSync(carouselDir)) {
  fs.mkdirSync(carouselDir, { recursive: true });
  console.log('✓ Created carousel directory');
}

const images = fs
  .readdirSync(carouselDir)
  .filter((file) => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
  .sort();

fs.writeFileSync(manifestPath, JSON.stringify({ images }, null, 2));
console.log(`✓ Carousel manifest generated with ${images.length} image(s)`);
