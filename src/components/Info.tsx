"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp} from "react-icons/fa";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
const Info = () => {
  const [openInfo,setOpenInfo]=useState(true)
  return (
    <>
      <section className="bg-[#1e1e1f]  flex flex-col xl:py-6  p-3 px-6 relative border-[#383838]  border shrink-on-change min-w-64 transition-all  delay-75  xl:h-full h-full  rounded-2xl ">
        <div className="flex xl:flex-col  justify-start items-center">
          <div className="bg-[#424246]   sm:min-w-28 flex justify-center overflow-hidden min-w-20 h-20 sm:h-28 rounded-2xl">
            <Image
              src="/Ashwin.png"
              height={100}
              width={100}
              alt="profile"
              className="w-full h-full object-cover "
            />
          </div>
          <div className=" flex-grow justify-center md:justify-start p-2 sm:p-8 gap-5 flex flex-col items-center sm:items-start">
            <h1 className="sm:text-3xl font-medium px-3">Ashwin KV</h1>
            <div className="bg-[#2d2d30da]  text-xs min-w-max px-3 py-1 rounded-md  xl:text-center">
              Web Developer
            </div>
          </div>
          <button
            onClick={() => {
              setOpenInfo((prev)=>!prev);
            }}
            className="xl:hidden absolute top-0 rounded-bl-xl flex items-center gap-2 border-[#383838] border-l border-b  p-2 right-0 text-md text-orange-yellow "
          >
            <p className="md:block hidden md:text-sm ">Show Contacts</p>
            {openInfo ? <FaChevronUp /> : <FaChevronDown />}
            
          </button>
        </div>
        <AnimatePresence>
          {openInfo && (
              <Contact />
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Info;
