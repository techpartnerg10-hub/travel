const fs = require('fs');
const path = require('path');

// wp-json 폴더 경로
const wpJsonPath = path.join(__dirname, '../../temp/wp-json/wp/v2');
const outputPath = path.join(__dirname, '../lib/data/homepage.ts');

// 이미지 매핑 (featured_media ID -> 이미지 파일명)
// 실제로는 media JSON을 읽어야 하지만, 여기서는 패턴으로 추정
const getImagePath = (mediaId, type) => {
  // mediaId를 기반으로 이미지 파일명 추정
  // 실제로는 media JSON을 읽어야 정확함
  const imageMap = {
    // tour images
    954: 'tour-1.jpg',
    953: 'tour-2.jpg',
    952: 'tour-3.jpg',
    951: 'tour-4.jpg',
    950: 'tour-5.jpg',
    949: 'tour-6.jpg',
    948: 'tour-7.jpg',
    947: 'tour-8.jpg',
    946: 'tour-9.jpg',
    // hotel images
    933: 'hotel-1.jpg',
    932: 'hotel-2.jpg',
    931: 'hotel-3.jpg',
    930: 'hotel-4.jpg',
    929: 'hotel-5.jpg',
    // resort images
    942: 'resort-1.jpg',
    941: 'resort-2.jpg',
    940: 'resort-3.jpg',
    939: 'resort-4.jpg',
    938: 'resort-5.jpg',
    937: 'resort-6.jpg',
    936: 'resort-7.jpg',
    935: 'resort-8.jpg',
    // flight images
    923: 'flight-1.jpg',
    922: 'flight-2.jpg',
    921: 'flight-3.jpg',
    920: 'flight-4.jpg',
    919: 'flight-5.jpg',
    918: 'flight-6.jpg',
    // car images
    905: 'car-1.jpg',
    904: 'car-2.jpg',
    903: 'car-3.jpg',
    902: 'car-4.jpg',
    901: 'car-5.jpg',
    900: 'car-6.jpg',
    899: 'car-7.jpg',
    898: 'car-8.jpg',
    897: 'car-9.jpg',
    // cruise images
    914: 'cruise-1.jpg',
    913: 'cruise-2.jpg',
    912: 'cruise-3.jpg',
    911: 'cruise-4.jpg',
    910: 'cruise-5.jpg',
    909: 'cruise-6.jpg',
    908: 'cruise-7.jpg',
    907: 'cruise-8.jpg',
    906: 'cruise-9.jpg',
    // agent images
    963: 'team-1.jpg',
    962: 'team-2.jpg',
    961: 'team-3.jpg',
    960: 'team-4.jpg',
    959: 'team-5.jpg',
    958: 'team-6.jpg',
    // blog images
    897: 'blog-1.jpg',
    896: 'blog-2.jpg',
    895: 'blog-3.jpg',
    894: 'blog-4.jpg',
    893: 'blog-5.jpg',
    892: 'blog-6.jpg',
  };
  
  return imageMap[mediaId] || `${type}-default.jpg`;
};

// JSON 파일 읽기
const readJsonFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
};

// 모든 JSON 파일 읽기
const readAllJsonFiles = (dir) => {
  const files = fs.readdirSync(dir);
  const jsonFiles = files.filter(f => f.endsWith('.json'));
  return jsonFiles.map(f => readJsonFile(path.join(dir, f))).filter(Boolean);
};

// 링크에서 슬러그 추출
const extractSlugFromLink = (link) => {
  if (!link) return '';
  const match = link.match(/\/([^\/]+)\/?$/);
  return match ? match[1] : '';
};

// 가격 추정 (실제로는 JSON에 없을 수 있음)
const getPrice = (index, type) => {
  const prices = {
    tour: ['$99.00', '$89.00', '$79.00'],
    hotel: ['$79.99', '$99.99'],
    resort: ['$59.99', '$79.99'],
    flight: ['$150.00', '$120.00', '$100.00', '$130.00', '$140.00', '$110.00'],
    car: ['$105.00', '$99.00', '$50.00'],
    cruise: ['$99.99', '$66.66', '$33.33'],
  };
  const typePrices = prices[type] || ['$99.00'];
  return typePrices[index % typePrices.length];
};

// 데이터 추출
const tours = readAllJsonFiles(path.join(wpJsonPath, 'tour'))
  .map((item, index) => ({
    name: item.title?.rendered || '',
    price: getPrice(index, 'tour'),
    image: `/uploads/${getImagePath(item.featured_media, 'tour')}`,
    link: `/${item.type}/${item.slug}`,
  }))
  .slice(0, 9);

const hotels = readAllJsonFiles(path.join(wpJsonPath, 'hotel'))
  .map((item, index) => ({
    name: item.title?.rendered || '',
    price: getPrice(index, 'hotel'),
    image: `/uploads/${getImagePath(item.featured_media, 'hotel')}`,
    link: `/${item.type}/${item.slug}`,
  }))
  .slice(0, 5);

const resorts = readAllJsonFiles(path.join(wpJsonPath, 'resort'))
  .map((item, index) => ({
    name: item.title?.rendered || '',
    price: getPrice(index, 'resort'),
    image: `/uploads/${getImagePath(item.featured_media, 'resort')}`,
    link: `/${item.type}/${item.slug}`,
  }))
  .slice(0, 8);

