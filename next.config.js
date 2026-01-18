/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // 개발 환경에서 이미지 최적화 비활성화
    remotePatterns: [],
  },
  // temp 프로젝트의 정적 파일들을 참조할 수 있도록 설정
  async rewrites() {
    return [];
  },
}

module.exports = nextConfig
