"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <main className="min-h-96 min-w-64  dark:bg-black p-5 sm:p-14 gap-5 flex flex-col  dark:text-white">
      <section className="bg-[#1e1e1f] shrink-on-change min-w-64 transition-all delay-1000   rounded-2xl ">
        <div className="flex  p-3 px-6 justify-start items-center">
          <div className="bg-[#424246] sm:min-w-28 min-w-20 h-20  sm:h-28 rounded-2xl"></div>
          <div className="flex-grow justify-center items-start p-2 sm:p-8 gap-5 flex flex-col ">
            <h1 className="sm:text-3xl font-medium px-3">Ashwin KV</h1>
            <div className="bg-[#2d2d30da] text-xs min-w-max px-3 py-1 rounded-md">
              Web Developer
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#424246] min-w-64 fixed bottom-0 left-0 backdrop-blur-3xl  w-full  h-10 items-center flex justify-center  rounded-t-2xl  opacity-85 ">
        <ul className="flex text-xs justify-center gap-2  cursor-pointer">
          <li className="hover:text-orange-yellow">About</li>
          <li className="hover:text-orange-yellow">Resume</li>
          <li className="hover:text-orange-yellow">Portfolio</li>
          <li className="hover:text-orange-yellow">Blog</li>
          <li className="hover:text-orange-yellow">Contact</li>
        </ul>
      </section>
    </main>
  );
}
