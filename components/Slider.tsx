'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { sliderItems } from '@/lib/data/homepage'

declare global {
  interface Window {
    jQuery: any
    $: any
  }
}

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Owl Carousel 초기화 함수
    const initOwlCarousel = () => {
      if (typeof window !== 'undefined' && window.jQuery && sliderRef.current) {
        const $ = window.jQuery
        
        if ($.fn.owlCarousel) {
          // 이미 초기화된 경우 제거
          if ($(sliderRef.current).data('owl.carousel')) {
            $(sliderRef.current).trigger('destroy.owl.carousel')
          }
          
          $(sliderRef.current).owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplay: 5000,
            navText: [
              '<span class="fa fa-angle-left"></span>',
              '<span class="fa fa-angle-right"></span>'
            ],
            responsive: {
              0: { items: 1 },
              600: { items: 1 },
              800: { items: 1 },
              1024: { items: 1 }
            }
          })
        }
      }
    }

    // jQuery와 Owl Carousel 동적 로드
    const loadScripts = () => {
      if (typeof window === 'undefined') return

      // jQuery 로드
      if (!window.jQuery) {
        const jqueryScript = document.createElement('script')
        jqueryScript.src = 'https://code.jquery.com/jquery-3.7.1.min.js'
        jqueryScript.onload = () => {
          // Owl Carousel 로드
          const owlScript = document.createElement('script')
          owlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'
          owlScript.onload = () => {
            initOwlCarousel()
          }
          document.body.appendChild(owlScript)
        }
        document.body.appendChild(jqueryScript)
      } else if (window.jQuery.fn && window.jQuery.fn.owlCarousel) {
        // 이미 로드된 경우 바로 초기화
        initOwlCarousel()
      } else {
        // Owl Carousel만 로드
        const owlScript = document.createElement('script')
        owlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'
        owlScript.onload = () => {
          initOwlCarousel()
        }
        document.body.appendChild(owlScript)
      }
    }

    loadScripts()

    // Cleanup
    return () => {
      if (typeof window !== 'undefined' && window.jQuery && sliderRef.current) {
        const $ = window.jQuery
        if ($.fn.owlCarousel && $(sliderRef.current).data('owl.carousel')) {
          $(sliderRef.current).trigger('destroy.owl.carousel')
        }
      }
    }
  }, [])

  return (
    <section className="slider-area style-one text-center">
      <div ref={sliderRef} className="slider-carousel owl-theme owl-carousel owl-dots-none">
        {sliderItems.map((item, index) => (
          <div key={index} className="slide-item">
            <div className="image-layer" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="auto-container">
              <div className="slider-content-box">
                <h1 dangerouslySetInnerHTML={{ __html: item.title }}></h1>
                <p>{item.description}</p>
                <div className="btn-box">
                  <Link href={item.buttonLink} className="btn style1">{item.buttonText}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
