import Tilesdetails from "@/components/Tilesdetails";
import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/router";
import React from "react";

const Details = () => {
  const router = useRouter().query;
  return (
    <>
      <Navbar />
      <Tilesdetails router={router} />
    </>
  );
};

export default Details;
