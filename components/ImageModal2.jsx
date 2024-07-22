"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

export default function ImageModal({ isOpen, closeModal }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#007aff80]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-[900px] w-full transform bg-white p-6 lg:p-10 border-[2px] border-[#004bff] rounded transition-all">
                  <div className="flex flex-col justify-center gap-10 sm:gap-16 lg:gap-24">
                    <div className="flex items-center pb-2 justify-between border-b-[2px] border-b-[#004bff]">
                      <p className="font-poppins text-[#004bff] font-extrabold text-xl sm:text-3xl">
                        WALLET CHECKER
                      </p>
                      <button
                        onClick={closeModal}
                        className="text-[#004bff] font-poppins text-md sm:text-lg font-bold sm:px-3 px-1  rounded-full border-[#004bff] border-[3px] hover:bg-[#004bff] hover:text-white duration-300 ease-in-out"
                        type="submit"
                      >
                        Close
                      </button>
                    </div>
                    <div className="flex max-sm:flex-col justify-center w-full gap-4 lg:gap-8">
                      <img
                        src="https://i.pinimg.com/564x/24/d7/c0/24d7c0709a5fab68f8726ed6955777f6.jpg"
                        className="max-w-[300px] lg:max-w-[400px] w-full max-sm:mx-auto"
                      />
                      <div className="text-start flex gap-4 max-sm:flex-wrap sm:flex-col max-sm:items-center justify-between">
                        <div>
                          <p className="text-md font-bold font-poppins">Type</p>
                          <button
                            type="submit"
                            className="px-2 mt-1 font-poppins font-bold border-[2px] border-[#004bff] rounded-full hover:bg-[#004bff] hover:text-white duration-300 ease-in-out text-sm"
                          >
                            1/1
                          </button>
                          <p className="text-md font-bold font-poppins pt-3">
                            Name
                          </p>
                          <button
                            type="submit"
                            className="px-2 mt-1 font-poppins font-bold border-[2px] border-[#004bff] rounded-full hover:bg-[#004bff] hover:text-white duration-300 ease-in-out text-sm"
                          >
                            I'M NOT THERE
                          </button>
                          <p className="text-md font-bold font-poppins pt-3">
                            PRODUCTION
                          </p>
                          <button
                            type="submit"
                            className="px-2 mt-1 font-poppins font-bold border-[2px] border-[#004bff] rounded-full hover:bg-[#004bff] hover:text-white duration-300 ease-in-out text-sm"
                          >
                            MANUAL
                          </button>
                        </div>
                        <div>
                          <button
                            className="px-4 mt-1 font-poppins font-bold border-[2px] border-[#004bff] rounded-full text-white bg-[#004bff] text-sm hover:bg-transparent hover:text-[#004bff] duration-300 ease-in-out"
                            type="submit"
                          >
                            BUY OF OPESEA
                          </button>
                          <div className="flex gap-1 mt-2">
                            <button
                              className="px-1 hover:bg-transparent duration-300 ease-in-out hover:text-[#939393] font-poppins font-semibold border-[2px] border-[#939393] rounded-full text-white text-sm bg-[#939393]"
                              type="submit"
                            >
                              VIEW DIGITAL
                            </button>
                            <button
                              className="px-1 hover:bg-transparent duration-300 ease-in-out hover:text-[#939393] font-poppins font-semibold border-[2px] border-[#939393] rounded-full text-white text-sm bg-[#939393]"
                              type="submit"
                            >
                              VIEW PRINT
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
