"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {

  const [data,setData] = useState([])

  async function fetchData()
  {
   try {
    const response = await axios.get('http://127.0.0.1:8000/api/posts/');
    const anime = response.data;
    setData(anime.data);
   } catch (error) {
    console.log(error)
   }
  }


  useEffect(() => {
    fetchData()
  },[])

  return (
    <div>
      <h1>Top Anime</h1>
      {data.map((anime) => (
        <div key={anime.id}>
          <p>{anime.title}</p>
        </div>
      ))}
    </div>
  )
}
