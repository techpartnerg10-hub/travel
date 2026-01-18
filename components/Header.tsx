'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Logo from './Logo'
import { useAuth } from './AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { isAuthenticated, user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header-wrap ${isScrolled ? 'sticky' : ''}`}>
      {/* 모바일 메뉴 오버레이 (블러 처리) */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* Header Bottom */}
      <div className="header-bottom">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="navbar-brand">
              <Link href="/">
                <Logo className="logo-light" />
                <Logo className="logo-dark" />
              </Link>
            </div>
            <div className={`collapse navbar-collapse main-menu-wrap ${isMenuOpen ? 'open' : ''}`} id="navbarSupportedContent">
              <div className="menu-close d-lg-none">
                <a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>
                  <i className="ri-close-line"></i>
                </a>
              </div>
              <ul id="menu-primary-menu" className="navbar-nav">
                <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                  <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>홈</Link>
                </li>
                <li className={`nav-item ${pathname?.startsWith('/travel') ? 'active' : ''}`}>
                  <Link href="/travel" className="nav-link" onClick={() => setIsMenuOpen(false)}>유럽 여행</Link>
                </li>
                <li className={`nav-item ${pathname === '/about-us' ? 'active' : ''}`}>
                  <Link href="/about-us" className="nav-link" onClick={() => setIsMenuOpen(false)}>회사소개</Link>
                </li>
                <li className={`nav-item ${pathname?.startsWith('/blog') ? 'active' : ''}`}>
                  <Link href="/blog-grid" className="nav-link" onClick={() => setIsMenuOpen(false)}>여행 이야기</Link>
                </li>
                <li className={`nav-item ${pathname?.startsWith('/services/visa') || pathname?.startsWith('/visa/') ? 'active' : ''}`}>
                  <Link href="/services/visa-grid" className="nav-link" onClick={() => setIsMenuOpen(false)}>비자 안내</Link>
                </li>
                <li className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
                  <Link href="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>문의하기</Link>
                </li>
                {/* 로그인 시 마이페이지 표시 */}
                {isAuthenticated && (
                  <li className={`nav-item ${pathname === '/mypage' ? 'active' : ''}`}>
                    <Link href="/mypage" className="nav-link" onClick={() => setIsMenuOpen(false)}>마이페이지</Link>
                  </li>
                )}
                {/* 모바일 메뉴 - 로그인/회원가입 또는 로그아웃 */}
                {isAuthenticated ? (
                  <>
                    <li className="nav-item d-lg-none">
                      <button
                        className="nav-link"
                        onClick={() => {
                          logout()
                          router.push('/')
                          setIsMenuOpen(false)
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          width: '100%',
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                      >
                        로그아웃
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className={`nav-item ${pathname === '/login' ? 'active' : ''} d-lg-none`}>
                      <Link href="/login" className="nav-link" onClick={() => setIsMenuOpen(false)}>로그인</Link>
                    </li>
                    <li className={`nav-item ${pathname === '/signup' ? 'active' : ''} d-lg-none`}>
                      <Link href="/signup" className="nav-link" onClick={() => setIsMenuOpen(false)}>회원가입</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="other-options md-none">
              <div className="option-item">
                <div className="user-account">
                  {isAuthenticated ? (
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '14px', whiteSpace: 'nowrap', color: '#666' }}>
                        {user?.name}님
                      </span>
                      <span style={{ color: '#ddd' }}>|</span>
                      <button
                        onClick={() => {
                          logout()
                          router.push('/')
                        }}
                        style={{ 
                          fontSize: '14px', 
                          whiteSpace: 'nowrap',
                          background: 'none',
                          border: 'none',
                          color: '#666',
                          cursor: 'pointer',
                          padding: 0
                        }}
                      >
                        로그아웃
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Link 
                        href="/login" 
                        style={{ 
                          whiteSpace: 'nowrap',
                          textDecoration: 'none',
                          color: pathname === '/login' ? '#E73E58' : '#666',
                          fontWeight: pathname === '/login' ? 600 : undefined
                        }}
                      >
                        로그인
                      </Link>
                      <span style={{ color: '#ddd' }}>|</span>
                      <Link 
                        href="/signup" 
                        style={{ 
                          whiteSpace: 'nowrap',
                          textDecoration: 'none',
                          color: pathname === '/signup' ? '#E73E58' : '#666',
                          fontWeight: pathname === '/signup' ? 600 : undefined
                        }}
                      >
                        회원가입
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
          <div className="mobile-bar-wrap">
            <div className="mobile-menu d-lg-none">
              <a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(!isMenuOpen); }}>
                <i className="ri-menu-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
