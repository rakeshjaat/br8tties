"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebaricon } from "./Icons";
import Sidebar from "./Sidebar";
import { useState } from "react";
import ImageModal from "../ImageModal";
import Image from "next/image";
import ProfileSideBar from "./ProfileSideBar";


const Navbar = () => {
  const pathname = usePathname();
  let [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <ProfileSideBar   isProfileSidebarOpen={isProfileSidebarOpen}
        setIsProfileSidebarOpen={setIsProfileSidebarOpen} />

      {/* navbar */}
      <div className="max-w-[1240px] w-full mx-auto px-3">
        <div className="flex justify-between items-center pt-6 pb-[10px]">
          {/* logo */}
          <Link
            href="/"
            className="font-poppins cursor-pointer text-lg md:text-xl font-semibold text-black"
          >

            <Image
              src="/images/brettbanners.png"
              alt="Brett Banners"
              width={100}
              height={100}
              className="mx-auto" />

          </Link>

          {/* links */}
          <div className="flex items-center gap-10 max-lg:hidden">
            <Link
              href="/"
              className="font-poppins cursor-pointer text-xl font-semibold hover:scale-95 duration-300 text-black"
            >

            </Link>
            <Link
              href="/"
              className={`font-poppins cursor-pointer text-xl font-semibold hover:scale-95 duration-300 ${pathname === "/management" ? "text-[#80C4D3]" : "text-black"
                }`}
            >

            </Link>
            <Link
              href="/"
              className={`font-poppins cursor-pointer text-xl font-semibold hover:scale-95 duration-300 
              ${pathname === "/news" ? "text-[#80C4D3]" : "text-black"}`}
            >

            </Link>
            <Link
              href="/"
              className={`font-poppins cursor-pointer text-xl font-semibold hover:scale-95 duration-300 ${pathname === "/gallery" ? "text-[#80C4D3]" : "text-black"
                }`}
            >

            </Link>
            <button
              type="submit"
              onClick={openModal}
              className="border-[2px] border-[#004bff] py-1 px-1 whitespace-nowrap sm:px-2 hover:bg-[#004bff] hover:text-white transition duration-700 ease-in-out text-[#004bff] text-[14px] sm:text-[16px] font-poppins rounded-[22px] font-bold"
            >
              WALLET CHECKER
            </button>
          </div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden hover:scale-95 transition-all duration-150 ease-in-out"
          >
            <Sidebaricon />
          </button>
          <button
            onClick={() => setIsProfileSidebarOpen(!isProfileSidebarOpen)}
            className="hover:scale-95 transition-all duration-150 ease-in-out"
          >
            <Sidebaricon />
          </button>
          <ImageModal closeModal={closeModal} isOpen={isOpen} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
