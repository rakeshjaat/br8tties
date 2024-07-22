import React, { useState, useEffect } from "react";

const descriptionMapping = {
  "outfit": "Welcome to the Br8tties Outfit Showcase! Dive into 80's nostalgia with 71 unique, fantabulous outfits inspired by Brett and Matt Furie’s Friends of Pepe. Explore a world of neon colours, retro fashion, and dance-ready styles.",
  "eyes": "Who doesn’t enjoy a stylish pair of glasses? Welcome to the Br8tties Eyes and Glasses Collection! Explore 35 unique eye and eyewear traits that bring 80's flair to life. From bold neon frames to funky eyeglasses, there's something for every Br8ttie. Ready to add some retro charm to your collection?",
  "mouth":"Ready to unleash your inner rockstar? Channel the charisma of rock legends and pop icons with 25 unique traits that capture the bold and rebellious spirit of the era. From daring beards to electrifying smiles, find the perfect feature to give your Br8tties NFT that unforgettable 80's edge.",
  "earring":"Who said less isn’t more? Welcome to the Br8tties Earring Extravaganza! Choose between two iconic looks: the timeless diamond stud or the classic gold loop. Whether you're feeling fancy or fabulous, these earrings add the perfect touch of 80's flair to your Br8tties. Ready to dazzle with just the right sparkle? Pick your favorite and rock the minimalistic bling!"
  // Add more mappings as needed
};

const Tilesdetails = ({ router }) => {

  const [tiles, setTiles] = useState(null);
  const [description, setDescription] = useState("");



  useEffect(() => {
    console.log(router.link)
    async function loadTiles() {
      try {
        const module = await import(`../public/images/${router.link}/imageData.json`);
        setTiles(module.default);
      } catch (error) {
        console.error("Failed to load tiles:", error);
        setTiles(null); // Handle error, possibly setting to a default or error state
      }
    }

    if (router.link) {
      loadTiles();
      setDescription(descriptionMapping[router.link] || "Default description for other links.");
    }
  }, [router.link]);

  return (
    <>
      <div className="max-w-[1240px] w-full mx-auto bg-white px-5 pt-[50px] md:pt-[100px] ">
        <div className="flex justify-between max-md:flex-col items-center md:items-end gap-5">
          <h1 className=" font-brett text-[#004bff] text-[50px]  md:text-[85px] lg:text-[100px]  leading-[110%]  md:leading-[140%] uppercase">
            {router.link}
          </h1>
          <p className="max-w-[530px] w-full font-poppins font-normal text-[16px] text-[#888888] leading-5">
          {description}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 my-8  md:my-16 ">
          {tiles && tiles.map((items, index) => (
            <img
              key={index}
              
              src={`/${items.imagePath}`}
              alt="images"
              style={{imageRendering:"pixelated"}}
              className="w-full cursor-pointer sm:min-w-[230px] h-full sm:min-h-[230px] mx-auto"
            />
          ))}
          
        </div>
       
      </div>
    </>
  );
};

export default Tilesdetails;
