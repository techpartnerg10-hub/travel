'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { ProductType, ThemeType } from '@/lib/data/products'

interface FilterState {
  type: ProductType | 'all'
  country: string
  theme: ThemeType | 'all'
  duration: string
  priceRange: [number, number]
}

interface FilterContextType {
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>({
    type: 'all',
    country: 'all',
    theme: 'all',
    duration: 'all',
    priceRange: [0, 10000000]
  })

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilters() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider')
  }
  return context
}
