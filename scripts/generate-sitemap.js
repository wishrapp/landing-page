import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

async function generateSitemap() {
  try {
    const links = [
      { url: '/', changefreq: 'daily', priority: 1 },
      { url: '/about', changefreq: 'monthly', priority: 0.8 },
      { url: '/privacy', changefreq: 'monthly', priority: 0.5 },
      { url: '/terms', changefreq: 'monthly', priority: 0.5 },
      { url: '/contact', changefreq: 'monthly', priority: 0.7 },
      { url: '/faq', changefreq: 'weekly', priority: 0.8 },
      // Don't include 404 page in sitemap as it's not meant to be crawled
    ];

    const stream = new SitemapStream({ hostname: 'https://wishr.com' });
    const data = await streamToPromise(Readable.from(links).pipe(stream));
    
    createWriteStream('./public/sitemap.xml').write(data.toString());
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();