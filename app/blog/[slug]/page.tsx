import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { blogs } from '@/lib/data/homepage'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

function getBlogBySlug(slug: string) {
  return blogs.find(blog => blog.slug === slug)
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  
  if (!blog) {
    return {
      title: '블로그를 찾을 수 없습니다 | OurTrip',
    }
  }

  return {
    title: `${blog.title} | OurTrip`,
    description: blog.excerpt || blog.title,
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          {/* Page Header */}
          <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
            <div className="container">
              <div style={{ marginBottom: '20px' }}>
                <Link href="/blog-grid" style={{ 
                  color: '#E73E58', 
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <i className="bx bx-left-arrow-alt"></i>
                  여행 이야기 목록으로
                </Link>
              </div>
              <div style={{ 
                display: 'inline-block', 
                padding: '6px 16px', 
                background: '#E73E58', 
                color: '#fff', 
                borderRadius: '20px', 
                fontSize: '14px', 
                fontWeight: 600,
                marginBottom: '20px'
              }}>
                {blog.category}
              </div>
              <h1 style={{ 
                fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", 
                fontSize: '48px', 
                fontWeight: 700, 
                color: '#354A5E', 
                marginBottom: '20px',
                lineHeight: 1.3
              }}>
                {blog.title}
              </h1>
              {(blog.date || blog.author) && (
                <div style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#666'
                }}>
                  {blog.date && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <i className="bx bx-calendar"></i>
                      {blog.date}
                    </span>
                  )}
                  {blog.author && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <i className="bx bx-user"></i>
                      {blog.author}
                    </span>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Blog Content */}
          <section style={{ padding: '60px 0' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <article className="blog-detail-content">
                    {/* Featured Image */}
                    <div style={{ marginBottom: '40px', borderRadius: '12px', overflow: 'hidden' }}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1200}
                        height={600}
                        style={{ 
                          width: '100%',
                          height: 'auto',
                          display: 'block'
                        }}
                        unoptimized
                      />
                    </div>

                    {/* Excerpt */}
                    {blog.excerpt && (
                      <div className="blog-excerpt" style={{
                        padding: '20px',
                        background: '#f9fafa',
                        borderRadius: '12px',
                        marginBottom: '40px',
                        borderLeft: '4px solid #E73E58',
                        fontSize: '18px',
                        color: '#354A5E',
                        fontStyle: 'italic',
                        lineHeight: 1.6
                      }}>
                        {blog.excerpt}
                      </div>
                    )}

                    {/* Content */}
                    {blog.content && (
                      <div 
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                        style={{
                          fontSize: '16px',
                          lineHeight: 1.8,
                          color: '#354A5E'
                        }}
                      />
                    )}

                    {/* Back to List */}
                    <div style={{ 
                      marginTop: '60px', 
                      paddingTop: '40px',
                      borderTop: '1px solid #eee'
                    }}>
                      <Link href="/blog-grid" className="btn style4" style={{ 
                        padding: '12px 30px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <i className="bx bx-left-arrow-alt"></i>
                        목록으로 돌아가기
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          <section style={{ padding: '60px 0', background: '#f9fafa' }}>
            <div className="container">
              <h2 style={{ 
                fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                fontSize: '36px',
                fontWeight: 700,
                color: '#354A5E',
                marginBottom: '40px',
                textAlign: 'center'
              }}>
                다른 여행 이야기
              </h2>
              <div className="row g-4">
                {blogs.filter(b => b.slug !== blog.slug).slice(0, 3).map((relatedBlog, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-12">
                    <Link href={`/blog/${relatedBlog.slug}`} style={{ textDecoration: 'none' }}>
                      <div className="content-blog blog-grid related-blog-card" style={{
                        background: '#fff',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <div className="inner">
                          <div className="thumbnail">
                            <div style={{ position: 'relative', width: '100%', paddingTop: '60%' }}>
                              <Image
                                src={relatedBlog.image}
                                alt={relatedBlog.title}
                                fill
                                style={{ 
                                  objectFit: 'cover'
                                }}
                                unoptimized
                              />
                            </div>
                            <div className="blog-category">
                              <span>{relatedBlog.category}</span>
                            </div>
                          </div>
                          <div className="content" style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h5 className="title" style={{
                              fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                              fontSize: '18px',
                              fontWeight: 600,
                              marginBottom: '15px',
                              color: '#354A5E',
                              lineHeight: 1.4
                            }}>
                              {relatedBlog.title}
                            </h5>
                            {relatedBlog.excerpt && (
                              <p style={{
                                fontSize: '14px',
                                color: '#666',
                                lineHeight: 1.6,
                                marginBottom: '20px',
                                flex: 1
                              }}>
                                {relatedBlog.excerpt.substring(0, 100)}...
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .blog-content h2 {
          font-family: 'Gowun Batang', 'Nanum Myeongjo', serif;
          font-size: 28px;
          font-weight: 700;
          color: #354A5E;
          margin: 40px 0 20px;
          line-height: 1.4;
        }

        .blog-content h3 {
          font-family: 'Gowun Batang', 'Nanum Myeongjo', serif;
          font-size: 22px;
          font-weight: 600;
          color: #354A5E;
          margin: 30px 0 15px;
          line-height: 1.4;
        }

        .blog-content p {
          margin-bottom: 20px;
          line-height: 1.8;
        }

        .blog-content ul, .blog-content ol {
          margin: 20px 0;
          padding-left: 30px;
        }

        .blog-content li {
          margin-bottom: 10px;
          line-height: 1.8;
        }

        .blog-content strong {
          font-weight: 600;
          color: #354A5E;
        }

        .related-blog-card {
          cursor: pointer;
        }

        .related-blog-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.1) !important;
        }

        @media (max-width: 767px) {
          .page-title-section h1 {
            font-size: 32px !important;
          }
          
          .blog-content h2 {
            font-size: 24px;
          }
          
          .blog-content h3 {
            font-size: 20px;
          }
        }
      `}} />
    </Layout>
  )
}
