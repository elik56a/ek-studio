import { MDXRemote } from 'next-mdx-remote/rsc';
import type { BlogPost } from '../types';
import rehypePrettyCode from 'rehype-pretty-code';
import { CodeBlock } from './CodeBlock';

export interface BlogPostContentProps {
  post: BlogPost;
  components?: Record<string, React.ComponentType<any>>;
}

/**
 * BlogPostContent renders the full blog post with header, metadata, and MDX content.
 * Includes syntax highlighting via rehype-pretty-code.
 */
export async function BlogPostContent({ post, components = {} }: BlogPostContentProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-10 border-b border-border pb-10">
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {post.author.avatar && (
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="h-12 w-12 rounded-full ring-2 ring-border"
            />
          )}
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-foreground">
              {post.author.name}
            </span>
            <div className="flex items-center gap-3">
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
          </div>
        </div>
        
        <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <div className="prose prose-lg max-w-none">
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
