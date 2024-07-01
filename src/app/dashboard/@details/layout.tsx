import Navigation from '@/components/Navigation'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="relative  xl:w-[1000px] ">
      {children}
      <Navigation />
    </div>
  </>
);

export default layout