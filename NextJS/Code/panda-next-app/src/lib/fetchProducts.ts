import axios from "axios";

export async function fetchProducts(id?:number | string) {
  const url  = id ? `https://fakestoreapi.com/products/${id}`: 'https://fakestoreapi.com/products'
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
