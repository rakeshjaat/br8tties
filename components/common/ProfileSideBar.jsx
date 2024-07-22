import { useEffect, useRef } from "react";

const ProfileSideBar = ({ isProfileSidebarOpen, setIsProfileSidebarOpen }) => {
    const sidebarRef = useRef();

    // useEffect to close sidebar when click outside
    useEffect(() => {
        const handler = (e) => {
            if (!sidebarRef.current.contains(e.target)) {
                setIsProfileSidebarOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        // preveting body from scrolling
        if (isProfileSidebarOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }

        return () => {
            document.removeEventListener("mousedown", handler);
            document.body.style.overflowY = "auto";
            document.body.style.height = "auto";
        };
    }, [isProfileSidebarOpen, setIsProfileSidebarOpen]);
    return (
        <div className={`z-10 fixed ${isProfileSidebarOpen && "inset-0"
            } bg-black bg-opacity-65`}>
            <div
                ref={sidebarRef}
                className={`z-[40] fixed max-sm:w-full h-full right-0 bg-gray-900 w-[350px] transition-all duration-500 p-6 ease-in-out ${isProfileSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } shadow-xl border-l`}
            >
                <button
                    className="fixed top-4 left-4 hover:scale-95 transition-all duration-200 ease-in-out text-white"
                    onClick={() => setIsProfileSidebarOpen(!isProfileSidebarOpen)}
                >
                    close
                </button>
                <div className="bg-gray-600 border border-gray-500 rounded-xl p-4 mt-8 mb-3">
                    <div className="flex gap-3 items-center mb-3">
                        <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                        <div>
                            <p className="text-white text-base">854nok74548</p>
                            <p className="text-white text-base">Wallet balance</p>
                        </div>
                    </div>
                    <p className="text-white opacity-80 text-sm">ksdhfjkshf</p>
                    <p className="text-white text-xl">45465484848</p>
                    <div className="flex justify-between">
                        <p className="text-white capitalize opacity-80">total</p>
                        <p className="text-white">656964</p>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <button className="text-white text-center bg-transparent w-1/2 hover:text-black hover:bg-white transition-all duration-300 py-2 px-4 border border-gray-400 rounded-xl text-base">Learn</button>
                        <button className="text-white text-center bg-transparent w-1/2 hover:text-black hover:bg-white transition-all duration-300 py-2 px-4 border border-gray-400 rounded-xl text-base">Learn</button>
                    </div>
                </div>
                <div className="bg-gray-600 border border-gray-500 rounded-xl p-4">
                   <p className="text-2xl text-white mb-2">Earning</p>
                 
                    <div className="flex justify-between border-b border-gray-500 pb-2">
                        <p className="text-white capitalize opacity-80">total</p>
                        <p className="text-white">656964</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-500 py-2">
                        <p className="text-white capitalize opacity-80">total</p>
                        <p className="text-white">656964</p>
                    </div>
                    <div className="flex justify-between py-2">
                        <p className="text-white capitalize opacity-80 text-sm">your earn</p>
                        <p className="text-yellow-400">656964</p>
                    </div>
                
                </div>
            </div>

        </div>
    )
}

export default ProfileSideBar