'use client'

import Layout from '@/components/Layout'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthContext'

export default function LoginPage() {
  const router = useRouter()
  const { login, socialLogin } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const success = await login(email, password)
    if (success) {
      router.push('/mypage')
    } else {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.')
    }
  }

  const handleSocialLogin = (provider: 'kakao' | 'naver') => {
    // 실제 소셜 로그인은 OAuth 플로우가 필요하지만, 여기서는 데모로 처리
    // 실제 구현 시 각 소셜 플랫폼의 SDK를 사용해야 합니다
    const mockUserData = {
      email: `${provider}@example.com`,
      name: `${provider === 'kakao' ? '카카오' : '네이버'} 사용자`,
      id: `${provider}_${Date.now()}`
    }
    socialLogin(provider, mockUserData)
    router.push('/mypage')
  }

  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          <section className="login-page" style={{ paddingTop: '200px', paddingBottom: '100px', background: '#f9fafa', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                  <div className="login-form-container" style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '36px', fontWeight: 700, color: '#354A5E', marginBottom: '10px', textAlign: 'center' }}>
                      로그인
                    </h1>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
                      유럽 여행의 특별한 경험을 시작하세요
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                          이메일
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="이메일을 입력하세요"
                          required
                          style={{ height: '50px' }}
                        />
                      </div>

                      <div style={{ marginBottom: '30px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                          비밀번호
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="비밀번호를 입력하세요"
                          required
                          style={{ height: '50px' }}
                        />
                      </div>

                      {error && (
                        <div style={{ 
                          background: '#fee', 
                          color: '#c33', 
                          padding: '10px', 
                          borderRadius: '5px', 
                          marginBottom: '20px',
                          fontSize: '14px',
                          textAlign: 'center'
                        }}>
                          {error}
                        </div>
                      )}

                      <button type="submit" className="btn style1 w-100" style={{ height: '50px', fontSize: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        로그인
                      </button>

                      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <Link href="/signup" style={{ color: '#E73E58', fontSize: '14px' }}>
                          회원가입
                        </Link>
                        <span style={{ margin: '0 10px', color: '#ddd' }}>|</span>
                        <Link href="/forgot-password" style={{ color: '#666', fontSize: '14px' }}>
                          비밀번호 찾기
                        </Link>
                      </div>

                      <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', marginTop: '20px' }}>
                        <p className="social-login-title" style={{ textAlign: 'center', fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                          소셜 로그인
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <button
                            type="button"
                            className="btn social-login-btn social-kakao"
                            onClick={() => handleSocialLogin('kakao')}
                            style={{
                              background: '#FEE500',
                              color: '#000',
                              height: '50px',
                              border: 'none',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px'
                            }}
                          >
                            <i className="ri-kakao-talk-fill" style={{ fontSize: '20px', lineHeight: 1 }}></i>
                            <span style={{ color: '#000' }}>카카오로 로그인</span>
                          </button>
                          <button
                            type="button"
                            className="btn social-login-btn social-naver"
                            onClick={() => handleSocialLogin('naver')}
                            style={{
                              background: '#03C75A',
                              color: '#fff',
                              height: '50px',
                              border: 'none',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px'
                            }}
                          >
                            <span style={{ 
                              fontSize: '16px', 
                              lineHeight: 1, 
                              fontWeight: 900,
                              color: '#fff',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '20px',
                              height: '20px',
                              borderRadius: '2px',
                              background: '#fff',
                              color: '#03C75A'
                            }}>N</span>
                            <span style={{ color: '#000' }}>네이버로 로그인</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}
