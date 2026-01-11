"use client"

import Link from "next/link"

import { blogConfig } from "@/config/blog.config"
import { getRelatedBlogs } from "@/lib/seo/internal-linking"

interface BlogToolLinksProps {
  toolId: string
  className?: string
}

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: {
    name: string
    avatar?: string
    url?: string
  }
  tags: string[]
  image?: string
  readingTime: string
}

/**
 * Lightweight blog card component for Edge Runtime compatibility
 */
function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <article className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
      {post.image && (
        <Link
          href={`${blogConfig.basePath}/${post.slug}`}
          className="relative block aspect-[16/9] overflow-hidden bg-muted"
        >
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
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formattedDate}
          </time>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {post.readingTime}
          </span>
        </div>

        <Link href={`${blogConfig.basePath}/${post.slug}`} className="block">
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
                href={`${blogConfig.basePath}/tag/${tag}`}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                onClick={e => e.stopPropagation()}
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
        href={`${blogConfig.basePath}/${post.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`Read ${post.title}`}
      />
    </article>
  )
}

/**
 * Static blog post data to avoid filesystem access in Edge Runtime
 * This should be kept in sync with actual blog posts
 */
const blogPostsData: Record<string, BlogPost> = {
  "base64-encode-decode-guide": {
    slug: "base64-encode-decode-guide",
    title: "Base64 Encoding and Decoding: Complete Developer Guide",
    description:
      "Master Base64 encoding and decoding with practical examples. Learn when to use it, common pitfalls, and best practices for handling binary data.",
    date: "2025-01-06",
    author: {
      name: "DevConverter Team",
      url: "https://devconverter.dev",
    },
    tags: ["base64", "encoding", "data-conversion", "javascript", "python"],
    image: "/images/blog/base64.svg",
    readingTime: "8 min read",
  },
  "how-to-decode-jwt-token": {
    slug: "how-to-decode-jwt-token",
    title: "How to Decode JWT Tokens: A Complete Guide",
    description:
      "Learn how to decode and validate JWT tokens. Understand JWT structure, security best practices, and common use cases.",
    date: "2025-01-05",
    author: {
      name: "DevConverter Team",
      url: "https://devconverter.dev",
    },
    tags: ["jwt", "authentication", "security", "tokens", "api"],
    image: "/images/blog/jwt.svg",
    readingTime: "10 min read",
  },
  "json-to-yaml-converter-guide": {
    slug: "json-to-yaml-converter-guide",
    title: "JSON to YAML Converter: Complete Guide",
    description:
      "Convert between JSON and YAML formats easily. Learn the differences, use cases, and best practices for configuration files.",
    date: "2025-01-04",
    author: {
      name: "DevConverter Team",
      url: "https://devconverter.dev",
    },
    tags: ["json", "yaml", "conversion", "configuration", "devops"],
    image: "/images/blog/json-yaml.svg",
    readingTime: "7 min read",
  },
  "hashing-vs-encryption": {
    slug: "hashing-vs-encryption",
    title: "Hashing vs Encryption: Understanding the Difference",
    description:
      "Learn the key differences between hashing and encryption. Understand when to use each and common security best practices.",
    date: "2025-01-03",
    author: {
      name: "DevConverter Team",
      url: "https://devconverter.dev",
    },
    tags: ["hashing", "encryption", "security", "cryptography", "passwords"],
    image: "/images/blog/hashing-vs-encryption.svg",
    readingTime: "12 min read",
  },
}

/**
 * Component for rendering related blog posts as cards
 * Displays blog posts related to a tool in a grid layout
 */
export function BlogToolLinks({ toolId, className = "" }: BlogToolLinksProps) {
  const blogSlugs = getRelatedBlogs(toolId)

  if (blogSlugs.length === 0) {
    return null
  }

  // Get blog post data from static mapping
  const relatedPosts = blogSlugs
    .map(slug => blogPostsData[slug])
    .filter((post): post is BlogPost => post !== undefined)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h3 className="text-2xl font-bold mb-2">Related Articles</h3>
        <p className="text-muted-foreground">
          Learn more about this tool with our in-depth guides
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
