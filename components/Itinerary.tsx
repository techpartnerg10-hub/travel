'use client'

import React, { useState } from 'react'
import { ItineraryDay } from '@/lib/data/products'

interface ItineraryProps {
  itinerary: ItineraryDay[]
}

export default function Itinerary({ itinerary }: ItineraryProps) {
  const [expandedDays, setExpandedDays] = useState<number[]>([1]) // 기본적으로 Day 1 펼침
  const [expandAll, setExpandAll] = useState(false)

  const toggleDay = (day: number) => {
    setExpandedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    )
  }

  const handleExpandAll = () => {
    if (expandAll) {
      setExpandedDays([])
      setExpandAll(false)
    } else {
      setExpandedDays(itinerary.map(item => item.day))
      setExpandAll(true)
    }
  }

  return (
    <div className="itinerary-container">
      {/* Expand/Collapse All Button */}
      <div style={{ marginBottom: '20px', textAlign: 'right' }}>
        <button
          type="button"
          onClick={handleExpandAll}
          className="btn style4"
          style={{ padding: '8px 20px', fontSize: '14px' }}
        >
          {expandAll ? '모두 접기' : '모두 펼치기'}
        </button>
      </div>

      {/* Itinerary Days */}
      <div className="itinerary-days">
        {itinerary.map((day) => {
          const isExpanded = expandedDays.includes(day.day)
          
          return (
            <div
              key={day.day}
              className={`itinerary-day ${isExpanded ? 'expanded' : ''}`}
              style={{
                background: '#fff',
                border: '1px solid #eee',
                borderRadius: '10px',
                marginBottom: '15px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Day Header */}
              <div
                onClick={() => toggleDay(day.day)}
                style={{
                  padding: '20px 25px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: isExpanded ? '#f9fafa' : '#fff',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isExpanded) {
                    e.currentTarget.style.background = '#f9fafa'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isExpanded) {
                    e.currentTarget.style.background = '#fff'
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    background: '#E73E58',
                    color: '#fff',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>
                    {day.day}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif",
                      fontSize: '20px',
                      fontWeight: 600,
                      margin: 0,
                      color: '#354A5E'
                    }}>
                      {day.title}
                    </h3>
                  </div>
                </div>
                <i
                  className={isExpanded ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}
                  style={{
                    fontSize: '24px',
                    color: '#E73E58',
                    transition: 'transform 0.3s ease'
                  }}
                ></i>
              </div>

              {/* Day Content */}
              {isExpanded && (
                <div
                  className="itinerary-content"
                  style={{
                    padding: '25px',
                    borderTop: '1px solid #eee',
                    animation: 'fadeIn 0.3s ease'
                  }}
                >
                  {/* Description */}
                  <div style={{
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: '#666',
                    marginBottom: '25px',
                    whiteSpace: 'pre-line'
                  }}>
                    {day.description}
                  </div>

                  {/* Meals */}
                  {day.meals && day.meals.length > 0 && (
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        marginBottom: '12px',
                        color: '#444',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <i className="ri-restaurant-line" style={{ color: '#E73E58' }}></i>
                        식사
                      </h4>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {day.meals.map((meal, index) => (
                          <span
                            key={index}
                            style={{
                              background: '#f9fafa',
                              padding: '8px 15px',
                              borderRadius: '20px',
                              fontSize: '14px',
                              color: '#666',
                              border: '1px solid #eee'
                            }}
                          >
                            {meal}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Activities */}
                  {day.activities && day.activities.length > 0 && (
                    <div>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        marginBottom: '12px',
                        color: '#444',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <i className="ri-map-pin-line" style={{ color: '#E73E58' }}></i>
                        주요 활동
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                      }}>
                        {day.activities.map((activity, index) => (
                          <li
                            key={index}
                            style={{
                              padding: '10px 0',
                              paddingLeft: '25px',
                              position: 'relative',
                              fontSize: '16px',
                              color: '#666',
                              lineHeight: 1.6
                            }}
                          >
                            <i
                              className="ri-check-line"
                              style={{
                                position: 'absolute',
                                left: '0',
                                top: '12px',
                                color: '#E73E58',
                                fontSize: '18px'
                              }}
                            ></i>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