const flights = readAllJsonFiles(path.join(wpJsonPath, 'flight'))
  .map((item, index) => ({
    name: item.title?.rendered || '',
    price: getPrice(index, 'flight'),
    image: `/uploads/${getImagePath(item.featured_media, 'flight')}`,
    link: `/${item.type}/${item.slug}`,
  }))
  .slice(0, 6);

const cars = readAllJsonFiles(path.join(wpJsonPath, 'car'))
  .map((item, index) => ({
    name: item.title?.rendered || '',
    price: getPrice(index, 'car'),
    image: `/uploads/${getImagePath(item.featured_media, 'car')}`,
    link: `/${item.type}/${item.slug}`,
  }))
  .slice(0, 9);

const cruises = readAllJsonFiles(path.join(wpJsonPath, 'cruise'))
  .map((item, index) => ({
    name: item.title?.rendered || '',
    price: getPrice(index, 'cruise'),
    image: `/uploads/${getImagePath(item.featured_media, 'cruise')}`,
    link: `/${item.type}/${item.slug}`,
  }))
  .slice(0, 9);

const agents = readAllJsonFiles(path.join(wpJsonPath, 'agent'))
  .map((item, index) => ({
    name: item.title?.rendered || '',
    role: 'Travel Consultant', // 실제로는 JSON에 없을 수 있음
    image: `/uploads/${getImagePath(item.featured_media, 'team')}`,
    link: `/${item.type}/${item.slug}`,
  }))
  .slice(0, 6);

const blogs = readAllJsonFiles(path.join(wpJsonPath, 'posts'))
  .map((item, index) => {
    // 카테고리 추출 (실제로는 categories 배열에서 가져와야 함)
    const categories = ['Europe', 'Ireland', 'Dubai', 'New York', 'Singapore', 'Australia'];
    return {
      title: item.title?.rendered || '',
      image: `/uploads/${getImagePath(item.featured_media, 'blog')}`,
      category: categories[index % categories.length] || 'Travel',
      link: `/${item.slug}`,
    };
  })
  .slice(0, 6);

// TypeScript 파일 생성
const tsContent = `// 홈페이지 데이터 - WordPress REST API에서 추출

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
}

export const tours: Tour[] = ${JSON.stringify(tours, null, 2)}

export const hotels: Hotel[] = ${JSON.stringify(hotels, null, 2)}

export const resorts: Resort[] = ${JSON.stringify(resorts, null, 2)}

export const flights: Flight[] = ${JSON.stringify(flights, null, 2)}

export const cars: Car[] = ${JSON.stringify(cars, null, 2)}

export const cruises: Cruise[] = ${JSON.stringify(cruises, null, 2)}

export const agents: Agent[] = ${JSON.stringify(agents, null, 2)}

export const blogs: Blog[] = ${JSON.stringify(blogs, null, 2)}

// FAQ와 Testimonial은 기존 데이터 유지 (wp-json에 없을 수 있음)
export const faqs: FAQ[] = [
  {
    question: '01. What do we mean by business?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.',
  },
  {
    question: '02. What are the positive aspects of business?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.',
  },
  {
    question: '03. What are the negative aspects of business?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.',
  },
  {
    question: '04. What is the way to grow a business?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.',
  },
  {
    question: '05. Where should my business be involved?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.',
  },
  {
    question: '06. How much money can be used to start a business?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.',
  },
  {
    question: '07. What are the benefits to business customers?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.',
  },
  {
    question: '08. Ten easy rules to expand your business.',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.',
  },
  {
    question: '09. How do I highlight in the name of the business?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.',
  },
  {
    question: '10. How do I analyze the promotion of the business?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis asperiores quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam laboriosam autem aperiam distinctio fugiat.',
  },
]

export const testimonials: Testimonial[] = [
  { name: 'Matthew Self', role: 'Content Creator', image: '/uploads/testimonial-img-1.jpg' },
  { name: 'Gordon Kelly', role: 'Sales Specialist', image: '/uploads/testimonial-img-2.jpg' },
  { name: 'Lauren Wilcher', role: 'Banker', image: '/uploads/testimonial-img-3.jpg' },
  { name: 'Janene Barker', role: 'Graphics Designer', image: '/uploads/testimonial-img-4.jpg' },
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
    title: 'Our Work <br />Our Responsibility',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.',
    buttonText: 'Read More',
    buttonLink: '/about-us',
    image: '/uploads/slider-1.jpg',
  },
  {
    title: 'One Stop Solution For <br /> Your Travel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.',
    buttonText: 'Get Started',
    buttonLink: '/booking',
    image: '/uploads/slider-2.jpg',
  },
  {
    title: 'Our Work <br />Our Responsibility',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit.',
    buttonText: 'Our Teams',
    buttonLink: '/agent-grid',
    image: '/uploads/slider-3.jpg',
  },
]
`;

// 파일 쓰기
fs.writeFileSync(outputPath, tsContent, 'utf8');
console.log(`✅ 데이터 추출 완료: ${outputPath}`);
console.log(`   - Tours: ${tours.length}개`);
console.log(`   - Hotels: ${hotels.length}개`);
console.log(`   - Resorts: ${resorts.length}개`);
console.log(`   - Flights: ${flights.length}개`);
console.log(`   - Cars: ${cars.length}개`);
console.log(`   - Cruises: ${cruises.length}개`);
console.log(`   - Agents: ${agents.length}개`);
console.log(`   - Blogs: ${blogs.length}개`);
