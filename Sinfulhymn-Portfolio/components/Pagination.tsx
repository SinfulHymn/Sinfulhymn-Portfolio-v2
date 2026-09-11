import Link from '@/components/Link'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const prevPage = parseInt(currentPage.toString()) - 1 > 0
  const nextPage = parseInt(currentPage.toString()) + 1 <= parseInt(totalPages.toString())

  return (
    <div className="hairline mt-8 border-t pt-6">
      <nav className="apparatus flex items-center justify-between text-secondaryText dark:text-fgMutedDark">
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}
            className="nav-link text-primaryText dark:text-fgTextDark"
            rel="previous"
          >
            &larr; Previous
          </Link>
        ) : (
          <span className="cursor-default opacity-40">&larr; Previous</span>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {nextPage ? (
          <Link
            href={`/blog/page/${currentPage + 1}`}
            className="nav-link text-primaryText dark:text-fgTextDark"
            rel="next"
          >
            Next &rarr;
          </Link>
        ) : (
          <span className="cursor-default opacity-40">Next &rarr;</span>
        )}
      </nav>
    </div>
  )
}
