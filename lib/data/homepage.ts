// 홈페이지 데이터 - WordPress REST API에서 추출

export interface Tour {
  name: string
  price: string
  image: string
  link: string
}

export interface Hotel {
  name: string
  price: string
  image: string
  link: string
}

export interface Resort {
  name: string
  price: string
  image: string
  link: string
}

export interface Flight {
  name: string
  price: string
  image: string
  link: string
}

export interface Car {
  name: string
  price: string
  image: string
  link: string
}

export interface Cruise {
  name: string
  price: string
  image: string
  link: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  role: string
  image: string
}

export interface Agent {
  name: string
  role: string
  image: string
  link: string
}

export interface Blog {
  title: string
  image: string
  category: string
  link: string
  slug?: string
  content?: string
  excerpt?: string
  date?: string
  author?: string
}

export const tours: Tour[] = [
  {
    "name": "프랑스",
    "price": "$129.00",
    "image": "/uploads/tour-1.jpg",
    "link": "/tour/france"
  },
  {
    "name": "이탈리아",
    "price": "$119.00",
    "image": "/uploads/tour-2.jpg",
    "link": "/tour/italy"
  },
  {
    "name": "스페인",
    "price": "$109.00",
    "image": "/uploads/tour-3.jpg",
    "link": "/tour/spain"
  },
  {
    "name": "독일",
    "price": "$124.00",
    "image": "/uploads/tour-4.jpg",
    "link": "/tour/germany"
  },
  {
    "name": "영국",
    "price": "$134.00",
    "image": "/uploads/tour-5.jpg",
    "link": "/tour/united-kingdom"
  },
  {
    "name": "그리스",
    "price": "$104.00",
    "image": "/uploads/tour-6.jpg",
    "link": "/tour/greece"
  },
  {
    "name": "네덜란드",
    "price": "$114.00",
    "image": "/uploads/tour-7.jpg",
    "link": "/tour/netherlands"
  },
  {
    "name": "오스트리아",
    "price": "$119.00",
    "image": "/uploads/tour-8.jpg",
    "link": "/tour/austria"
  },
  {
    "name": "스위스",
    "price": "$149.00",
    "image": "/uploads/tour-9.jpg",
    "link": "/tour/switzerland"
  }
]

export const hotels: Hotel[] = [
  {
    "name": "리츠 파리",
    "price": "$299.99",
    "image": "/uploads/hotel-1.jpg",
    "link": "/hotel/ritz-paris"
  },
  {
    "name": "사보이 런던",
    "price": "$349.99",
    "image": "/uploads/hotel-2.jpg",
    "link": "/hotel/savoy-london"
  },
  {
    "name": "호텔 플라자 아테네",
    "price": "$179.99",
    "image": "/uploads/hotel-3.jpg",
    "link": "/hotel/hotel-plaza-athens"
  },
  {
    "name": "비아도로마 바르셀로나",
    "price": "$249.99",
    "image": "/uploads/hotel-4.jpg",
    "link": "/hotel/hotel-viadoroma-barcelona"
  },
  {
    "name": "부르겐스톡 루체른",
    "price": "$399.99",
    "image": "/uploads/hotel-5.jpg",
    "link": "/hotel/burgenstock-lucerne"
  }
]

export const resorts: Resort[] = [
  {
    "name": "알프스 스키 리조트",
    "price": "$199.99",
    "image": "/uploads/resort-1.jpg",
    "link": "/resort/alps-ski-resort"
  },
  {
    "name": "지중해 비치 리조트",
    "price": "$179.99",
    "image": "/uploads/resort-2.jpg",
    "link": "/resort/mediterranean-beach-resort"
  },
  {
    "name": "스위스 마운틴 리조트",
    "price": "$229.99",
    "image": "/uploads/resort-3.jpg",
    "link": "/resort/swiss-mountain-resort"
  },
  {
    "name": "사르데냐 리조트",
    "price": "$209.99",
    "image": "/uploads/resort-4.jpg",
    "link": "/resort/sardinia-resort"
  },
  {
    "name": "아드리아해 리조트",
    "price": "$159.99",
    "image": "/uploads/resort-5.jpg",
    "link": "/resort/adriatic-resort"
  },
  {
    "name": "프로방스 리조트",
    "price": "$189.99",
    "image": "/uploads/resort-6.jpg",
    "link": "/resort/provence-resort"
  },
  {
    "name": "노르웨이 피요르드 리조트",
    "price": "$249.99",
    "image": "/uploads/resort-7.jpg",
    "link": "/resort/norway-fjord-resort"
  },
  {
    "name": "토스카나 힐스 리조트",
    "price": "$199.99",
    "image": "/uploads/resort-8.jpg",
    "link": "/resort/tuscany-hills-resort"
  }
]

