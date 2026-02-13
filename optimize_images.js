
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcDir = 'src/assets';
const destDir = 'public/images';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

fs.readdir(srcDir, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach((file, index) => {
        const filePath = path.join(srcDir, file);
        const ext = path.extname(file).toLowerCase();

        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
            const fileName = path.basename(file, ext);
            const destPath = path.join(destDir, `${fileName}.webp`);

            sharp(filePath)
                .webp({ quality: 80 })
                .toFile(destPath)
                .then(() => {
                    console.log(`Optimized: ${file} -> ${fileName}.webp`);
                })
                .catch(err => {
                    console.error(`Error processing ${file}:`, err);
                });
        }
    });
});
