import Link from 'next/link';
import type { PaginationInfo } from '../types';

export interface BlogPaginationProps {
  pagination: PaginationInfo;
  basePath: string;
}

/**
 * BlogPagination provides navigation between pages of blog posts.
 * Automatically hides when there's only one page.
 */
export function BlogPagination({ pagination, basePath }: BlogPaginationProps) {
  const { currentPage, totalPages } = pagination;
  
  if (totalPages <= 1) return null;

  return (
    <nav className="mt-12 flex items-center justify-center gap-3" aria-label="Blog pagination">
      {currentPage > 1 && (
        <Link 
          href={currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-x-0.5 hover:border-primary hover:text-primary"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </Link>
      )}
      
      <span className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary">
        <span className="font-semibold">{currentPage}</span>
        <span className="text-primary/60">of</span>
        <span className="font-semibold">{totalPages}</span>
      </span>
      
      {currentPage < totalPages && (
        <Link 
          href={`${basePath}?page=${currentPage + 1}`}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:translate-x-0.5 hover:border-primary hover:text-primary"
        >
          Next
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </nav>
  );
}
