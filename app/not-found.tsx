import Layout from '@/components/Layout'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          <section className="not-found-section" style={{ padding: '200px 0', textAlign: 'center', background: '#f9fafa' }}>
            <div className="container">
              <h1 style={{ 
                fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", 
                fontSize: '120px', 
                fontWeight: 700, 
                color: '#E73E58',
                marginBottom: '20px',
                lineHeight: 1
              }}>
                404
              </h1>
              <h2 style={{ 
                fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", 
                fontSize: '36px', 
                fontWeight: 600, 
                color: '#354A5E',
                marginBottom: '20px'
              }}>
                페이지를 찾을 수 없습니다
              </h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
              </p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/" className="btn style1" style={{ padding: '15px 30px' }}>
                  홈으로 가기
                </Link>
                <Link href="/travel" className="btn style4" style={{ padding: '15px 30px' }}>
                  여행 상품 보기
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}
