'use client'

import Layout from '@/components/Layout'
import Link from 'next/link'
import { useState } from 'react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 비밀번호 재설정 처리 (프론트엔드만)
    setIsSubmitted(true)
  }

  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          <section className="login-page" style={{ padding: '150px 0', background: '#f9fafa', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                  <div className="login-form-container" style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '36px', fontWeight: 700, color: '#354A5E', marginBottom: '10px', textAlign: 'center' }}>
                      비밀번호 찾기
                    </h1>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
                      {isSubmitted 
                        ? '비밀번호 재설정 링크를 이메일로 보내드렸습니다.'
                        : '가입하신 이메일 주소를 입력하시면 비밀번호 재설정 링크를 보내드립니다.'}
                    </p>

                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '30px' }}>
                          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#354A5E' }}>
                            이메일
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="가입하신 이메일을 입력하세요"
                            required
                            style={{ height: '50px' }}
                          />
                        </div>

                        <button type="submit" className="btn style1 w-100" style={{ height: '50px', fontSize: '16px', marginBottom: '20px' }}>
                          비밀번호 재설정 링크 보내기
                        </button>

                        <div style={{ textAlign: 'center' }}>
                          <Link href="/login" style={{ color: '#E73E58', fontSize: '14px', fontWeight: 600 }}>
                            로그인으로 돌아가기
                          </Link>
                        </div>
                      </form>
                    ) : (
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                          width: '80px', 
                          height: '80px', 
                          borderRadius: '50%', 
                          background: '#E73E58', 
                          margin: '0 auto 20px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}>
                          <i className="ri-mail-check-line" style={{ fontSize: '40px', color: '#fff' }}></i>
                        </div>
                        <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px', lineHeight: 1.6 }}>
                          입력하신 이메일 주소로 비밀번호 재설정 링크를 보내드렸습니다.<br />
                          이메일을 확인하시고 링크를 클릭하여 비밀번호를 재설정해주세요.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <Link href="/login" className="btn style1 w-100" style={{ height: '50px', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            로그인으로 돌아가기
                          </Link>
                          <button
                            type="button"
                            className="btn style4 w-100"
                            onClick={() => setIsSubmitted(false)}
                            style={{ height: '50px', fontSize: '16px' }}
                          >
                            다시 시도
                          </button>
                        </div>
                      </div>
                    )}
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
