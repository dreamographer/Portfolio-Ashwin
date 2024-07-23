"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
const page = () => {
  return (
    <section className="dark:bg-[#1e1e1f] dark:border-[#383838]  shadow-lg  border min-w-64 w-full xl:p-10 p-5 h-screen  rounded-2xl ">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:text-5xl text-3xl"
      >
        Resume
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "10rem" }}
        className="h-1 border-2 border-orange-yellow  rounded-lg  my-5"
      />
      <div>
        <div className="p-3 flex gap-2 items-center ">
          <div className=" text-2xl  shadow-md dark:shadow-slate-950  p-2 rounded-lg text-orange-yellow dark:border-[#383838] ">
            <FaBriefcase />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3, ease: "easeInOut" }}
            className="md:text-3xl   text-xl tracking-tighter"
          >
            Experience
          </motion.h1>
        </div>
        <div className="ps-16">
          <h2 className="text-md opacity-70">
            Comming Soon.... <br />You can explore The Portfolio section for
            projects...
          </h2>
        </div>
      </div>
      <div className="pt-5">
        <div className="p-3 flex gap-2 items-center ">
          <div className=" text-2xl  shadow-md dark:shadow-slate-950  p-2 rounded-lg text-orange-yellow dark:border-[#383838] ">
            <FaBookOpen />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3, ease: "easeInOut" }}
            className="md:text-3xl  text-xl tracking-tighter"
          >
            Education
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default page;
