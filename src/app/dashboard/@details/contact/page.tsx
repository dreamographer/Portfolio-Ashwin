"use client";
import React from "react";
import { motion } from "framer-motion";
const page = () => {
  return (
    <section className="dark:bg-[#1e1e1f] dark:border-[#383838]  shadow-lg border min-w-64 w-full xl:p-10 p-5 h-screen  rounded-2xl ">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:text-5xl text-3xl"
      >
        Contact me
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "14rem" }}
        className="h-1 border-2  border-orange-yellow  rounded-lg  my-5"
      />
    </section>
  );
};

export default page;
