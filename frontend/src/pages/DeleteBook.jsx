import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const handleDeleteBook = () =>{
    axios.delete(`http://localhost:8000/api/v1/deletebook/${id}`)
      .then(()=>{
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
    <div className="p-8 bg-red-100 rounded-lg shadow-lg w-100">
      <h1 className="text-4xl font-quicksand font-bold mb-4 text-center text-red-500">Delete Book</h1>
      <div className="text-gray-700 flex flex-col items-center">
        <h3 className="text-lg mb-6">Are you sure you want to delete the book?</h3>
        <button
          className="w-40 text-1xl p-4 bg-red-500 rounded-full text-white hover:bg-red-600 focus:outline-none"
          onClick={handleDeleteBook}
        >
          Yes Delete
        </button>
      </div>
    </div>
  </div>
  )
}

export default DeleteBook