import React from "react";

const Info = () => {
  return (
    <section className="bg-[#1e1e1f] shrink-on-change min-w-64 transition-all delay-1000  xl:h-full rounded-2xl ">
      <div className="flex xl:flex-col xl:py-6  p-3 px-6 justify-start items-center">
        <div className="bg-[#424246] sm:min-w-28 min-w-20 h-20  sm:h-28 rounded-2xl"></div>
        <div className="flex-grow justify-center items-start p-2 sm:p-8 gap-5 flex flex-col xl:items-center">
          <h1 className="sm:text-3xl font-medium px-3">Ashwin KV</h1>
          <div className="bg-[#2d2d30da]  text-xs min-w-max px-3 py-1 rounded-md  xl:text-center">
            Web Developer
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
