# Next.js 프로젝트 베스트 프랙티스

이 문서는 프로젝트를 진행하면서 발생한 오류들을 방지하기 위한 가이드입니다.

## 1. 새 페이지/컴포넌트 생성 시 체크리스트

### 필수 사항

#### ✅ CSS 및 스타일링
- [ ] 새 섹션이 `display: block !important`로 설정되어 있는지 확인
- [ ] `visibility: visible !important`와 `opacity: 1 !important` 적용 확인
- [ ] AOS 애니메이션을 사용하는 경우 `AOSInit` 컴포넌트가 포함되어 있는지 확인

#### ✅ 이미지 처리
- [ ] Next.js `Image` 컴포넌트 사용 시 `unoptimized` 속성 추가 (필요시)
- [ ] 이미지 경로는 `/uploads/` 또는 `/images/`로 시작
- [ ] `public` 폴더에 이미지 파일이 실제로 존재하는지 확인

#### ✅ 데이터 관리
- [ ] 더미 데이터는 별도 파일(`lib/data/`)로 분리
- [ ] TypeScript 인터페이스 정의
- [ ] WordPress REST API 데이터가 있다면 JSON에서 추출

#### ✅ JavaScript 라이브러리
- [ ] Owl Carousel 사용 시: `useEffect`에서 초기화 및 cleanup 처리
- [ ] AOS 사용 시: `AOSInit` 컴포넌트 사용
- [ ] jQuery 의존성: CDN에서 동적 로드

### 섹션별 패턴

#### Tour/Hotel/Resort 등 서비스 섹션
```tsx
<div className="tour-area dot-style-one">
  <div className="container ptb-60">
    <div className="section-title" data-aos="fade-up" data-aos-duration="1200">
      {/* 제목 */}
    </div>
    <div className="row justify-content-center">
      {/* 아이템들 */}
    </div>
  </div>
</div>
```

#### 슬라이더가 필요한 섹션
- Owl Carousel 초기화 필요
- `useEffect`에서 jQuery와 Owl Carousel 로드 후 초기화
- Cleanup 함수에서 destroy 처리

#### AOS 애니메이션 사용
- `data-aos="fade-up"` 등 속성 추가
- `globals.css`에 `[data-aos]` 오버라이드 확인

## 2. 자주 발생하는 오류 및 해결책

### 오류 1: 백지 화면 (콘텐츠가 보이지 않음)
**원인**: `display: none`, `opacity: 0`, `visibility: hidden` 또는 AOS 미초기화

**해결**:
```css
/* globals.css에 추가 */
.새섹션-클래스 {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}
```

### 오류 2: 이미지가 로드되지 않음
**원인**: 잘못된 경로 또는 Next.js Image 최적화 문제

**해결**:
- `Image` 컴포넌트에 `unoptimized` 속성 추가
- 이미지 경로 확인 (`/uploads/` 또는 `/images/`)
- `public` 폴더에 파일 존재 확인

### 오류 3: 케러셀이 작동하지 않음
**원인**: Owl Carousel JavaScript 미초기화

**해결**:
- `useEffect`에서 jQuery와 Owl Carousel 동적 로드
- 초기화 전에 라이브러리 로드 완료 대기
- Cleanup에서 destroy 처리

### 오류 4: 애니메이션이 작동하지 않음
**원인**: AOS 라이브러리 미초기화

**해결**:
- `AOSInit` 컴포넌트를 페이지에 포함
- CDN에서 AOS CSS와 JS 로드 확인

## 3. 파일 구조

```
project/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃 (CSS import)
│   └── page.tsx           # 페이지 컴포넌트
├── components/            # React 컴포넌트
│   ├── Layout.tsx        # 메인 레이아웃
│   ├── Header.tsx        # 헤더
│   ├── Footer.tsx        # 푸터
│   ├── HomePage.tsx      # 홈페이지 콘텐츠
│   ├── Slider.tsx        # 슬라이더 (Owl Carousel)
│   └── AOSInit.tsx       # AOS 초기화
├── lib/
│   └── data/             # 데이터 파일들
│       └── homepage.ts   # 홈페이지 데이터
├── styles/               # CSS 파일들
│   ├── globals.css       # 전역 스타일 및 오버라이드
│   └── css/             # 원본 CSS 파일들
└── public/              # 정적 파일
    ├── images/          # 이미지
    ├── fonts/           # 폰트
    └── uploads/         # 업로드된 이미지
```

## 4. CSS 오버라이드 규칙

`globals.css`에 모든 섹션이 보이도록 오버라이드를 추가했습니다:

```css
/* 모든 섹션 영역 */
.tour-area, .hotel-area, .resort-area, ... {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

/* AOS 요소 */
[data-aos] {
  opacity: 1 !important;
  visibility: visible !important;
}
```

새 섹션을 추가할 때도 이 패턴을 따라주세요.

## 5. WordPress REST API 데이터 사용

wp-json에서 데이터를 추출하려면:

```bash
node scripts/extract-wp-json-data.js
```

이 스크립트는 `temp/wp-json/`에서 데이터를 읽어 `lib/data/`에 TypeScript 파일로 생성합니다.

## 6. 체크리스트 템플릿

새 페이지/컴포넌트 생성 시:

- [ ] 컴포넌트 생성 및 기본 구조 작성
- [ ] `lib/data/`에 데이터 파일 생성 (더미 데이터 분리)
- [ ] CSS 클래스명이 기존 패턴과 일치하는지 확인
- [ ] `globals.css`에 필요시 오버라이드 추가
- [ ] JavaScript 라이브러리 초기화 (Owl Carousel, AOS 등)
- [ ] 이미지 경로 및 `unoptimized` 속성 확인
- [ ] 브라우저에서 테스트 (콘텐츠가 보이는지 확인)

이 가이드를 따르면 앞으로 비슷한 오류를 방지할 수 있습니다.
