import Navigation from '@/components/Navigation';
import Link from 'next/link';
import React from 'react'

const layout = ({children,details}:{children:React.ReactNode;details:React.ReactNode}) => {
  return (
    <>
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
        {details}
        <Navigation />
      </main>
    </>
  );
}

export default layout