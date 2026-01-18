'use client'

import Layout from '@/components/Layout'
import Link from 'next/link'

export default function VisaGridPage() {
  const visaInfo = [
    {
      country: '프랑스',
      type: '신청비자',
      processingTime: '7-14일',
      validity: '90일',
      description: '프랑스 단기 체류를 위한 신청 비자입니다. 관광, 방문, 비즈니스 목적에 사용 가능합니다.'
    },
    {
      country: '이탈리아',
      type: '신청비자',
      processingTime: '7-14일',
      validity: '90일',
      description: '이탈리아 단기 체류를 위한 신청 비자입니다. 유럽 문화와 역사를 탐험하기 위한 필수 비자입니다.'
    },
    {
      country: '스페인',
      type: '신청비자',
      processingTime: '7-14일',
      validity: '90일',
      description: '스페인 단기 체류를 위한 신청 비자입니다. 지중해의 아름다운 도시들을 방문하실 수 있습니다.'
    },
    {
      country: '독일',
      type: '신청비자',
      processingTime: '7-14일',
      validity: '90일',
      description: '독일 단기 체류를 위한 신청 비자입니다. 비즈니스와 관광 목적으로 이용 가능합니다.'
    },
    {
      country: '영국',
      type: '신청비자',
      processingTime: '14-21일',
      validity: '6개월',
      description: '영국 단기 체류를 위한 신청 비자입니다. 런던과 영국 전역을 여행하실 수 있습니다.'
    },
    {
      country: '그리스',
      type: '신청비자',
      processingTime: '7-14일',
      validity: '90일',
      description: '그리스 단기 체류를 위한 신청 비자입니다. 고대 유적과 아름다운 섬들을 탐험하세요.'
    }
  ]

  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          {/* Page Header */}
          <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
            <div className="container">
              <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '48px', fontWeight: 700, color: '#354A5E', marginBottom: '20px' }}>
                비자 안내
              </h1>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
                유럽 각국 비자 신청에 필요한 정보를 제공합니다. 전문 상담을 통해 빠르고 정확한 비자 발급을 도와드립니다.
              </p>
            </div>
          </section>

          {/* Visa Info Grid */}
          <section style={{ padding: '80px 0' }}>
            <div className="container">
              <div className="row g-4">
                {visaInfo.map((visa, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay={index * 100}>
                    <div className="visa-card" style={{
                      background: '#fff',
                      padding: '30px',
                      borderRadius: '10px',
                      boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = '0 5px 30px 5px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 0 20px 3px rgba(0, 0, 0, 0.05)'
                    }}
                    >
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: '#E73E58',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px'
                      }}>
                        <i className="ri-passport-line" style={{ fontSize: '30px', color: '#fff' }}></i>
                      </div>
                      <h3 style={{
                        fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                        fontSize: '24px',
                        fontWeight: 600,
                        marginBottom: '15px',
                        color: '#354A5E'
                      }}>
                        {visa.country} 비자
                      </h3>
                      <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px' }}>
                          <span style={{ color: '#666' }}>비자 유형:</span>
                          <span style={{ color: '#354A5E', fontWeight: 600 }}>{visa.type}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px' }}>
                          <span style={{ color: '#666' }}>처리 기간:</span>
                          <span style={{ color: '#354A5E', fontWeight: 600 }}>{visa.processingTime}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                          <span style={{ color: '#666' }}>유효 기간:</span>
                          <span style={{ color: '#354A5E', fontWeight: 600 }}>{visa.validity}</span>
                        </div>
                      </div>
                      <p style={{
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: '#666',
                        marginBottom: '20px',
                        flex: 1
                      }}>
                        {visa.description}
                      </p>
                      <Link href="/contact" className="btn style1" style={{ width: '100%', padding: '12px 20px', textAlign: 'center' }}>
                        비자 상담 신청
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div className="visa-info-box" style={{
                    background: '#f9fafa',
                    padding: '40px',
                    borderRadius: '10px',
                    marginTop: '60px'
                  }}>
                    <h2 style={{
                      fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                      fontSize: '28px',
                      fontWeight: 600,
                      marginBottom: '20px',
                      color: '#354A5E'
                    }}>
                      비자 신청 안내
                    </h2>
                    <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#666' }}>
                      <p style={{ marginBottom: '15px' }}>
                        유럽 여행을 계획하시는 고객님들을 위해 각 국가별 비자 신청 절차와 필요 서류를 안내해드립니다.
                      </p>
                      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}>비자 신청은 출발일 최소 2주 전에 완료하시는 것을 권장합니다.</li>
                        <li style={{ marginBottom: '10px' }}>필요 서류는 국가별로 상이하므로 사전 상담을 받으시기 바랍니다.</li>
                        <li style={{ marginBottom: '10px' }}>비자 발급 기간은 국가와 시기에 따라 달라질 수 있습니다.</li>
                        <li>신청비와 처리비는 국가별로 다르며, 상담 시 안내해드립니다.</li>
                      </ul>
                      <Link href="/contact" className="btn style1" style={{ padding: '12px 30px' }}>
                        1:1 비자 상담 신청
                      </Link>
                    </div>
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
