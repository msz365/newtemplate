import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogpic from "../../public/wordpress.jpg";

const Blog = () => {
  return (
    <section
      id='blog'
      className='mx-auto gap-10 w-full max-xl:px-5 max-md:px-5 px-48 max-xl:py-5 py-20'
    >
      <div className='flex items-center justify-center flex-col'>
        <h2 className='font-extrabold text-black dark:text-white text-4xl uppercase max-md:text-2xl'>
          <span className='text-mycolor-50'>Our</span> Blog
        </h2>
        <div className='flex items-center justify-center mt-5'>
          <div className='w-14 border border-dashed border-mycolor-50'></div>
          <Image
            src='/portfolio.svg'
            alt='portfolio icon'
            height={40}
            width={40}
            className='mx-5'
          />
          <div className='w-14 border border-dashed border-mycolor-50'></div>
        </div>
      </div>
      <div className='mx-auto px-24 mt-12 grid grid-cols-3 max-l:grid-cols-2 max-md:grid-cols-1 max-md:px-5 max-l:px-8 gap-16'>
      
        <div className='flex flex-col bg-white dark:bg-[#0d0d0d] shadow-3xl rounded-lg px-5 py-14  border-t-4 border-t-mycolor-50 max-l:col-span-1 max-md:col-span-1'>
          <div className='flex items-center justify-center'>
            <Image
              src={blogpic}
              alt='client website mockup'
              className='rounded-md'
            />
          </div>
          <h5 className='mt-5 font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl'>
          Are hand coded websites better than WordPress?
          </h5>
          <p className='mt-1 font-extralight text-gray-400 max-lg:text-xs leading-7 text-lg'>
            Seattle, WA
          </p>
          <p className='mt-4 pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'>
          Learn the differences in speed and security between the two.
          </p>
          <Link
            href='/'
            className='text-center my-8 py-4 px-8 rounded-full bg-mycolor-50 text-white hover:bg-mycolor-50-400 transition ease-in-out duration-500 font-medium'
          >
           Read More
          </Link>
        </div>
        <div className='flex flex-col bg-white dark:bg-[#0d0d0d] shadow-3xl rounded-lg px-5 py-14  border-t-4 border-t-mycolor-50 max-l:col-span-1 max-md:col-span-1'>
          <div className='flex items-center justify-center'>
            <Image
              src={blogpic}
              alt='client website mockup'
              className='rounded-md'
            />
          </div>
          <h5 className='mt-5 font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl'>
          Are hand coded websites better than WordPress?
          </h5>
          <p className='mt-1 font-extralight text-gray-400 max-lg:text-xs leading-7 text-lg'>
            Seattle, WA
          </p>
          <p className='mt-4 pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'>
          Learn the differences in speed and security between the two.
          </p>
          <Link
            href='/'
            className='text-center my-8 py-4 px-8 rounded-full bg-mycolor-50 text-white hover:bg-mycolor-50-400 transition ease-in-out duration-500 font-medium'
          >
           Read More
          </Link>
        </div>
        <div className='flex flex-col bg-white dark:bg-[#0d0d0d] shadow-3xl rounded-lg px-5 py-14  border-t-4 border-t-mycolor-50 max-l:col-span-1 max-md:col-span-1'>
          <div className='flex items-center justify-center'>
            <Image
              src={blogpic}
              alt='client website mockup'
              className='rounded-md'
            />
          </div>
          <h5 className='mt-5 font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl'>
          Are hand coded websites better than WordPress?
          </h5>
          <p className='mt-1 font-extralight text-gray-400 max-lg:text-xs leading-7 text-lg'>
            Seattle, WA
          </p>
          <p className='mt-4 pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'>
          Learn the differences in speed and security between the two.
          </p>
          <Link
            href='/'
            className='text-center my-8 py-4 px-8 rounded-full bg-mycolor-50 text-white hover:bg-mycolor-50-400 transition ease-in-out duration-500 font-medium'
          >
           Read More
          </Link>
        </div>
    
      </div>
    </section>
  );
};

export default Blog;
