import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { SEO } from '@/constants';

const URL = SEO.url.replace(/\/$/, '');

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogPosts = posts.map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const routes = ['', '/blog'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  return [...routes, ...blogPosts];
}
