'use client'

import { useState } from 'react'
import certificatesData from '@/data/certificatesData'

export default function CertificatesClient() {
  const [query, setQuery] = useState('')
  const filtered = certificatesData.filter((cert) =>
    (cert.title + cert.issuer).toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      {/* Search Input */}
      <div className="mb-10 flex justify-center">
        <div className="relative mt-10 w-full max-w-md">
          <input
            type="text"
            placeholder="Search certificates..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-full border border-gray-300 bg-white px-5 py-3 pr-12 text-sm text-gray-800 shadow-sm placeholder:text-gray-400 focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
          />
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((cert) => (
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
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
              </div>
            </a>
          ))
        ) : (
          <p className="col-span-full text-center text-sm text-gray-500 dark:text-gray-400">
            No certificates found.
          </p>
        )}
      </div>
    </div>
  )
}
