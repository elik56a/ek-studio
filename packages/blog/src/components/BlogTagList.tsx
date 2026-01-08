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
        className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
          !currentTag 
            ? 'bg-primary text-primary-foreground shadow-md hover:shadow-lg' 
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }`}
      >
        All Posts
      </Link>
      {tags.map(tag => (
        <Link
          key={tag}
          href={`${basePath}/tag/${tag}`}
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
            currentTag === tag 
              ? 'bg-primary text-primary-foreground shadow-md hover:shadow-lg' 
              : 'bg-primary/10 text-primary hover:bg-primary/20'
          }`}
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
