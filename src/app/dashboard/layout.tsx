import Info from '@/components/Info';
import React from 'react'

const layout = ({children,details}:{children:React.ReactNode;details:React.ReactNode}) => {
  return (
    <>
      <main className=" min-w-64  dark:bg-black p-5 sm:p-14 gap-5 flex flex-col  dark:text-white xl:flex-row xl:justify-center">
        <Info />
        <div className="pb-14 xl:pb-0">{details}</div>
      </main>
    </>
  );
}

export default layout