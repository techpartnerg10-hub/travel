'use client'

import Layout from '@/components/Layout'

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          {/* Page Header */}
          <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
            <div className="container">
              <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '48px', fontWeight: 700, color: '#354A5E', marginBottom: '20px' }}>
                개인정보처리방침
              </h1>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
                OurTrip은 고객님의 개인정보를 보호하기 위해 최선을 다하고 있습니다.
              </p>
            </div>
          </section>

          {/* Privacy Policy Content */}
          <section style={{ padding: '80px 0' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="privacy-policy-content" style={{ background: '#fff', padding: '60px', borderRadius: '10px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)' }}>
                    <div className="privacy-policy-text" style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E' }}>
                        제1조 (개인정보의 처리목적)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        OurTrip(이하 "회사"라 함)은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}><strong>회원 가입 및 관리:</strong> 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리 목적</li>
                        <li style={{ marginBottom: '10px' }}><strong>여행 서비스 제공:</strong> 여행 상품 예약 및 결제, 여행 관련 서비스 제공, 여행 일정 안내, 고객 상담 및 문의 응대</li>
                        <li style={{ marginBottom: '10px' }}><strong>마케팅 및 광고 활용:</strong> 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계</li>
                      </ul>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제2조 (개인정보의 처리 및 보유기간)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}><strong>회원 가입 및 관리:</strong> 회원 탈퇴 시까지 (단, 관계 법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사 종료 시까지)</li>
                        <li style={{ marginBottom: '10px' }}><strong>여행 상품 예약 및 결제:</strong> 여행 완료 후 5년간 (전자상거래 등에서의 소비자보호에 관한 법률에 의한 계약 및 청약철회 기록 보존)</li>
                        <li style={{ marginBottom: '10px' }}><strong>고객 문의 및 상담:</strong> 문의 완료 후 3년간</li>
                      </ul>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제3조 (처리하는 개인정보의 항목)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        회사는 다음의 개인정보 항목을 처리하고 있습니다.
                      </p>
                      <p style={{ marginBottom: '10px', fontWeight: 600 }}>필수항목:</p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}>이름, 이메일, 전화번호, 비밀번호</li>
                        <li style={{ marginBottom: '10px' }}>여행 상품 예약 시: 여행자 이름, 생년월일, 여권번호, 연락처</li>
                      </ul>
                      <p style={{ marginBottom: '10px', fontWeight: 600 }}>선택항목:</p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}>프로필 사진, 주소, 관심 여행지, 특이사항</li>
                      </ul>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제4조 (개인정보의 제3자 제공)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. 회사는 여행 서비스 제공을 위해 다음과 같이 개인정보를 제3자에게 제공할 수 있습니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}><strong>제공받는 자:</strong> 여행 상품 제공업체(항공사, 호텔, 현지 여행사 등)</li>
                        <li style={{ marginBottom: '10px' }}><strong>제공 목적:</strong> 여행 상품 예약 및 서비스 제공</li>
                        <li style={{ marginBottom: '10px' }}><strong>제공 항목:</strong> 여행자 이름, 연락처, 여권번호</li>
                        <li style={{ marginBottom: '10px' }}><strong>보유 및 이용기간:</strong> 여행 완료 후 5년</li>
                      </ul>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제5조 (개인정보처리의 위탁)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}><strong>결제 서비스:</strong> 신용카드 결제 처리, 무통장 입금 확인</li>
                        <li style={{ marginBottom: '10px' }}><strong>이메일 발송:</strong> 회원 가입, 예약 확인, 공지사항 전송</li>
                        <li style={{ marginBottom: '10px' }}><strong>고객 상담:</strong> 전화 상담 서비스 제공</li>
                      </ul>
                      <p style={{ marginBottom: '30px' }}>
                        2. 회사는 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제6조 (정보주체의 권리·의무 및 행사방법)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}>개인정보 처리정지 요구권</li>
                        <li style={{ marginBottom: '10px' }}>개인정보 열람요구권</li>
                        <li style={{ marginBottom: '10px' }}>개인정보 정정·삭제요구권</li>
                        <li style={{ marginBottom: '10px' }}>개인정보 처리정지 요구권</li>
                      </ul>
                      <p style={{ marginBottom: '30px' }}>
                        2. 제1항에 따른 권리 행사는 회사에 대해 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제7조 (개인정보의 파기)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. 개인정보 파기의 절차 및 방법은 다음과 같습니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}><strong>파기절차:</strong> 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                        <li style={{ marginBottom: '10px' }}><strong>파기방법:</strong> 회사는 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
                      </ul>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제8조 (개인정보 보호책임자)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                      </p>
                      <div className="privacy-info-box" style={{ background: '#f9fafa', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
                        <p style={{ marginBottom: '10px' }}><strong>개인정보 보호책임자</strong></p>
                        <p style={{ marginBottom: '5px' }}>성명: 홍길동</p>
                        <p style={{ marginBottom: '5px' }}>직책: 개인정보보호팀장</p>
                        <p style={{ marginBottom: '5px' }}>연락처: 000@000.000</p>
                        <p>전화: 00-0000-0000</p>
                      </div>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제9조 (개인정보의 안전성 확보조치)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
                        <li style={{ marginBottom: '10px' }}>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                        <li style={{ marginBottom: '10px' }}>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
                      </ul>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제10조 (개인정보처리방침 변경)
                      </h2>
                      <p style={{ marginBottom: '30px' }}>
                        이 개인정보처리방침은 2026년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                      </p>

                      <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #eee', fontSize: '14px', color: '#999' }}>
                        <p>최종 수정일: 2026년 1월 1일</p>
                        <p>본 방침은 2026년 1월 1일부터 시행됩니다.</p>
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
