import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dearworld.com';

    // Core pages ensuring AEO discovery
    const routes = [
        '',
        '/keynote-experience',
        '/partnerships',
        '/solutions',
        '/foundation',
        '/sincerely-club',
        '/contact',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
