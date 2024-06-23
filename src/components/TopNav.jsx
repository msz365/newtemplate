import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

const TopNav = () => {
  return (
    <div className='w-full  py-4 flex z-10 relative'>
      <div className='w-[1440px] mx-auto flex gap-16 border-b-2 border-b-gray-200 dark:border-gray-800'>
        <div className='flex-none  '>
          <div className='flex gap-2 items-start mb-4 '>
            <IoLocationSharp className='text-gray-600 dark:text-white text-lg' />
            <div className='flex flex-col gap-1 justify-start'>
              <p className='text-sm font-light text-gray-400 dark:text-white'>
                Address:
              </p>
              <p className='text-sm font-light text-gray-600 dark:text-white'>
                2407 ARROWHEAD DR CHARLESTOWN, IN 47111
              </p>
            </div>
          </div>
        </div>
        <div className=' grow '>
          <div className='flex gap-2 items-start border-l-2 border-l-gray-200 dark:border-gray-800 pl-10 '>
            <IoTimeSharp className='text-gray-600 dark:text-white text-lg' />
            <div className='flex flex-col gap-1 justify-start'>
              <p className='text-sm font-light text-gray-400 dark:text-white'>
                Timings:
              </p>
              <p className='text-sm font-light text-gray-600 dark:text-white'>
                Monday - Friday: 8:00AM - 5:00PM
              </p>
            </div>
          </div>
        </div>
        <div className='flex-none '>
          <div className='flex gap-2 items-start border-l-2 border-l-gray-200 dark:border-gray-800 pl-10'>
            <MdLocalPhone className='text-gray-600 dark:text-white text-lg' />
            <div className='flex flex-col gap-1 justify-start'>
              <p className='text-sm font-light text-gray-400 dark:text-white'>
                502-643-8869
              </p>
              <p className='text-sm font-light text-gray-600 dark:text-white'>
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
