import Layout from '@/components/Layout'
import ProductDetail from '@/components/ProductDetail'
import { getProductBySlug } from '@/lib/data/products'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  
  if (!product) {
    return {
      title: '상품을 찾을 수 없습니다 | OurTrip',
    }
  }

  return {
    title: `${product.name} | OurTrip`,
    description: product.shortDescription || product.description.substring(0, 160),
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <Layout>
      <div className="page-wrapper">
        <main className="site-main">
          <ProductDetail product={product} />
        </main>
      </div>
    </Layout>
  )
}
