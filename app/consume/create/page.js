"use client"
import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

export default function AddDataForm() {
  const initialValues = {
    title: '',
    body: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Ganti URL_API dengan URL API yang sesuai
      const response = await axios.post('http://127.0.0.1:8000/api/posts/', values);
      const responseData = response.data;

      // Tambahkan log atau penanganan lainnya jika diperlukan
      console.log('Data berhasil ditambahkan', responseData);

      // Navigasi ke halaman '/consume' setelah berhasil menambahkan data
      if (response.status === 201) {
        router.push('/consume');
        alert('Data berhasil ditambahkan');
      }

      // Reset formulir setelah berhasil menambahkan data
      resetForm();
    } catch (error) {
      console.error('Gagal menambahkan data', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Tambah Data Baru</h2>
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
            Tambahkan Data
          </button>
        </Form>
      </Formik>
    </div>
  );
}
