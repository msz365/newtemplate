import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

const TopNav = () => {
  return (
    <div className='w-full  py-4 flex  z-10 relative'>
      <div className='w-[1440px] max-md:px-0 max-l:px-5 max-md:flex-col  max-lg:gap-2 mx-auto flex gap-16 border-b-2 border-b-gray-200 dark:border-b-gray-800'>
        <div className='flex-none  max-md:border-b-2 max-md:border-b-gray-200 max-md:dark:border-gray-800'>
          <div className='flex max-md:justify-center gap-2 items-start mb-4 max-md:mb-0 '>
            <IoLocationSharp className='text-gray-600 dark:text-white text-lg max-lg:text-sm' />
            <div className='flex flex-col gap-1 justify-start'>
              <p className='text-sm font-light text-gray-400 dark:text-white max-lg:hidden'>
                Address:
              </p>
              <p className='text-sm font-light text-gray-600 dark:text-white max-lg:text-xs'>
                2407 ARROWHEAD DR CHARLESTOWN, IN 47111
              </p>
            </div>
          </div>
        </div>
        <div className='grow'>
          <div className='flex max-md:justify-center gap-2 items-start max-md:border-b-2 max-md:border-b-gray-200 max-md:dark:border-b-gray-800 max-md:border-l-0 max-md:w-full border-l-2 border-l-gray-200 dark:border-gray-800 pl-10 '>
            <IoTimeSharp className='text-gray-600 dark:text-white text-lg' />
            <div className='flex flex-col gap-1 justify-start'>
              <p className='text-sm font-light text-gray-400 dark:text-white max-lg:hidden'>
                Timings:
              </p>
              <p className='text-sm font-light text-gray-600 dark:text-white max-lg:text-xs'>
                Monday - Friday: 8:00AM - 5:00PM
              </p>
            </div>
          </div>
        </div>
        <div className='flex-none '>
          <div className='flex max-md:justify-center gap-2 items-start max-md:border-l-0 border-l-2 border-l-gray-200 dark:border-gray-800 pl-10'>
            <MdLocalPhone className='text-gray-600 dark:text-white text-lg' />
            <div className='flex flex-col gap-1 justify-start'>
              <p className='text-sm font-light text-gray-400 dark:text-white max-lg:hidden'>
                502-643-8869
              </p>
              <p className='text-sm font-light text-gray-600 dark:text-white max-lg:text-xs'>
                502-643-8869
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
