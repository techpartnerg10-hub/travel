'use client'

import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { blogs } from '@/lib/data/homepage'

export default function BlogGridPage() {
  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          {/* Page Header */}
          <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
            <div className="container">
              <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '48px', fontWeight: 700, color: '#354A5E', marginBottom: '20px' }}>
                여행 이야기
              </h1>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
                유럽 여행 정보와 유용한 팁을 제공합니다. 유럽 여행 준비에 도움이 될 최신 소식과 이야기를 만나보세요.
              </p>
            </div>
          </section>

          {/* Blog Grid */}
          <section style={{ padding: '20px 0' }}>
            <div className="container">
              <div className="row g-4">
                {blogs.map((blog, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay={index * 100}>
                    <div className="content-blog blog-grid" style={{
                      background: '#fff',
                      borderRadius: '10px',
                      overflow: 'hidden',
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
                      <div className="inner">
                        <div className="thumbnail">
                          <Link href={`/blog/${blog.slug || blog.link.replace('/', '').replace('/', '-')}`} className="d-block">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              width={400}
                              height={250}
                              style={{ 
                                width: '100%',
                                height: 'auto',
                                borderRadius: '6px',
                                display: 'block'
                              }}
                              unoptimized
                            />
                          </Link>
                          <div className="blog-category">
                            <Link href={`/blog?category=${blog.category.toLowerCase().replace(' ', '-')}`}>
                              {blog.category}
                            </Link>
                          </div>
                        </div>
                        <div className="content" style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <h5 className="title" style={{
                            fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                            fontSize: '20px',
                            fontWeight: 600,
                            marginBottom: '15px',
                            color: '#354A5E',
                            lineHeight: 1.4
                          }}>
                            <Link href={`/blog/${blog.slug || blog.link.replace('/', '').replace('/', '-')}`} style={{ color: 'inherit' }}>
                              {blog.title}
                            </Link>
                          </h5>
                          <p style={{
                            fontSize: '14px',
                            color: '#666',
                            lineHeight: 1.6,
                            marginBottom: '20px',
                            flex: 1
                          }}>
                            {blog.excerpt || '유럽 여행의 다양한 정보와 팁을 제공합니다. 현지 전문가가 직접 작성한 유용한 가이드를 만나보세요.'}
                          </p>
                          <div className="read-more-btn">
                            <Link className="blog-btn" href={`/blog/${blog.slug || blog.link.replace('/', '').replace('/', '-')}`} style={{
                              color: '#E73E58',
                              fontSize: '14px',
                              fontWeight: 600,
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#6C1422'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#E73E58'
                            }}
                            >
                              자세히 보기
                              <i className="bx bx-right-arrow-alt"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}
