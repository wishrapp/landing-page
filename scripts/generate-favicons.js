// Simple SVG to PNG conversion using Canvas
import fs from 'fs/promises';
import { createCanvas, loadImage } from 'canvas';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

async function generateFavicons() {
  try {
    const svgContent = await fs.readFile(join(publicDir, 'favicon.svg'), 'utf8');
    const svgUrl = `data:image/svg+xml;base64,${Buffer.from(svgContent).toString('base64')}`;
    
    for (const { size, name } of sizes) {
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, size, size);
      
      // Load and draw SVG
      const img = await loadImage(svgUrl);
      ctx.drawImage(img, 0, 0, size, size);
      
      // Save as PNG
      const buffer = canvas.toBuffer('image/png');
      await fs.writeFile(join(publicDir, name), buffer);
      console.log(`Generated ${name}`);
    }
    
    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();