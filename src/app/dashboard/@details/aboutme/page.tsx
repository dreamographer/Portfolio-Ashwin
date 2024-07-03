"use client"
import React from "react";
import { motion } from "framer-motion";
const page = () => {
  return (
    <>
      <section className="bg-[#1e1e1f] origin-top border-[#383838] border min-w-64 w-full xl:p-10 p-5 min-h-screen  rounded-2xl ">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="md:text-5xl text-3xl"
        >
          Get to know me!
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "15rem" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="h-1 border-2  border-orange-yellow  rounded-lg  my-5"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="font-thin  "
        >
          Hi, I&apos;m Ashwin KV, a self-taught Full Stack Developer
          specializing in the MERN stack. With a BCA degree, I&apos;m passionate
          about crafting robust web solutions using MongoDB, Express.js,
          React.js, Next.js and Node.js. I&apos;ve delivered successful projects
          in MERN, Next.js, and PHP, showcasing my proficiency. I thrive on
          tackling complex challenges with creativity and precision. Currently
          seeking new job opportunities to contribute, learn, and grow
          professionally.
        </motion.p>
      </section>
    </>
  );
};

export default page;