export const flights: Flight[] = [
  {
    "name": "에어 프랑스",
    "price": "$240.00",
    "image": "/uploads/flight-default.jpg",
    "link": "/flight/air-france"
  },
  {
    "name": "루프트한자",
    "price": "$260.00",
    "image": "/uploads/flight-1.jpg",
    "link": "/flight/lufthansa"
  },
  {
    "name": "KLM",
    "price": "$230.00",
    "image": "/uploads/flight-2.jpg",
    "link": "/flight/klm"
  },
  {
    "name": "브리티시 항공",
    "price": "$250.00",
    "image": "/uploads/flight-3.jpg",
    "link": "/flight/british-airways"
  },
  {
    "name": "이베리아 항공",
    "price": "$220.00",
    "image": "/uploads/flight-4.jpg",
    "link": "/flight/iberia"
  },
  {
    "name": "알리탈리아",
    "price": "$235.00",
    "image": "/uploads/flight-5.jpg",
    "link": "/flight/alitalia"
  }
]

export const cars: Car[] = [
  {
    "name": "BMW 3시리즈",
    "price": "$85.00",
    "image": "/uploads/car-9.jpg",
    "link": "/car/bmw-3-series"
  },
  {
    "name": "메르세데스 벤츠 C클래스",
    "price": "$95.00",
    "image": "/uploads/car-1.jpg",
    "link": "/car/mercedes-benz-c-class"
  },
  {
    "name": "아우디 A4",
    "price": "$90.00",
    "image": "/uploads/car-2.jpg",
    "link": "/car/audi-a4"
  },
  {
    "name": "볼보 XC60",
    "price": "$100.00",
    "image": "/uploads/car-3.jpg",
    "link": "/car/volvo-xc60"
  },
  {
    "name": "포르쉐 카이엔",
    "price": "$150.00",
    "image": "/uploads/car-4.jpg",
    "link": "/car/porsche-cayenne"
  },
  {
    "name": "피아트 500",
    "price": "$45.00",
    "image": "/uploads/car-5.jpg",
    "link": "/car/fiat-500"
  },
  {
    "name": "르노 클리오",
    "price": "$40.00",
    "image": "/uploads/car-6.jpg",
    "link": "/car/renault-clio"
  },
  {
    "name": "폭스바겐 골프",
    "price": "$55.00",
    "image": "/uploads/car-7.jpg",
    "link": "/car/volkswagen-golf"
  },
  {
    "name": "시트 이비자",
    "price": "$42.00",
    "image": "/uploads/car-8.jpg",
    "link": "/car/seat-ibiza"
  }
]

export const cruises: Cruise[] = [
  {
    "name": "지중해 그랜드 크루즈",
    "price": "$399.99",
    "image": "/uploads/cruise-9.jpg",
    "link": "/cruise/mediterranean-grand"
  },
  {
    "name": "노르딕 피요르드 크루즈",
    "price": "$449.99",
    "image": "/uploads/cruise-1.jpg",
    "link": "/cruise/nordic-fjord"
  },
  {
    "name": "그리스 아일랜드 크루즈",
    "price": "$349.99",
    "image": "/uploads/cruise-2.jpg",
    "link": "/cruise/greek-islands"
  },
  {
    "name": "발트해 탐험 크루즈",
    "price": "$379.99",
    "image": "/uploads/cruise-3.jpg",
    "link": "/cruise/baltic-explorer"
  },
  {
    "name": "이탈리아 리비에라 크루즈",
    "price": "$329.99",
    "image": "/uploads/cruise-4.jpg",
    "link": "/cruise/italian-riviera"
  },
  {
    "name": "스페인 코스타 크루즈",
    "price": "$309.99",
    "image": "/uploads/cruise-5.jpg",
    "link": "/cruise/spanish-costa"
  },
  {
    "name": "프랑스 코트 다쥐르 크루즈",
    "price": "$419.99",
    "image": "/uploads/cruise-6.jpg",
    "link": "/cruise/french-cote-dazur"
  },
  {
    "name": "아드리아해 크루즈",
    "price": "$359.99",
    "image": "/uploads/cruise-7.jpg",
    "link": "/cruise/adriatic"
  },
  {
    "name": "북해 라이트하우스 크루즈",
    "price": "$389.99",
    "image": "/uploads/cruise-8.jpg",
    "link": "/cruise/north-sea-lighthouse"
  }
]

export const agents: Agent[] = [
  {
    "name": "케네스 틴클",
    "role": "여행 컨설턴트",
    "image": "/uploads/team-1.jpg",
    "link": "/agent/kenneth-tinkle"
  },
  {
    "name": "셰런 골반",
    "role": "여행 컨설턴트",
    "image": "/uploads/team-2.jpg",
    "link": "/agent/sharon-golban"
  },
  {
    "name": "클레어 아처",
    "role": "여행 컨설턴트",
    "image": "/uploads/team-3.jpg",
    "link": "/agent/claire-archer"
  },
  {
    "name": "사라 쿠퍼",
    "role": "여행 컨설턴트",
    "image": "/uploads/team-4.jpg",
    "link": "/agent/sarah-cooper"
  },
  {
    "name": "팀 카바나",
    "role": "여행 컨설턴트",
    "image": "/uploads/team-5.jpg",
    "link": "/agent/tim-cavanaugh"
  },
  {
    "name": "로즈 제닝스",
    "role": "여행 컨설턴트",
    "image": "/uploads/team-6.jpg",
    "link": "/agent/rose-jennings"
  }
]

