// components/CertificateCard.tsx
import Image from 'next/image'
import Link from 'next/link'

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  description?: string
  certUrl: string
  logoUrl?: string
}

export default function CertificateCard({
  title,
  issuer,
  date,
  description,
  certUrl,
  logoUrl,
}: CertificateCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-start gap-4">
        {logoUrl && (
          <Image
            src={logoUrl}
            alt={issuer}
            width={40}
            height={40}
            className="rounded-md object-contain"
          />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {issuer} • {date}
          </p>
          {description && (
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{description}</p>
          )}
          <Link
            href={certUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-3 inline-block text-sm font-medium"
          >
            View Certificate →
          </Link>
        </div>
      </div>
    </div>
  )
}
