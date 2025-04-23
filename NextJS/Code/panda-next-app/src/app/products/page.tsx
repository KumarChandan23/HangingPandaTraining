'use client'

import { useEffect, useState } from 'react'
import { fetchProducts } from '../../lib/fetchProducts'
import { useRouter, useSearchParams } from 'next/navigation'

const Products = () => {
  const [products, setProducts] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id') // Get query param ?id=
  
  useEffect(() => {
    const getData = async () => {
      try {
        if (id) {
          const product = await fetchProducts(Number(id))
          setProducts([product])
        } else {
          const all = await fetchProducts()
          setProducts(all)
        }
      } catch (err) {
         setError('Failed to load product(s)')
      }
    }

    getData()
  }, [id])

  const handleClick = (id: number) => {
    router.push(`/products/${id}`) // Navigate to the dynamic route
  }
  
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>Products</h1>
      {products.map((product: any) => (
        <div key={product.id} onClick={() => handleClick(product.id)}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  )
}

export default Products
