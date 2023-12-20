import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ShowBook = () => {

  const [book, setBook] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/getbook/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="p-8 bg-blue-200 rounded-lg shadow-2xl w-100">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Book</h1>
        <div className="text-gray-700 text-2xl">
          <div className="mb-2 p-2">
            <span className="font-bold">Id: </span> {book._id}
          </div>
          <div className="mb-2 p-2">
            <span className="font-bold">Title: </span> {book.title}
          </div>
          <div className="mb-2 p-2">
            <span className="font-bold">Author: </span> {book.author}
          </div>
          <div className="mb-2 p-2">
            <span className="font-bold">Year: </span> {book.year}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowBook