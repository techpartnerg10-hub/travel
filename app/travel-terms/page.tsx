'use client'

import Layout from '@/components/Layout'

export default function TravelTermsPage() {
  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          {/* Page Header */}
          <section className="page-title-section" style={{ paddingTop: '150px', paddingBottom: '80px', background: '#f9fafa' }}>
            <div className="container">
              <h1 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '48px', fontWeight: 700, color: '#354A5E', marginBottom: '20px' }}>
                여행약관
              </h1>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
                OurTrip 여행 상품 이용에 관한 약관을 확인하실 수 있습니다.
              </p>
            </div>
          </section>

          {/* Travel Terms Content */}
          <section style={{ padding: '80px 0' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="travel-terms-content" style={{ background: '#fff', padding: '60px', borderRadius: '10px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)' }}>
                    <div className="travel-terms-text" style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}>
                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E' }}>
                        제1조 (목적)
                      </h2>
                      <p style={{ marginBottom: '30px' }}>
                        이 약관은 OurTrip(이하 "회사"라 함)이 여행업을 경영하면서 여행자와 체결한 국외여행계약 및 이와 관련하여 회사가 제공하는 서비스에 대한 회사와 여행자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제2조 (용어의 정의)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. "여행계약"이라 함은 회사가 제공하는 여행상품(여행일정표에 표시된 여행서비스)을 여행자에게 제공하기로 하고 여행자는 그에 대한 여행요금을 지급하기로 하는 계약을 말합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. "여행자"라 함은 여행계약에 따라 여행을 하거나 할 권리를 가진 자 및 여행에 동반하는 자를 말합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        3. "여행일정표"라 함은 여행사항과 여행조건을 여행자에게 알리기 위해 회사가 작성하여 여행자에게 교부한 여행약관·여행요금 포함 계약서 및 여행설명서를 말합니다.
                      </p>
                      <p style={{ marginBottom: '30px' }}>
                        4. "여행요금"이라 함은 여행계약에 따른 계약금, 중도금 및 잔금을 말합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제3조 (여행계약의 체결)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회사는 여행일정표를 작성하여 여행자에게 교부하고 설명한 후 여행자의 동의를 받아 여행계약을 체결합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. 여행일정표에는 여행목적지, 일정, 교통수단, 숙박업소, 여행요금, 여행조건 등 여행사항이 기재되어야 합니다.
                      </p>
                      <p style={{ marginBottom: '30px' }}>
                        3. 회사는 여행자가 요청하는 경우 여행일정표 사본이나 약관의 중요한 내용을 설명하여야 합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제4조 (여행요금)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 여행요금에는 다음 각 호의 비용이 포함됩니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}>항공, 선박, 기차 등 교통기관의 운임</li>
                        <li style={{ marginBottom: '10px' }}>공항, 항만, 역 등의 이용료</li>
                        <li style={{ marginBottom: '10px' }}>숙박비 및 식사비(여행일정표에 명시된 경우)</li>
                        <li style={{ marginBottom: '10px' }}>안내자 비용(여행안내자가 동행하는 경우)</li>
                        <li style={{ marginBottom: '10px' }}>여행 중 필요한 각종 세금</li>
                        <li style={{ marginBottom: '10px' }}>국내외 공항, 항만시설이용료</li>
                        <li style={{ marginBottom: '10px' }}>일정표내 관광지 입장료</li>
                      </ul>
                      <p style={{ marginBottom: '20px' }}>
                        2. 여행요금에는 다음 각 호의 비용이 포함되지 아니합니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}>개인적으로 지출하는 일체의 비용(통신비, 세탁비, 봉사료, 개인적 소비지출 등)</li>
                        <li style={{ marginBottom: '10px' }}>여행일정표에 명시되지 않은 식사 및 음료</li>
                        <li style={{ marginBottom: '10px' }}>여행자의 귀책사유로 인한 추가비용</li>
                        <li style={{ marginBottom: '10px' }}>여행보험료(여행자가 별도 가입하는 경우)</li>
                        <li style={{ marginBottom: '10px' }}>비자 취득비용</li>
                      </ul>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제5조 (여행요금의 지급)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 여행자는 여행계약을 체결할 때 계약금으로 여행요금 총액의 10% 이상을 지급하여야 하며, 계약금을 지급하지 아니한 경우 여행계약은 성립하지 아니한 것으로 봅니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. 여행자는 여행출발일 전 15일까지(당일 출발하는 경우에는 즉시) 여행요금 중 계약금을 제외한 잔금을 회사에게 지급하여야 합니다.
                      </p>
                      <p style={{ marginBottom: '30px' }}>
                        3. 여행자가 제1항 및 제2항의 여행요금을 지급하지 아니한 경우 회사는 여행계약을 해제할 수 있습니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제6조 (여행조건의 변경요건 및 요금 등의 정산)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 여행자는 여행의 개시 전에 당사자 간의 합의로 여행계약의 내용을 변경할 수 있습니다. 이 경우 변경으로 인하여 추가 비용이 발생하면 여행자는 그 비용을 지급하여야 하며, 요금이 감소하면 회사는 이를 여행자에게 환불하여야 합니다.
                      </p>
                      <p style={{ marginBottom: '20px' }}>
                        2. 천재지변, 전란, 정부의 명령, 운송·숙박기관 등의 파업·훈련 등으로 여행의 목적달성이 불가능한 경우에는 회사와 여행자는 여행계약을 해제할 수 있습니다.
                      </p>
                      <p style={{ marginBottom: '30px' }}>
                        3. 제2항의 해제로 인하여 손해가 발생한 경우 회사는 손해배상을 하지 아니합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제7조 (여행자의 책임)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 여행자는 다음 각 호의 사유로 인하여 회사 또는 제3자에게 손해를 끼친 경우 손해를 배상할 책임이 있습니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}>여행자가 여행계약상 의무 또는 준수사항을 위반한 경우</li>
                        <li style={{ marginBottom: '10px' }}>여행자의 고의 또는 과실로 인한 사고가 발생한 경우</li>
                        <li style={{ marginBottom: '10px' }}>여행자가 여권 소지, 비자 획득 등의 의무를 위반한 경우</li>
                      </ul>
                      <p style={{ marginBottom: '30px' }}>
                        2. 여행자는 여행을 떠나기 전에 여권, 비자, 예방접종 등의 필요사항을 확인하고 준수하여야 합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제8조 (계약해제)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 여행자는 여행의 개시 전에 언제든지 여행계약을 해제할 수 있습니다. 다만, 여행자가 여행계약을 해제하는 경우 다음 각 호의 기준에 따라 여행요금을 환불받습니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}>여행개시 30일 전까지 해제 통보 시: 여행요금 전액 환불</li>
                        <li style={{ marginBottom: '10px' }}>여행개시 20일 전까지 해제 통보 시: 여행요금의 10% 공제 후 환불</li>
                        <li style={{ marginBottom: '10px' }}>여행개시 10일 전까지 해제 통보 시: 여행요금의 30% 공제 후 환불</li>
                        <li style={{ marginBottom: '10px' }}>여행개시 전일까지 해제 통보 시: 여행요금의 50% 공제 후 환불</li>
                        <li style={{ marginBottom: '10px' }}>여행개시일 이후 해제 또는 여행에 불참한 경우: 여행요금의 100% 공제(환불불가)</li>
                      </ul>
                      <p style={{ marginBottom: '30px' }}>
                        2. 회사는 여행자에게 다음 각 호의 1에 해당하는 사유가 있을 때에는 여행계약을 해제할 수 있습니다.
                      </p>
                      <ul style={{ paddingLeft: '30px', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}>다른 여행자에게 폐를 끼치거나 여행의 원활한 실시를 현저히 방해할 우려가 있다고 인정될 때</li>
                        <li style={{ marginBottom: '10px' }}>질병 등 여행자의 신체사정으로 여행의 참가가 불가능할 때</li>
                        <li style={{ marginBottom: '10px' }}>여행자가 여행요금을 정해진 기일 내에 지급하지 아니할 때</li>
                      </ul>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제9조 (여행보험)
                      </h2>
                      <p style={{ marginBottom: '30px' }}>
                        회사는 여행자의 안전과 보호를 위하여 여행자에게 여행보험(여행자보험, 항공사고보험 등) 가입을 권장하며, 여행자가 동의한 경우 여행보험에 가입할 수 있도록 협조합니다.
                      </p>

                      <h2 style={{ fontFamily: "'Gowun Batang', 'Nanum Myeongjo', serif", fontSize: '28px', fontWeight: 600, marginBottom: '30px', color: '#354A5E', marginTop: '50px' }}>
                        제10조 (손해배상)
                      </h2>
                      <p style={{ marginBottom: '20px' }}>
                        1. 회사가 여행자에게 손해를 끼친 경우에는 여행약관 및 관계법령에 따라 여행자에게 손해를 배상합니다.
                      </p>
                      <p style={{ marginBottom: '30px' }}>
                        2. 회사는 여행자에게 손해를 끼친 경우 여행일정표상 여행요금을 한도로 하여 손해를 배상합니다.
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
