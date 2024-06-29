"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const Navigation = () => {
    const pathname = usePathname();
    console.log(pathname);
    
     const links = [
       { href: "/dashboard/aboutme", text: "About" },
       { href: "/dashboard/resume", text: "Resume" },
       { href: "/dashboard/portfolio", text: "Portfolio" },
       { href: "/dashboard/blog", text: "Blog" },
       { href: "/dashboard/contact", text: "Contact" },
     ];
  return (
    <section className="bg-[#424246] min-w-64 fixed bottom-0 left-0 backdrop-blur-3xl w-full h-16 items-center flex justify-center rounded-t-2xl opacity-85">
      <ul className="flex text-xs justify-center gap-2 cursor-pointer">
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