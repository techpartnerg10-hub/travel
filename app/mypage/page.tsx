'use client'

import Layout from '@/components/Layout'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MyPage() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'wishlist' | 'inquiries' | 'profile'>('bookings')

  // 더미 데이터
  const bookings = [
    {
      id: '1',
      productName: '프랑스 파리 3일 패키지',
      bookingDate: '2024-01-15',
      travelDate: '2024-03-20',
      status: '확정',
      price: 2580000,
      image: '/uploads/tour-1.jpg'
    },
    {
      id: '2',
      productName: '리츠 파리 - 샹젤리제 최고급 호텔',
      bookingDate: '2024-01-10',
      travelDate: '2024-02-15',
      status: '대기',
      price: 450000,
      image: '/uploads/hotel-1.jpg'
    }
  ]

  const inquiries = [
    {
      id: '1',
      title: '파리 여행 일정 문의',
      date: '2024-01-20',
      status: '답변완료',
      content: '3월 파리 여행 일정에 대해 문의드립니다.'
    },
    {
      id: '2',
      title: '호텔 예약 변경 요청',
      date: '2024-01-18',
      status: '처리중',
      content: '예약한 호텔 날짜를 변경하고 싶습니다.'
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price) + '원'
  }

  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          {/* Page Header */}
          <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
            <div className="container">
              <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '48px', fontWeight: 700, color: '#354A5E', marginBottom: '20px' }}>
                마이페이지
              </h1>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
                예약 내역, 위시리스트, 문의 내역 등 나의 여행 정보를 한눈에 확인하고 관리하실 수 있습니다.
              </p>
            </div>
          </section>

          {/* My Page Content */}
          <section style={{ padding: '60px 0' }}>
            <div className="container">
              <div className="row">
                {/* Sidebar - Desktop */}
                <div className="col-lg-3 d-none d-lg-block">
                  <div className="mypage-sidebar" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                      <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#E73E58', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '36px', fontWeight: 700 }}>
                        김
                      </div>
                      <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#354A5E' }}>김여행</h3>
                      <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>000@000.000</p>
                    </div>
                    <nav className="mypage-sidebar-nav" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[
                        { id: 'bookings', label: '예약 내역', icon: 'ri-calendar-check-line' },
                        { id: 'wishlist', label: '위시리스트', icon: 'ri-heart-line' },
                        { id: 'inquiries', label: '1:1 문의', icon: 'ri-customer-service-line' },
                        { id: 'profile', label: '프로필 설정', icon: 'ri-user-settings-line' }
                      ].map(tab => (
                        <button
                          key={tab.id}
                          className={`mypage-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
                          onClick={() => setActiveTab(tab.id as any)}
                          style={{
                            padding: '15px 20px',
                            background: activeTab === tab.id ? '#E73E58' : 'transparent',
                            color: activeTab === tab.id ? '#fff' : '#666',
                            border: 'none',
                            borderRadius: '8px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontSize: '16px',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                          }}
                        >
                          <i className={tab.icon} style={{ fontSize: '20px' }}></i>
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-lg-9">
                  {/* Mobile Tabs */}
                  <div className="d-lg-none mb-4 mypage-mobile-tabs">
                    <div className="mypage-tab-list" style={{ display: 'flex', gap: '0', borderBottom: '2px solid #eee', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                      {[
                        { id: 'bookings', label: '예약 내역' },
                        { id: 'wishlist', label: '위시리스트' },
                        { id: 'inquiries', label: '1:1 문의' },
                        { id: 'profile', label: '프로필 설정' }
                      ].map(tab => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id as any)}
                          className={`mypage-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                          style={{
                            background: 'transparent',
                            color: activeTab === tab.id ? '#E73E58' : '#666',
                            border: 'none',
                            borderBottom: activeTab === tab.id ? '2px solid #E73E58' : '2px solid transparent',
                            borderRadius: '0',
                            padding: '12px 16px',
                            whiteSpace: 'nowrap',
                            fontSize: '14px',
                            fontWeight: activeTab === tab.id ? 600 : 400,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            marginBottom: '-2px'
                          }}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="mypage-content" style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)' }}>
                    {activeTab === 'bookings' && (
                      <div>
                        <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', marginBottom: '30px', color: '#354A5E' }}>
                          예약 내역
                        </h2>
                        {bookings.length > 0 ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {bookings.map(booking => (
                              <div
                                key={booking.id}
                                className="booking-card"
                                style={{
                                  border: '1px solid #eee',
                                  borderRadius: '10px',
                                  padding: '20px',
                                  display: 'flex',
                                  gap: '20px',
                                }}
                              >
                                <div className="booking-image" style={{ position: 'relative', width: '120px', height: '120px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                                  <Image src={booking.image} alt={booking.productName} fill style={{ objectFit: 'cover' }} unoptimized />
                                </div>
                                <div className="booking-info" style={{ flex: 1 }}>
                                  <h3 className="booking-title" style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px', color: '#354A5E' }}>
                                    {booking.productName}
                                  </h3>
                                  <div className="booking-details" style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                                    <p style={{ marginBottom: 0 }}>예약일: {booking.bookingDate}</p>
                                    <p style={{ marginBottom: 0 }}>여행일: {booking.travelDate}</p>
                                    <p style={{ marginBottom: 0 }}>상태: <span style={{ color: booking.status === '확정' ? '#28a745' : '#ffc107' }}>{booking.status}</span></p>
                                  </div>
                                  <div className="booking-price" style={{ fontSize: '20px', fontWeight: 700, color: '#E73E58' }}>
                                    {formatPrice(booking.price)}
                                  </div>
                                </div>
                                <div className="booking-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                  <button className="btn style1" style={{ padding: '10px 20px', fontSize: '14px' }}>
                                    바우처 출력
                                  </button>
                                  <button className="btn style4" style={{ padding: '10px 20px', fontSize: '14px' }}>
                                    상세보기
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                            <p style={{ fontSize: '18px', color: '#999' }}>예약 내역이 없습니다.</p>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'wishlist' && (
                      <div>
                        <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', marginBottom: '30px', color: '#354A5E' }}>
                          위시리스트
                        </h2>
                        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                          <i className="ri-heart-line" style={{ fontSize: '64px', color: '#ddd', marginBottom: '20px' }}></i>
                          <p style={{ fontSize: '18px', color: '#999' }}>위시리스트에 저장한 상품이 없습니다.</p>
                          <Link href="/travel" className="btn style1" style={{ marginTop: '20px' }}>
                            상품 둘러보기
                          </Link>
                        </div>
                      </div>
                    )}

                    {activeTab === 'inquiries' && (
                      <div>
                        <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', marginBottom: '30px', color: '#354A5E' }}>
                          1:1 문의
                        </h2>
                        <div style={{ marginBottom: '20px', textAlign: 'right' }}>
                          <Link href="/inquiry" className="btn style1">
                            <i className="ri-add-line" style={{ marginRight: '8px' }}></i>
                            새 문의하기
                          </Link>
                        </div>
                        {inquiries.length > 0 ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {inquiries.map(inquiry => (
                              <div
                                key={inquiry.id}
                                style={{
                                  border: '1px solid #eee',
                                  borderRadius: '10px',
                                  padding: '20px',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = '#E73E58'
                                  e.currentTarget.style.boxShadow = '0 0 10px rgba(231, 62, 88, 0.1)'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = '#eee'
                                  e.currentTarget.style.boxShadow = 'none'
                                }}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#354A5E' }}>
                                    {inquiry.title}
                                  </h3>
                                  <span style={{
                                    padding: '5px 12px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    background: inquiry.status === '답변완료' ? '#28a745' : '#ffc107',
                                    color: '#fff'
                                  }}>
                                    {inquiry.status}
                                  </span>
                                </div>
                                <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                                  {inquiry.content}
                                </p>
                                <p style={{ fontSize: '12px', color: '#999' }}>
                                  {inquiry.date}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                            <p style={{ fontSize: '18px', color: '#999' }}>문의 내역이 없습니다.</p>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'profile' && (
                      <div>
                        <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', marginBottom: '30px', color: '#354A5E' }}>
                          프로필 설정
                        </h2>
                        <form style={{ maxWidth: '600px' }}>
                          <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                              이름
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="김여행"
                              style={{ width: '100%' }}
                            />
                          </div>
                          <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                              이메일
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              defaultValue="000@000.000"
                              style={{ width: '100%' }}
                            />
                          </div>
                          <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                              전화번호
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              defaultValue="000-0000-0000"
                              style={{ width: '100%' }}
                            />
                          </div>
                          <button type="submit" className="btn style1" style={{ padding: '12px 30px' }}>
                            저장하기
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}
