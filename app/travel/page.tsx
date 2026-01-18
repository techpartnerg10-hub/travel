'use client'

import Layout from '@/components/Layout'
import ProductGrid from '@/components/ProductGrid'
import ProductFilter from '@/components/ProductFilter'
import { FilterProvider } from '@/components/ProductFilterContext'
import { useState } from 'react'

export default function TravelPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <Layout>
      <FilterProvider>
        <div className="page-wrapper">
          <main className="site-main">
            {/* Page Header */}
            <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
              <div className="container">
                <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '48px', fontWeight: 700, color: '#354A5E', marginBottom: '20px' }}>
                  유럽 여행 상품
                </h1>
                <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
                  유럽 전역의 다양한 여행 상품을 한 곳에서 만나보세요. 여러분의 취향과 예산에 맞는 완벽한 유럽 여행을 찾아보세요.
                </p>
              </div>
            </section>

            {/* Filter and Product Grid */}
            <section className="product-listing-section" style={{ padding: '60px 0' }}>
              <div className="container">
                {/* Mobile Filter Button */}
                <div className="d-lg-none mb-4">
                  <button
                    className="btn style1"
                    onClick={() => setIsFilterOpen(true)}
                    style={{ width: '100%' }}
                  >
                    <i className="ri-filter-line" style={{ marginRight: '8px' }}></i>
                    필터
                  </button>
                </div>

                <div className="row">
                  {/* Filter Sidebar - Desktop */}
                  <div className="col-lg-3 d-none d-lg-block">
                    <ProductFilter />
                  </div>
                  
                  {/* Product Grid - Main Content */}
                  <div className="col-lg-9">
                    <ProductGrid />
                  </div>
                </div>
              </div>
            </section>

            {/* Mobile Filter Drawer */}
            {isFilterOpen && (
              <div
                className="d-lg-none"
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 9999,
                  padding: '20px'
                }}
                onClick={() => setIsFilterOpen(false)}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '10px',
                    padding: '20px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    position: 'relative'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: 'none',
                      border: 'none',
                      fontSize: '24px',
                      cursor: 'pointer',
                      color: '#666'
                    }}
                  >
                    ×
                  </button>
                  <ProductFilter />
                </div>
              </div>
            )}
          </main>
        </div>
      </FilterProvider>
    </Layout>
  )
}
