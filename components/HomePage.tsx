'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  faqs,
  testimonials,
  blogs,
} from '@/lib/data/homepage'
import { allProducts, getProductsByTheme, ThemeType } from '@/lib/data/products'
import Slider from './Slider'
import SearchBar from './SearchBar'
import ProductSection from './ProductSection'
import AOSInit from './AOSInit'

declare global {
  interface Window {
    AOS: any
    jQuery: any
    $: any
  }
}

export default function HomePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  useEffect(() => {
    // Testimonial 슬라이더 초기화
    const initTestimonialSlider = () => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn && window.jQuery.fn.owlCarousel) {
        const $ = window.jQuery
        const testimonialSlider = $('.testimonial-slider')

        if (testimonialSlider.length && !testimonialSlider.data('owl.carousel')) {
          testimonialSlider.owlCarousel({
            nav: true,
            loop: true,
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            navText: [
              "<i class='bx bx-chevron-left'></i>",
              "<i class='bx bx-chevron-right'></i>"
            ],
            responsive: {
              0: { items: 1 },
              768: { items: 2, margin: 30 },
              992: { items: 2, margin: 40 },
              1200: { items: 2, margin: 40 }
            }
          })
        }
      }
    }

    // Blog 슬라이더 초기화
    const initBlogSlider = () => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn && window.jQuery.fn.owlCarousel) {
        const $ = window.jQuery
        const blogSlider = $('.blog-slider')

        if (blogSlider.length && !blogSlider.data('owl.carousel')) {
          blogSlider.owlCarousel({
            nav: true,
            loop: true,
            dots: false,
            autoplay: false,
            autoplayHoverPause: true,
            navText: [
              "<i class='bx bx-chevron-left'></i>",
              "<i class='bx bx-chevron-right'></i>"
            ],
            responsive: {
              0: { items: 1, margin: 20 },
              768: { items: 2, margin: 30 },
              992: { items: 3, margin: 30 },
              1200: { items: 3, margin: 40 }
            }
          })
        }
      }
    }

    // jQuery와 Owl Carousel이 로드될 때까지 대기
    const checkAndInit = () => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn && window.jQuery.fn.owlCarousel) {
        initTestimonialSlider()
        initBlogSlider()
      } else {
        setTimeout(checkAndInit, 100)
      }
    }

    checkAndInit()
  }, [])

  return (
    <>
      <AOSInit />

      {/* Hero Slider Section */}
      <Slider />

      {/* Search Bar Section */}
      <section className="search-bar-section">
        <SearchBar />
      </section>

      {/* Popular Products Section */}
      <ProductSection
        title="인기 상품"
        subtitle="추천 여행"
        description="유럽 여행 전문가가 엄선한 인기 상품을 만나보세요. 고객님들의 높은 만족도와 추천을 받은 베스트 상품입니다."
        products={allProducts.filter(p => p.isPopular).sort((a, b) => b.reviewCount - a.reviewCount)}
        maxItems={9}
        showMoreLink="/travel"
        showMoreText="모든 인기 상품 보기"
      />

      {/* Promotional Products Section */}
      <ProductSection
        title="특가 상품"
        subtitle="특별 할인"
        description="지금만의 특별한 가격으로 만나보는 유럽 여행 상품입니다. 한정 기간 특가 혜택을 놓치지 마세요."
        products={allProducts.filter(p => p.isPromotion).sort((a, b) => {
          const discountA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0
          const discountB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0
          return discountB - discountA
        })}
        maxItems={6}
        showMoreLink="/travel?filter=promotion"
        showMoreText="모든 특가 상품 보기"
      />

      {/* Thematic Curation - Romantic Theme */}
      <ProductSection
        title="로맨틱 여행"
        subtitle="테마 큐레이션"
        description="연인과 함께하는 특별한 유럽 여행. 파리의 야경부터 베네치아의 곤돌라까지, 잊지 못할 로맨틱한 추억을 만들어보세요."
        products={getProductsByTheme('로맨틱')}
        maxItems={6}
        showMoreLink="/travel?theme=로맨틱"
        showMoreText="로맨틱 테마 더 보기"
      />

      {/* Thematic Curation - Cultural Theme */}
      <ProductSection
        title="문화 여행"
        subtitle="테마 큐레이션"
        description="유럽의 역사와 문화를 만나는 깊이 있는 여행. 박물관, 궁전, 대성당 등 유럽 문화의 정수를 경험해보세요."
        products={getProductsByTheme('문화')}
        maxItems={6}
        showMoreLink="/travel?theme=문화"
        showMoreText="문화 테마 더 보기"
      />

      {/* Thematic Curation - Nature Theme */}
      <ProductSection
        title="자연 여행"
        subtitle="테마 큐레이션"
        description="유럽의 아름다운 자연을 만끽하는 여행. 알프스의 설원부터 지중해의 푸른 바다까지, 자연과 하나 되는 힐링 여행입니다."
        products={getProductsByTheme('자연')}
        maxItems={6}
        showMoreLink="/travel?theme=자연"
        showMoreText="자연 테마 더 보기"
      />

      {/* FAQ Section */}
      <section className="accordion-area">
        <div className="container pb-60">
          <div className="section-title" data-aos="fade-up" data-aos-duration="1200">
            <h2 style={{ 
              fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
              fontSize: '36px',
              fontWeight: 700,
              marginBottom: '20px'
            }}>유럽 여행 자주 묻는 질문</h2>
            <p>유럽 여행에 관한 궁금한 점을 해결해드립니다. 아래에서 자주 묻는 유럽 여행 질문들을 확인하고 원하는 답변을 찾아보세요.</p>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12">
              <div className="faq-accordion" data-aos="fade-up" data-aos-duration="1600">
                <ul className="accordion">
                  {faqs.slice(0, 5).map((item, index) => (
                    <li key={index} className="accordion-item one mtb-40">
                      <a 
                        className={`accordion-title ${activeAccordion === index ? 'active' : ''}`} 
                        href="#" 
                        onClick={(e) => { 
                          e.preventDefault(); 
                          e.stopPropagation();
                          toggleAccordion(index); 
                        }}
                      >
                        <i className={`bx ${activeAccordion === index ? 'bx-minus' : 'bx-plus'}`}></i>
                        {item.question}
                      </a>
                      <div className={`accordion-content ${activeAccordion === index ? 'show' : ''}`}>
                        <p>{item.answer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="faq-accordion" data-aos="fade-up" data-aos-duration="2000">
                <ul className="accordion">
                  {faqs.slice(5).map((item, index) => (
                    <li key={index} className="accordion-item mtb-40">
                      <a 
                        className={`accordion-title ${activeAccordion === index + 5 ? 'active' : ''}`} 
                        href="#" 
                        onClick={(e) => { 
                          e.preventDefault(); 
                          e.stopPropagation();
                          toggleAccordion(index + 5); 
                        }}
                      >
                        <i className={`bx ${activeAccordion === index + 5 ? 'bx-minus' : 'bx-plus'}`}></i>
                        {item.question}
                      </a>
                      <div className={`accordion-content ${activeAccordion === index + 5 ? 'show' : ''}`}>
                        <p>{item.answer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-area">
        <div className="container pb-60">
          <div className="section-title" data-aos="fade-up" data-aos-duration="1200">
            <span className="top-title">고객 후기</span>
            <h2 style={{ 
              fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
              fontSize: '36px',
              fontWeight: 700,
              marginBottom: '20px'
            }}>유럽 여행 고객님들의 소중한 이야기</h2>
            <p>저희와 함께한 유럽 여행 고객님들의 진심 어린 후기를 만나보세요. 특별한 유럽 여행 경험이 어떻게 만들어지는지 확인해보실 수 있습니다.</p>
          </div>
          <div className="testimonial-slider owl-carousel owl-theme">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-wrap">
                <div className="single-testimonial-box" data-aos="fade-up" data-aos-duration="1200">
                  <Image className="shadow-sm" src={testimonial.image} alt={testimonial.name} width={150} height={150} unoptimized />
                  <p>OurTrip와 함께한 유럽 여행은 정말 특별했습니다. 유럽 전문가의 상담부터 세심한 일정 관리까지, 모든 과정이 완벽했습니다. 다음 유럽 여행도 꼭 함께하고 싶어요!</p>
                  <div className="client-info">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-area">
        <div className="container pb-60">
          <div data-aos="fade-up" data-aos-duration="800" className="section-title">
            <span className="top-title">여행 소식</span>
            <h2 style={{ 
              fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
              fontSize: '36px',
              fontWeight: 700,
              marginBottom: '20px'
            }}>최신 유럽 여행 이야기</h2>
            <p>유럽 여행 정보와 유용한 팁을 제공합니다. 유럽 여행 준비에 도움이 될 최신 소식과 이야기를 만나보세요.</p>
          </div>
          <div className="blog-slider owl-carousel owl-theme">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-wrap">
                <div className="content-blog blog-grid" data-aos="fade-up" data-aos-duration="1600">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href={blog.link} className="d-block">
                        <Image src={blog.image} alt={blog.title} width={400} height={250} unoptimized />
                      </Link>
                      <div className="blog-category">
                        <Link href={`/category/${blog.category.toLowerCase().replace(' ', '-')}`}>{blog.category}</Link>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href={blog.link}>{blog.title}</Link>
                      </h5>
                      <div className="read-more-btn">
                        <Link className="blog-btn" href={blog.link}>
                          자세히 보기<i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" className="btn-area text-center">
            <Link href="/blog-grid" className="btn style1">모든 포스트 보기</Link>
          </div>
        </div>
      </section>
    </>
  )
}