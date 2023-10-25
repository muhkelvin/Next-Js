"use client"
import React from 'react'
import { useState } from 'react'

export default function AddPage() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

     async function handleSubmit(e) {
        e.preventDefault()
        await fetch("http://127.0.0.1:8000/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            content,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
        })
    }


  return (
    <div className="p-4">
  <h1 className="text-2xl font-bold">Add Data</h1>
  <form onSubmit={handleSubmit}>
    <div className="mt-4">
      <label htmlFor="title" className="block">
        Title:
      </label>
      <input type="text"
       id="title"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       className="w-full border rounded p-2" />
    </div>
    <div className="mt-4">
      <label htmlFor="content" className="block">
        Content:
      </label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        id="content"
        className="w-full border rounded p-2"
        defaultValue={""}
      />
    </div>
    <button
      className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      type="submit"
    >
      Add Data
    </button>
  </form>
</div>

  )
}
