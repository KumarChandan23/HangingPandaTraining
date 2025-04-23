import axios from "axios";


export const FetchSignleProduct =  async(id:number | string)=>{
        try {
            const response = await axios.get(`http://fakestoreapi.com/products/${id}`)
            return response.data;
        } catch (error) {
            console.error("Error occuerred while fetching siglel prodcut", error);
            return error;
        }
} 