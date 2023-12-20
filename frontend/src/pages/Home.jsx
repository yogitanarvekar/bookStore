import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/allbooks")
      .then((res) => {
        setBooks(res.data.books);
        
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Books List</h1>

      <Link to={"/books/create"} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
        <h4>Create Book</h4>
      </Link>

      <div className="container mx-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-blue-100 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{book.title}</h2>
              <p className="text-gray-700 mb-2">{book.author}</p>
              <p className="text-gray-700 mb-4">{book.year}</p>
              <div className="flex justify-between">
                <Link to={`/books/details/${book._id}`} className="text-green-500">
                  Show
                </Link>
                <Link to={`/books/edit/${book._id}`} className="text-yellow-400">
                  Edit
                </Link>
                <Link to={`/books/delete/${book._id}`} className="text-red-500">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;