import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Intro Section */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-col-reverse items-start justify-between gap-8 pt-6 pb-8 md:flex-row md:items-center">
          {/* Text + Actions */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
              Hi, I’m Bidit 👋
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">{siteMetadata.description}</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/static/files/Bidit_Giri_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                📄 Download CV
              </a>
              <a
                href="mailto:biditgiri123@gmail.com"
                className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 rounded-md px-4 py-2 text-sm font-medium text-white"
              >
                📧 Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/static/images/avatar.png" // Add your image to `public/static/images/avatar.png`
              alt="Bidit Giri"
              width={120}
              height={120}
              className="rounded-full border-2 border-gray-300 shadow-md dark:border-gray-700"
            />
          </div>
        </div>

        {/* Blog Posts Section */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-600 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>

        {/* All Posts Link */}
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end pt-4 text-base font-medium">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts →
            </Link>
          </div>
        )}

        {/* Newsletter */}
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-8">
            <NewsletterForm />
          </div>
        )}
      </div>
    </>
  )
}
