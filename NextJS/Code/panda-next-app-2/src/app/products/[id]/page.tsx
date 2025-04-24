import StaticStarRating from "@/components/starRating";
import { fetchProductById } from "@/lib/fetchData";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaBackwardFast } from "react-icons/fa6";



export default async function getSingleProduct({params}:{params:{id: string}}) {
    const product = await fetchProductById(params.id)
    console.log(product);
    return(
        <div>
            <Link href="/products" className="ms-10 my-2 hover:text-blue-600 ">Back</Link>
            
            <h1 className="ps-10 underline decoration-solid decoration-2 underline-offset-8 font-semibold text-3xl py-3">Single Product </h1>
            <div className="grid grid-cols-2 ">
                <div className="">
                <img src={product.image} alt={product.title} className="h-[400px] w-full object-contain p-2 ps-5" />
                </div>
                    
                <div className="pr-2 py-3">
                    <p className="font-bold text-2xl">{product.title}</p>
                    <div>
                        <div className="flex gap-2 items-center">Ratings: <StaticStarRating rating={product.rating.rate} /> </div>
                        <p>Reviews: ({product.rating.count} )</p>
                        
                    </div>
                    <p className="my-3 text-xl text-green-600 font-bold">Price: {product.price.toLocaleString("en-US",{style:"currency", currency:"USD"})}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )   
}