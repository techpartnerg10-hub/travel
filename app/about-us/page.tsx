'use client'

import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsPage() {
  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          {/* Page Header */}
          <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
            <div className="container">
              <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '48px', fontWeight: 700, color: '#354A5E', marginBottom: '20px' }}>
                회사소개
              </h1>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
                유럽 여행 전문 여행사로서 고객님의 특별한 여행 경험을 만들어갑니다.
              </p>
            </div>
          </section>

          {/* About Content */}
          <section className="about-us-section" style={{ padding: '80px 0' }}>
            <div className="container">
              <div className="row align-items-center mb-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
                      alt="회사 소개"
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h2 className="about-section-title" style={{ 
                    fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", 
                    fontSize: '36px', 
                    fontWeight: 700,
                    marginBottom: '25px'
                  }}>
                    유럽 여행의 전문가
                  </h2>
                  <p className="about-section-text" style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                    20년 이상의 경험을 바탕으로 유럽 전역의 다양한 여행지를 고객님께 소개하고 있습니다. 프랑스, 이탈리아, 스페인, 독일, 영국 등 유럽의 아름다운 도시와 자연을 전문 가이드와 함께 만나보실 수 있습니다.
                  </p>
                  <p className="about-section-text" style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '30px' }}>
                    저희는 단순한 여행 상품 판매가 아닌, 고객님만의 특별한 추억을 만들어드리는 것을 목표로 합니다. 모든 여행 상품은 현지 전문가가 직접 검증하고, 고객 만족도를 최우선으로 고려하여 설계됩니다.
                  </p>
                  <div style={{ textAlign: 'left' }} className="about-button-wrapper">
                    <Link href="/travel" className="btn style1" style={{ padding: '15px 30px' }}>
                      여행 상품 둘러보기
                    </Link>
                  </div>
                </div>
              </div>

              {/* Values Section */}
              <div className="row mt-5">
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="800">
                  <div className="value-card" style={{ textAlign: 'center', padding: '40px 30px', borderRadius: '10px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)', height: '100%' }}>
                    <div style={{ width: '80px', height: '80px', background: '#E73E58', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px' }}>
                      <i className="ri-award-line" style={{ fontSize: '40px', color: '#fff' }}></i>
                    </div>
                    <h3 className="value-card-title" style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>
                      전문성
                    </h3>
                    <p className="value-card-text" style={{ fontSize: '16px', lineHeight: 1.8 }}>
                      유럽 여행 전문가들이 직접 설계하고 검증한 상품만을 제공합니다.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                  <div className="value-card" style={{ textAlign: 'center', padding: '40px 30px', borderRadius: '10px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)', height: '100%' }}>
                    <div style={{ width: '80px', height: '80px', background: '#E73E58', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px' }}>
                      <i className="ri-heart-line" style={{ fontSize: '40px', color: '#fff' }}></i>
                    </div>
                    <h3 className="value-card-title" style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>
                      고객 만족
                    </h3>
                    <p className="value-card-text" style={{ fontSize: '16px', lineHeight: 1.8 }}>
                      고객님의 만족을 최우선으로 생각하며, 세심한 서비스를 제공합니다.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                  <div className="value-card" style={{ textAlign: 'center', padding: '40px 30px', borderRadius: '10px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)', height: '100%' }}>
                    <div style={{ width: '80px', height: '80px', background: '#E73E58', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px' }}>
                      <i className="ri-shield-check-line" style={{ fontSize: '40px', color: '#fff' }}></i>
                    </div>
                    <h3 className="value-card-title" style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>
                      안전성
                    </h3>
                    <p className="value-card-text" style={{ fontSize: '16px', lineHeight: 1.8 }}>
                      모든 여행 상품에 여행자 보험이 포함되어 있어 안심하고 여행하실 수 있습니다.
                    </p>
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
