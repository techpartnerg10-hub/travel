// 통합 상품 데이터 - 유럽 여행 전문 여행사

// 여행 상품 타입 정의
export type ProductType = 'tour' | 'hotel' | 'resort' | 'flight' | 'car' | 'cruise'

// 테마 타입 정의
export type ThemeType = 
  | '로맨틱' 
  | '가족여행' 
  | '문화' 
  | '자연' 
  | '모험' 
  | '음식' 
  | '휴양' 
  | '스키' 
  | '해변' 
  | '도시탐방' 
  | '역사' 
  | '쇼핑'

// 여행 일정 인터페이스
export interface ItineraryDay {
  day: number
  title: string
  description: string
  meals: string[] // ['조식', '중식', '석식']
  activities: string[]
}

// 리뷰 인터페이스
export interface Review {
  id: string
  author: string
  rating: number
  date: string
  content: string
  images?: string[]
}

// 통합 상품 인터페이스
export interface TravelProduct {
  id: string
  slug: string
  name: string
  type: ProductType
  
  // 위치 정보
  country: string
  city?: string
  region?: string // 예: "프로방스", "토스카나"
  
  // 테마/태그
  themes: ThemeType[]
  
  // 기간/일정
  duration: number // 일 수
  itinerary?: ItineraryDay[] // 투어/패키지 상품의 경우
  
  // 가격 정보
  price: number // 원화 기준
  originalPrice?: number // 할인 전 가격
  currency?: string // 기본: KRW
  
  // 평점/리뷰
  rating: number // 1-5
  reviewCount: number
  reviews?: Review[]
  
  // 이미지
  thumbnail: string
  images: string[]
  
  // 설명
  shortDescription?: string // 목록에서 보여줄 짧은 설명
  description: string // 상세 페이지 본문
  highlights?: string[] // 하이라이트 키워드
  
  // 상태/배지
  isPromotion: boolean
  isNew: boolean
  isPopular: boolean
  badge?: string // "특가", "신규", "인기", "조기예약"
  
  // 포함/불포함 (투어/패키지)
  included?: string[]
  excluded?: string[]
  
  // 취소 정책
  cancellationPolicy?: string
  
  // 지도 관련
  mapImage?: string
  coordinates?: {
    lat: number
    lng: number
  }
  
  // 추가 정보
  capacity?: number // 최대 인원
  ageRestriction?: string // 연령 제한
  difficulty?: '쉬움' | '보통' | '어려움' // 활동 난이도
}

// 국가 목록 (유럽)
export const countries = [
  '프랑스', '이탈리아', '스페인', '독일', '영국', '그리스', 
  '네덜란드', '오스트리아', '스위스', '벨기에', '포르투갈', 
  '체코', '헝가리', '폴란드', '아일랜드', '덴마크', 
  '스웨덴', '노르웨이', '핀란드', '크로아티아', '터키'
] as const

// 도시 목록 (유럽 주요 도시)
export const cities = [
  // 프랑스
  '파리', '리옹', '니스', '마르세유', '보르도', '스트라스부르',
  // 이탈리아
  '로마', '베네치아', '밀라노', '피렌체', '나폴리', '볼로냐',
  // 스페인
  '마드리드', '바르셀로나', '세비야', '발렌시아', '그라나다',
  // 독일
  '베를린', '뮌헨', '함부르크', '프랑크푸르트', '드레스덴',
  // 영국
  '런던', '에딘버러', '옥스포드', '케임브리지', '배스',
  // 기타
  '아테네', '암스테르담', '비엔나', '취리히', '브뤼셀', '리스본', '프라하', '부다페스트'
] as const

// slug 생성 헬퍼 함수
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// 통합 상품 데이터 생성
// 300~400개 수준의 더미 데이터를 실제 서비스 수준의 텍스트로 작성

