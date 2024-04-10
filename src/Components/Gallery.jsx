import React from "react";
import data from "../data.json";

const Gallery = ({ searchTerm }) => {
    let results = [];
    if (searchTerm === 'all') {
      results = Object.values(data.categories).flat();
    } else {
      results = data.categories[searchTerm] ?? [];
    }
  

  return (
    <div className="flex flex-wrap justify-center">
      {results.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((url, index) => (
            <li key={index} className="flex flex-col justify-center items-center">
              <img
                src={require(`../${url}`)}
                alt={`test ${index + 1}`}
                className="rounded-lg"
              />
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-6xl font-custom font-bold text-center mb-10">No Data Found!</h1>
      )}
    </div>
  );
};

export default Gallery;
