"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function page({params}) {
    const [data,setData] = useState([])

    async function fetchData(){
        const respose = await axios.get(`http://127.0.0.1:8000/api/posts/${params.slug}`)
        const resdata = respose.data
        setData(resdata.data)
        console.log(data)
    }

    useEffect(()=>{
        fetchData()
    },[])



  return (
    <>
  <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
    {/* Judul */}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{data.title} {params.slug}</div>
    </div>
    {/* Deskripsi */}
    <div className="px-6 py-4">
      <p className="text-gray-700">
       {data.body}
      </p>
    </div>
  </div>
</>

  )
}
