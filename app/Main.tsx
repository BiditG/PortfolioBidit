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
      <div className="mx-auto max-w-7xl space-y-24 px-4 pt-10 pb-24 sm:px-6 lg:px-8">
        {/* ------------------------- */}
        {/* 1. Intro Section */}
        {/* ------------------------- */}
        <section className="flex flex-col-reverse items-start justify-between gap-12 md:flex-row md:items-center">
          {/* Text + Actions */}
          <div className="flex-1 space-y-5">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Hi, I’m Bidit 👋
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {siteMetadata.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/static/files/Bidit_Giri_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                📄 Download CV
              </a>
              <a
                href="mailto:biditgiri123@gmail.com"
                className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 rounded-md px-5 py-2 text-sm font-medium text-white"
              >
                📧 Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/static/images/avatar.png"
              alt="Bidit Giri"
              width={150}
              height={150}
              className="border-primary-500 rounded-full border-4 shadow-xl"
            />
          </div>
        </section>

        {/* ------------------------- */}
        {/* 2. Tech Stack */}
        {/* ------------------------- */}
        <section>
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
            🧠 Tech Stack
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: 'LLMs (LangChain, Ollama)',
                level: 4,
                icon: '/icons/LLM.svg',
                color: 'from-purple-500 to-purple-700',
              },
              {
                label: 'Python',
                level: 3,
                icon: '/icons/Python.svg',
                color: 'from-yellow-400 to-yellow-600',
              },
              {
                label: 'SQL',
                level: 3,
                icon: '/icons/sql.svg',
                color: 'from-gray-700 to-gray-900',
              },
              {
                label: 'React.js',
                level: 2,
                icon: '/icons/react.svg',
                color: 'from-blue-400 to-blue-600',
              },
            ].map(({ label, level, icon, color }) => (
              <div
                key={label}
                className="rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Image src={icon} alt={label} width={26} height={26} />
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    {label}
                  </span>
                  <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                    {level}/5
                  </span>
                </div>
                <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000`}
                    style={{ width: `${(level / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------- */}
        {/* 3. Blog Section */}
        {/* ------------------------- */}
        <section>
          <h2 className="flex items-center gap-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            📝 Recent Blog Posts
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            Articles, tutorials, and thoughts on AI, development, and more.
          </p>

          <ul className="grid gap-10 pt-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags, image } = post

              return (
                <li
                  key={slug}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-900"
                >
                  {/* Blog Image */}
                  <Link href={`/blog/${slug}`} className="block h-48 w-full overflow-hidden">
                    <img
                      src={image || '/static/images/default-post.png'}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    <time
                      dateTime={date}
                      className="mb-1 block text-sm text-gray-500 dark:text-gray-400"
                    >
                      {formatDate(date, siteMetadata.locale)}
                    </time>

                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      <Link href={`/blog/${slug}`} className="hover:text-primary-500">
                        {title}
                      </Link>
                    </h3>

                    <div className="mb-3 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>

                    <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                      {summary}
                    </p>

                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>

          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end pt-8">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
              >
                All Posts →
              </Link>
            </div>
          )}
        </section>
      </div>
    </>
  )
}
