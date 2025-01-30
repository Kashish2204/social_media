import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
const SearchPage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate(`/feed?search=${query}`);
//   };


    const handleSearch = (e) => {
        e.preventDefault();
        if (!query.trim()) {
        alert("please enter in search box ");
        } else {
        navigate(`/feed?search=${query}`);
        }
    };


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <form onSubmit={handleSearch} className="flex flex-row items-center w-full max-w-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here..."
          className="p-2 border border-gray-300 rounded-l-md w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r-md"
        >
          <Search size={24}/>
        </button>
      </form>
    </div>
  );
};

export default SearchPage;
