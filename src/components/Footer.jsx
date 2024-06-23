"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { useTheme } from "next-themes";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section id='footer' className='mx-auto gap-10 w-full  max-xl:pt-5 pt-20'>
      <div className='mx-auto flex w-4/5 bg-gradient-to-r from-mycolor-50/30 from-60% to-mycolor2-50/30 t0-40% rounded-lg backdrop-blur-sm shadow-lg '>
        <div className='w-full mx-auto grid grid-cols-3 max-l:grid-cols-1 gap-20 max-l:gap-5 max-l:px-5 px-10 py-10'>
          <div className=' flex flex-col gap-3 items-center'>
            {resolvedTheme === "light" ? (
              <Image src='/logo.svg' alt='Logo' width={120} height={50} />
            ) : (
              <Image src='/logo-white.svg' alt='Logo' width={120} height={50} />
            )}

            <Link
              href={"mailto:info@cwexpressllc.com"}
              className=' font-semibold text-black dark:text-white max-lg:text-sm leading-7 text'
            >
              info@cwexpressllc.com
            </Link>
            <Link
              href={"tel:502-643-8869"}
              className=' font-semibold text-black dark:text-white max-lg:text-sm leading-7 text'
            >
              502-643-8869
            </Link>
          </div>
          <div className=' flex flex-col gap-3 items-start justify-start px-10 max-l:px-5'>
            <h5 className='relative mt-14 font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl tracking-wider'>
              Navigation
            </h5>
            <div className='my-3 flex w-full h-[2px] bg-mycolor2-50 '></div>
            <NavLink href='/about' title='About' />
            <NavLink href='/services' title='Services' />
            {/* <NavLink href='/portfolio' title='Portfolio' /> */}
            <NavLink href='/blog' title='Blog' />
            <NavLink href='/contact' title='Contact' />
          </div>
          <div className=' flex flex-col gap-3 items-start justify-start px-10 max-l:px-5'>
            <h5 className='relative mt-14 font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl tracking-wider'>
              Services
            </h5>
            <div className='my-3 flex w-full h-[2px] bg-mycolor2-50 '></div>
            <h6 className='font-semibold text-black dark:text-white max-lg:text-sm leading-7 text-lg tracking-wide'>
             Freight Hauling
            </h6>
            <h6 className='font-semibold text-black dark:text-white max-lg:text-sm leading-7 text-lg tracking-wide'>
              Local Cartage
            </h6>
            <h6 className='font-semibold text-black dark:text-white max-lg:text-sm leading-7 text-lg tracking-wide'>
              Extra Services
            </h6>
           
          </div>
        </div>
      </div>
      <div className='mt-5 flex items-center justify-center w-full bg-mycolor2-50 backdrop-blur-sm bg-opacity-5 '>
        <p className='text-sm py-10 font-light dark:text-white'>
          Copyright © 2024 | <span className=""><Link href="https://www.topdevweb.com">TopDev</Link></span> | All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
