'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import ThemeSwitcher from './ThemeSwitcher'
import AOSInit from './AOSInit'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname()
  const [isRestoring, setIsRestoring] = useState(true)
  const [loaderVisible, setLoaderVisible] = useState(true)

  useEffect(() => {
    // 브라우저의 기본 스크롤 복원 비활성화
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // 페이지 로드 시 스크롤 복원 (애니메이션 없이)
    const restoreScroll = () => {
      // 저장된 스크롤 위치 확인
      const scrollPos = sessionStorage.getItem(`scroll-${pathname}`)
      
      if (scrollPos) {
        const targetScroll = parseInt(scrollPos, 10)
        
        // scroll-behavior를 auto로 설정하여 즉시 스크롤
        document.documentElement.style.scrollBehavior = 'auto'
        
        // 스크롤 위치를 여러 번 설정하여 확실히 적용
        const setScrollPosition = () => {
          window.scrollTo(0, targetScroll)
          
          // 스크롤 위치가 정확히 설정될 때까지 반복 확인
          let attempts = 0
          const verifyScroll = () => {
            const currentScroll = window.scrollY
            const difference = Math.abs(currentScroll - targetScroll)
            
            if (difference > 1 && attempts < 10) {
              // 아직 목표 위치에 도달하지 않았으면 다시 시도
              window.scrollTo(0, targetScroll)
              attempts++
              requestAnimationFrame(verifyScroll)
            } else {
              // 스크롤 위치가 정확히 설정되었거나 최대 시도 횟수에 도달
              // 추가 안정화를 위한 딜레이 후 로더 fade out 시작
              setTimeout(() => {
                // scroll-behavior를 다시 smooth로 복원
                document.documentElement.style.scrollBehavior = ''
                setLoaderVisible(false)
                // fade out 애니메이션 후 상태 변경
                setTimeout(() => {
                  setIsRestoring(false)
                }, 300)
              }, 30)
            }
          }
          
          // 첫 번째 프레임에서 스크롤 설정
          requestAnimationFrame(() => {
            window.scrollTo(0, targetScroll)
            // 다음 프레임에서 확인 시작
            requestAnimationFrame(verifyScroll)
          })
        }

        // DOM이 준비될 때까지 대기
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', setScrollPosition, { once: true })
        } else {
          // DOM이 이미 로드된 경우 약간의 딜레이 후 실행
          setTimeout(setScrollPosition, 0)
        }
      } else {
        // 스크롤 위치가 없으면 맨 위로
        document.documentElement.style.scrollBehavior = 'auto'
        
        window.scrollTo(0, 0)
        
        // 짧은 딜레이 후 로더 fade out 시작
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = ''
          setLoaderVisible(false)
          // fade out 애니메이션 후 상태 변경
          setTimeout(() => {
            setIsRestoring(false)
          }, 300)
        }, 50)
      }
    }

    setIsRestoring(true)
    restoreScroll()

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [pathname])

  useEffect(() => {
    // 페이지 이동 시 현재 스크롤 위치 저장
    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString())
    }

    // 스크롤 이벤트 리스너 추가 (throttle 적용)
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return (
    <div className="page-wrapper">
      {/* Preloader - 추후 구현 */}
      {/* <Preloader /> */}
      
      {/* AOS 초기화 */}
      <AOSInit />
      
      {/* Theme Switcher */}
      <ThemeSwitcher />
      
      {/* 페이지 로더 - 스크롤 복원 중 표시 */}
      {isRestoring && (
        <div className={`loader js-preloader ${!loaderVisible ? 'fade-out' : ''}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      
      <Header />
      
      <main className="site-main">
        {children}
      </main>
      
      <Footer />
      
      {/* Back-to-top Button - 추후 구현 */}
      {/* <BackToTop /> */}
    </div>
  )
}
