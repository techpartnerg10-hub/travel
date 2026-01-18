'use client'

import React, { useState } from 'react'
import { TravelProduct } from '@/lib/data/products'

interface BookingFormProps {
  product: TravelProduct
}

export default function BookingForm({ product }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price) + '원'
  }

  const totalPrice = product.price * adults + (product.price * 0.7 * children)

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // 예약 페이지로 이동 (추후 구현)
    alert('예약 기능은 준비 중입니다.')
  }

  return (
    <div className="booking-form-container" style={{
      background: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)',
      marginBottom: '20px'
    }}>
      <h3 style={{
        fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
        fontSize: '24px',
        fontWeight: 600,
        marginBottom: '25px',
        color: '#354A5E'
      }}>
        예약하기
      </h3>

      <form onSubmit={handleBooking}>
        {/* Check In Date */}
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#444' }}>
            체크인
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="form-control"
            required
            style={{ width: '100%' }}
          />
        </div>

        {/* Check Out Date */}
        {product.type === 'hotel' || product.type === 'resort' ? (
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#444' }}>
              체크아웃
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="form-control"
              required={product.type === 'hotel' || product.type === 'resort'}
              style={{ width: '100%' }}
              min={checkIn}
            />
          </div>
        ) : (
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#444' }}>
              출발일
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="form-control"
              required
              style={{ width: '100%' }}
            />
          </div>
        )}

        {/* Adults */}
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#444' }}>
            성인
          </label>
          <select
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value))}
            className="form-control"
            style={{ width: '100%' }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num}명</option>
            ))}
          </select>
        </div>

        {/* Children */}
        <div className="form-group" style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#444' }}>
            어린이 (만 12세 미만)
          </label>
          <select
            value={children}
            onChange={(e) => setChildren(parseInt(e.target.value))}
            className="form-control"
            style={{ width: '100%' }}
          >
            {[0, 1, 2, 3, 4].map(num => (
              <option key={num} value={num}>{num}명</option>
            ))}
          </select>
        </div>

        {/* Price Summary */}
        <div className="booking-price-summary" style={{
          background: '#f9fafa',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '25px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '16px', color: '#666' }}>상품 금액</span>
            <span style={{ fontSize: '16px', fontWeight: 600, color: '#444' }}>
              {formatPrice(product.price)}
            </span>
          </div>
          {adults > 1 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px', color: '#999' }}>
              <span>성인 × {adults}</span>
              <span>{formatPrice(product.price * adults)}</span>
            </div>
          )}
          {children > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px', color: '#999' }}>
              <span>어린이 × {children} (70%)</span>
              <span>{formatPrice(product.price * 0.7 * children)}</span>
            </div>
          )}
          <div style={{
            borderTop: '2px solid #E73E58',
            paddingTop: '15px',
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '20px', fontWeight: 700, color: '#354A5E' }}>총 금액</span>
            <span style={{ fontSize: '28px', fontWeight: 700, color: '#E73E58' }}>
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>

        {/* Booking Button */}
        <button
          type="submit"
          className="btn style1"
          style={{ width: '100%', padding: '16px', fontSize: '18px', fontWeight: 600 }}
        >
          <i className="ri-shopping-cart-line" style={{ marginRight: '8px' }}></i>
          예약하기
        </button>

        {/* Contact Info */}
        <div className="booking-contact-info" style={{ marginTop: '20px', padding: '20px', background: '#f9fafa', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            문의가 필요하신가요?
          </p>
          <a href="/contact" style={{ color: '#E73E58', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>
            <i className="ri-phone-line" style={{ marginRight: '5px' }}></i>
            1:1 문의하기
          </a>
        </div>
      </form>
    </div>
  )
}
