'use client'

import React from 'react'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg 
      width="180" 
      height="50" 
      viewBox="0 0 180 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 원형 배경 */}
      <circle cx="25" cy="25" r="22" fill="#E73E58" opacity="0.1"/>
      <circle cx="25" cy="25" r="18" fill="#E73E58" opacity="0.2"/>
      
      {/* 비행기 아이콘 (더 세련된 디자인) - 수직 중앙 정렬 */}
      <g transform="translate(15, 11)">
        {/* 비행기 본체 */}
        <path d="M8 10L2 16H6L10 20L14 16H18L12 10L8 10Z" fill="#E73E58"/>
        {/* 날개 */}
        <path d="M10 20L6 28H14L10 20Z" fill="#E73E58" opacity="0.8"/>
        {/* 꼬리 */}
        <path d="M8 10L4 4H8V10Z" fill="#E73E58" opacity="0.8"/>
      </g>
      
      {/* 텍스트 "OurTrip" - 수직 중앙 정렬 */}
      <text 
        x="50" 
        y="25" 
        fontFamily="'Noto Sans KR', 'Arial', sans-serif" 
        fontSize="26" 
        fontWeight="700" 
        letterSpacing="1" 
        fill="currentColor" 
        className="logo-text"
        dominantBaseline="middle"
        textAnchor="start"
      >
        OurTrip
      </text>
      
      {/* 강조 점 - "i" 위에 위치 */}
      <circle cx="126" cy="14" r="3" fill="#E73E58"/>
    </svg>
  )
}
