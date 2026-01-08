import { BlogContentManager, BlogSEOManager, BlogPostCard, BlogPagination } from '@ek-studio/blog';
import { blogConfig } from '../../config/blog.config';

/**
 * Generate metadata for the blog listing page
 * Includes SEO optimization with Open Graph and Twitter Card metadata
 */
export async function generateMetadata({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const seoManager = new BlogSEOManager(blogConfig);
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);
  return seoManager.generateListingMetadata(page);
}

/**
 * Blog listing page component
 * Displays paginated list of blog posts with navigation
 * 
 * @param searchParams - URL search parameters including optional page number
 */
export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const contentManager = new BlogContentManager(blogConfig);
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);
  const { posts, pagination } = await contentManager.getPaginatedPosts(page);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Developer Blog
        </div>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Latest Articles
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Tutorials, guides, and insights about developer tools, web development, and best practices
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 py-16 text-center">
          <svg className="mb-4 h-16 w-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-lg font-medium text-foreground">No blog posts found</p>
          <p className="mt-1 text-sm text-muted-foreground">Check back soon for new content!</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '3rem' }}>
            {posts.map(post => (
              <BlogPostCard 
                key={post.slug} 
                post={post} 
                basePath={blogConfig.basePath} 
              />
            ))}
          </div>
          
          <BlogPagination 
            pagination={pagination} 
            basePath={blogConfig.basePath} 
          />
        </>
      )}
    </div>
  );
}
