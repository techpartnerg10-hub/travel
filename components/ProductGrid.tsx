'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allProducts, TravelProduct, ProductType } from '@/lib/data/products'
import { useFilters } from './ProductFilterContext'

export default function ProductGrid() {
  const { filters } = useFilters()
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'price-low' | 'price-high'>('popular')

  // 필터링 및 정렬 처리
  const products = useMemo(() => {
    let filtered = [...allProducts]

    // 타입 필터
    if (filters.type !== 'all') {
      filtered = filtered.filter(p => p.type === filters.type)
    }

    // 국가 필터
    if (filters.country !== 'all') {
      filtered = filtered.filter(p => p.country === filters.country)
    }

    // 테마 필터
    if (filters.theme !== 'all') {
      filtered = filtered.filter(p => p.themes.includes(filters.theme))
    }

    // 일정 필터
    if (filters.duration !== 'all') {
      filtered = filtered.filter(p => {
        if (!p.duration) return false
        const duration = p.duration
        switch (filters.duration) {
          case '1-3':
            return duration >= 1 && duration <= 3
          case '4-7':
            return duration >= 4 && duration <= 7
          case '8-14':
            return duration >= 8 && duration <= 14
          case '15+':
            return duration >= 15
          default:
            return true
        }
      })
    }

    // 가격 범위 필터
    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    )

    // 정렬
    let sorted = [...filtered]
    switch (sortBy) {
      case 'popular':
        sorted.sort((a, b) => {
          if (a.isPopular && !b.isPopular) return -1
          if (!a.isPopular && b.isPopular) return 1
          return b.reviewCount - a.reviewCount
        })
        break
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price)
        break
    }

    return sorted
  }, [filters, sortBy])

  // 가격 포맷팅
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price) + '원'
  }

  // 별점 표시
  const renderStars = (rating: number) => {
    return (
      <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            style={{
              color: star <= rating ? '#ffc107' : '#ddd',
              fontSize: '14px'
            }}
          >
            ★
          </span>
        ))}
        <span style={{ marginLeft: '8px', fontSize: '14px', color: '#666' }}>
          {rating.toFixed(1)}
        </span>
      </div>
    )
  }

  return (
    <div className="product-grid-container">
      {/* 정렬 옵션 */}
      <div className="product-sort-bar" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ fontSize: '16px', color: '#666' }}>
          총 <strong style={{ color: '#E73E58' }}>{products.length}</strong>개의 상품
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="form-control"
          style={{ width: 'auto', display: 'inline-block', padding: '8px 30px 8px 15px' }}
        >
          <option value="popular">인기순</option>
          <option value="rating">평점순</option>
          <option value="price-low">가격 낮은순</option>
          <option value="price-high">가격 높은순</option>
        </select>
      </div>

      {/* 상품 그리드 */}
      <div className="row g-4" style={{ marginTop: 0 }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="800">
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
                        ({product.reviewCount}개 리뷰)
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        {product.originalPrice && (
                          <div style={{ fontSize: '14px', color: '#999', textDecoration: 'line-through', marginBottom: '5px' }}>
                            {formatPrice(product.originalPrice)}
                          </div>
                        )}
                        <div style={{ fontSize: '24px', fontWeight: 700, color: '#E73E58' }}>
                          {formatPrice(product.price)}
                        </div>
                      </div>
                      <Link href={`/travel/${product.slug}`} className="btn style1" style={{ padding: '10px 20px' }}>
                        자세히 보기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <p style={{ fontSize: '18px', color: '#999' }}>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}
