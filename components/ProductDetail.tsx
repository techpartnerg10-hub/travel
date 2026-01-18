'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TravelProduct } from '@/lib/data/products'
import ImageGallery from './ImageGallery'
import BookingForm from './BookingForm'
import Itinerary from './Itinerary'

interface ProductDetailProps {
  product: TravelProduct
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)

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
              fontSize: '16px'
            }}
          >
            ★
          </span>
        ))}
        <span style={{ marginLeft: '8px', fontSize: '16px', color: '#666' }}>
          {rating.toFixed(1)} ({product.reviewCount}개 리뷰)
        </span>
      </div>
    )
  }

  return (
    <div className="product-detail-container">
      {/* Page Title */}
      <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
        <div className="container">
          <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '48px', fontWeight: 700, color: '#354A5E', marginBottom: '20px' }}>
            {product.name}
          </h1>
          {product.shortDescription && (
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
              {product.shortDescription}
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="product-detail-section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="row">
            {/* Left Content - Desktop */}
            <div className="col-lg-8 order-lg-1 order-2">
              {/* Image Gallery */}
              <div className="product-images mb-4">
                <ImageGallery 
                  images={product.images} 
                  thumbnail={product.thumbnail}
                  productName={product.name}
                />
              </div>

              {/* Product Info */}
              <div className="product-info" style={{ marginBottom: '40px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{
                    fontSize: '14px',
                    color: '#E73E58',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>
                    {product.type === 'tour' ? '투어' : product.type === 'hotel' ? '호텔' : product.type === 'resort' ? '리조트' : product.type === 'flight' ? '항공권' : product.type === 'car' ? '렌터카' : '크루즈'}
                  </span>
                </div>

                <h1 style={{
                  fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#354A5E',
                  marginBottom: '20px',
                  lineHeight: 1.3
                }}>
                  {product.name}
                </h1>

                <div style={{ marginBottom: '20px' }}>
                  {renderStars(product.rating)}
                </div>

                <div style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  marginBottom: '30px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ fontSize: '16px', color: '#666' }}>
                    <i className="ri-map-pin-line" style={{ marginRight: '5px', color: '#E73E58' }}></i>
                    {product.city ? `${product.city}, ` : ''}{product.country}
                  </div>
                  {product.duration && (
                    <div style={{ fontSize: '16px', color: '#666' }}>
                      <i className="ri-calendar-line" style={{ marginRight: '5px', color: '#E73E58' }}></i>
                      {product.duration}일
                    </div>
                  )}
                  {product.themes && product.themes.length > 0 && (
                    <div style={{ fontSize: '16px', color: '#666' }}>
                      <i className="ri-price-tag-3-line" style={{ marginRight: '5px', color: '#E73E58' }}></i>
                      {product.themes.join(', ')}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div style={{
                  background: '#f9fafa',
                  padding: '30px',
                  borderRadius: '10px',
                  marginBottom: '30px'
                }}>
                  {product.originalPrice && (
                    <div style={{ fontSize: '18px', color: '#999', textDecoration: 'line-through', marginBottom: '10px' }}>
                      {formatPrice(product.originalPrice)}
                    </div>
                  )}
                  <div style={{ fontSize: '42px', fontWeight: 700, color: '#E73E58', marginBottom: '10px' }}>
                    {formatPrice(product.price)}
                  </div>
                  {product.originalPrice && (
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      <span style={{ color: '#E73E58', fontWeight: 600 }}>
                        {Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                      {' '}할인 중
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="product-description" style={{ marginBottom: '40px' }}>
                  <h2 style={{
                    fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                    fontSize: '28px',
                    fontWeight: 600,
                    marginBottom: '20px',
                    color: '#354A5E'
                  }}>
                    상품 소개
                  </h2>
                  <div style={{
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: '#666',
                    whiteSpace: 'pre-line'
                  }}>
                    {product.description}
                  </div>
                </div>

                {/* Highlights */}
                {product.highlights && product.highlights.length > 0 && (
                  <div className="product-highlights" style={{ marginBottom: '40px' }}>
                    <h2 style={{
                      fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                      fontSize: '28px',
                      fontWeight: 600,
                      marginBottom: '20px',
                      color: '#354A5E'
                    }}>
                      하이라이트
                    </h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {product.highlights.map((highlight, index) => (
                        <li key={index} style={{
                          padding: '12px 0',
                          borderBottom: '1px solid #eee',
                          fontSize: '16px',
                          color: '#666',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <i className="ri-checkbox-circle-line" style={{ color: '#E73E58', marginRight: '10px', fontSize: '20px' }}></i>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Itinerary */}
                {product.itinerary && product.itinerary.length > 0 && (
                  <div className="product-itinerary" style={{ marginBottom: '40px' }}>
                    <h2 style={{
                      fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                      fontSize: '28px',
                      fontWeight: 600,
                      marginBottom: '20px',
                      color: '#354A5E'
                    }}>
                      여행 일정
                    </h2>
                    <Itinerary itinerary={product.itinerary} />
                  </div>
                )}

                {/* Included/Excluded */}
                {(product.included || product.excluded) && (
                  <div className="product-included-excluded" style={{ marginBottom: '40px' }}>
                    <div className="row">
                      {product.included && (
                        <div className="col-md-6 mb-4">
                          <h3 style={{
                            fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                            fontSize: '24px',
                            fontWeight: 600,
                            marginBottom: '20px',
                            color: '#354A5E'
                          }}>
                            포함 사항
                          </h3>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {product.included.map((item, index) => (
                              <li key={index} style={{
                                padding: '10px 0',
                                fontSize: '16px',
                                color: '#666',
                                display: 'flex',
                                alignItems: 'center'
                              }}>
                                <i className="ri-check-line" style={{ color: '#28a745', marginRight: '10px', fontSize: '20px' }}></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {product.excluded && (
                        <div className="col-md-6 mb-4">
                          <h3 style={{
                            fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                            fontSize: '24px',
                            fontWeight: 600,
                            marginBottom: '20px',
                            color: '#354A5E'
                          }}>
                            불포함 사항
                          </h3>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {product.excluded.map((item, index) => (
                              <li key={index} style={{
                                padding: '10px 0',
                                fontSize: '16px',
                                color: '#666',
                                display: 'flex',
                                alignItems: 'center'
                              }}>
                                <i className="ri-close-line" style={{ color: '#dc3545', marginRight: '10px', fontSize: '20px' }}></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Reviews */}
                {product.reviews && product.reviews.length > 0 && (
                  <div className="product-reviews" style={{ marginBottom: '40px' }}>
                    <h2 style={{
                      fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                      fontSize: '28px',
                      fontWeight: 600,
                      marginBottom: '30px',
                      color: '#354A5E'
                    }}>
                      고객 리뷰 ({product.reviewCount}개)
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                      {product.reviews.map((review) => (
                        <div
                          key={review.id}
                          style={{
                            background: '#fff',
                            border: '1px solid #eee',
                            borderRadius: '10px',
                            padding: '25px',
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
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#354A5E', margin: 0 }}>
                                  {review.author}
                                </h4>
                                <div style={{ display: 'flex', gap: '2px' }}>
                                  {[1, 2, 3, 4, 5].map(star => (
                                    <span
                                      key={star}
                                      style={{
                                        color: star <= review.rating ? '#ffc107' : '#ddd',
                                        fontSize: '16px'
                                      }}
                                    >
                                      ★
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <p style={{ fontSize: '14px', color: '#999', margin: 0 }}>
                                {new Date(review.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                              </p>
                            </div>
                          </div>
                          <p style={{
                            fontSize: '16px',
                            lineHeight: 1.8,
                            color: '#666',
                            marginBottom: review.images && review.images.length > 0 ? '15px' : '0'
                          }}>
                            {review.content}
                          </p>
                          {review.images && review.images.length > 0 && (
                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                              gap: '10px',
                              marginTop: '15px'
                            }}>
                              {review.images.map((img, idx) => (
                                <div
                                  key={idx}
                                  style={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingTop: '75%',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                  }}
                                >
                                  <Image
                                    src={img}
                                    alt={`리뷰 이미지 ${idx + 1}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    unoptimized
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cancellation Policy */}
                {product.cancellationPolicy && (
                  <div className="product-cancellation" style={{ marginBottom: '40px' }}>
                    <h2 style={{
                      fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                      fontSize: '28px',
                      fontWeight: 600,
                      marginBottom: '20px',
                      color: '#354A5E'
                    }}>
                      취소 및 환불 정책
                    </h2>
                    <div style={{
                      background: '#f9fafa',
                      padding: '25px',
                      borderRadius: '10px',
                      fontSize: '16px',
                      lineHeight: 1.8,
                      color: '#666',
                      whiteSpace: 'pre-line'
                    }}>
                      {product.cancellationPolicy}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar - Booking Form - Desktop */}
            <div className="col-lg-4 order-lg-2 order-1 mb-4 mb-lg-0">
              <div style={{ position: 'sticky', top: '100px' }}>
                <BookingForm product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
