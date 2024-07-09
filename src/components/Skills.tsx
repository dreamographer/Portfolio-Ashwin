import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Skills = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3, ease: "easeInOut" }}
        className="md:text-3xl mb-2  text-xl tracking-tighter"
      >
        Technical Skills
      </motion.h1>

      <div>
        <div className="p-2 flex-wrap w-full justify-center md:justify-normal text-sm md:text-md  flex gap-4 text-center">
          <p className="p-3 w-full md:w-auto md:flex-grow-0">Languages:</p>{" "}
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/javascript-original.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md hover:-translate-y-2 transition-all ease-out duration-300  p-1 cursor-pointer">
            <Image
              src={"/typescript-plain.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md hover:-translate-y-2 transition-all ease-out duration-300  p-1 cursor-pointer">
            <Image src={"/php-plain.png"} alt="Logo" width={50} height={100} />
          </p>
          <p className="bg-white shadow-md  rounded-md hover:-translate-y-2 transition-all ease-out duration-300  p-1 cursor-pointer">
            <Image src={"/c-original.png"} alt="Logo" width={50} height={100} />
          </p>
          <p className="bg-white shadow-md  rounded-md hover:-translate-y-2 transition-all ease-out duration-300  p-1 cursor-pointer">
            <Image
              src={"/html5-original.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md hover:-translate-y-2 transition-all ease-out duration-300  p-1 cursor-pointer">
            <Image src={"/java-plain.png"} alt="Logo" width={50} height={100} />
          </p>
          <p className="bg-white shadow-md  rounded-md hover:-translate-y-2 transition-all ease-out duration-300  p-1 cursor-pointer">
            <Image
              src={"/python-original.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
        </div>
        <div className="p-2 flex-wrap w-full text-sm md:text-md justify-center md:justify-normal flex gap-4 text-center">
          <p className="p-3 w-full md:w-auto">Technologies/Frameworks:</p>{" "}
          <p className="bg-white shadow-md  p-1 rounded-md hover:-translate-y-2 transition-all ease-out duration-300   cursor-pointer">
            <Image
              src={"/nodejs-original-wordmark.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  p-1 rounded-md hover:-translate-y-2 transition-all ease-out duration-300   cursor-pointer">
            <Image
              src={"/express-original-wordmark.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  p-1 rounded-md hover:-translate-y-2 transition-all ease-out duration-300   cursor-pointer">
            <Image
              src={"/nextjs-original-wordmark.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
        </div>
        <div className="p-2 flex-wrap w-full text-sm justify-center md:justify-normal md:text-md flex gap-4 text-center">
          <p className="p-3 w-full md:w-auto">Libraries:</p>{" "}
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/react-original.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/redux-original.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/tailwindcss-plain.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/bootstrap-original.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer px-2">
            <Image
              src={"/framer-motion-seeklogo.svg"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
        </div>
        <div className="p-2 flex-wrap w-full justify-center md:justify-normal text-sm md:text-md flex gap-4 text-center">
          <p className="p-3 w-full md:w-auto">DBMS:</p>{" "}
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/mongodb-original-wordmark.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/mysql-original-wordmark.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
        </div>

        <div className="p-2 flex gap-4 text-center justify-center md:justify-normal md:text-md text-sm flex-wrap w-full">
          <p className="p-3 w-full md:w-auto">Familiar with:</p>{" "}
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/github-original.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/docker-plain-wordmark.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/socketio-original.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/googlecloud-original.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer">
            <Image
              src={"/firebase-plain-wordmark.png"}
              alt="Logo"
              width={50}
              height={100}
            />
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer text-black flex items-center">
            Data Structure
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer text-black flex items-center">
            AWS EC2
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer text-black flex items-center">
            Ngnix
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer text-black flex items-center">
            Razorpay
          </p>
        </div>
        <div className="p-2 flex-wrap w-full justify-center md:justify-normal text-sm md:text-md  flex gap-4 text-center">
          <p className="p-3 flex-grow md:flex-grow-0">
            Architectural Patterns:
          </p>{" "}
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer text-black flex items-center">
            Clean-Architecture
          </p>
          <p className="bg-white shadow-md  rounded-md  hover:-translate-y-2 transition-all ease-out duration-300 p-1 cursor-pointer text-black flex items-center px-3">
            MVC
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
