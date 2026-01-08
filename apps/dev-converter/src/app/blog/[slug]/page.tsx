import {
  BlogContentManager,
  BlogPostContent,
  BlogSEOManager,
} from "@ek-studio/blog"

import { notFound } from "next/navigation"

import { blogConfig } from "../../../config/blog.config"

/**
 * Generate static params for all blog posts
 * This enables static generation of all blog post pages at build time
 */
export async function generateStaticParams() {
  const contentManager = new BlogContentManager(blogConfig)
  const posts = await contentManager.getAllPosts()

  return posts.map(post => ({
    slug: post.slug,
  }))
}

/**
 * Generate metadata for individual blog post
 * Includes complete SEO optimization with Open Graph, Twitter Card, and canonical URL
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const contentManager = new BlogContentManager(blogConfig)
  const { slug } = await params
  const post = await contentManager.getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  const seoManager = new BlogSEOManager(blogConfig)
  return seoManager.generatePostMetadata(post)
}

/**
 * Individual blog post page component
 * Displays full blog post content with metadata and structured data
 *
 * @param params - Route parameters including the post slug
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const contentManager = new BlogContentManager(blogConfig)
  const { slug } = await params
  const post = await contentManager.getPostBySlug(slug)

  // Return 404 if post not found
  if (!post) {
    notFound()
  }

  // Generate JSON-LD structured data for SEO
  const seoManager = new BlogSEOManager(blogConfig)
  const schema = seoManager.generateArticleSchema(post)

  return (
    <>
      {/* Add JSON-LD structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BlogPostContent post={post} basePath={blogConfig.basePath} />
      </div>
    </>
  )
}
