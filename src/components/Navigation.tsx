"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const Navigation = () => {
    const pathname = usePathname();
    
     const links = [
       { href: "/dashboard/aboutme", text: "About" },
       { href: "/dashboard/resume", text: "Resume" },
       { href: "/dashboard/portfolio", text: "Portfolio" },
       { href: "/dashboard/blog", text: "Blog" },
       { href: "/dashboard/contact", text: "Contact" },
     ];
  return (
    <section className="bg-[#424246] border-[#383838] border min-w-64 fixed  bottom-0 backdrop-filter backdrop-blur-2xl bg-white/10 left-0  w-full h-16 items-center flex justify-center rounded-t-2xl opacity-85 xl:absolute xl:top-0 xl:left-2/4  xl:w-2/4 xl:rounded-t-none xl:rounded-bl-2xl xl:rounded-tr-2xl  ">
      <ul className="flex text-xs md:text-base justify-center gap-2 sm:gap-5 md:gap-10 xl:gap-7 cursor-pointer">
        {links.map(link => (
          <li
            key={link.href}
            className={`hover:text-orange-yellow ${
              pathname === link.href ? "text-orange-yellow" : ""
            }`}
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Navigation