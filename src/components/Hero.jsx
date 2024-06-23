"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Background from "@/components/Background";

const Hero = () => {
  return (
    <section
      id='hero'
      className='w-full max-xl:h-auto justify-center px-16 max-xl:px-0'
    >
      {/* <Background id='background' /> */}
      <div className='grid grid-cols-2 gap-4 max-md:grid-cols-1 w-full'>
        <div className='max-l:px-12 max-l:py-12 max-lg:py-12 max-lg:px-12 py-52 px-36 w-full'>
          <h3 className='max-md:text-base font-semibold max-lg:text-base text-xl uppercase text-mycolor-50 tracking-wider'>
            Hauling Is Our Business
          </h3>
          <h1 className='max-md:text-3xl max-md:my-3 my-5 max-xl:text-5xl max-lg:text-4xl text-7xl font-extrabold tracking-tighter dark:text-white '>
            We Deliver Local and Long Haul
          </h1>
          
          <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base'>
            Hauling has been in our DNA for generations and we have a long
            history in the industry. Based in CHARLESTOWN , IN, we specialize in goods transportation. We
            can handle shipments large and small throughout the US.
          </p>
          <Link
            href='/contact'
            className='my-8 py-4 px-8 rounded-full bg-mycolor-50 text-white hover:bg-mycolor2-50 transition ease-in-out duration-500 font-medium'
          >
            Book my Cartage
          </Link>
        </div>
        {/* <div className="w-full relative rounded-2xl  bg-[url('/layer.png')] bg-cover bg-center">
          <div className='absolute bg-mycolor-50 opacity-20 dark:bg-mycolor-100 dark:opacity-40 w-full h-full rounded-2xl '></div>
        </div> */}
        <div className="w-full relative rounded-2xl  bg-[url('/truck.jpg')] bg-cover bg-center">
          <div className='absolute bg-mycolor-50 opacity-20 dark:bg-mycolor-100 dark:opacity-40 w-full h-full rounded-2xl '></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
