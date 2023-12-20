import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      year,
    };
    axios
      .post("http://localhost:8000/api/v1/addbook", data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r bg-white">
      <div className="p-8 bg-purple-200 rounded-lg shadow-2xl w-120">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Create Book</h1>
        <div className="mb-4">
          <label className="text-gray-700 text-2xl">Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-80 input-field bg-purple-200 rounded-lg m-2 p-2 border-b-2 border-y-violet-600 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-2xl">Author: </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-80 input-field bg-purple-200 rounded-lg m-2 p-2 border-b-2 border-y-violet-600 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-2xl"> My Year: </label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-80 input-field bg-purple-200 rounded-lg m-2 p-2 border-b-2 border-y-violet-600 focus:outline-none"
          />
        </div>

        <button
          className="my-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;