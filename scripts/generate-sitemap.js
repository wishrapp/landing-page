import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

async function generateSitemap() {
  try {
    const links = [
      { url: '/', changefreq: 'daily', priority: 1 },
      { url: '/privacy', changefreq: 'monthly', priority: 0.5 },
      { url: '/terms', changefreq: 'monthly', priority: 0.5 },
      { url: '/contact', changefreq: 'monthly', priority: 0.7 },
      { url: '/faq', changefreq: 'weekly', priority: 0.8 },
      // Wishlist pages
      { url: '/wishlist/occasions', changefreq: 'weekly', priority: 0.9 },
      { url: '/wishlist/birthday', changefreq: 'weekly', priority: 0.8 },
      { url: '/wishlist/wedding', changefreq: 'weekly', priority: 0.8 },
      { url: '/wishlist/baby-shower', changefreq: 'weekly', priority: 0.8 },
      { url: '/wishlist/christening', changefreq: 'weekly', priority: 0.8 },
      { url: '/wishlist/eid', changefreq: 'weekly', priority: 0.8 },
      { url: '/wishlist/christmas', changefreq: 'weekly', priority: 0.8 },
      { url: '/wishlist/bat-mitzvah', changefreq: 'weekly', priority: 0.8 },
      { url: '/wishlist/graduation', changefreq: 'weekly', priority: 0.8 },
      { url: '/wishlist/valentines-day', changefreq: 'weekly', priority: 0.8 },
      { url: '/wishlist/housewarming', changefreq: 'weekly', priority: 0.8 }
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