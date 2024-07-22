"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import walletData from './wallets.json';

export default function ImageModal({ isOpen, closeModal }) {
  const [walletAddress, setWalletAddress] = useState("");
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");

  const checkWallet = (e) => {
    e.preventDefault();
    const wallet = walletData.find((w) => w.address.toString().toLowerCase() === walletAddress.toLowerCase());
    if (wallet) {
      if (wallet.type === "FREE MINT") {
        setMessage("Congrats! You have 1 <b>FREE MINT</b> and also can mint on the GTD stage");
        setMessageStyle("bg-blue-50 border-blue-600 text-blue-700");
      } 
      else if (wallet.type === "GTD") {
        setMessage(`Congrats! You are on the WL with GTD status. <br> <br> Want to mint more Br8tties? <br> - <a href="https://zora.co/collect/base:0xb6e0d6b460de648cfeb0b1be5f9270f31dbf94d5/2" class="font-medium underline hover:text-yellow-600">Collect our free open edition </a> (1 mint =  1 GTD spot, stackable) and add to your existing allocation <br> - <a href="https://twitter.com/intent/tweet?text=Just%20minted%20my%20free%20%40br8ttiesOnBase%20banner!%20%20Secure%20your%20spot%20and%20join%20the%2080's%20party!%20%20%23Br8ttiesOnBase%20%23Base%20%23Zora&url=https%3A%2F%2Fzora.co%2Fcollect%2Fbase%3A0xb6e0d6b460de648cfeb0b1be5f9270f31dbf94d5%2F1" class="font-medium underline hover:text-yellow-600">Share it on X </a> `);
        setMessageStyle("bg-blue-50 border-blue-600 text-blue-700");
      } else {
        setMessage(`You are on the FCFS WL but not with GTD status. <br> <br> You can get it for free with 2 steps: <br> - <a href="https://zora.co/collect/base:0xb6e0d6b460de648cfeb0b1be5f9270f31dbf94d5/2" class="font-medium underline hover:text-yellow-600">Mint our free open edition to be GTD.</a> (1 mint =  1 GTD spot, stackable) <br> - <a href="https://twitter.com/intent/tweet?text=Just%20minted%20my%20free%20%40br8ttiesOnBase%20banner!%20%20Secure%20your%20spot%20and%20join%20the%2080's%20party!%20%20%23Br8ttiesOnBase%20%23Base%20%23Zora&url=https%3A%2F%2Fzora.co%2Fcollect%2Fbase%3A0xb6e0d6b460de648cfeb0b1be5f9270f31dbf94d5%2F1" class="font-medium underline hover:text-yellow-600">Share it on X </a>`);
        setMessageStyle("bg-yellow-50 border-yellow-600 text-yellow-700");
      }
    } else {
      setMessage(`Wallet address not found. <br> <br> You can be WL for free with 2 steps: <br> - <a href="https://zora.co/collect/base:0xb6e0d6b460de648cfeb0b1be5f9270f31dbf94d5/1" class="font-medium underline hover:text-red-600">Mint our free open edition to be GTD.</a> <br> - <a href="https://twitter.com/intent/tweet?text=Just%20minted%20my%20free%20%40br8ttiesOnBase%20banner!%20%20Secure%20your%20spot%20and%20join%20the%2080's%20party!%20%20%23Br8ttiesOnBase%20%23Base%20%23Zora&url=https%3A%2F%2Fzora.co%2Fcollect%2Fbase%3A0xb6e0d6b460de648cfeb0b1be5f9270f31dbf94d5%2F1" class="font-medium underline hover:text-red-600">Share this post on X.</a>`);
      setMessageStyle("bg-red-50 border-red-600 text-red-700");
    }
  };

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
                  <div className="flex flex-col justify-center gap-10 sm:gap-16 lg:gap-16">
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
                      <div className="text-start flex gap-4 max-sm:flex-wrap sm:flex-col max-sm:items-center justify-between">
                        {message && (
                          <div className={`border-l-4 p-4 ${messageStyle}`}>
                            <div className="flex">
                              <div className="ml-3">
                                <p className="text-md" dangerouslySetInnerHTML={{ __html: message }} />
                              </div>
                            </div>
                          </div>
                        )}
                        <form className="max-w-lg" onSubmit={checkWallet}>
                          <div className="flex gap-4 flex-col md:flex-row">
                            <input
                              id="wallet-address"
                              name="wallet"
                              type="text"
                              autoComplete="wallet"
                              onChange={(e) => setWalletAddress(e.target.value)}
                              required
                              className="flex-auto border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-[#004bff] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                              placeholder="  0xbr8tties69"
                            />
                            <button
                              type="submit"
                              className="flex-none bg-[#004bff] px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-[#004bff]/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Check my wallet
                            </button>
                          </div>
                          <p className="mt-4 text-sm leading-6 text-gray-900">
                            Whitelist is updated every 24/48 hours, if something is wrong reach us on  
                            <a href="https://x.com/br8ttiesonbase" className="font-semibold text-indigo-600 hover:text-indigo-500">
                              &nbsp;X
                            </a>
                            .
                          </p>
                        </form>
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