export const blogs: Blog[] = [
  {
    "title": "프랑스 파리 여행 필수 가이드: 루브르부터 에펠탑까지",
    "image": "/uploads/blog-1.jpg",
    "category": "프랑스",
    "link": "/blog/france-paris-travel-essential-guide",
    "slug": "france-paris-travel-essential-guide",
    "excerpt": "프랑스 파리 여행의 필수 코스를 소개합니다. 루브르 박물관부터 에펠탑까지 파리를 여행하는 데 필요한 모든 정보를 제공합니다.",
    "content": `<p>파리는 세계에서 가장 아름답고 로맨틱한 도시 중 하나로 꼽힙니다. 이 글에서는 파리 여행의 필수 코스를 소개하고, 주요 명소를 방문하는 데 필요한 실용적인 정보를 제공합니다.</p>

<h2>루브르 박물관</h2>
<p>루브르 박물관은 세계에서 가장 유명한 박물관 중 하나입니다. 이집트 박물관, 그리스 조각품, 그리고 가장 유명한 작품인 레오나르도 다 빈치의 모나리자가 전시되어 있습니다.</p>

<h3>방문 팁</h3>
<ul>
  <li>온라인 예약을 통해 입장권을 미리 구매하세요. 대기 시간을 크게 줄일 수 있습니다.</li>
  <li>박물관은 매우 크므로 최소 3-4시간은 여유를 두세요.</li>
  <li>오디오 가이드를 대여하면 더 풍부한 경험을 할 수 있습니다.</li>
</ul>

<h2>에펠탑</h2>
<p>파리의 상징인 에펠탑은 1889년 세계 박람회를 위해 건설되었습니다. 324미터 높이의 이 철탑은 파리 전경을 감상하기에 최고의 장소입니다.</p>

<h3>방문 팁</h3>
<ul>
  <li>일출이나 일몰 시간에 방문하면 더욱 아름다운 풍경을 볼 수 있습니다.</li>
  <li>계단을 이용하면 더 저렴하게 입장할 수 있지만, 체력이 필요합니다.</li>
  <li>2층까지만 가도 충분히 아름다운 전경을 감상할 수 있습니다.</li>
</ul>

<h2>노트르담 대성당 (재건 중)</h2>
<p>노트르담 대성당은 파리의 또 다른 상징적인 건축물입니다. 현재 화재 복구 작업이 진행 중이지만, 외부에서도 그 웅장함을 감상할 수 있습니다.</p>

<h2>셴 강 유람선</h2>
<p>셴 강을 따라 파리의 아름다운 건축물들을 감상할 수 있는 유람선 투어는 반드시 경험해야 할 활동입니다. 특히 저녁 시간대의 유람선은 파리의 로맨틱한 분위기를 더욱 돋보이게 합니다.</p>

<h2>몽마르트르 언덕</h2>
<p>몽마르트르 언덕은 파리에서 가장 높은 언덕으로, 사크레 쾌르 성당이 자리잡고 있습니다. 이곳에서 바라보는 파리 전경은 잊을 수 없는 추억을 만들어줄 것입니다.</p>

<h2>파리 여행 추천 기간</h2>
<p>파리를 제대로 여행하려면 최소 4-5일이 필요합니다. 주요 명소들을 여유롭게 둘러보고, 프랑스 요리와 와인을 즐기며 파리의 분위기를 만끽하세요.</p>`,
    "date": "2024년 3월 15일",
    "author": "김여행"
  },
  {
    "title": "이탈리아 로마와 베네치아, 완벽한 7일 여행 코스",
    "image": "/uploads/blog-2.jpg",
    "category": "이탈리아",
    "link": "/blog/italy-rome-venice-7-days-travel",
    "slug": "italy-rome-venice-7-days-travel",
    "excerpt": "이탈리아의 두 도시, 로마와 베네치아를 7일 동안 여행하는 완벽한 일정을 소개합니다.",
    "content": `<p>이탈리아는 예술, 역사, 음식이 어우러진 매력적인 나라입니다. 로마와 베네치아를 중심으로 한 7일 여행 코스를 제안합니다.</p>

<h2>1-3일차: 로마</h2>
<p>로마는 고대 로마 제국의 중심이었으며, 현재도 그 흔적이 곳곳에 남아있습니다.</p>

<h3>콜로세움</h3>
<p>고대 로마의 상징인 콜로세움은 반드시 방문해야 할 장소입니다. 로마 시대의 건축 기술과 역사를 직접 느낄 수 있습니다.</p>

<h3>포로 로마노</h3>
<p>고대 로마의 정치와 상업 중심지였던 포로 로마노는 로마 제국의 영광을 보여주는 유적지입니다.</p>

<h3>바티칸 시국</h3>
<p>세계에서 가장 작은 독립 국가인 바티칸은 바티칸 박물관, 시스티나 예배당, 성 베드로 대성당이 있는 곳입니다.</p>

<h2>4-7일차: 베네치아</h2>
<p>베네치아는 수상 도시로 유명하며, 운하를 따라 아름다운 건축물들이 늘어서 있습니다.</p>

<h3>산 마르코 광장</h3>
<p>베네치아의 중심인 산 마르코 광장은 주변의 아름다운 건축물들로 둘러싸여 있습니다.</p>

<h3>곤돌라 투어</h3>
<p>베네치아의 운하를 따라 곤돌라를 타고 도시를 관람하는 것은 베네치아 여행의 하이라이트입니다.</p>

<h3>부라노 섬</h3>
<p>화려한 색깔의 집들로 유명한 부라노 섬은 베네치아 본섬에서 배로 약 40분 거리에 있습니다.</p>

<h2>교통 정보</h2>
<p>로마와 베네치아 사이는 고속열차로 약 3시간 30분 소요됩니다. 이탈리아 고속철도 티타리오(Trenitalia)를 이용하면 편리합니다.</p>

<h2>추천 음식</h2>
<ul>
  <li><strong>로마:</strong> 카르보나라, 아마트리치아나, 티라미수</li>
  <li><strong>베네치아:</strong> 리조토, 시푸리, 벨리니 칵테일</li>
</ul>`,
    "date": "2024년 3월 10일",
    "author": "이유럽"
  },
  {
    "title": "스페인 바르셀로나와 마드리드, 반드시 가봐야 할 명소",
    "image": "/uploads/blog-3.jpg",
    "category": "스페인",
    "link": "/blog/spain-barcelona-madrid-must-visit",
    "slug": "spain-barcelona-madrid-must-visit",
    "excerpt": "스페인의 두 주요 도시인 바르셀로나와 마드리드에서 놓쳐서는 안 될 명소들을 소개합니다.",
    "content": `<p>스페인은 활기찬 문화와 예술, 맛있는 음식으로 유명한 나라입니다. 바르셀로나와 마드리드의 주요 명소를 소개합니다.</p>

<h2>바르셀로나</h2>

<h3>사그라다 파밀리아</h3>
<p>안토니 가우디의 미완성 걸작인 사그라다 파밀리아는 바르셀로나의 상징입니다. 1882년에 건축을 시작하여 현재도 공사가 진행 중입니다.</p>

<h3>구엘 공원</h3>
<p>가우디가 설계한 구엘 공원은 독특한 건축 양식과 아름다운 모자이크 작품으로 유명합니다.</p>

<h3>라스 람블라스</h3>
<p>바르셀로나의 중심 거리인 라스 람블라스는 길거리 예술가, 상점, 카페가 즐비한 활기찬 곳입니다.</p>

<h3>캄프 누</h3>
<p>FC 바르셀로나의 홈 구장인 캄프 누는 축구 팬이라면 반드시 방문해야 할 장소입니다.</p>

<h2>마드리드</h2>

<h3>프라도 미술관</h3>
<p>프라도 미술관은 고야, 벨라스케스 등 스페인의 대표적인 작가들의 작품을 소장하고 있습니다.</p>

<h3>왕궁</h3>
<p>마드리드 왕궁은 유럽에서 가장 큰 궁전 중 하나로, 화려한 인테리어와 예술 작품을 감상할 수 있습니다.</p>

<h3>레티로 공원</h3>
<p>마드리드의 대표적인 공원인 레티로 공원은 산책하기 좋고, 보트를 탈 수도 있습니다.</p>

<h3>그란 비아</h3>
<p>마드리드의 중심가인 그란 비아는 쇼핑, 식사, 엔터테인먼트의 중심지입니다.</p>

<h2>교통 정보</h2>
<p>바르셀로나와 마드리드 사이는 고속열차 AVE로 약 2시간 30분 소요됩니다. 매우 편리하고 빠른 이동이 가능합니다.</p>

<h2>추천 탭바스</h2>
<p>스페인의 전통 바인 탭바스에서 다양한 작은 요리를 시도해보세요. 감자 오믈렛(토르티야), 햄(하몬), 올리브 등이 인기입니다.</p>`,
    "date": "2024년 3월 5일",
    "author": "박스페인"
  },
  {
    "title": "독일 베를린 역사 투어와 최신 맛집 가이드",
    "image": "/uploads/blog-4.jpg",
    "category": "독일",
    "link": "/blog/germany-berlin-history-tour-restaurant-guide",
    "slug": "germany-berlin-history-tour-restaurant-guide",
    "excerpt": "베를린의 역사적인 장소들을 둘러보고, 최신 트렌드를 반영한 맛집들을 소개합니다.",
    "content": `<p>베를린은 독일의 수도이자 역사와 현대가 공존하는 매력적인 도시입니다. 이번 글에서는 베를린의 역사 투어 코스와 최신 맛집 정보를 제공합니다.</p>

<h2>역사 투어 코스</h2>

<h3>베를린 장벽</h3>
<p>냉전의 상징이었던 베를린 장벽의 흔적은 동쪽 갤러리에서 볼 수 있습니다. 다양한 예술가들이 그린 벽화가 특히 인상적입니다.</p>

<h3>브란덴부르크 문</h3>
<p>베를린의 상징인 브란덴부르크 문은 독일 통일의 상징입니다. 근처에는 독일 국회의사당도 있어 함께 둘러볼 수 있습니다.</p>

<h3>홀로코스트 기념비</h3>
<p>유대인 학살을 기리는 기념비는 베를린의 중심부에 있습니다. 이곳을 방문하면 평화의 소중함을 느낄 수 있습니다.</p>

<h3>박물관 섬</h3>
<p>슈프레 강 위의 섬에 위치한 5개의 박물관은 세계문화유산으로 지정되어 있습니다. 이집트, 그리스, 로마의 고대 유물들을 감상할 수 있습니다.</p>

<h2>최신 맛집 가이드</h2>

<h3>미슐랭 스타 레스토랑</h3>
<ul>
  <li><strong>Facil:</strong> 현대적인 독일 요리를 즐길 수 있는 레스토랑</li>
  <li><strong>Lorenz Adlon Esszimmer:</strong> 럭셔리한 다이닝 경험</li>
</ul>

<h3>트렌디한 카페</h3>
<ul>
  <li><strong>The Barn:</strong> 베를린에서 가장 유명한 커피 로스터</li>
  <li><strong>Bonanza Coffee Roasters:</strong> 써드 웨이브 커피의 선두주자</li>
</ul>

<h3>베를린식 커리 소시지</h3>
<p>베를린의 길거리 음식인 커리 소시지는 반드시 시도해봐야 할 음식입니다. 전통적인 카리 36이나 최신 트렌드를 반영한 골드해니가 인기입니다.</p>

<h3>비어 가든</h3>
<p>베를린에는 여름철 야외에서 맥주를 즐길 수 있는 비어 가든이 많습니다. 특히 프렌츠로이터 펠트나 플렌터발트 지역의 비어 가든을 추천합니다.</p>

<h2>야간 유흥</h2>
<p>베를린은 유럽에서 가장 활발한 클럽 문화를 가진 도시입니다. 베르그하인, 트레소어, 키티같은 클럽들이 유명하지만, 입장이 까다로울 수 있으니 미리 알아보세요.</p>`,
    "date": "2024년 2월 28일",
    "author": "최독일"
  },
  {
    "title": "영국 런던에서 꼭 해야 할 10가지 체험",
    "image": "/uploads/blog-5.jpg",
    "category": "영국",
    "link": "/blog/united-kingdom-london-top-10-experiences",
    "slug": "united-kingdom-london-top-10-experiences",
    "excerpt": "런던을 방문한다면 절대 놓쳐서는 안 될 10가지 필수 체험을 소개합니다.",
    "content": `<p>런던은 역사와 현대가 어우러진 세계적인 도시입니다. 런던 여행 시 반드시 경험해야 할 10가지를 소개합니다.</p>

<h2>1. 버킹엄 궁전 근위병 교대식</h2>
<p>매일 오전 11시에 열리는 근위병 교대식은 런던 여행의 하이라이트입니다. 무료로 관람할 수 있으며, 여름에는 매일, 겨울에는 격일로 진행됩니다.</p>

<h2>2. 타워 브리지 위에서 런던 전경 감상</h2>
<p>타워 브리지는 런던의 상징 중 하나입니다. 브리지 위의 유리 바닥을 걸으며 템즈 강을 내려다보는 경험은 잊을 수 없을 것입니다.</p>

<h2>3. 타임즈 강 크루즈</h2>
<p>템즈 강을 따라 런던의 주요 명소들을 배를 타고 관람하는 크루즈는 편안하면서도 효과적인 관광 방법입니다.</p>

<h2>4. 영국 박물관 탐방</h2>
<p>무료로 입장할 수 있는 영국 박물관은 세계 각국의 고대 유물을 소장하고 있습니다. 로제타 돌과 엘긴 대리석 조각은 특히 유명합니다.</p>

<h2>5. 웨스트엔드 뮤지컬 관람</h2>
<p>런던의 웨스트엔드는 브로드웨이와 어깨를 나란히 하는 뮤지컬의 중심지입니다. 라이온 킹, 맘마 미아, 레미제라블 등 인기 작품을 관람할 수 있습니다.</p>

<h2>6. 쇼디치 동네 산책</h2>
<p>런던에서 가장 트렌디한 동네 중 하나인 쇼디치는 독특한 카페, 갤러리, 부티크가 모여 있는 곳입니다.</p>

<h2>7. 타워 오브 런던 방문</h2>
<p>런던 타워는 1,000년의 역사를 가진 요새로, 영국 왕관 보석을 보관하고 있는 곳입니다.</p>

<h2>8. 포츠머스 마켓에서 쇼핑</h2>
<p>런던의 대표적인 시장인 포츠머스 마켓에서는 음식, 의류, 액세서리 등을 구입할 수 있습니다.</p>

<h2>9. 영국 전통 애프터눈 티 체험</h2>
<p>포츠머스 마켓의 하롤즈나 포츠머스 마켓의 포츠머스 호텔에서 영국 전통 애프터눈 티를 즐길 수 있습니다.</p>

<h2>10. 켄징턴 가든스에서 피크닉</h2>
<p>런던의 아름다운 공원 중 하나인 켄징턴 가든스에서 편안한 피크닉을 즐기며 휴식을 취하세요.</p>

<h2>추천 일정</h2>
<p>런던을 제대로 둘러보려면 최소 4-5일이 필요합니다. 주요 명소들 사이의 이동은 지하철이나 버스를 이용하면 편리합니다. 오이스터 카드를 이용하면 대중교통을 더 저렴하게 이용할 수 있습니다.</p>`,
    "date": "2024년 2월 20일",
    "author": "정런던"
  },
  {
    "title": "유럽 배낭여행 완벽 가이드: 실용적인 팁과 최적의 일정",
    "image": "/uploads/blog-6.jpg",
    "category": "유럽",
    "link": "/blog/europe-backpacking-travel-complete-guide",
    "slug": "europe-backpacking-travel-complete-guide",
    "excerpt": "유럽 배낭여행을 계획하는 모든 이들에게 필요한 실용적인 팁과 추천 일정을 제공합니다.",
    "content": `<p>유럽 배낭여행은 많은 사람들의 버킷리스트에 올라있는 꿈의 여행입니다. 이 가이드에서는 유럽 배낭여행을 성공적으로 즐기기 위한 실용적인 팁과 추천 일정을 제공합니다.</p>

<h2>여행 준비</h2>

<h3>비자 및 서류</h3>
<p>한국인은 대부분의 유럽 국가에서 90일간 무비자로 체류할 수 있습니다. 하지만 여권 유효기간이 여행 종료 후 최소 6개월 이상 남아있어야 합니다.</p>

<h3>여행 보험</h3>
<p>유럽 여행 시 여행 보험은 필수입니다. 의료비, 분실/도난 보상 등을 포함한 종합 보험에 가입하는 것을 강력히 권장합니다.</p>

<h3>유럽 철도 패스</h3>
<p>여러 국가를 여행할 계획이라면 유레일 패스를 구매하는 것이 경제적입니다. 연령대와 여행 기간에 따라 다양한 옵션이 있습니다.</p>

<h2>추천 일정: 서유럽 2주 코스</h2>

<h3>1-3일: 파리, 프랑스</h3>
<ul>
  <li>주요 명소: 루브르, 에펠탑, 노트르담</li>
  <li>숙소: 몽마르트르 지역의 호스텔</li>
  <li>예산: 하루 약 €70-100</li>
</ul>

<h3>4-6일: 브뤼셀 & 암스테르담</h3>
<ul>
  <li>브뤼셀: 1일 투어 (그랜드 플레이스, 맨네켄 피스)</li>
  <li>암스테르담: 2일 투어 (반 고흐 미술관, 운하 투어)</li>
  <li>예산: 하루 약 €60-80</li>
</ul>

<h3>7-9일: 베를린, 독일</h3>
<ul>
  <li>주요 명소: 베를린 장벽, 브란덴부르크 문, 박물관 섬</li>
  <li>숙소: 미테 지역의 호스텔</li>
  <li>예산: 하루 약 €50-70</li>
</ul>

<h3>10-12일: 프라하, 체코</h3>
<ul>
  <li>주요 명소: 프라하 성, 찰스 다리, 구시가지</li>
  <li>숙소: 구시가지 근처 호스텔</li>
  <li>예산: 하루 약 €40-60 (다른 도시보다 저렴)</li>
</ul>

<h3>13-14일: 빈, 오스트리아</h3>
<ul>
  <li>주요 명소: 쇤브룬 궁전, 빈 오페라하우스</li>
  <li>숙소: 도심 호스텔</li>
  <li>예산: 하루 약 €60-80</li>
</ul>

<h2>절약 팁</h2>

<h3>숙소</h3>
<ul>
  <li>호스텔 예약 시 Booking.com이나 Hostelworld를 활용</li>
  <li>에어비앤비도 좋은 대안 (특히 2명 이상 여행 시)</li>
  <li>미리 예약하면 더 저렴한 가격에 예약 가능</li>
</ul>

<h3>식사</h3>
<ul>
  <li>슈퍼마켓에서 간단한 식재료 구입하여 요리</li>
  <li>점심은 현지 마켓에서 길거리 음식 이용</li>
  <li>저녁은 현지인들이 많이 찾는 식당 이용</li>
</ul>

<h3>교통</h3>
<ul>
  <li>야간 열차를 이용하면 숙소비 절약</li>
  <li>버스는 기차보다 저렴 (플릭스버스, 유로라인)</li>
  <li>도시 내 이동은 도보 또는 자전거 렌탈</li>
</ul>

<h2>안전 팁</h2>
<ul>
  <li>소지품은 항상 시야에 두고, 특히 관광 명소에서는 주의</li>
  <li>야간 여행은 가능한 한 피하고, 혼자 다니지 않기</li>
  <li>응급상황 연락처를 미리 저장</li>
  <li>여권과 중요한 서류는 복사본 보관</li>
</ul>

<h2>팩킹 리스트</h2>
<ul>
  <li>배낭 (40-50L 권장)</li>
  <li>여행용 세면도구</li>
  <li>다목적 어댑터</li>
  <li>휴대용 충전기</li>
  <li>편안한 신발 2켤레</li>
  <li>계절에 맞는 옷 (세탁 용이한 소재)</li>
</ul>`,
    "date": "2024년 2월 15일",
    "author": "한유럽"
  }
]

