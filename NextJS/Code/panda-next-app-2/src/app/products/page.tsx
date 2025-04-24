"use client"
import { fetchPrducts } from '@/lib/fetchData';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function getProducts() {
            const res = await fetchPrducts();
            setProducts(res)
        }
        getProducts()
    }, [])

    const handleSingleProductLoad = (id: number | string) => {
        router.push(`/products/${id}`)
    }
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products?.map((product: any) => (
                    <div
                        
                        key={product.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden  hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-contain bg-gray-50 p-4"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 truncate hover:text-amber-600">{product.title}</h2>
                            <p className="text-gray-600 mt-2">${product.price}</p>
                            <button onClick={() => handleSingleProductLoad(product.id)} className="cursor-pointer mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;