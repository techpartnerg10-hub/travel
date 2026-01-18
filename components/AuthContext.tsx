'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string
  name: string
  phone?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  socialLogin: (provider: 'kakao' | 'naver', userData: { email: string; name: string; id?: string }) => void
  signup: (userData: { name: string; email: string; password: string; phone: string }) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태 확인
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (e) {
        localStorage.removeItem('user')
      }
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // 실제 로그인 API 호출 대신 로컬 스토리지 사용
    // 간단한 검증 로직 (실제로는 서버에서 처리)
    const savedUsers = localStorage.getItem('users')
    if (savedUsers) {
      try {
        const users = JSON.parse(savedUsers)
        const foundUser = users.find(
          (u: any) => u.email === email && u.password === password
        )
        if (foundUser) {
          const userData = { id: foundUser.id, email: foundUser.email, name: foundUser.name, phone: foundUser.phone }
          setUser(userData)
          localStorage.setItem('user', JSON.stringify(userData))
          return true
        }
      } catch (e) {
        console.error('Login error:', e)
      }
    }
    return false
  }

  const socialLogin = (provider: 'kakao' | 'naver', userData: { email: string; name: string; id?: string }) => {
    // 소셜 로그인 처리 (실제로는 OAuth 플로우 필요)
    const newUser: User = {
      id: userData.id || `${provider}_${Date.now()}`,
      email: userData.email,
      name: userData.name
    }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const signup = async (userData: { name: string; email: string; password: string; phone: string }): Promise<boolean> => {
    // 회원가입 처리
    const savedUsers = localStorage.getItem('users') || '[]'
    try {
      const users = JSON.parse(savedUsers)
      // 이메일 중복 확인
      if (users.some((u: any) => u.email === userData.email)) {
        return false
      }
      const newUser = {
        id: `user_${Date.now()}`,
        ...userData
      }
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      
      // 자동 로그인
      const userDataForLogin = { id: newUser.id, email: newUser.email, name: newUser.name, phone: newUser.phone }
      setUser(userDataForLogin)
      localStorage.setItem('user', JSON.stringify(userDataForLogin))
      return true
    } catch (e) {
      console.error('Signup error:', e)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        socialLogin,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
