import axios from "axios"


export const fetchPrducts = async ()=>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (error) {
        console.log("Error occured while fetching data", error)
        return null;
    }
}

export const fetchProductById = async (id:string | number)=>{
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error occured while fetching single product", error);
        return null;
    }
}