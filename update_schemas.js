import fs from 'fs';
import path from 'path';

const sameAsConfig = `"name": "Andrea Kilday",
        "jobTitle": "Head Instructor",
        "url": "https://superiortkd.co.nz",
        "sameAs": [
            "https://www.olympic.org.nz/athletes/andrea-kilday/",
            "https://www.taekwondodata.com/andrea-melisa-kilday.abch.html",
            "https://en.wikipedia.org/wiki/Andrea_Kilday"
        ]`;

function processFilesRegex(dir, sectionName) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        if (!file.endsWith('.astro')) continue;
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        const slug = file.replace('.astro', '');
        if (slug === 'index' && sectionName !== 'locations') continue; // Blog index doesn't need this specific breadcrumb

        let modified = false;

        // 1. UPDATE ANDREA KILDAY SCHEMA IN BLOG POSTS
        if (sectionName === 'blog') {
            const oldValue = `"name": "Andrea Kilday",\\s*"jobTitle": "Head Instructor",\\s*"url": "https://superiortkd.co.nz",?`;
            const regex = new RegExp(oldValue, 'g');
            if (regex.test(content) && !content.includes('sameAs')) {
                content = content.replace(regex, sameAsConfig);
                modified = true;
            }
        }

        // 2. ADD BREADCRUMBS
        if (!content.includes('BreadcrumbList')) {
            // Find the title variable or extract it
            let pageTitle = "Superior Taekwondo";
            const titleMatch = content.match(/const title\s*=\s*["']([^"']+)["']/);
            if (titleMatch) {
                // Split by | to just get the clean title
                pageTitle = titleMatch[1].split('|')[0].trim();
            } else {
                // For dynamic pages like locations
                if (file === '[slug].astro') {
                    pageTitle = "${location.name}";
                }
            }

            let sectionTitle = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
            let sectionUrl = `https://superiortkd.co.nz/${sectionName}`;

            // Generate Breadcrumb schema script
            const breadcrumbScript = `
    <!-- Breadcrumb Schema -->
    <script type="application/ld+json" set:html={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://superiortkd.co.nz/" },
            { "@type": "ListItem", "position": 2, "name": "${sectionTitle}", "item": "${sectionUrl}/" },
            { "@type": "ListItem", "position": 3, "name": ${file === '[slug].astro' ? 'location.name' : `"${pageTitle}"`}, "item": \`https://superiortkd.co.nz/${sectionName}/\${${file === '[slug].astro' ? 'slug' : `"${slug}"`}}\` }
        ]
    })}></script>
`;

            // Insert after <Layout ... >
            // We need to find the closing > of the Layout tag.
            const layoutRegex = /(<Layout[^>]*>)/;
            if (layoutRegex.test(content)) {
                content = content.replace(layoutRegex, `$1${breadcrumbScript}`);
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated ${filePath}`);
        }
    }
}

// Process all directories
console.log("Processing Blog...");
processFilesRegex('./src/pages/blog', 'blog');

console.log("Processing Classes...");
processFilesRegex('./src/pages/classes', 'classes');

console.log("Processing Locations...");
processFilesRegex('./src/pages/locations', 'locations');

console.log("Done!");
