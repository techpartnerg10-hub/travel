import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer-wrap">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row ptb-60">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
              <div className="footer-widget">
                <Link className="footer-logo" href="/">
                  <Logo />
                </Link>
                <div className="comp-desc">
                  <p>여행의 모든 순간이 특별하도록! 최고의 서비스로 완벽한 여행 경험을 선사합니다. 지금 바로 구독하고 특별한 혜택을 받아보세요.</p>
                </div>
                <div className="newsletter-form">
                  <form id="mc4wp-form-1" className="mc4wp-form" method="post">
                    <div className="mc4wp-form-fields">
                      <div className="newsletter-form">
                        <input type="email" name="EMAIL" placeholder="이메일 주소를 입력해주세요" required />
                        <button type="submit">구독하기</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 ps-md-5">
              <div className="footer-widget">
                <h3 className="footer-widget-title">법적/정책 정보</h3>
                <ul className="footer-menu list-style">
                  <li><Link href="/terms-of-service">이용약관</Link></li>
                  <li><Link href="/privacy-policy">개인정보처리방침</Link></li>
                  <li><Link href="/travel-terms">여행약관</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-md-5">
              <div className="footer-widget">
                <h3 className="footer-widget-title">연락처 정보</h3>
                <ul className="contact-info list-style">
                  <li>
                    <i aria-hidden="true" className="bx bx-location-plus"></i>
                    <h6>주소</h6>
                    <p>000시 000구, 000로 000번지</p>
                  </li>
                  <li>
                    <i aria-hidden="true" className="bx bx-envelope"></i>
                    <h6>이메일</h6>
                    <a href="mailto:000@000.000">000@000.000</a>
                  </li>
                  <li>
                    <i aria-hidden="true" className="bx bx-phone-call"></i>
                    <h6>전화번호</h6>
                    <a href="tel:+00 000 000 000">+00 000 000 000</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p className="copyright-text">
                © 2026 Copyright OurTrip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
