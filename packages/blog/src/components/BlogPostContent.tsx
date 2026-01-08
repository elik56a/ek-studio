import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import type { BlogPost } from '../types';
import rehypePrettyCode from 'rehype-pretty-code';
import { CodeBlock } from './CodeBlock';

export interface BlogPostContentProps {
  post: BlogPost;
  components?: Record<string, React.ComponentType<any>>;
  basePath?: string;
}

/**
 * BlogPostContent renders the full blog post with header, metadata, and MDX content.
 * Includes syntax highlighting via rehype-pretty-code.
 */
export async function BlogPostContent({ post, components = {}, basePath = '/blog' }: BlogPostContentProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-12 space-y-8">
        {/* Author and metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {post.author.avatar && (
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="h-14 w-14 rounded-full ring-2 ring-primary/20 shadow-md"
            />
          )}
          <div className="flex flex-col gap-1.5">
            <span className="font-semibold text-foreground text-base">
              {post.author.name}
            </span>
            <div className="flex items-center gap-3 text-sm">
              <time dateTime={post.date} className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formattedDate}
              </time>
              <span className="text-muted-foreground/50">•</span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl tracking-tight">
          {post.title}
        </h1>
        
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map(tag => (
              <Link
                key={tag}
                href={`${basePath}/tag/${tag}`}
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-200 hover:scale-105"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </header>
      
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: 'github-dark',
                    keepBackground: true,
                  },
                ],
              ],
            },
          }}
          components={{
            pre: CodeBlock,
            ...components,
          }}
        />
      </div>
    </article>
  );
}