// FAQ와 Testimonial은 기존 데이터 유지 (wp-json에 없을 수 있음)
export const faqs: FAQ[] = [
  {
    question: '01. 유럽 여행을 위한 비자 발급이 필요할까요?',
    answer: '대부분의 유럽 국가는 90일 이내 단기 여행의 경우 무비자 입국이 가능해요. 다만, 영국과 일부 동유럽 국가는 별도 비자가 필요할 수 있습니다. 유럽연합(EU) 내에서 자유로운 이동이 가능한 솅겐 협정 국가들은 하나의 비자로 여러 국가를 여행할 수 있어요. 저희가 최신 비자 정보와 발급 절차를 상세히 안내해 드립니다!',
  },
  {
    question: '02. 유럽 여행 시 가장 좋은 시기는 언제인가요?',
    answer: '유럽 여행의 황금 시기는 4월부터 10월까지예요! 봄에는 꽃이 만개하는 네덜란드 튤립 축제와 프랑스 로즈 가든이 아름답고, 여름에는 지중해 해변과 북유럽의 백야를 즐길 수 있어요. 가을은 와인 수확 시기라 이탈리아 토스카나와 프랑스 보르도 지역이 특히 매력적입니다. 겨울은 알프스 스키와 크리스마스 시장을 즐기기에 완벽해요!',
  },
  {
    question: '03. 유럽 여행 시 환율과 결제 방법은 어떻게 하나요?',
    answer: '대부분의 유럽 국가는 유로(€)를 사용해요. 영국은 파운드(£), 스위스는 스위스 프랑(CHF), 스칸디나비아 국가들은 각각의 통화를 사용합니다. 신용카드와 체크카드는 대부분 지역에서 널리 사용되며, 특히 유럽은 현금보다 카드 결제가 더 편리해요. 저희가 최신 환율 정보와 현지 결제 팁을 제공해 드립니다!',
  },
  {
    question: '04. 유럽에서 기차 여행은 어떤가요?',
    answer: '유럽은 세계에서 가장 발달한 철도 네트워크를 자랑해요! 유레일 패스(Eurail Pass)를 이용하면 여러 국가를 자유롭게 여행할 수 있고, 고속철도인 TGV(프랑스), ICE(독일), 유로스타(영국-프랑스)로 빠르고 편안하게 이동할 수 있어요. 창밖의 아름다운 풍경을 감상하며 여행하는 기차 여행의 로맨스를 느껴보세요!',
  },
  {
    question: '05. 유럽 주요 도시 간 이동은 어떻게 하나요?',
    answer: '유럽 내 주요 도시들은 저렴한 항공사(라이언에어, 이지젯 등)와 고속철도로 잘 연결되어 있어요! 단거리는 기차가, 장거리는 항공이 경제적입니다. 저희가 최적의 이동 방법과 시간대, 가격을 비교 분석해 드려요. 여러분의 일정과 예산에 맞는 최고의 이동 계획을 제안해 드립니다!',
  },
  {
    question: '06. 유럽 여행 시 통신과 인터넷은 어떻게 해결하나요?',
    answer: '유럽 여행 중 통신은 크게 세 가지 방법이 있어요: 1) 로밍 서비스 2) 현지 SIM 카드 구매 3) 휴대용 와이파이 도시락. EU 내에서는 로밍 요금이 크게 저렴해졌지만, 가장 경제적인 방법은 현지 SIM 카드예요. 저희가 여행하는 국가별 최적의 통신 솔루션을 추천해 드립니다!',
  },
  {
    question: '07. 유럽 여행 시 꼭 가봐야 할 명소는 어디인가요?',
    answer: '유럽은 수천 년의 역사와 문화가 살아 숨 쉬는 곳이에요! 프랑스의 에펠탑과 루브르, 이탈리아의 콜로세움과 베네치아, 스페인의 사그라다 파밀리아와 알함브라, 독일의 브란덴부르크 문, 영국의 빅벤과 타워 브리지 등이 유명해요. 저희가 각 도시별 필수 명소와 숨겨진 보석 같은 장소들을 알려드립니다!',
  },
  {
    question: '08. 유럽 여행 시 문화와 에티켓 주의사항은 무엇인가요?',
    answer: '유럽 각국은 독특한 문화와 관습을 가지고 있어요! 프랑스에서는 식사 시간이 중요하고, 독일은 시간 엄수와 규칙 준수가 중요하며, 이탈리아는 격식보다는 편안함을 중시합니다. 박물관과 교회에서는 조용히 하고, 팁은 국가별로 다르니 미리 확인하세요. 저희가 각 국가별 문화 가이드를 제공해 드립니다!',
  },
  {
    question: '09. 유럽 여행 예산은 얼마나 준비해야 할까요?',
    answer: '유럽 여행 예산은 국가와 여행 스타일에 따라 달라져요. 북유럽(스위스, 노르웨이)은 상대적으로 비싸고, 동유럽(폴란드, 헝가리, 체코)은 매우 경제적입니다. 숙박, 식사, 교통비를 고려하면 하루 평균 100-200유로 정도를 예상하시면 돼요. 저희가 예산에 맞는 맞춤형 여행 계획을 세워드립니다!',
  },
  {
    question: '10. 유럽 여행 보험은 필요한가요?',
    answer: '유럽 여행 시 여행 보험은 필수예요! 특히 의료비가 비싼 유럽에서는 보험 없이는 큰 부담이 될 수 있어요. 보험은 의료비뿐만 아니라 여행 취소, 항공편 지연, 짐 분실 등 다양한 상황을 보장합니다. 저희가 최적의 여행 보험 상품을 추천하고 발급을 도와드립니다!',
  },
]

