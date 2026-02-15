import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageUrls = [
    "https://files.gymdesk.com/7713/images/87df5f01321e.jpg",
    "https://files.gymdesk.com/7713/images/c6505263c157.jpg",
    "https://files.gymdesk.com/7713/images/59bdb9d34e18.jpg",
    "https://files.gymdesk.com/7713/images/ec146c698d66.jpg",
    "https://files.gymdesk.com/7713/images/59297363477e.jpg",
    "https://files.gymdesk.com/7713/images/569e0ed9251b.jpg",
    "https://files.gymdesk.com/7713/images/40ccd9ebea88.jpg",
    "https://files.gymdesk.com/7713/images/efb46006c6af.jpg",
    "https://files.gymdesk.com/7713/images/f14ffee673d4.jpg",
    "https://files.gymdesk.com/7713/images/3f9824f9f413.jpg",
    "https://files.gymdesk.com/7713/images/0f39dc3c73f5.jpg",
    "https://files.gymdesk.com/7713/images/f3042278c05e.jpg",
    "https://files.gymdesk.com/7713/images/6f6a4c194a4b.jpg",
    "https://files.gymdesk.com/7713/images/8afa64d809cd.jpg",
    "https://files.gymdesk.com/7713/images/6471336fce3b.jpg",
    "https://files.gymdesk.com/7713/images/85d439804b61.jpg",
    "https://files.gymdesk.com/7713/images/18506b4ab3de.jpg",
    "https://files.gymdesk.com/7713/images/b22777d738c5.jpg",
    "https://files.gymdesk.com/7713/images/a06f99124e39.jpg",
    "https://files.gymdesk.com/7713/images/6536624c9dc2.jpg",
    "https://files.gymdesk.com/7713/images/350464fdb525.jpg",
    "https://files.gymdesk.com/7713/images/947865dd2b21.jpg",
    "https://files.gymdesk.com/7713/images/33170fcb26d2.jpg",
    "https://files.gymdesk.com/7713/images/18c799460b53.jpg",
    "https://files.gymdesk.com/7713/images/7d5742eeb6b1.jpg",
    "https://files.gymdesk.com/7713/images/45678feef948.jpg",
    "https://files.gymdesk.com/7713/images/436da07670a1.jpg",
    "https://files.gymdesk.com/7713/images/7eaba9a5b968.jpg",
    "https://files.gymdesk.com/7713/images/2eb8265d129f.jpg",
    "https://files.gymdesk.com/7713/images/f882c370c414.jpg",
    "https://files.gymdesk.com/7713/images/5d298a21d6d4.jpg",
    "https://files.gymdesk.com/7713/images/76481b5deeff.jpg",
    "https://files.gymdesk.com/7713/images/6c18b2e629a6.jpg",
    "https://files.gymdesk.com/7713/images/8ed1913488bd.jpg",
    "https://files.gymdesk.com/7713/images/c8d1c9a06d7e.jpg",
    "https://files.gymdesk.com/7713/images/d652d64dda9f.jpg",
    "https://files.gymdesk.com/7713/images/1569f502dad2.jpg",
    "https://files.gymdesk.com/7713/images/18dbfb19322b.jpg",
    "https://files.gymdesk.com/7713/images/eefccfa4045b.jpg",
    "https://files.gymdesk.com/7713/images/06c5af14095e.jpg",
    "https://files.gymdesk.com/7713/images/c7f4fc447b3f.jpg",
    "https://files.gymdesk.com/7713/images/1fc02f6d09f7.jpg",
    "https://files.gymdesk.com/7713/images/dff1e1ad0592.jpg",
    "https://files.gymdesk.com/7713/images/398d540fb219.jpg",
    "https://files.gymdesk.com/7713/images/56d211fea891.jpg",
    "https://files.gymdesk.com/7713/images/c139fe73f216.jpg",
    "https://files.gymdesk.com/7713/images/2f19b278693a.jpg",
    "https://files.gymdesk.com/7713/images/b3e81900a69e.jpg",
    "https://files.gymdesk.com/7713/images/5e48143f55d9.jpg",
    "https://files.gymdesk.com/7713/images/22dcc069dcd3.jpg",
    "https://files.gymdesk.com/7713/images/f040432cfc62.jpg",
    "https://files.gymdesk.com/7713/images/ac117bdcb955.jpg",
    "https://files.gymdesk.com/7713/images/15987826ab36.jpg",
    "https://files.gymdesk.com/7713/images/98d6fed0d08e.jpg",
    "https://files.gymdesk.com/7713/images/d5659da1b4bb.jpg",
    "https://files.gymdesk.com/7713/images/79ff7b2a9ddf.jpg",
    "https://files.gymdesk.com/7713/images/8056b4c87faa.jpg",
    "https://files.gymdesk.com/7713/images/9696df707f3f.jpg",
    "https://files.gymdesk.com/7713/images/98170d0fcb4c.jpg",
    "https://files.gymdesk.com/7713/images/93a15f7b5ce5.jpg",
    "https://files.gymdesk.com/7713/images/e25626a44da8.jpg",
    "https://files.gymdesk.com/7713/images/c2732661046a.jpg"
];

const targetDir = path.join(process.cwd(), 'src/assets/gallery');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(targetDir, filename));
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filename, () => { }); // Delete the file async. (But we don't check the result)
            reject(err.message);
        });
    });
};

const main = async () => {
    console.log(`Downloading ${imageUrls.length} images...`);
    for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        const filename = `gallery-${i + 1}.jpg`;
        try {
            await downloadImage(url, filename);
            console.log(`Downloaded ${filename}`);
        } catch (error) {
            console.error(`Failed to download ${url}: ${error}`);
        }
    }
    console.log('Download complete.');
};

main();
