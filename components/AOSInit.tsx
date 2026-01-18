'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    AOS: any
  }
}

export default function AOSInit() {
  const pathname = usePathname()

  useEffect(() => {
    // AOS 라이브러리 동적 로드 및 초기화
    const loadAOS = () => {
      if (typeof window === 'undefined') return

      if (!window.AOS) {
        const aosScript = document.createElement('script')
        aosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js'
        aosScript.onload = () => {
          if (window.AOS) {
            window.AOS.init({
              duration: 1200,
              once: true,
              disable: function() {
                const maxWidth = 991
                return window.innerWidth < maxWidth
              }
            })
          }
        }
        document.body.appendChild(aosScript)

        // AOS CSS 로드 (중복 방지)
        if (!document.querySelector('link[href*="aos.css"]')) {
          const aosCSS = document.createElement('link')
          aosCSS.rel = 'stylesheet'
          aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css'
          document.head.appendChild(aosCSS)
        }
      } else {
        // 이미 로드된 경우 바로 초기화 및 refresh
        window.AOS.init({
          duration: 1200,
          once: true,
          disable: function() {
            const maxWidth = 991
            return window.innerWidth < maxWidth
          }
        })
        // 페이지 변경 시 AOS refresh
        setTimeout(() => {
          if (window.AOS) {
            window.AOS.refresh()
          }
        }, 100)
      }
    }

    loadAOS()

    // 페이지 변경 시 AOS refresh
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.refresh()
      }, 100)
    }

    // Cleanup
    return () => {
      // cleanup은 하지 않고 refresh만 수행
    }
  }, [pathname])

  return null
}
