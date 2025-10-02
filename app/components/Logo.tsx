'use client'

import Image from 'next/image'

/**
 * Logo component.
 * Customize: Replace /public/images/logo.svg with your actual SVG file.
 * Keep exact size box for landing page header hero as requested.
 */
export default function Logo({ width = 220, height = 220 }: { width?: number; height?: number }) {
  return (
    <div className="flex items-center gap-3">
      {/* The logo file should be at public/images/logo.svg */}
      <div style={{ width: width, height: height }} className="relative">
        <Image
          src="/images/og-image.png"
          alt="KAPment logo"
          width={width}
          height={height}
          priority
        />
      </div>
    </div>
  )
}
