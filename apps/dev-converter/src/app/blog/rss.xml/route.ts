import { BlogContentManager, generateRSSFeed } from "@ek-studio/blog"

import { blogConfig } from "@/config/blog.config"

/**
 * RSS feed route handler
 * Generates an RSS feed for all blog posts
 *
 * @returns XML response with RSS feed content
 */
export async function GET() {
  try {
    const contentManager = new BlogContentManager(blogConfig)
    const posts = await contentManager.getAllPosts()
    const rss = await generateRSSFeed(posts, blogConfig)

    return new Response(rss, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    })
  } catch (error) {
    console.error("Error generating RSS feed:", error)
    return new Response("Error generating RSS feed", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    })
  }
}
