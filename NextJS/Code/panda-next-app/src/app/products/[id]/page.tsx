// app/products/[id]/page.tsx
import { fetchProducts } from '@/lib/fetchProducts'
import Image from 'next/image'

type Props = {
  params: {
    id: string
  }
}

const ProductPage = async ({ params }: Props) => {
  const product = await fetchProducts(Number(params.id))

  return (
    <div>
      <h1>{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
      />
      <p>{product.description}</p>
    </div>
  )
}

export default ProductPage
