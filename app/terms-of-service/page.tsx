'use client'

import Layout from '@/components/Layout'

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          {/* Page Header */}
          <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
            <div className="container">
              <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '48px', fontWeight: 700, color: '#354A5E', marginBottom: '20px' }}>
                이용약관
              </h1>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
                OurTrip 서비스 이용약관을 확인하실 수 있습니다.
              </p>
            </div>
          </section>

          {/* Terms Content */}
          <section style={{ padding: '80px 0' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="terms-of-service-content" style={{ background: '#fff', padding: '60px', borderRadius: '10px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)' }}>
                    <div className="terms-of-service-text" style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E' }}>
                        제1조 (목적)
                      </h2>
                      <p style={{ marginBottom: '30px' }}>
                        이 약관은 OurTrip(이하 "회사"라 함)이 운영하는 온라인 여행 서비스 웹사이트(이하 "사이트"라 함)의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제2조 (정의)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. "사이트"란 회사가 컴퓨터 등 정보통신설비를 이용하여 여행 상품 및 용역을 거래할 수 있도록 설정한 가상의 영업장을 말합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. "회원"이란 사이트에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                      </p>
                      <p style={{ marginBottom: '30px' }}>
                        3. "비회원"이란 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제3조 (약관의 게시와 개정)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 사이트의 초기 서비스화면(전면)에 게시합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. 회사는 "전자상거래 등에서의 소비자보호에 관한 법률", "약관의 규제에 관한 법률", "전자거래기본법", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                      </p>
                      <p style={{ marginBottom: '30px' }}>
                        3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 사이트의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제4조 (서비스의 제공 및 변경)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회사는 다음과 같은 서비스를 제공합니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}>여행 상품 및 여행 관련 정보 제공</li>
                        <li style={{ marginBottom: '10px' }}>여행 상품 예약 및 결제 대행</li>
                        <li style={{ marginBottom: '10px' }}>비자 안내 및 신청 대행</li>
                        <li style={{ marginBottom: '10px' }}>기타 회사가 추가 개발하거나 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
                      </ul>
                      <p style={{ marginBottom: '30px' }}>
                        2. 회사는 필요한 경우 서비스의 내용을 추가 또는 변경할 수 있습니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제5조 (서비스의 중단)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
                      </p>
                      <p style={{ marginBottom: '30px' }}>
                        2. 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 회원 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제6조 (회원가입)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회원은 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. 회사는 제1항과 같이 회원가입을 신청한 자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}>가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 단 회사의 회원 재가입 승낙을 얻은 경우에는 예외로 함</li>
                        <li style={{ marginBottom: '10px' }}>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                        <li style={{ marginBottom: '10px' }}>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                      </ul>
                      <p style={{ marginBottom: '30px' }}>
                        3. 회원가입계약의 성립시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제7조 (회원 탈퇴 및 자격 상실 등)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. 회원이 다음 각호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}>가입 신청시에 허위 내용을 등록한 경우</li>
                        <li style={{ marginBottom: '10px' }}>다른 사람의 사이트 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                        <li style={{ marginBottom: '10px' }}>사이트를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                      </ul>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제8조 (개인정보보호)
                      </h2>
                      <p style={{ marginBottom: '30px' }}>
                        회사는 회원의 개인정보 보호를 위하여 노력합니다. 회원의 개인정보보호에 관해서는 관련법령 및 회사가 정하는 "개인정보처리방침"에 정한 바에 따릅니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제9조 (분쟁의 해결)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회사와 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.
                      </p>
                      <p style={{ marginBottom: '30px' }}>
                        2. 제1항의 규정에도 불구하고 분쟁으로 인하여 소송이 제기될 경우 소송은 회사의 본사 소재지를 관할하는 법원의 관할로 합니다.
                      </p>

                      <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #eee', fontSize: '14px', color: '#999' }}>
                        <p>최종 수정일: 2026년 1월 1일</p>
                        <p>본 약관은 2026년 1월 1일부터 시행됩니다.</p>
                      </div>
                    </div>
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
