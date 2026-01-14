import {
  BlogContentManager,
  BlogPostCard,
  BlogSEOManager,
  BlogTagList,
} from "@ek-studio/blog"

import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { generateCollectionPageSchema } from "@/lib/seo/schema-generators"

import { blogConfig } from "../../../../config/blog.config"

/**
 * Generate static params for all tags
 * This enables static generation of all tag filtering pages at build time
 */
export async function generateStaticParams() {
  const contentManager = new BlogContentManager(blogConfig)
  const tags = await contentManager.getAllTags()

  return tags.map(tag => ({
    tag: tag,
  }))
}

/**
 * Generate metadata for tag filtering page
 * Includes SEO optimization for tag-specific pages
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const contentManager = new BlogContentManager(blogConfig)
  const { tag } = await params
  const posts = await contentManager.getPostsByTag(tag)

  if (posts.length === 0) {
    return {
      title: "Tag Not Found",
      description: "No posts found for this tag.",
    }
  }

  const url = `${blogConfig.siteUrl}${blogConfig.basePath}/tag/${tag}`

  return {
    title: `Posts tagged with "${tag}" - ${blogConfig.siteName}`,
    description: `Browse all blog posts tagged with ${tag}. Found ${posts.length} ${posts.length === 1 ? "post" : "posts"}.`,
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `Posts tagged with "${tag}"`,
      description: `Browse all blog posts tagged with ${tag}`,
      url,
      siteName: blogConfig.siteName,
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "x-default": url,
      },
    },
  }
}

/**
 * Tag filtering page component
 * Displays all posts filtered by a specific tag
 *
 * @param params - Route parameters including the tag name
 */
export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const contentManager = new BlogContentManager(blogConfig)
  const { tag } = await params
  const posts = await contentManager.getPostsByTag(tag)
  const allTags = await contentManager.getAllTags()

  // Return 404 if no posts found for this tag
  if (posts.length === 0) {
    notFound()
  }

  // Generate CollectionPage schema for tag page
  const collectionSchema = generateCollectionPageSchema({
    title: `Posts tagged with "${tag}"`,
    description: `Browse all blog posts tagged with ${tag}`,
    url: `/blog/tag/${tag}`,
    numberOfItems: posts.length,
    keywords: [tag, "blog", "posts", "articles"],
  })

  return (
    <>
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Posts tagged with <span className="text-primary">#{tag}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Found {posts.length} {posts.length === 1 ? "post" : "posts"}
          </p>
        </div>

        {/* Tag navigation */}
        <div className="mb-8">
          <BlogTagList
            tags={allTags}
            basePath={blogConfig.basePath}
            currentTag={tag}
          />
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogPostCard
              key={post.slug}
              post={post}
              basePath={blogConfig.basePath}
            />
          ))}
        </div>
      </div>
    </>
  )
}
