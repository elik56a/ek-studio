'use client';

import Link from 'next/link';
import type { BlogPost } from '../types';

export interface BlogPostCardProps {
  post: BlogPost;
  basePath: string;
}

/**
 * BlogPostCard displays a preview of a blog post with image, title, metadata, description, and tags.
 * Used in blog listing pages and search results.
 */
export function BlogPostCard({ post, basePath }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
      {post.image && (
        <Link href={`${basePath}/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-muted">
          <img 
            src={post.image} 
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
      )}
      
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={post.date} className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formattedDate}
          </time>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readingTime}
          </span>
        </div>
        
        <Link href={`${basePath}/${post.slug}`} className="block">
          <h2 className="mb-3 text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h2>
        </Link>
        
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {post.description}
        </p>
        
        {post.tags.length > 0 && (
          <div className="relative z-10 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map(tag => (
              <Link 
                key={tag} 
                href={`${basePath}/tag/${tag}`}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                onClick={(e) => e.stopPropagation()}
              >
                #{tag}
              </Link>
            ))}
            {post.tags.length > 3 && (
              <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border transition-all group-hover:ring-2 group-hover:ring-primary/20" />
      
      {/* Make entire card clickable */}
      <Link 
        href={`${basePath}/${post.slug}`} 
        className="absolute inset-0 z-0"
        aria-label={`Read ${post.title}`}
      />
    </article>
  );
}
