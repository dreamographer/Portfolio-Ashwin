"use client";
import React from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/ThemeToggle";
import Skills from "@/components/Skills";
const page = () => {
  return (
    <>
      <section className="dark:bg-[#1e1e1f] bg-slate-100  flex flex-col gap-10 origin-top dark:border-[#383838] border min-w-64 w-full xl:p-10 p-5  rounded-2xl ">
        <div>
          <ModeToggle />
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
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
            className="font-thin px-2 "
          >
            Hi, I&apos;m Ashwin KV, a self-taught Full Stack Developer
            specializing in the MERN stack. With a BCA degree, I&apos;m
            passionate about crafting robust web solutions using MongoDB,
            Express.js, React.js, Next.js and Node.js. I&apos;ve delivered
            successful projects in MERN, Next.js, and PHP, showcasing my
            proficiency. I thrive on tackling complex challenges with creativity
            and precision. Currently seeking new job opportunities to
            contribute, learn, and grow professionally.
          </motion.p>
        </div>
    
          <Skills/>
      </section>
    </>
  );
};

export default page;
