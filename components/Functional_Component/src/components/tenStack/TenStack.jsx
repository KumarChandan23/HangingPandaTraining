import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchProducts } from './FakeStore';

export const TenStack = () => {
    const {data, isLoading}  = useQuery({queryKey:['products'], queryFn:fetchProducts});
    if(isLoading) return <div>Loading...</div>
  return (
    <div>
        {data.map((item) => {
            return (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            )
        })}
    </div>

  )
}
