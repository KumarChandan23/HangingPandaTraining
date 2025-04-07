
import React from 'react'
import { useFetch } from './useFetch'

const ProductListUsinghook = () => {
  const {data, loading} =  useFetch("https://fakestoreapi.com/products")
  if(loading) return <p>Loading...</p>
  console.log(data)
  return (
    <div>ProductListUsinghook</div>
  )
}

export default ProductListUsinghook