// 투어 상품 샘플 데이터 (150개 목표)
const tourProducts: TravelProduct[] = [
  {
    id: 'tour-001',
    slug: 'france-paris-3days',
    name: '프랑스 파리 3일 패키지 - 루브르부터 에펠탑까지',
    type: 'tour',
    country: '프랑스',
    city: '파리',
    themes: ['문화', '도시탐방', '역사', '로맨틱'],
    duration: 3,
    price: 2580000,
    originalPrice: 2980000,
    currency: 'KRW',
    rating: 4.8,
    reviewCount: 127,
    thumbnail: '/uploads/tour-1.jpg',
    images: [
      '/uploads/tour-1.jpg',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
      'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800'
    ],
    shortDescription: '파리의 대표 명소를 둘러보는 3일 패키지. 전문 가이드와 함께하는 프리미엄 유럽 여행입니다.',
    description: `파리, 세계에서 가장 아름다운 도시 중 하나로 꼽히는 곳입니다. 이 패키지는 파리의 대표 명소들을 전문 가이드와 함께 둘러보는 3일 코스입니다. 

루브르 박물관에서 모나리자와 함께하는 감동의 순간, 에펠탑 전망대에서 내려다보는 파리 전경, 노트르담 대성당과 센 강의 낭만적인 풍경까지. 파리의 역사와 문화를 만끽할 수 있는 특별한 여행입니다.

전문 한어 가이드가 함께하므로 언어 걱정 없이 여행하실 수 있으며, 우선 입장권으로 대기 시간 없이 명소를 관람할 수 있습니다. 또한 현지 맛집과 쇼핑 명소도 함께 안내해드립니다.

숙박은 파리 중심가의 4성급 호텔로, 에펠탑과 센 강을 조망할 수 있는 위치에 있습니다. 조식이 포함되어 있으며, 첫날 저녁 환영 디너가 포함되어 있습니다.`,
    highlights: [
      '루브르 박물관 우선 입장권 포함',
      '에펠탑 전망대 입장',
      '전문 한어 가이드 동행',
      '파리 중심가 4성급 호텔 숙박',
      '현지 맛집 및 쇼핑 안내'
    ],
    isPromotion: true,
    isNew: false,
    isPopular: true,
    badge: '특가',
    itinerary: [
      {
        day: 1,
        title: '파리 도착 - 노트르담과 센 강 유람',
        description: `인천국제공항에서 출발하여 파리 샤를 드 골 공항에 도착합니다. 공항에서 호텔로 이동 후 짐을 맡기고, 센 강 유람선을 타며 파리의 아름다운 전경을 감상합니다. 이후 노트르담 대성당을 방문하고, 센 강 근처의 전통 프랑스 레스토랑에서 환영 디너를 즐깁니다.`,
        meals: ['석식'],
        activities: [
          '파리 샤를 드 골 공항 도착',
          '호텔 체크인',
          '센 강 유람선 투어',
          '노트르담 대성당 방문',
          '환영 디너 (전통 프랑스 요리)'
        ]
      },
      {
        day: 2,
        title: '루브르 박물관 & 에펠탑',
        description: `오늘은 파리의 대표 명소들을 방문합니다. 아침 일찍 루브르 박물관에 방문하여 모나리자, 비너스상 등 세계적인 작품들을 감상합니다. 점심 식사 후 에펠탑 전망대에 올라 파리 전경을 내려다봅니다. 저녁에는 몽마르트 언덕의 분위기 있는 레스토랑에서 저녁 식사를 즐깁니다.`,
        meals: ['조식', '중식', '석식'],
        activities: [
          '루브르 박물관 방문 (우선 입장)',
          '모나리자 및 유명 작품 감상',
          '에펠탑 전망대 방문',
          '몽마르트 언덕 산책',
          '저녁 식사 (현지 맛집)'
        ]
      },
      {
        day: 3,
        title: '베르사유 궁전 & 출발',
        description: `마지막 날은 파리 근교의 베르사유 궁전을 방문합니다. 화려한 바로크 건축물과 아름다운 정원을 둘러본 후, 파리 시내로 돌아와 자유시간 동안 쇼핑을 즐길 수 있습니다. 저녁 시간에 호텔을 체크아웃하고 공항으로 이동하여 출발합니다.`,
        meals: ['조식'],
        activities: [
          '베르사유 궁전 방문',
          '베르사유 정원 산책',
          '자유시간 (쇼핑)',
          '호텔 체크아웃',
          '공항 이동 및 출발'
        ]
      }
    ],
    included: [
      '왕복 항공권 (인천-파리)',
      '2박 호텔 숙박 (4성급, 조식 포함)',
      '전문 한어 가이드 서비스',
      '모든 입장권 (루브르, 에펠탑, 베르사유)',
      '센 강 유람선 티켓',
      '환영 디너 (1회)',
      '현지 이동 교통비',
      '여행 보험'
    ],
    excluded: [
      '개인 경비',
      '추가 식사비',
      '선택 관광비',
      '팁 (가이드, 기사)',
      '비자 발급비 (필요시)'
    ],
    cancellationPolicy: '출발 30일 전 취소: 전액 환불\n출발 15일 전 취소: 70% 환불\n출발 7일 전 취소: 50% 환불\n출발 3일 전 취소: 환불 불가',
    capacity: 20,
    ageRestriction: '만 2세 이상',
    difficulty: '쉬움'
  }
]

