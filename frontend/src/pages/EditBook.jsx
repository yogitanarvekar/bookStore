import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/getbook/${id}`)
      .then((res) => {
        setTitle(res.data.title)
        setAuthor(res.data.author)
        setYear(res.data.year)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      year,
    };
    axios
      .put(`http://localhost:8000/api/v1/updatebook/${id}`, data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r bg-white">
      <div className="p-8 bg-indigo-200 rounded-lg shadow-2xl w-120">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Edit Book</h1>
        <div className="mb-4">
          <label className="text-gray-700 text-2xl">Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-80 input-field bg-indigo-200 rounded-lg m-2 p-2 border-b-2 border-y-indigo-600 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-2xl">Author: </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-80 input-field bg-indigo-200 rounded-lg m-2 p-2 border-b-2 border-y-indigo-600 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-2xl">Year: </label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-80 input-field bg-indigo-200 rounded-lg m-2 p-2 border-b-2 border-y-indigo-600 focus:outline-none"
          />
        </div>

        <button
          className="my-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditBook