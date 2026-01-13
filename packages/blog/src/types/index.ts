/**
 * Core type definitions for the reusable blog system
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  author: {
    name: string;
    avatar?: string;
    url?: string;
  };
  tags: string[];
  image?: string;
  readingTime: string;
  content: string;
}

export interface BlogConfig {
  contentDir: string;              // e.g., 'content/blog'
  basePath: string;                // e.g., '/blog'
  postsPerPage: number;            // e.g., 10
  siteName: string;                // For RSS/SEO
  siteUrl: string;                 // Base URL for absolute links
  author: {
    name: string;
    email?: string;
  };
  theme?: {
    colors?: Record<string, string>;
    fonts?: Record<string, string>;
  };
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
  totalPosts: number;
}

export interface BlogListProps {
  posts: BlogPost[];
  pagination: PaginationInfo;
}
