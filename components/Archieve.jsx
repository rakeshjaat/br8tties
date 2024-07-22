import React from "react";
import Outfit from "./Genesis";
import Head from "./Tiles";
import Eyes from "./Eyes";
import Mouth from "./Mouth";
import Earring from "./Earring";

const Archieve = () => {
  return (
    <>
      <div className="max-w-[1240px] w-full mx-auto bg-white px-5 xl:px-0  py-[50px] md:py-[100px] ">
        <div className="flex justify-between max-md:flex-col items-left md:item-center gap-5">
          <h1 className="font-brett text-[#004bff] text-[50px]  md:text-[85px] lg:text-[100px] leading-[110%] sm:leading-[120%] md:leading-[110%]">
            THE <br></br>BR8TTIES
          </h1>
          <p className="text-justify max-w-[530px] w-full font-poppins font-normal text-[16px] text-[#888888] leading-5">
          Make a based statement this summer by stepping into the fantabulous world of Br8tties, the ultimate art project on Base!
<br></br>
<br></br>
Collect unique, nostalgia-infused NFTs, groove to retro beats and embrace the neon glow and explosion of colours from the iconic world of 80s fashion.
<br></br>
<br></br>

Inspired by Brett and Matt Furie’s Friends of Pepe, Br8tties brings you 80's dance and pop culture vibes to make the Onchain Summer of 2024   <span className="font-brett">unforgettable!
          </span>          </p>
        </div>
      </div>
      <Outfit />
      <Head />
      <Eyes />
      <Mouth />
      <Earring />
    </>
  );
};

export default Archieve;