// 호텔 상품 샘플 데이터
const hotelProducts: TravelProduct[] = [
  {
    id: 'hotel-001',
    slug: 'ritz-paris',
    name: '리츠 파리 - 샹젤리제 최고급 호텔',
    type: 'hotel',
    country: '프랑스',
    city: '파리',
    themes: ['로맨틱', '럭셔리', '도시탐방'],
    duration: 1,
    price: 450000,
    originalPrice: 500000,
    currency: 'KRW',
    rating: 4.9,
    reviewCount: 245,
    thumbnail: '/uploads/hotel-1.jpg',
    images: [
      '/uploads/hotel-1.jpg',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
    ],
    shortDescription: '파리 샹젤리제에 위치한 세계 최고급 호텔. 럭셔리한 객실과 최상의 서비스를 제공합니다.',
    description: `리츠 파리는 1898년에 문을 연 세계 최고급 호텔로, 코코 샤넬과 헤밍웨이 등 수많은 명사들이 머물렀던 역사적인 호텔입니다.

샹젤리제 대로에 위치하여 루브르 박물관과 에펠탑까지 도보로 쉽게 이동할 수 있으며, 파리의 아름다운 전경을 조망할 수 있는 전망 좋은 위치에 있습니다.

각 객실은 프랑스 특유의 우아함과 현대적인 편의시설이 완벽하게 조화를 이루고 있으며, 최고급 이탈리안 리넨 시트와 독일 명품 욕실 시설을 갖추고 있습니다.

호텔 내 3개 레스토랑에서는 미쉐린 스타 셰프가 준비한 정통 프랑스 요리와 세계 각국의 요리를 즐길 수 있으며, 24시간 룸서비스도 제공됩니다.`,
    highlights: [
      '파리 샹젤리제 중심가 위치',
      '미쉐린 스타 레스토랑 3곳',
      '최고급 스파 & 피트니스 센터',
      '개인 컨시어지 서비스',
      '전 객실 파리 전망'
    ],
    isPromotion: true,
    isNew: false,
    isPopular: true,
    badge: '특가',
    cancellationPolicy: '체크인 48시간 전 취소: 무료\n체크인 24시간 전 취소: 50% 환불\n당일 취소: 환불 불가',
    coordinates: {
      lat: 48.8698,
      lng: 2.3298
    }
  },
  {
    id: 'hotel-002',
    slug: 'savoy-london',
    name: '사보이 런던 - 템스강 전망 럭셔리 호텔',
    type: 'hotel',
    country: '영국',
    city: '런던',
    themes: ['로맨틱', '럭셔리', '도시탐방', '문화'],
    duration: 1,
    price: 520000,
    currency: 'KRW',
    rating: 4.8,
    reviewCount: 189,
    thumbnail: '/uploads/hotel-2.jpg',
    images: [
      '/uploads/hotel-2.jpg',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800'
    ],
    shortDescription: '런던 템스강을 조망하는 5성급 호텔. 빅벤과 타워 브리지가 보이는 최고의 위치입니다.',
    description: `사보이 런던은 1889년에 문을 연 런던 최고의 명문 호텔로, 19세기 빅토리아 시대의 화려함과 현대적인 편의시설이 만나는 곳입니다.

템스강을 바로 앞에 두고 있어 빅벤, 타워 브리지, 런던 아이 등 런던의 대표 명소들을 창밖에서 감상할 수 있는 최고의 전망을 자랑합니다.

127개의 객실과 스위트는 각각 개성이 뚜렷하게 디자인되었으며, 고급 원목 가구와 빅토리아 시대의 아름다운 인테리어로 꾸며져 있습니다.

세계적인 명성을 자랑하는 고든 램지 레스토랑에서 미쉐린 스타 요리를 즐길 수 있으며, 전통 영국식 애프터눈 티도 유명합니다.`,
    highlights: [
      '템스강 전망 최고 위치',
      '미쉐린 3스타 고든 램지 레스토랑',
      '세계적인 애프터눈 티',
      '127개 독특한 개성의 객실',
      '빅토리아 시대 인테리어'
    ],
    isPromotion: false,
    isNew: false,
    isPopular: true,
    badge: '인기',
    cancellationPolicy: '체크인 48시간 전 취소: 무료\n체크인 24시간 전 취소: 50% 환불\n당일 취소: 환불 불가'
  }
]

