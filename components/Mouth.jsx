import React from "react";
import imageData from '../public/images/mouth/imageData.json'

const Genesis = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto xl:px-0 px-3">
      <div className="flex justify-between gap-2 items-center p-2 border-b-[2px] border-[#004bff]">
        <div className="flex sm:items-end sm:flex-row flex-col gap-1 sm:gap-6">
          <h2 className=" uppercase font-poppins text-[22px] sm:text-[28px] font-bold text-[#004bff] leading-[101%]">
            MOUTH
          </h2>
          <p className="text-[#004bff] text-[10px] sm:text-[12px] font-normal font-poppins">
          Rock those 80's vibes with 25 bold mouth, smile, and beard styles. Rock on!
          </p>
        </div>
        <a href="/mouth/details">
          <button
            type="submit"
            className="border-[2px] border-[#004bff] py-1 px-1 whitespace-nowrap sm:px-2 hover:bg-[#004bff] hover:text-white transition duration-700 ease-in-out text-[#004bff] text-[14px] sm:text-[16px] font-poppins rounded-[22px] font-bold"
          >
            VIEW ALL
          </button>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-4">
        {imageData.map((items) => (
          <img
            className="w-full cursor-pointer sm:min-w-[230px] h-full sm:min-h-[230px] mx-auto" style={{imageRendering:"pixelated"}}
            src={items.imagePath}
            alt="card-img"
          />
        )).slice(0,5)}
      </div>
    </div>
  );
};

export default Genesis;
