'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '')
    .replace(/\/page\/\d+\/?$/, '')
    .replace(/\/$/, '')
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between text-sm font-medium">
        {!prevPage ? (
          <button className="cursor-not-allowed text-gray-400" disabled>
            Previous
          </button>
        ) : (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="text-primary-500 hover:underline"
          >
            ← Previous
          </Link>
        )}
        <span className="text-gray-600 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        {!nextPage ? (
          <button className="cursor-not-allowed text-gray-400" disabled>
            Next
          </button>
        ) : (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="text-primary-500 hover:underline"
          >
            Next →
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="py-6 sm:py-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
          {title}
        </h1>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Sidebar with tags */}
        <aside className="hidden max-h-[80vh] overflow-y-auto rounded-md bg-gray-50 p-4 shadow-md lg:block lg:w-64 dark:bg-gray-900/70">
          <h3 className="text-primary-500 mb-4 text-lg font-bold uppercase">Tags</h3>
          <ul>
            <li className="mb-3">
              {pathname.startsWith('/blog') ? (
                <h3 className="text-primary-500 text-sm font-semibold uppercase">All Posts</h3>
              ) : (
                <Link
                  href="/blog"
                  className="hover:text-primary-500 text-sm font-medium text-gray-700 uppercase dark:text-gray-300"
                >
                  All Posts
                </Link>
              )}
            </li>
            {sortedTags.map((t) => {
              const isActive = decodeURI(pathname.split('/tags/')[1]) === slug(t)
              return (
                <li key={t} className="mb-3">
                  {isActive ? (
                    <h3 className="text-primary-500 text-sm font-semibold uppercase">
                      {`${t} (${tagCounts[t]})`}
                    </h3>
                  ) : (
                    <Link
                      href={`/tags/${slug(t)}`}
                      className="hover:text-primary-500 text-sm text-gray-500 uppercase dark:text-gray-300"
                      aria-label={`View posts tagged ${t}`}
                    >
                      {`${t} (${tagCounts[t]})`}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </aside>

        {/* Blog posts section */}
        <main className="flex-1">
          <ul className="flex flex-col gap-8">
            {displayPosts.map((post) => {
              const { path, date, title, summary, tags, thumbnail } = post
              return (
                <li key={path}>
                  <article className="flex flex-col gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg md:flex-row dark:border-gray-700 dark:bg-gray-800">
                    {/* Thumbnail Image */}
                    <div className="h-32 w-full flex-shrink-0 overflow-hidden rounded-md bg-gray-100 md:w-48 dark:bg-gray-700">
                      <img
                        src={thumbnail || '/static/images/default-thumbnail.jpg'}
                        alt={title}
                        className="h-full w-full rounded-md object-cover object-center transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <time dateTime={date} suppressHydrationWarning>
                              {formatDate(date, siteMetadata.locale)}
                            </time>
                          </dd>
                        </dl>
                        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                          <Link href={`/${path}`} className="hover:text-primary-500 transition">
                            {title}
                          </Link>
                        </h2>
                        <div className="mb-3 flex flex-wrap gap-2">
                          {tags?.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <p className="text-base text-gray-600 dark:text-gray-300">{summary}</p>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </main>
      </div>
    </div>
  )
}
