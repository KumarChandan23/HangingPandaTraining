
import React, { useEffect, useState } from 'react'
import axois from 'axios'
export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await axois(url);
                setData(response.data);
                setLoading(false)
            } catch (error) {
                setLoading(false);
                setError(error)
            }
        }
        fetchData();
    },[url])
  return {data, loading, error}
}

 