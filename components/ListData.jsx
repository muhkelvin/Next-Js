import Image from 'next/image'
import React from 'react'


async function handleDelete(id){

  try {
    const response = await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`)
  const resdata = response.data
  console.log(resdata)

  } catch (error) {
    console.log(error)
  }
}

export default function ListData({title,rating,gambar}) {
  return (
    <tr>
          <td className="py-2 px-4 border-b">{title}</td>
          <td className="py-2 px-4 border-b">{rating}</td>
          <td className="py-2 px-4 border-b"><Image src={gambar} width={50} height={50}/></td>
          <td className="py-2 px-4 border-b">
            <button className="bg-blue-500 text-white px-2 py-1 rounded">
              Edit
            </button>
            <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">
              Delete
            </button>
          </td>
        </tr>
  )
}
