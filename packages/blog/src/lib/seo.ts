import type { BlogPost, BlogConfig } from '../types';
import type { Metadata } from 'next';
import RSS from 'rss';

/**
 * BlogSEOManager handles all SEO-related functionality including metadata generation,
 * structured data (JSON-LD), and RSS feed generation.
 */
export class BlogSEOManager {
  constructor(private config: BlogConfig) {}

  /**
   * Generate metadata for a blog post page
   */
  generatePostMetadata(post: BlogPost): Metadata {
    const url = `${this.config.siteUrl}${this.config.basePath}/${post.slug}`;
    const imageUrl = post.image 
      ? `${this.config.siteUrl}${post.image}`
      : `${this.config.siteUrl}/og-image.png`;

    return {
      title: post.title,
      description: post.description,
      authors: [{ name: post.author.name, url: post.author.url }],
      keywords: post.tags.join(', '),
      openGraph: {
        title: post.title,
        description: post.description,
        url,
        siteName: this.config.siteName,
        images: [{ url: imageUrl }],
        type: 'article',
        publishedTime: post.date,
        modifiedTime: post.dateModified || post.date,
        authors: [post.author.name],
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: [imageUrl],
      },
      alternates: {
        canonical: url,
      },
    };
  }

  /**
   * Generate metadata for blog listing page
   */
  generateListingMetadata(page: number = 1): Metadata {
    const url = page === 1 
      ? `${this.config.siteUrl}${this.config.basePath}`
      : `${this.config.siteUrl}${this.config.basePath}?page=${page}`;

    const title = `Blog - ${this.config.siteName}`;
    const description = `Read the latest developer tutorials, guides, and tips from ${this.config.siteName}. Learn how to use our free, privacy-first developer tools.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        siteName: this.config.siteName,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
      alternates: {
        canonical: url,
      },
    };
  }

  /**
   * Generate JSON-LD structured data for a blog post
   * Creates a complete BlogPosting schema with all required fields
   */
  generateArticleSchema(post: BlogPost): object {
    const postUrl = `${this.config.siteUrl}${this.config.basePath}/${post.slug}`;
    const imageUrl = post.image 
      ? `${this.config.siteUrl}${post.image}`
      : `${this.config.siteUrl}/og-image.png`;

    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: imageUrl,
      datePublished: post.date,
      dateModified: post.dateModified || post.date,
      author: {
        '@type': 'Person',
        name: post.author.name,
        url: post.author.url || this.config.siteUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: this.config.siteName,
        url: this.config.siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${this.config.siteUrl}/logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': postUrl,
      },
      keywords: post.tags.join(', '),
      articleSection: post.tags[0] || 'Technology',
      wordCount: post.content.split(/\s+/).length,
      inLanguage: 'en-US',
    };
  }
}

/**
 * Generate RSS feed for all blog posts
 */
export async function generateRSSFeed(
  posts: BlogPost[],
  config: BlogConfig
): Promise<string> {
  const feed = new RSS({
    title: `${config.siteName} Blog`,
    description: `Latest developer tutorials, guides, and tips from ${config.siteName}`,
    feed_url: `${config.siteUrl}${config.basePath}/rss.xml`,
    site_url: config.siteUrl,
    language: 'en',
    pubDate: new Date(posts[0]?.date || new Date()),
    copyright: `© ${new Date().getFullYear()} ${config.siteName}`,
  });

  posts.forEach(post => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${config.siteUrl}${config.basePath}/${post.slug}`,
      date: post.date,
      author: post.author.name,
      categories: post.tags,
    });
  });

  return feed.xml();
}
