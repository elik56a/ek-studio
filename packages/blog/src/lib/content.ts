import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost, BlogConfig, BlogListProps } from '../types';

/**
 * BlogContentManager handles all content processing operations for blog posts.
 * It reads MDX/Markdown files, parses frontmatter, validates content, and provides
 * methods for retrieving posts with various filters and pagination.
 */
export class BlogContentManager {
  constructor(private config: BlogConfig) {}

  /**
   * Get all blog posts sorted by date (newest first)
   */
  async getAllPosts(): Promise<BlogPost[]> {
    const postsDirectory = path.join(process.cwd(), this.config.contentDir);
    
    // Check if content directory exists
    if (!fs.existsSync(postsDirectory)) {
      throw new Error(`Content directory not found: ${postsDirectory}`);
    }

    const fileNames = fs.readdirSync(postsDirectory);
    
    const posts = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
        .map(async fileName => {
          const slug = fileName.replace(/\.mdx?$/, '');
          return this.getPostBySlug(slug);
        })
    );
    
    return posts
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  /**
   * Get a single post by slug
   */
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const postsDirectory = path.join(process.cwd(), this.config.contentDir);
    
    // Try .mdx first, then .md
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
    const mdPath = path.join(postsDirectory, `${slug}.md`);
    
    if (fs.existsSync(mdxPath)) {
      return this.parsePost(mdxPath, slug);
    } else if (fs.existsSync(mdPath)) {
      return this.parsePost(mdPath, slug);
    }
    
    return null;
  }

  /**
   * Parse a post file and extract metadata
   */
  private async parsePost(filePath: string, slug: string): Promise<BlogPost> {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);
      
      this.validateFrontmatter(data, slug);
      
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        tags: data.tags || [],
        image: data.image,
        readingTime: stats.text,
        content,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error parsing post "${slug}": ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Validate required frontmatter fields
   */
  private validateFrontmatter(data: any, slug: string): void {
    const required = ['title', 'description', 'date', 'author'];
    const missing = required.filter(field => !data[field]);
    
    if (missing.length > 0) {
      throw new Error(
        `Post "${slug}" is missing required frontmatter fields: ${missing.join(', ')}`
      );
    }

    // Validate author structure
    if (typeof data.author !== 'object' || !data.author.name) {
      throw new Error(
        `Post "${slug}" has invalid author structure. Author must be an object with a "name" field.`
      );
    }
  }

  /**
   * Get posts filtered by tag
   */
  async getPostsByTag(tag: string): Promise<BlogPost[]> {
    const allPosts = await this.getAllPosts();
    return allPosts.filter(post => post.tags.includes(tag));
  }

  /**
   * Get all unique tags across all posts
   */
  async getAllTags(): Promise<string[]> {
    const allPosts = await this.getAllPosts();
    const tags = new Set<string>();
    allPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }

  /**
   * Get paginated posts
   */
  async getPaginatedPosts(page: number = 1): Promise<BlogListProps> {
    const allPosts = await this.getAllPosts();
    const { postsPerPage } = this.config;
    
    // Ensure page is at least 1
    const currentPage = Math.max(1, page);
    
    const totalPages = Math.ceil(allPosts.length / postsPerPage);
    
    // If page exceeds total pages, return last page
    const safePage = Math.min(currentPage, Math.max(1, totalPages));
    
    const start = (safePage - 1) * postsPerPage;
    const end = start + postsPerPage;
    
    return {
      posts: allPosts.slice(start, end),
      pagination: {
        currentPage: safePage,
        totalPages: Math.max(1, totalPages),
        postsPerPage,
        totalPosts: allPosts.length,
      },
    };
  }
}
