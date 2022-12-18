import React from 'react';
import { FaBell, FaQuestionCircle, FaUser, FaStar, FaMapMarkerAlt, FaClock, FaUsers, FaArrowRight } from 'react-icons/fa';

const MobileScreen = () => {
  return (
    <div className="bg-[#282F2D] flex flex-col">
      {/* sessão do header */}
      <div className="flex p-4">
        <div className="flex justify-start">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full flex items-center mr-4">
            <FaBell className="mr-2" />
            Notifications
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
            <FaQuestionCircle className="mr-2" />
            Help
          </button>
        </div>
        <div className="flex justify-end">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full flex items-center relative">
            <FaUser />
          </button>
        </div>
      </div>
      {/* Add your content here */}
      

    {/* sessão do card principal */}
      <div className="relative h-64 w-full bg-[#393B4E] rounded-lg shadow-lg">
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex-1 text-center p-4">
          <FaUser size="90px" className="mx-auto mb-4 text-white" />
          <div className="flex justify-center">
            <FaStar className="h-4 w-4 mx-1 text-white" />
            <FaStar className="h-4 w-4 mx-1 text-white" />
            <FaStar className="h-4 w-4 mx-1 text-white" />
            <FaStar className="h-4 w-4 mx-1 text-white" />
            <FaStar className="h-4 w-4 mx-1 text-white" />
          </div>
        </div>
        <div className="flex-1 text-center p-4">
          <div className="flex mb-4">
            <FaMapMarkerAlt className="h-4 w-4 mr-2 text-white" />
            <p className="text-white">Centro</p>
          </div>
          <div className="flex mb-4">
            <FaClock className="h-4 w-4 mr-2 text-white" />
            <p className="text-white">19:30</p>
          </div>
          <div className="flex">
            <FaUsers className="h-4 w-4 mr-2 text-white" />
            <p className="text-white">0/4</p>
          </div>
        </div>
      </div>
      <button className="absolute bottom-0 right-0 mb-6 mr-6 rounded-full bg-blue-500 text-white p-3 hover:bg-blue-600 focus:outline-none focus:shadow-outline">
        <FaArrowRight className="h-4 w-4" />
      </button>
    </div>

    {/* sessão do card principal */}
    <div className="relative h-64 w-full bg-[#393B4E] rounded-lg shadow-lg">
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex-1 text-center p-4">
          <FaUser size="90px" className="mx-auto mb-4 text-white" />
          <div className="flex justify-center">
            <FaStar className="h-4 w-4 mx-1 text-white" />
            <FaStar className="h-4 w-4 mx-1 text-white" />
            <FaStar className="h-4 w-4 mx-1 text-white" />
            <FaStar className="h-4 w-4 mx-1 text-white" />
            <FaStar className="h-4 w-4 mx-1 text-white" />
          </div>
        </div>
        <div className="flex-1 text-center p-4">
          <div className="flex mb-4">
            <FaMapMarkerAlt className="h-4 w-4 mr-2 text-white" />
            <p className="text-white">Centro</p>
          </div>
          <div className="flex mb-4">
            <FaClock className="h-4 w-4 mr-2 text-white" />
            <p className="text-white">19:30</p>
          </div>
          <div className="flex">
            <FaUsers className="h-4 w-4 mr-2 text-white" />
            <p className="text-white">0/4</p>
          </div>
        </div>
      </div>
      <button className="absolute bottom-0 right-0 mb-6 mr-6 rounded-full bg-blue-500 text-white p-3 hover:bg-blue-600 focus:outline-none focus:shadow-outline">
        <FaArrowRight className="h-4 w-4" />
      </button>
    </div>

{/* sessão dos botoes de baixo */}
    <div className="mx-auto my-4 flex justify-between max-w-lg">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-full">Mapa</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-full">Recentes</button>
    </div>

{/* sessão da parte de baixo final */}
    <div className="relative mx-auto my-4 max-w-sm">
      <label htmlFor="from-input" className="block font-bold text-white mb-2">From</label>
      <input type="text" id="from-input" className="px-2 py-1 bg-gray-200 rounded-full w-full" />
      <label htmlFor="to-input" className="block font-bold text-white mt-4 mb-2">To</label>
      <input type="text" id="to-input" className="px-2 py-1 bg-gray-200 rounded-full w-full" />
      
    </div>
    <button className="absolute bottom-0 right-0 mb-6 mr-6 rounded-full bg-blue-500 text-white p-3 hover:bg-blue-600 focus:outline-none focus:shadow-outline">
        <FaArrowRight className="h-4 w-4" />
      </button>


    </div>
  );
};

export default MobileScreen;
