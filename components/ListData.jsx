import Image from 'next/image'
import React from 'react'

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
