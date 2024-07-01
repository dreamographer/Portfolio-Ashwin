import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      {" "}
      <motion.div
        key="details"
        initial={{ y: -20, opacity: 0, height: 0 }}
        animate={{ y: 0, opacity: 1, height: "auto" }}
        exit={{
          y: -20,
          opacity: 0,
          height: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
        }}
      >
        <div className="border-t-2 border-b-2 mt-5 border-[#383838]  flex py-3  ">
          <div className="text-xs sm:text-sm flex flex-col items-start gap-5">
            <div className="flex justify-center items-center gap-5 ">
              <div className="border p-2 rounded-lg text-orange-yellow text-lg border-[#383838] ">
                <a href="mailto:ashwinkv.akv@gmail.com">
                  <MdOutlineMail />
                </a>
              </div>
              <div>
                <small className="text-xs text-[#d6d6d6b3]">EMAIL</small>
                <p>
                  <a href="mailto:ashwinkv.akv@gmail.com">
                    ashwinkv.akv@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 ">
              <div className="border p-2 rounded-lg text-orange-yellow text-lg border-[#383838] ">
                <a href="tel:+919567454484">
                  <IoIosPhonePortrait />
                </a>
              </div>
              <div>
                <small className="text-xs text-[#d6d6d6b3]">Phone</small>
                <p>
                  <a href="tel:+919567454484">9567454484</a>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 ">
              <div className="border p-2 rounded-lg text-orange-yellow text-lg border-[#383838] ">
                <SlCalender />
              </div>
              <div>
                <small className="text-xs text-[#d6d6d6b3]">BIRTHDAY</small>
                <p>February 27, 2002</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 ">
              <div className="border p-2 rounded-lg text-orange-yellow text-lg border-[#383838] ">
                <a
                  href="https://maps.app.goo.gl/ZrWtD2mYekZKdEhe7"
                  target="blank"
                >
                  <CiLocationOn />
                </a>
              </div>
              <div>
                <small className="text-xs text-[#d6d6d6b3]">LOCATION</small>
                <address>
                  <a
                    href="https://maps.app.goo.gl/ZrWtD2mYekZKdEhe7"
                    target="blank"
                  >
                    Kasargod, Kerala, India
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 text-[#d6d6d6] flex justify-start gap-5 item-center text-xl">
          <a
            className="hover:text-orange-yellow"
            href="https://www.linkedin.com/in/ashwin-kv/"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:text-orange-yellow"
            href="https://www.instagram.com/dreamographer_/"
            target="blank"
          >
            <FaInstagram />
          </a>
          <a
            className="hover:text-orange-yellow"
            href="https://github.com/dreamographer"
            target="blank"
          >
            <FaGithub />
          </a>
          <a
            className="hover:text-orange-yellow"
            href="https://leetcode.com/u/Ashwin_K_V/"
            target="blank"
          >
            <SiLeetcode />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;