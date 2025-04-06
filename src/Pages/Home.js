import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#fff7e6] to-[#ffebcc] flex flex-col items-center justify-center text-[#2c1c1c] px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">
        Welcome to Spiritual India 🌸
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-700">
        Discover the sacred temples, serene landscapes, and timeless legends of
        Vrindavan & Uttarakhand.
      </p>
      <div className="flex gap-6">
        <button
          onClick={() => navigate("/vrindavan")}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-lg transition duration-300 text-white"
        >
          Explore Vrindavan
        </button>
        <button
          onClick={() => navigate("/uttarakhand")}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-lg transition duration-300 text-white"
        >
          Explore Uttarakhand
        </button>
      </div>
    </div>
  );
};

export default Home;
