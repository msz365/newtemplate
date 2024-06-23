import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Pricing = () => {
  return (
    <section
      id='price'
      className='mx-auto gap-10  max-xl:px-5 max-md:px-5 px-48 max-xl:py-5 py-20'
    >
      <div className='mx-auto px-24 mt-12 grid grid-cols-3 max-l:grid-cols-1  max-md:px-5 max-l:px-8 gap-0'>
        <div className='my-10 flex flex-col bg-white dark:bg-[#0d0d0d] shadow-xl rounded-lg   max-l:col-span-1 max-md:col-span-1'>
          <div className='flex items-center justify-center w-full bg-mycolor2-50/20 py-4 rounded-t-lg'>
            <h5 className='uppercase font-extrabold text-black dark:text-white text-sm'>
              E-COMMERCE
            </h5>
          </div>
          <div className='px-5 pb-14 pt-4'>
            <p className='mt-1 text-center font-extralight uppercase text-gray-500 max-lg:text-xs leading-7 text-sm'>
              Starting at
            </p>
            <h5 className='mt-4 mb-8 font-bold text-center text-mycolor-50/80  leading-7 text-4xl'>
              $8K
            </h5>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                $8,000 min. Up Front Cost
              </p>
            </div>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              Custom Designed
              </p>
            </div>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              Custom Coded Shopify Integration
              </p>
            </div>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              Easy to edit
              </p>
            </div>
            <div className='mt-14 flex justify-center'>
              <Link
                href='/'
                className='text-center py-4 px-8 rounded-full bg-mycolor-50 text-white hover:bg-mycolor-50transition ease-in-out duration-500 font-medium'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-white dark:bg-[#0d0d0d] shadow-3xl rounded-lg  z-10y  max-l:col-span-1 max-md:col-span-1'>
          <div className='flex items-center justify-center w-full bg-mycolor-50/60 py-4 rounded-t-md'>
            <h5 className='uppercase font-extrabold text-black dark:text-white text-sm'>
            STANDARD
            </h5>
          </div>
          <div className='px-5 pb-14 pt-4'>
            <p className='mt-1 text-center font-semibold uppercase text-gray-500 max-lg:text-xs leading-7 text-sm'>
            5 PAGES
            </p>
            <h5 className='mt-4 mb-8 font-bold text-center text-mycolor-50 leading-7 text-6xl'>
              $250<span className="text-2xl font-medium">/MO</span>
            </h5>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              Unlimited Edits
              </p>
            </div>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              Includes Hosting
              </p>
            </div>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              24/7 Customer Service
              </p>
            </div>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              Lifetime Updates
              </p>
            </div>
            <div className='mt-14 flex justify-center'>
              <Link
                href='/'
                className='text-center py-4 px-8 rounded-full bg-mycolor-50 text-white hover:bg-mycolor-50transition ease-in-out duration-500 font-medium'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className='my-10 flex flex-col bg-white dark:bg-[#0d0d0d] shadow-xl rounded-lg    max-l:col-span-1 max-md:col-span-1'>
          <div className='flex items-center justify-center w-full bg-mycolor2-50/20 py-4 rounded-t-lg '>
            <h5 className='uppercase font-extrabold text-black dark:text-white text-sm'>
            LOGOS & GRAPHIC DESIGN
            </h5>
          </div>
          <div className='px-5 pb-14 pt-4'>
            <p className='mt-1 text-center font-extralight uppercase text-gray-500 max-lg:text-xs leading-7 text-sm'>
            INCLUDED!
            </p>
            <h5 className='mt-4 mb-8 font-bold text-center text-mycolor-50/80  leading-7 text-4xl'>
              $0
            </h5>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              2 revisions
              </p>
            </div>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              All File Formats
              </p>
            </div>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              Ready to use
              </p>
            </div>
            <div className='mt-4 flex gap-2 w-full items-center px-8'>
              <IoMdCheckmarkCircle className='text-xl text-mycolor-50' />
              <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
              FREE w/ Subscription
              </p>
            </div>
            <div className='mt-14 flex justify-center'>
              <Link
                href='/'
                className='text-center py-4 px-8 rounded-full bg-mycolor-50 text-white hover:bg-mycolor-50transition ease-in-out duration-500 font-medium'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default Pricing;
