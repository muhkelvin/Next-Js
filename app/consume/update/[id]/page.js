"use client"
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function UpdateDataForm({ params }) {
  const [initialValues, setInitialValues] = useState({
    title: '',
    body: '',
  });

  // useEffect(() => {
  //   // Mengambil data berdasarkan ID dari server
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://127.0.0.1:8000/api/posts/${params.id}`);
  //       const responseData = response.data;

  //       // Menetapkan nilai awal formulir dengan data yang diterima
  //       setInitialValues({
  //         title: responseData.title,
  //         body: responseData.body,
  //       });
  //     } catch (error) {
  //       console.error('Gagal mengambil data untuk pembaruan', error);
  //     }
  //   };

  //   fetchData();
  // }, [params.id]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Mengirim permintaan PUT ke server untuk memperbarui data
      const response = await axios.put(`http://127.0.0.1:8000/api/posts/${params.id}`, values);
      const responseData = response.data;
    
      // Tambahkan log atau penanganan lainnya jika diperlukan
      console.log('Data berhasil Dirubah', responseData);
      


      // Reset formulir setelah berhasil memperbarui data
      resetForm();
    } catch (error) {
      console.error('Gagal Merubah data', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Edit Data</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600 font-semibold mb-2">Judul:</label>
            <Field type="text" id="title" name="title" className="w-full p-2 border rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-600 font-semibold mb-2">Deskripsi:</label>
            <Field as="textarea" id="body" name="body" className="w-full p-2 border rounded-md" required />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Perbarui Data
          </button>
        </Form>
      </Formik>
    </div>
  );
}
