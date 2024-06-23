"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

const NavBar = () => {
  const { resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const sidebarOpen = () => {
    setOpen(() => !open);
  };

  const closeSidebar = () => {
    setOpen(() => !open);
  };

  return (
    <>
      <div className='sticky z-10 max-lg:w-[100%] w-[70%]  mx-auto px-6 py-5'>
        <div className='flex flex-auto items-center gap-6 justify-between'>
          <div className=''>
            <Link href='/'>
              {resolvedTheme === "light" ? (
                <Image src='/logo.svg' alt='Logo' width={120} height={50} />
              ) : (
                <Image
                  src='/logo-white.svg'
                  alt='Logo'
                  width={120}
                  height={50}
                />
              )}
            </Link>
          </div>
          <div className='flex flex-grow  items-center justify-end'>
            <div className='max-md:hidden flex '>
              <div className='px-6 py-6'>
                <NavLink href='/about' title='About' />
              </div>
              <div className='px-6 py-6'>
                <NavLink href='/services' title='Services' />
              </div>
              {/* <div className='px-6 py-6'>
                <NavLink href='/#portfolio' title='Portfolio' />
              </div> */}
              <div className='px-6 py-6'>
                <NavLink href='/blog' title='Blog' />
              </div>
              <div className='px-6 py-6'>
                <NavLink href='/contact' title='Contact' />
              </div>
              <div className='px-6 py-6'>
                <ThemeSwitch />
              </div>
            </div>
            <div className='hidden max-md:flex font-semibold text-4xl max-md:items-center max-md:gap-10 dark:text-white'>
            <ThemeSwitch />
              <button onClick={sidebarOpen}>
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className='flex-col gap-4 flex w-[100%] bg-blue-200 min-h-[100%] absolute'>
          <div className='w-[100%] flex justify-end px-4 py-3 font-semibold text-2xl'>
            <IoClose onClick={closeSidebar} />
          </div>
          <div className='flex flex-col '>
            <div className='px-6 py-6'>
              <NavLink href='/about' title='About' />
            </div>
            <div className='px-6 py-6'>
              <NavLink href='/services' title='Services' />
            </div>
            {/* <div className='px-6 py-6'>
              <NavLink href='/#portfolio' title='Portfolio' />
            </div> */}
            <div className='px-6 py-6'>
              <NavLink href='/blog' title='Blog' />
            </div>
            <div className='px-6 py-6'>
              <NavLink href='/contact' title='Contact' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
