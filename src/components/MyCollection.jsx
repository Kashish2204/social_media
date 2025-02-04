
import React from "react";

const MyCollection = () => {
  const images = [
    "/images/pexels-birkaybolushikayesi-116751423-29588819.jpg",
    "/images/pexels-melody-ganjian-703138148-30373532.jpg",
    "/images/pexels-rajan-abdulla-2148461968-30110558.jpg",
    "/images/pexels-sarah-486644806-30179760.jpg",
    "/images/pexels-sonic-230970541-12102576.jpg",
    "/images/pexels-tnp-1464613945-29971507.jpg",
    "/images/pexels-willianjusten-15829527.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#E1EFF1] p-4 max-w-5xl mx-auto dark:bg-slate-950 dark:text-slate-100">
      {/* Heading */}
      <h1 className="text-xl font-bold text-center mb-4">My Collection</h1>

      {/* Grid of Saved Images */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group border border-gray-200 rounded-md overflow-hidden aspect-square"
          >
            <img
              src={image}
              alt={`Saved item ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Hover effect */}
            <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollection;