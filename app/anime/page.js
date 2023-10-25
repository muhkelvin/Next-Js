"use client"
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ListData from '@/components/ListData'
export default function BlogPage() {

  const [data,setData] = useState([])

    async function fetchdata()
    {
      const response = await axios.get("https://api.jikan.moe/v4/top/anime")
      const anime = response.data;
      // console.log(anime.data)
      setData(anime.data)
    }


  useEffect(()=>{
    fetchdata()
  },[])


  return (
    <>
  <div className="max-w-2xl mx-auto">
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Title Anime</th>
          <th className="py-2 px-4 border-b">Ratings</th>
          <th className="py-2 px-4 border-b">Gambar</th>
          <th className="py-2 px-4 border-b">Aksi</th>
        </tr>
      </thead>
      <tbody>

      {data.map((anime) => (
            <ListData key={anime.mal_id} title={anime.title} rating={anime.score} gambar={anime.images.webp.image_url} />
            ))}

        {/* Tambahkan baris untuk anime lainnya */}
      </tbody>
    </table>
  </div>
</>


  )
}
