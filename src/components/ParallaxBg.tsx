'use client'

interface ParallaxBgProps {
  variant?: 'hero' | 'section' | 'cta'
  className?: string
}

export function ParallaxBg({ className = '' }: ParallaxBgProps) {
  return <div className={className} aria-hidden="true" />
}
