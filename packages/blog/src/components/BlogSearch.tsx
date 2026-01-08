'use client';

import { useState, useMemo } from 'react';
import type { BlogPost } from '../types';
import { BlogPostCard } from './BlogPostCard';

export interface BlogSearchProps {
  posts: BlogPost[];
  basePath: string;
}

/**
 * BlogSearch provides client-side search functionality for blog posts.
 * Filters posts by title, description, and tags.
 */
export function BlogSearch({ posts, basePath }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    
    const query = searchQuery.toLowerCase();
    return posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [posts, searchQuery]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="search"
          placeholder="Search posts by title, description, or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400"
        />
        <svg
          className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      
      {searchQuery && (
        <p className="text-gray-600 dark:text-gray-400">
          Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
        </p>
      )}
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <BlogPostCard key={post.slug} post={post} basePath={basePath} />
          ))
        ) : (
          <div className="col-span-full rounded-lg border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900">
            <p className="text-gray-600 dark:text-gray-400">
              No posts found matching "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
