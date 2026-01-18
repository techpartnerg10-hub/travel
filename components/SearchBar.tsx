'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// 인기 지역 목록
const popularDestinations = [
  '파리', '로마', '런던', '바르셀로나', '암스테르담', 
  '베네치아', '마드리드', '비엔나', '베를린', '프라하',
  '부다페스트', '취리히', '아테네', '리스본'
]

export default function SearchBar() {
  const router = useRouter()
  const [destination, setDestination] = useState('')
  const [dateRange, setDateRange] = useState('')
  const [travelers, setTravelers] = useState('')
  const [showPopularDestinations, setShowPopularDestinations] = useState(false)
  const destinationRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setShowPopularDestinations(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // 인원 선택 select 초기 색상 및 다크 모드 변경 시 색상 설정
  useEffect(() => {
    const updateSelectColor = () => {
      if (selectRef.current) {
        const isDarkMode = document.documentElement.classList.contains('theme-dark')
        if (!travelers) {
          selectRef.current.style.color = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : '#495057'
        } else {
          selectRef.current.style.color = isDarkMode ? '#fff' : '#000'
        }
      }
    }

    updateSelectColor()

    // 다크 모드 변경 감지
    const observer = new MutationObserver(updateSelectColor)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => {
      observer.disconnect()
    }
  }, [travelers])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // 검색 파라미터를 URL에 추가하여 /travel 페이지로 이동
    const params = new URLSearchParams()
    if (destination) params.append('destination', destination)
    if (dateRange) params.append('dates', dateRange)
    if (travelers) params.append('travelers', travelers)
    
    router.push(`/travel?${params.toString()}`)
  }

  const handleDestinationSelect = (dest: string) => {
    setDestination(dest)
    setShowPopularDestinations(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <section className="search-bar-section" style={{
      padding: '60px 0',
      background: 'linear-gradient(135deg, #f9fafa 0%, #ffffff 100%)',
      position: 'relative',
      marginTop: '-80px',
      zIndex: 10
    }}>
      <div className="container">
        <div className="search-bar-container" data-aos="fade-up" data-aos-duration="1200" style={{
          background: '#fff',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <form onSubmit={handleSearch} className="search-bar-form">
            <div className="row g-3 align-items-end">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="form-group" style={{ position: 'relative' }} ref={destinationRef}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#354A5E',
                    marginBottom: '8px',
                    fontFamily: "'Noto Sans KR', sans-serif"
                  }}>
                    목적지
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="어디로 가시나요? (예: 파리, 로마)"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="form-control"
                      style={{
                        height: '56px',
                        paddingLeft: '50px',
                        paddingRight: '20px',
                        borderRadius: '12px',
                        border: '2px solid #eaedff',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        fontFamily: "'Noto Sans KR', sans-serif"
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#E73E58'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(231, 62, 88, 0.1)'
                        setShowPopularDestinations(true)
                      }}
                      onBlur={(e) => {
                        // 드롭다운 클릭을 감지하기 위해 약간의 지연
                        setTimeout(() => {
                          if (inputRef.current) {
                            inputRef.current.style.borderColor = '#eaedff'
                            inputRef.current.style.boxShadow = 'none'
                          }
                        }, 200)
                      }}
                    />
                    <i className="ri-map-pin-line" style={{
                      position: 'absolute',
                      left: '18px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '20px',
                      color: '#E73E58',
                      pointerEvents: 'none',
                      zIndex: 1
                    }}></i>
                    
                    {/* 인기 지역 드롭다운 */}
                    {showPopularDestinations && (
                      <div className="popular-destinations-dropdown" style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: '#fff',
                        borderRadius: '12px',
                        border: '2px solid #eaedff',
                        borderTop: 'none',
                        marginTop: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000,
                        maxHeight: '200px',
                        overflowY: 'auto'
                      }}>
                        <div style={{
                          padding: '12px 16px',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#999',
                          textTransform: 'uppercase',
                          borderBottom: '1px solid #f0f0f0'
                        }}>
                          인기 지역
                        </div>
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px',
                          padding: '12px'
                        }}>
                          {popularDestinations.map((dest) => (
                            <button
                              key={dest}
                              type="button"
                              onClick={() => handleDestinationSelect(dest)}
                              onMouseDown={(e) => e.preventDefault()}
                              style={{
                                padding: '8px 16px',
                                fontSize: '14px',
                                color: '#354A5E',
                                background: '#f9fafa',
                                border: '1px solid #eaedff',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                fontFamily: "'Noto Sans KR', sans-serif",
                                fontWeight: 500
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#E73E58'
                                e.currentTarget.style.color = '#fff'
                                e.currentTarget.style.borderColor = '#E73E58'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#f9fafa'
                                e.currentTarget.style.color = '#354A5E'
                                e.currentTarget.style.borderColor = '#eaedff'
                              }}
                            >
                              {dest}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="form-group" style={{ position: 'relative' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#354A5E',
                    marginBottom: '8px',
                    fontFamily: "'Noto Sans KR', sans-serif"
                  }}>
                    출발일
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="date"
                      value={dateRange}
                      onChange={(e) => {
                        setDateRange(e.target.value)
                        // 값이 변경되면 색상 업데이트
                        if (e.target.value) {
                          e.currentTarget.style.color = '#000'
                        } else {
                          e.currentTarget.style.color = '#495057'
                        }
                      }}
                      className="form-control search-date-input"
                      style={{
                        height: '56px',
                        paddingLeft: '50px',
                        paddingRight: '20px',
                        borderRadius: '12px',
                        border: '2px solid #eaedff',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        fontFamily: "'Noto Sans KR', sans-serif",
                        color: dateRange ? '#000' : '#495057'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#E73E58'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(231, 62, 88, 0.1)'
                        if (!dateRange) {
                          e.currentTarget.style.color = '#495057'
                        }
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#eaedff'
                        e.currentTarget.style.boxShadow = 'none'
                        if (!dateRange) {
                          e.currentTarget.style.color = '#495057'
                        }
                      }}
                    />
                    <i className="ri-calendar-line" style={{
                      position: 'absolute',
                      left: '18px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '20px',
                      color: '#E73E58',
                      pointerEvents: 'none'
                    }}></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="form-group" style={{ position: 'relative' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#354A5E',
                    marginBottom: '8px',
                    fontFamily: "'Noto Sans KR', sans-serif"
                  }}>
                    인원
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      ref={selectRef}
                      value={travelers}
                      onChange={(e) => {
                        setTravelers(e.target.value)
                        // 다크 모드 체크
                        const isDarkMode = document.documentElement.classList.contains('theme-dark')
                        // 값이 변경되면 색상 업데이트
                        if (e.target.value) {
                          e.currentTarget.style.color = isDarkMode ? '#fff' : '#000'
                        } else {
                          e.currentTarget.style.color = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : '#495057'
                        }
                      }}
                      className="form-control search-select-input"
                      style={{
                        height: '56px',
                        paddingLeft: '50px',
                        paddingRight: '20px',
                        borderRadius: '12px',
                        border: '2px solid #eaedff',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        fontFamily: "'Noto Sans KR', sans-serif",
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        backgroundImage: 'none',
                        cursor: 'pointer',
                        color: travelers ? undefined : (typeof window !== 'undefined' && document.documentElement.classList.contains('theme-dark') ? 'rgba(255, 255, 255, 0.5)' : '#495057')
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#E73E58'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(231, 62, 88, 0.1)'
                        const isDarkMode = document.documentElement.classList.contains('theme-dark')
                        if (!travelers) {
                          e.currentTarget.style.color = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : '#495057'
                        }
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#eaedff'
                        e.currentTarget.style.boxShadow = 'none'
                        const isDarkMode = document.documentElement.classList.contains('theme-dark')
                        if (!travelers) {
                          e.currentTarget.style.color = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : '#495057'
                        }
                      }}
                    >
                      <option value="" style={{ color: '#495057' }}>인원 선택</option>
                      <option value="1" style={{ color: '#000' }}>1명</option>
                      <option value="2" style={{ color: '#000' }}>2명</option>
                      <option value="3" style={{ color: '#000' }}>3명</option>
                      <option value="4" style={{ color: '#000' }}>4명</option>
                      <option value="5+" style={{ color: '#000' }}>5명 이상</option>
                    </select>
                    <i className="ri-user-line" style={{
                      position: 'absolute',
                      left: '18px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '20px',
                      color: '#E73E58',
                      pointerEvents: 'none'
                    }}></i>
                    <i className="ri-arrow-down-s-line" style={{
                      position: 'absolute',
                      right: '18px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '18px',
                      color: '#999',
                      pointerEvents: 'none'
                    }}></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <button 
                  type="submit" 
                  className="btn style1 w-90"
                  style={{
                    height: '56px',
                    fontSize: '16px',
                    fontFamily: "'Noto Sans KR', sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="ri-search-line" style={{ marginRight: '8px', fontSize: '18px' }}></i>
                  여행 검색
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .search-bar-form input[type="date"].form-control,
        .search-bar-form input.search-date-input {
          color: #495057 !important;
        }
        
        .search-bar-form input[type="date"].form-control:not([value=""]),
        .search-bar-form input.search-date-input:not([value=""]) {
          color: #000 !important;
        }
        
        .search-bar-form input[type="date"].form-control::-webkit-calendar-picker-indicator {
          opacity: 0.6;
        }
        
        .search-bar-form select.form-control,
        .search-bar-form select.search-select-input {
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          appearance: none !important;
          background-image: none !important;
        }
        
        .search-bar-form select.form-control::-ms-expand,
        .search-bar-form select.search-select-input::-ms-expand {
          display: none !important;
        }
        
        /* 라이트 모드: select가 비어있을 때 placeholder 색상 */
        .search-bar-form select.form-control[value=""],
        .search-bar-form select.search-select-input[value=""] {
          color: #495057 !important;
        }
        
        .search-bar-form select.form-control option[value=""],
        .search-bar-form select.search-select-input option[value=""] {
          color: #495057 !important;
        }
        
        .search-bar-form select.form-control option:not([value=""]),
        .search-bar-form select.search-select-input option:not([value=""]) {
          color: #000 !important;
        }
        
        /* 다크 모드: select가 비어있을 때 placeholder 색상 */
        .theme-dark .search-bar-form select.form-control[value=""],
        .theme-dark .search-bar-form select.search-select-input[value=""] {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        
        .theme-dark .search-bar-form select.form-control:not([value=""]),
        .theme-dark .search-bar-form select.search-select-input:not([value=""]) {
          color: #fff !important;
        }
        
        .theme-dark .search-bar-form select.form-control option[value=""],
        .theme-dark .search-bar-form select.search-select-input option[value=""] {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        
        .theme-dark .search-bar-form select.form-control option:not([value=""]),
        .theme-dark .search-bar-form select.search-select-input option:not([value=""]) {
          color: #fff !important;
        }
        
        @media (max-width: 991px) {
          .search-bar-container {
            padding: 30px 20px !important;
            margin: 0 15px;
          }
        }
        
        @media (max-width: 767px) {
          .search-bar-section {
            padding: 40px 0 !important;
            margin-top: -60px !important;
          }
          
          .search-bar-container {
            padding: 25px 15px !important;
            border-radius: 15px !important;
          }
          
          .search-bar-form .form-group label {
            font-size: 13px !important;
          }
          
          .search-bar-form .form-control {
            height: 50px !important;
            font-size: 14px !important;
          }
          
          .search-bar-form button.btn {
            height: 50px !important;
            font-size: 15px !important;
          }
        }
      `}} />
    </section>
  )
}
