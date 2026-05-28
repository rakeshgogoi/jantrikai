import type { MetadataRoute } from 'next';

const siteUrl = 'https://jantrikai.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: Array<{
    path: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }> = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/web/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/web/guide/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/bot/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/bot/guide/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/civic/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/civic/guide/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/about/', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/contact/', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/terms/', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/privacy/', changeFrequency: 'yearly', priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
