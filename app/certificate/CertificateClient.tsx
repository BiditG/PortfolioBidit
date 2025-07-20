// app/certificates/CertificatesClient.tsx
'use client'
import { useState } from 'react'
import certificatesData from '@/data/certificatesData'

export default function CertificatesClient() {
  const [query, setQuery] = useState('')
  const filtered = certificatesData.filter((cert) =>
    (cert.title + cert.issuer).toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <input
        type="text"
        placeholder="Search certificates..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 w-full max-w-md rounded border px-4 py-2"
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cert) => (
          <div key={cert.title}>{cert.title}</div>
        ))}
      </div>
    </>
  )
}
