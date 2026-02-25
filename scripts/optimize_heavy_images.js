import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGES = [
    {
        src: 'public/images/andrea1',
        dest: 'public/images/andrea1.webp',
        width: 806, // 403 * 2
        quality: 75
    },
    {
        src: 'public/images/kidsgroup',
        dest: 'public/images/kidsgroup.webp',
        width: 2670, // 1335 * 2
        quality: 75
    },
    {
        src: 'src/assets/belt.png',
        dest: 'public/images/belt.webp',
        width: 1784, // 892 * 2
        quality: 75
    },
    {
        src: 'public/images/blog/blog_tournament_hero.webp',
        dest: 'public/images/blog/blog_tournament_hero.webp',
        width: 800,
        quality: 70
    },
    {
        src: 'public/images/wall-of-fame.webp',
        dest: 'public/images/wall-of-fame.webp',
        width: 1200,
        quality: 70
    },
    {
        src: 'public/images/blog/blog_olympic_hero.webp',
        dest: 'public/images/blog/blog_olympic_hero.webp',
        width: 800,
        quality: 70
    },
    {
        src: 'public/images/blog/blog_beginners_hero.webp',
        dest: 'public/images/blog/blog_beginners_hero.webp',
        width: 800,
        quality: 70
    },
    {
        src: 'public/images/hero-poster.webp',
        dest: 'public/images/hero-poster.webp',
        width: 1920,
        quality: 80
    }
];

async function optimize() {
    console.log('🚀 Optimizing heavy images...');

    for (const img of IMAGES) {
        if (!fs.existsSync(img.src)) {
            console.log(`  ⏭  Skipping ${img.src} (not found)`);
            continue;
        }

        try {
            const originalSize = fs.statSync(img.src).size;

            // Temporary path to avoid overwriting while reading
            const tempDest = img.dest + '.tmp';

            let pipeline = sharp(img.src);

            if (img.width) {
                pipeline = pipeline.resize(img.width);
            }

            await pipeline.webp({ quality: img.quality || 75 }).toFile(tempDest);

            fs.renameSync(tempDest, img.dest);

            const newSize = fs.statSync(img.dest).size;
            const saved = originalSize - newSize;
            const pct = ((saved / originalSize) * 100).toFixed(1);

            console.log(`  ✅ ${img.src} → ${img.dest}`);
            console.log(`     (${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB, saved ${pct}%)`);
        } catch (err) {
            console.error(`  ❌ Error optimizing ${img.src}:`, err.message);
        }
    }
    console.log('\n✨ Optimization complete!');
}

optimize();
