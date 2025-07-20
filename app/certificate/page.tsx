import certificatesData from '@/data/certificatesData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Certificates' })

export default function Certificates() {
  return (
    <div className="container py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          🎓 Certificates
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          A curated collection of certifications showcasing my knowledge in AI, ML, programming, and
          tech.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificatesData.map((cert) => (
          <a
            key={cert.title}
            href={cert.certUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900"
          >
            {/* Certificate Image */}
            <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-800">
              <img
                src={cert.logoUrl || '/static/images/default-cert.png'}
                alt={cert.title}
                className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Certificate Info */}
            <div className="space-y-1 p-5">
              <h3 className="group-hover:text-primary-500 text-xl font-semibold text-gray-900 transition-colors dark:text-white">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert.issuer}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
