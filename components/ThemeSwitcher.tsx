'use client'

import React, { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // localStorage에서 저장된 테마 읽기
    if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('clim_theme')
      const currentClass = document.documentElement.className
      
      // localStorage에 저장된 테마가 있고 현재 클래스와 다르면 업데이트
      if (savedTheme) {
        const initialTheme = savedTheme === 'theme-dark' ? 'theme-dark' : 'theme-light'
        if (!currentClass.includes(initialTheme)) {
          document.documentElement.className = initialTheme
        }
        setIsDark(initialTheme === 'theme-dark')
      } else {
        // 저장된 테마가 없으면 현재 클래스를 기준으로 설정
        const isCurrentlyDark = currentClass.includes('theme-dark')
        setIsDark(isCurrentlyDark)
        if (!isCurrentlyDark) {
          document.documentElement.className = 'theme-light'
        }
      }
    }
  }, [])

  const toggleTheme = () => {
    if (typeof document === 'undefined') return
    
    const newTheme = isDark ? 'theme-light' : 'theme-dark'
    
    // HTML 요소에 테마 클래스 설정
    document.documentElement.className = newTheme
    
    // localStorage에 저장
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('clim_theme', newTheme)
    }
    
    // 상태 업데이트
    setIsDark(!isDark)
  }

  // SSR 중에는 렌더링하지 않음
  if (!mounted) {
    return (
      <div className="switch-theme-mode">
        <label id="switch" className="switch">
          <input
            type="checkbox"
            checked={true}
            readOnly
            id="slider"
          />
          <span className="slider round"></span>
        </label>
      </div>
    )
  }

  return (
    <div className="switch-theme-mode">
      <label id="switch" className="switch">
        <input
          type="checkbox"
          checked={!isDark}
          onChange={toggleTheme}
          id="slider"
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}
