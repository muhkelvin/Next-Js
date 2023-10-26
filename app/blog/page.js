"use client"
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Link from 'next/link'


export default function BlogPage() {

    const [data,setData] = useState([])
    
    async function fetchData()
    {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setData(response.data)
            // console.log(response)

        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
       fetchData() 
    },[])
    

  return (
    <table className="min-w-full border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border border-gray-300 p-2">No</th>
        <th className="border border-gray-300 p-2">Title</th>
        <th className="border border-gray-300 p-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {data?.map((item, index) => (
        <tr key={item.id}>
          <td className="border border-gray-300 p-2">{index + 1}</td>
          <td className="border border-gray-300 p-2">{item.title}</td>
          <td className="border border-gray-300 p-2">
            <Link href={`/blog/${item.id}`}>
              Detail
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
