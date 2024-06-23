'use client'
import React from "react";
import Background2 from "./Baclground2";


const InnerPageHeader = ({title}) => {
  return (
    <section
      id='InnerHeader'
      className="relative w-full bg-blue-300  h-128 -mt-32 flex items-center justify-center pt-20 bg-[url('/header.jpg')] bg-cover bg-center"
    >
          <Background2 id="background2" />
      <div className='absolute top-0 left-0 w-full h-36  backdrop-blur-sm'></div>
      <div className='absolute top-0 left-0 w-full h-full bg-mycolor2-50/50 dark:bg-mycolor2-100 dark:opacity-60 z-1'></div>
      <div className='flex mx-auto items-center justify-center'>
        <h1 className='max-md:text-3xl max-md:my-3 my-5 max-xl:text-5xl max-lg:text-4xl text-5xl font-extrabold tracking-tight z-10 dark:text-white'>
         {title}
        </h1>
      </div>
    </section>
  );
};

export default InnerPageHeader;
