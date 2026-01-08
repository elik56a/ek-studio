import Link from 'next/link';

export interface BlogTagListProps {
  tags: string[];
  basePath: string;
  currentTag?: string;
}

/**
 * BlogTagList displays all available tags with an "All Posts" option.
 * Highlights the currently active tag.
 */
export function BlogTagList({ tags, basePath, currentTag }: BlogTagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link 
        href={basePath}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          !currentTag 
            ? 'bg-blue-600 text-white dark:bg-blue-500' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
      >
        All Posts
      </Link>
      {tags.map(tag => (
        <Link
          key={tag}
          href={`${basePath}/tag/${tag}`}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            currentTag === tag 
              ? 'bg-blue-600 text-white dark:bg-blue-500' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