export const testimonials: Testimonial[] = [
  { name: '소피 마르탱', role: '파리 여행 블로거', image: '/uploads/testimonial-img-1.jpg' },
  { name: '마르코 로시', role: '로마 투어 가이드', image: '/uploads/testimonial-img-2.jpg' },
  { name: '안나 쇠데르베리', role: '스톡홀름 여행 전문가', image: '/uploads/testimonial-img-3.jpg' },
  { name: '카를로스 히메네스', role: '바르셀로나 컨시어지', image: '/uploads/testimonial-img-4.jpg' },
]

// 슬라이더 데이터
export interface SliderItem {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  image: string
}

export const sliderItems: SliderItem[] = [
  {
    title: '유럽의 매력, <br />당신의 특별한 순간',
    description: '수천 년의 역사가 살아 숨 쉬는 유럽으로 떠나보세요! 프랑스의 우아함, 이탈리아의 예술, 스페인의 열정까지. 전문 여행 컨설턴트와 함께 완벽한 유럽 여행 일정을 계획해 드립니다. 평생 잊지 못할 추억을 선물해 드릴게요.',
    buttonText: '유럽 여행 알아보기',
    buttonLink: '/about-us',
    image: '/uploads/slider-1.jpg',
  },
  {
    title: '유럽 한 번에! <br />모든 여행 솔루션',
    description: '유럽 전역의 항공권, 럭셔리 호텔, 특별한 투어까지! 복잡한 유럽 여행 준비는 이제 저희에게 맡기세요. 여러분의 취향과 예산에 딱 맞는 맞춤형 유럽 여행을 설계해 드려요. 지금 바로 유럽 여행을 시작해 보세요!',
    buttonText: '유럽 여행 예약하기',
    buttonLink: '/booking',
    image: '/uploads/slider-2.jpg',
  },
  {
    title: '유럽 전문가와 함께하는 <br />완벽한 여행',
    description: '저희의 유럽 전문 여행 컨설턴트가 여러분의 유럽 여행을 특별하게 만들어 드립니다. 현지의 숨겨진 명소부터 최고의 레스토랑까지, 어디서도 경험하지 못한 프리미엄 유럽 여행을 선사할게요. 함께 유럽의 아름다운 순간을 만들어가요!',
    buttonText: '전문가 상담받기',
    buttonLink: '/agent-grid',
    image: '/uploads/slider-3.jpg',
  },
]