// 리조트 상품 샘플 데이터
const resortProducts: TravelProduct[] = [
  {
    id: 'resort-001',
    slug: 'alps-ski-resort',
    name: '알프스 스키 리조트 - 프리미엄 스키 패키지',
    type: 'resort',
    country: '스위스',
    region: '알프스',
    themes: ['스키', '자연', '휴양', '모험'],
    duration: 5,
    price: 3200000,
    originalPrice: 3800000,
    currency: 'KRW',
    rating: 4.7,
    reviewCount: 156,
    thumbnail: '/uploads/resort-1.jpg',
    images: [
      '/uploads/resort-1.jpg',
      'https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=800'
    ],
    shortDescription: '스위스 알프스 최고의 스키 리조트. 프리미엄 스키 패키지와 럭셔리 스파를 즐기세요.',
    description: `스위스 알프스의 아름다운 자연 속에 자리한 프리미엄 스키 리조트입니다. 유럽 최고 수준의 스키 슬로프와 최신식 리프트 시설을 갖추고 있습니다.

5일 동안 스키를 즐기며 알프스의 설원을 탐험할 수 있으며, 초보자부터 전문가까지 모두 만족할 수 있는 다양한 난이도의 코스가 준비되어 있습니다.

리조트 내에는 세계적 수준의 스파 센터가 있어 스키 후 피로를 풀 수 있으며, 3개의 레스토랑에서 스위스 전통 요리와 국제 요리를 제공합니다.

모든 객실은 알프스 설원 전망을 갖추고 있으며, 벽난로와 개인 테라스가 있는 스위트 룸도 이용하실 수 있습니다.`,
    highlights: [
      '유럽 최고 수준 스키 슬로프',
      '초보자부터 전문가까지 다양한 코스',
      '프리미엄 스파 & 웰니스 센터',
      '알프스 설원 전망 모든 객실',
      '스키 장비 렌탈 포함'
    ],
    isPromotion: true,
    isNew: false,
    isPopular: true,
    badge: '특가',
    cancellationPolicy: '출발 30일 전 취소: 전액 환불\n출발 15일 전 취소: 70% 환불\n출발 7일 전 취소: 환불 불가'
  }
]

// 항공권 상품 샘플 데이터
const flightProducts: TravelProduct[] = [
  {
    id: 'flight-001',
    slug: 'air-france-paris',
    name: '에어 프랑스 - 인천-파리 직항편',
    type: 'flight',
    country: '프랑스',
    city: '파리',
    themes: ['도시탐방'],
    duration: 1,
    price: 1800000,
    currency: 'KRW',
    rating: 4.6,
    reviewCount: 523,
    thumbnail: '/uploads/flight-default.jpg',
    images: [
      '/uploads/flight-default.jpg',
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800'
    ],
    shortDescription: '에어 프랑스 프리미엄 직항편. 편안한 비행과 프랑스 특유의 우아한 서비스를 경험하세요.',
    description: `에어 프랑스는 한국과 유럽을 연결하는 주요 항공사로, 인천과 파리 샤를 드 골 공항을 매일 직항으로 운항합니다.

넓은 좌석 간격과 최신식 편의시설로 장거리 비행도 편안하게 즐길 수 있으며, 프랑스 명품 요리사의 메뉴와 최고급 와인을 제공합니다.

기내 엔터테인먼트 시스템에서는 최신 영화, 음악, 게임을 무료로 이용할 수 있으며, Wi-Fi 서비스도 이용 가능합니다.

비즈니스 클래스와 이코노미 클래스 모두 프랑스 특유의 우아한 서비스와 세심한 배려를 경험하실 수 있습니다.`,
    highlights: [
      '인천-파리 직항 매일 운항',
      '넓은 좌석 간격',
      '프랑스 명품 요리 메뉴',
      '최신 엔터테인먼트 시스템',
      '기내 Wi-Fi 제공'
    ],
    isPromotion: false,
    isNew: false,
    isPopular: true,
    badge: '인기'
  }
]

