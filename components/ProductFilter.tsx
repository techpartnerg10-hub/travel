'use client'

import React, { useState } from 'react'
import { ProductType, ThemeType, countries } from '@/lib/data/products'
import { useFilters } from './ProductFilterContext'

export default function ProductFilter() {
  const { filters, setFilters } = useFilters()
  const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({
    type: true,
    country: true,
    theme: true,
    duration: true
  })

  const handleFilterChange = (key: keyof typeof filters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const toggleExpand = (key: string) => {
    setIsExpanded(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const resetFilters = () => {
    setFilters({
      type: 'all',
      country: 'all',
      theme: 'all',
      duration: 'all',
      priceRange: [0, 10000000]
    })
  }

  const hasActiveFilters = filters.type !== 'all' || filters.country !== 'all' || filters.theme !== 'all' || filters.duration !== 'all'

  return (
    <div className="product-filter-sidebar">
      <div className="filter-card" style={{ 
        background: '#fff', 
        padding: '25px', 
        borderRadius: '10px',
        boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <h3 style={{ 
            fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", 
            fontSize: '22px', 
            margin: 0,
            color: '#354A5E'
          }}>
            필터
          </h3>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              style={{
                background: 'none',
                border: 'none',
                color: '#E73E58',
                fontSize: '14px',
                cursor: 'pointer',
                padding: '5px 10px',
                fontWeight: 600
              }}
            >
              초기화
            </button>
          )}
        </div>

        {/* 여행 종류 필터 */}
        <div className="filter-group" style={{ marginBottom: '25px' }}>
          <button
            onClick={() => toggleExpand('type')}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              padding: '0',
              marginBottom: '15px',
              cursor: 'pointer'
            }}
          >
            <h4 className="filter-group-title" style={{ fontSize: '16px', fontWeight: 600, margin: 0, color: '#444' }}>여행 종류</h4>
            <i className={`ri-arrow-${isExpanded.type ? 'up' : 'down'}-s-line filter-arrow-icon`} style={{ color: '#666' }}></i>
          </button>
          {isExpanded.type && (
            <div className="filter-options" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {(['all', 'tour', 'hotel', 'resort', 'flight', 'car', 'cruise'] as const).map(type => (
                <button
                  key={type}
                  type="button"
                  className={`filter-option-btn ${filters.type === type ? 'active' : ''}`}
                  onClick={() => handleFilterChange('type', type)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: `2px solid ${filters.type === type ? '#E73E58' : '#ddd'}`,
                    background: filters.type === type ? '#E73E58' : '#fff',
                    color: filters.type === type ? '#fff' : '#666',
                    fontSize: '14px',
                    fontWeight: filters.type === type ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {type === 'all' ? '전체' : type === 'tour' ? '투어' : type === 'hotel' ? '호텔' : type === 'resort' ? '리조트' : type === 'flight' ? '항공권' : type === 'car' ? '렌터카' : '크루즈'}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 국가 필터 */}
        <div className="filter-group" style={{ marginBottom: '25px' }}>
          <button
            onClick={() => toggleExpand('country')}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              padding: '0',
              marginBottom: '15px',
              cursor: 'pointer'
            }}
          >
            <h4 className="filter-group-title" style={{ fontSize: '16px', fontWeight: 600, margin: 0, color: '#444' }}>국가</h4>
            <i className={`ri-arrow-${isExpanded.country ? 'up' : 'down'}-s-line filter-arrow-icon`} style={{ color: '#666' }}></i>
          </button>
          {isExpanded.country && (
            <select
              value={filters.country}
              onChange={(e) => handleFilterChange('country', e.target.value)}
              className="form-control"
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '2px solid #ddd' }}
            >
              <option value="all">전체 국가</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          )}
        </div>

        {/* 테마 필터 */}
        <div className="filter-group" style={{ marginBottom: '25px' }}>
          <button
            onClick={() => toggleExpand('theme')}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              padding: '0',
              marginBottom: '15px',
              cursor: 'pointer'
            }}
          >
            <h4 className="filter-group-title" style={{ fontSize: '16px', fontWeight: 600, margin: 0, color: '#444' }}>테마</h4>
            <i className={`ri-arrow-${isExpanded.theme ? 'up' : 'down'}-s-line filter-arrow-icon`} style={{ color: '#666' }}></i>
          </button>
          {isExpanded.theme && (
            <div className="filter-options" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {(['all', '로맨틱', '가족여행', '문화', '자연', '모험', '음식', '휴양'] as const).map(theme => (
                <button
                  key={theme}
                  type="button"
                  className={`filter-option-btn ${filters.theme === theme ? 'active' : ''}`}
                  onClick={() => handleFilterChange('theme', theme)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: `2px solid ${filters.theme === theme ? '#E73E58' : '#ddd'}`,
                    background: filters.theme === theme ? '#E73E58' : '#fff',
                    color: filters.theme === theme ? '#fff' : '#666',
                    fontSize: '14px',
                    fontWeight: filters.theme === theme ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {theme === 'all' ? '전체' : theme}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 일정 필터 */}
        <div className="filter-group" style={{ marginBottom: '25px' }}>
          <button
            onClick={() => toggleExpand('duration')}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              padding: '0',
              marginBottom: '15px',
              cursor: 'pointer'
            }}
          >
            <h4 className="filter-group-title" style={{ fontSize: '16px', fontWeight: 600, margin: 0, color: '#444' }}>일정</h4>
            <i className={`ri-arrow-${isExpanded.duration ? 'up' : 'down'}-s-line filter-arrow-icon`} style={{ color: '#666' }}></i>
          </button>
          {isExpanded.duration && (
            <select
              value={filters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
              className="form-control"
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '2px solid #ddd' }}
            >
              <option value="all">전체 일정</option>
              <option value="1-3">1-3일</option>
              <option value="4-7">4-7일</option>
              <option value="8-14">8-14일</option>
              <option value="15+">15일 이상</option>
            </select>
          )}
        </div>
      </div>
    </div>
  )
}
