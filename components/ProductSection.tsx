'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allProducts, TravelProduct } from '@/lib/data/products'

interface ProductSectionProps {
  title: string
  subtitle?: string
  description?: string
  products: TravelProduct[]
  maxItems?: number
  showMoreLink?: string
  showMoreText?: string
}

export default function ProductSection({ 
  title, 
  subtitle, 
  description, 
  products, 
  maxItems = 12,
  showMoreLink = '/travel',
  showMoreText = '더 많은 상품 보기'
}: ProductSectionProps) {
  const displayedProducts = products.slice(0, maxItems)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price) + '원'
  }

  const renderStars = (rating: number) => {
    return (
      <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            style={{
              color: star <= rating ? '#ffc107' : '#ddd',
              fontSize: '12px'
            }}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="product-section" style={{ padding: '80px 0' }}>
      <div className="container">
        <div data-aos="fade-up" data-aos-duration="1200" className="section-title" style={{ marginBottom: '50px' }}>
          {subtitle && <span className="top-title">{subtitle}</span>}
          <h2 style={{ 
            fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
            fontSize: '36px',
            fontWeight: 700,
            marginBottom: '20px'
          }}>
            {title}
          </h2>
          {description && <p style={{ fontSize: '16px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>{description}</p>}
        </div>

        <div className="row justify-content-center g-4">
          {displayedProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="fade-up" 
              data-aos-duration="1200" 
              data-aos-delay={index * 100}
            >
              <div className="product-card" style={{
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
                <Link href={`/travel/${product.slug}`}>
                  <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                    <Image
                      src={product.thumbnail}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                    {product.badge && (
                      <span style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: product.badge === '특가' ? '#E73E58' : product.badge === '신규' ? '#28a745' : '#ffc107',
                        color: '#fff',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600
                      }}>
                        {product.badge}
                      </span>
                    )}
                    {product.isPromotion && product.originalPrice && (
                      <span style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        background: 'rgba(231, 62, 88, 0.9)',
                        color: '#fff',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600
                      }}>
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% 할인
                      </span>
                    )}
                  </div>
                </Link>
                
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span style={{
                      fontSize: '12px',
                      color: '#E73E58',
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}>
                      {product.type === 'tour' ? '투어' : product.type === 'hotel' ? '호텔' : product.type === 'resort' ? '리조트' : product.type === 'flight' ? '항공권' : product.type === 'car' ? '렌터카' : '크루즈'}
                    </span>
                  </div>
                  
                  <Link href={`/travel/${product.slug}`}>
                    <h3 style={{
                      fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                      fontSize: '20px',
                      fontWeight: 600,
                      marginBottom: '10px',
                      color: '#354A5E',
                      lineHeight: 1.4,
                      minHeight: '56px'
                    }}>
                      {product.name}
                    </h3>
                  </Link>

                  <div className="product-location-info" style={{ marginBottom: '15px', fontSize: '14px', color: '#666' }}>
                    <i className="ri-map-pin-line" style={{ marginRight: '5px' }}></i>
                    {product.city ? `${product.city}, ` : ''}{product.country}
                    {product.duration && (
                      <span style={{ marginLeft: '10px' }}>
                        <i className="ri-calendar-line" style={{ marginRight: '5px' }}></i>
                        {product.duration}일
                      </span>
                    )}
                  </div>

                  {product.shortDescription && (
                    <p style={{
                      fontSize: '14px',
                      color: '#666',
                      lineHeight: 1.6,
                      marginBottom: '15px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {product.shortDescription}
                    </p>
                  )}

                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ marginBottom: '15px' }}>
                      {renderStars(product.rating)}
                      <span style={{ marginLeft: '10px', fontSize: '14px', color: '#999' }}>
                        ({product.reviewCount})
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        {product.originalPrice && (
                          <div style={{ fontSize: '14px', color: '#999', textDecoration: 'line-through', marginBottom: '5px' }}>
                            {formatPrice(product.originalPrice)}
                          </div>
                        )}
                        <div style={{ fontSize: '22px', fontWeight: 700, color: '#E73E58' }}>
                          {formatPrice(product.price)}
                        </div>
                      </div>
                      <Link href={`/travel/${product.slug}`} className="btn style1" style={{ padding: '10px 20px', fontSize: '14px' }}>
                        자세히 보기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showMoreLink && products.length > maxItems && (
          <div data-aos="fade-up" data-aos-duration="1200" className="btn-area text-center" style={{ marginTop: '40px' }}>
            <Link href={showMoreLink} className="btn style5">
              {showMoreText}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
