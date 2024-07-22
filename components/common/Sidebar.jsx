import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MenuCloseIcon } from "./Icons";
import ImageModal from "../ImageModal";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const sidebarRef = useRef();
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }


  // useEffect to close sidebar when click outside
  useEffect(() => {
    const handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    // preveting body from scrolling
    if (isSidebarOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handler);
      document.body.style.overflowY = "auto";
      document.body.style.height = "auto";
    };
  }, [isSidebarOpen, setIsSidebarOpen]);

  return (
    // Sidebar Container
    <div
      className={`lg:hidden z-10 fixed ${
        isSidebarOpen && "inset-0"
      } bg-black bg-opacity-65`}
    >
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`z-[40] fixed max-sm:w-full h-full right-0 bg-white w-64 transition-all duration-500  ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } shadow-xl border-l`}
      >
        {/* Sidebar content */}
        <div className="p-4 text-black font-semibold">
          {/* Add your sidebar links or content here */}
          <ul className="mt-7">
            
          </ul>

          <button
              type="submit"
              onClick={openModal}
              className="border-[2px] border-[#004bff] py-1 px-1 whitespace-nowrap sm:px-2 hover:bg-[#004bff] hover:text-white transition duration-700 ease-in-out text-[#004bff] text-[14px] sm:text-[16px] font-poppins rounded-[22px] font-bold"
            >
              WALLET CHECKER
            </button>
        </div>

        {/* Menu toggle button */}
        <button
          className="fixed top-4 right-4 hover:scale-95 transition-all duration-200 ease-in-out"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <MenuCloseIcon />
        </button>
       
      </div>
      <ImageModal closeModal={closeModal} isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