// 렌터카 상품 샘플 데이터
const carProducts: TravelProduct[] = [
  {
    id: 'car-001',
    slug: 'bmw-3-series-europe',
    name: 'BMW 3시리즈 - 유럽 렌터카',
    type: 'car',
    country: '독일',
    themes: ['모험', '자유여행'],
    duration: 7,
    price: 120000,
    currency: 'KRW',
    rating: 4.5,
    reviewCount: 312,
    thumbnail: '/uploads/car-9.jpg',
    images: [
      '/uploads/car-9.jpg',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'
    ],
    shortDescription: '유럽 전역에서 이용 가능한 BMW 3시리즈 렌터카. 자유롭게 유럽을 여행하세요.',
    description: `BMW 3시리즈는 유럽 여행에 최적화된 세단으로, 편안한 승차감과 뛰어난 연비로 장거리 여행에도 이상적입니다.

유럽 전역의 주요 공항과 도시에서 픽업/반납이 가능하며, 완벽한 보험 패키지가 포함되어 있어 안심하고 이용하실 수 있습니다.

최신 내비게이션 시스템과 글로벌 로밍을 지원하는 Wi-Fi를 무료로 제공하며, 어린이 시트 등 필요한 옵션도 추가할 수 있습니다.

24시간 긴급 서비스 지원으로 갑작스러운 문제 발생 시에도 빠른 해결이 가능하며, 자세한 유럽 운전 가이드도 제공해드립니다.`,
    highlights: [
      '유럽 전역 픽업/반납 가능',
      '완벽한 보험 패키지 포함',
      '내비게이션 & Wi-Fi 무료',
      '24시간 긴급 서비스',
      '추가 옵션 선택 가능'
    ],
    isPromotion: false,
    isNew: false,
    isPopular: true
  }
]

// 크루즈 상품 샘플 데이터
const cruiseProducts: TravelProduct[] = [
  {
    id: 'cruise-001',
    slug: 'mediterranean-grand-cruise',
    name: '지중해 그랜드 크루즈 - 7박 8일',
    type: 'cruise',
    country: '그리스',
    themes: ['휴양', '자연', '해변', '문화'],
    duration: 8,
    price: 4500000,
    originalPrice: 5200000,
    currency: 'KRW',
    rating: 4.8,
    reviewCount: 267,
    thumbnail: '/uploads/cruise-9.jpg',
    images: [
      '/uploads/cruise-9.jpg',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
    ],
    shortDescription: '지중해의 아름다운 섬들을 둘러보는 프리미엄 크루즈. 그리스, 이탈리아, 터키를 만나보세요.',
    description: `지중해의 푸른 바다를 항해하며 그리스의 산토리니, 이탈리아의 아말피 해안, 터키의 에페소스 등 유럽 최고의 여행지를 방문하는 7박 8일 크루즈입니다.

세계적인 크루즈 라인의 프리미엄 선박에서 모든 식사, 엔터테인먼트, 수영장, 스파 등 모든 시설을 무료로 이용하실 수 있습니다.

각 항구 도시에서는 전문 가이드와 함께하는 상륙 투어가 포함되어 있으며, 자유시간 동안 개별 관광도 가능합니다.

선상에서는 매일 다양한 엔터테인먼트와 공연이 준비되어 있으며, 세계 각국 요리를 맛볼 수 있는 레스토랑과 바가 운영됩니다.`,
    highlights: [
      '지중해 최고 여행지 7개 방문',
      '모든 식사 & 엔터테인먼트 포함',
      '프리미엄 스위트 객실',
      '전문 가이드 상륙 투어',
      '선상 스파 & 수영장 이용'
    ],
    isPromotion: true,
    isNew: false,
    isPopular: true,
    badge: '특가',
    cancellationPolicy: '출발 60일 전 취소: 전액 환불\n출발 30일 전 취소: 70% 환불\n출발 14일 전 취소: 환불 불가'
  }
]

// 통합 상품 데이터 (투어 + 호텔 + 리조트 + 항공권 + 렌터카 + 크루즈)
export const allProducts: TravelProduct[] = [
  ...tourProducts,
  ...hotelProducts,
  ...resortProducts,
  ...flightProducts,
  ...carProducts,
  ...cruiseProducts
]

// 상품 검색 및 필터링 헬퍼 함수
export function getProductsByType(type: ProductType): TravelProduct[] {
  return allProducts.filter(product => product.type === type)
}

export function getProductsByCountry(country: string): TravelProduct[] {
  return allProducts.filter(product => product.country === country)
}

export function getProductsByTheme(theme: ThemeType): TravelProduct[] {
  return allProducts.filter(product => product.themes.includes(theme))
}

export function getProductBySlug(slug: string): TravelProduct | undefined {
  return allProducts.find(product => product.slug === slug)
}
