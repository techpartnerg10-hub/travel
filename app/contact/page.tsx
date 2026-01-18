'use client'

import Layout from '@/components/Layout'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 문의 처리 (프론트엔드만)
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          {/* Page Header */}
          <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
            <div className="container">
              <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '48px', fontWeight: 700, color: '#354A5E', marginBottom: '20px' }}>
                문의하기
              </h1>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
                유럽 여행에 대한 궁금한 점이나 문의사항이 있으시면 언제든지 연락주세요. 전문 상담사가 친절하게 안내해드립니다.
              </p>
            </div>
          </section>

          {/* Contact Content */}
          <section style={{ padding: '80px 0' }}>
            <div className="container">
              <div className="row">
                {/* Contact Info */}
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div className="contact-info-card" style={{ background: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)', height: '100%' }}>
                    <h2 style={{
                      fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                      fontSize: '28px',
                      fontWeight: 600,
                      marginBottom: '30px',
                      color: '#354A5E'
                    }}>
                      연락처 정보
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: '#E73E58',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <i className="ri-phone-line" style={{ fontSize: '24px', color: '#fff' }}></i>
                        </div>
                        <div>
                          <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '5px', color: '#354A5E' }}>전화</h4>
                          <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>00-0000-0000</p>
                          <p style={{ fontSize: '14px', color: '#999', margin: '5px 0 0 0' }}>평일 09:00 - 18:00</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: '#E73E58',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <i className="ri-mail-line" style={{ fontSize: '24px', color: '#fff' }}></i>
                        </div>
                        <div>
                          <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '5px', color: '#354A5E' }}>이메일</h4>
                          <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>000@000.000</p>
                          <p style={{ fontSize: '14px', color: '#999', margin: '5px 0 0 0' }}>24시간 접수 가능</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: '#E73E58',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <i className="ri-map-pin-line" style={{ fontSize: '24px', color: '#fff' }}></i>
                        </div>
                        <div>
                          <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '5px', color: '#354A5E' }}>주소</h4>
                          <p style={{ fontSize: '16px', color: '#666', margin: 0, lineHeight: 1.6 }}>
                            000시 000구<br />
                            000로 000, 00층
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-8">
                  <div className="contact-form-card" style={{ background: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)' }}>
                    <h2 style={{
                      fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                      fontSize: '28px',
                      fontWeight: 600,
                      marginBottom: '30px',
                      color: '#354A5E'
                    }}>
                      1:1 문의하기
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                            이름 <span style={{ color: '#E73E58' }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            required
                            style={{ width: '100%' }}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                            이메일 <span style={{ color: '#E73E58' }}>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                            style={{ width: '100%' }}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                            전화번호 <span style={{ color: '#E73E58' }}>*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control"
                            required
                            style={{ width: '100%' }}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                            문의 유형 <span style={{ color: '#E73E58' }}>*</span>
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="form-control"
                            required
                            style={{ width: '100%' }}
                          >
                            <option value="">선택하세요</option>
                            <option value="상품문의">상품 문의</option>
                            <option value="예약문의">예약 문의</option>
                            <option value="비자문의">비자 문의</option>
                            <option value="취소환불">취소/환불 문의</option>
                            <option value="기타">기타 문의</option>
                          </select>
                        </div>
                        <div className="col-12 mb-4">
                          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                            문의 내용 <span style={{ color: '#E73E58' }}>*</span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control"
                            required
                            rows={6}
                            style={{ width: '100%', resize: 'vertical' }}
                            placeholder="문의하실 내용을 자세히 입력해주세요."
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn style1" style={{ padding: '15px 40px', fontSize: '16px' }}>
                            <i className="ri-send-plane-line" style={{ marginRight: '8px' }}></i>
                            문의하기
                          </button>
                        </div>
                      </div>
                    </form>
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
