'use client'
import { useEffect, useState } from 'react'

const FALLBACK = '1.1.0'

export default function VersionPill() {
  const [version, setVersion] = useState(FALLBACK)
  useEffect(() => {
    fetch('https://db.overdxse.dev/api/v2/version')
      .then(r => r.json())
      .then(({ version }) => { if (/^\d+\.\d+\.\d+$/.test(version || '')) setVersion(version) })
      .catch(() => {})
  }, [])
  return <span className="pill">Version {version}</span>
}
