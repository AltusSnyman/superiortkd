import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DIRS = [
    'public/images',
    'public/images/blog',
    'public/images/locations',
    'public/gallery',
];

const QUALITY = 82;
let totalSaved = 0;
let totalConverted = 0;

async function convertDir(dir) {
    if (!fs.existsSync(dir)) {
        console.warn(`Skipping missing dir: ${dir}`);
        return;
    }

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) continue;

        const ext = path.extname(file).toLowerCase();
        if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

        const base = path.basename(file, ext);
        const destPath = path.join(dir, `${base}.webp`);

        // Skip if WebP already exists
        if (fs.existsSync(destPath)) {
            console.log(`  ⏭  Already exists: ${destPath}`);
            continue;
        }

        try {
            const originalSize = stat.size;
            await sharp(filePath).webp({ quality: QUALITY }).toFile(destPath);
            const newSize = fs.statSync(destPath).size;
            const saved = originalSize - newSize;
            totalSaved += saved;
            totalConverted++;
            const pct = ((saved / originalSize) * 100).toFixed(1);
            console.log(`  ✅ ${file} → ${base}.webp  (${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB, saved ${pct}%)`);
        } catch (err) {
            console.error(`  ❌ Error: ${file}:`, err.message);
        }
    }
}

console.log('🖼  Superior TKD — Image Optimizer\n');

for (const dir of DIRS) {
    console.log(`📁 ${dir}`);
    await convertDir(dir);
}

console.log(`\n🎉 Done! Converted ${totalConverted} images, saved ${(totalSaved / 1024).toFixed(0)} KB total.`);
