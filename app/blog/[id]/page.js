"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Page({ params }) {
    const [data,setData] = useState([])
    
    async function fetchData(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        setData(response.data)
        // console.log(response.data)
    }

    useEffect(()=>{
        fetchData()  
    },[])


    return(
        <>
  
  {/* Bagian Utama (Content) */}
  <div className="container mx-auto mt-8">
    {/* Judul Halaman */}
    <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
    {/* Deskripsi Halaman */}
    <p className="text-gray-700">
      {data.body}
    </p>
  </div>
</>
    )
  }