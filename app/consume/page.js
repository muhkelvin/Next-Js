"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ConsumePage() {
  const [data,setData] = useState([])

  async function handleDelete(id){

    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`)
    const resdata = response.data
    console.log(resdata)
    useRouter().push('/consume')

    } catch (error) {
      console.log(error)
    }
  }

 async function fetchData()
 {
  const response = await axios.get("http://127.0.0.1:8000/api/posts/")
  const resdata = response.data
  setData(resdata.data)
 }

 useEffect(() => {
   fetchData()
 },[])

  return(
    <>
  

  {data.map((post) => (
        
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
      
      <div key={post.id} className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
      </div>
      <div className="px-6 py-4 flex justify-end">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mr-2 rounded">
          <Link href={`/consume/${post.id}`}>Show</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded">
        <Link href={`/consume/update/${post.id}`}>edit</Link>
        </button>
        <button onClick={() => handleDelete(post.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
        ))}
  </>
  

  )
}
