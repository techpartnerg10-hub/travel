'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface ImageGalleryProps {
  images: string[]
  thumbnail: string
  productName: string
}

export default function ImageGallery({ images, thumbnail, productName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const displayImages = images.length > 0 ? images : [thumbnail]

  return (
    <>
      <div className="image-gallery-container">
        {/* Main Image */}
        <div 
          className="main-image" 
          style={{ 
            position: 'relative', 
            width: '100%', 
            height: '500px', 
            marginBottom: '15px',
            borderRadius: '10px',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={displayImages[selectedImage]}
            alt={`${productName} - 이미지 ${selectedImage + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            unoptimized
          />
          <div style={{
            position: 'absolute',
            bottom: '15px',
            right: '15px',
            background: 'rgba(0, 0, 0, 0.6)',
            color: '#fff',
            padding: '8px 15px',
            borderRadius: '5px',
            fontSize: '14px'
          }}>
            {selectedImage + 1} / {displayImages.length}
          </div>
        </div>

        {/* Thumbnail Grid */}
        {displayImages.length > 1 && (
          <div className="thumbnail-grid" style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(displayImages.length, 6)}, 1fr)`,
            gap: '10px'
          }}>
            {displayImages.slice(0, 6).map((image, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '75%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: selectedImage === index ? '3px solid #E73E58' : '3px solid transparent',
                  transition: 'border 0.3s ease'
                }}
                onClick={() => setSelectedImage(index)}
                onMouseEnter={(e) => {
                  if (selectedImage !== index) {
                    e.currentTarget.style.opacity = '0.8'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                }}
              >
                <Image
                  src={image}
                  alt={`${productName} 썸네일 ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="lightbox-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            cursor: 'pointer'
          }}
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
              width: 'auto',
              height: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={displayImages[selectedImage]}
              alt={`${productName} - 이미지 ${selectedImage + 1}`}
              width={1200}
              height={800}
              style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '90vh' }}
              unoptimized
            />
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
              }}
            >
              ×
            </button>

            {/* Navigation Buttons */}
            {displayImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage((prev) => (prev > 0 ? prev - 1 : displayImages.length - 1))
                  }}
                  style={{
                    position: 'absolute',
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: '#fff',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s ease'
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage((prev) => (prev < displayImages.length - 1 ? prev + 1 : 0))
                  }}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: '#fff',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s ease'
                  }}
                >
                  ›
                </button>
              </>
            )}

            {/* Image Counter */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '16px'
            }}>
              {selectedImage + 1} / {displayImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
