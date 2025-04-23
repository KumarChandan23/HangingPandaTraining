import { fetchProducts } from "@/lib/fetchProducts"

// app/page.tsx
export default async function HomePage() {

  const products = await fetchProducts();
  console.log(products)
  return(
    <div>
       <h2>🏠 Welcome to the Home Page!</h2>
   
    </div>
  )
}
