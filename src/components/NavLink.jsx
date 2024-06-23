"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const [classes, setClasses] = useState(
    "dark:text-white relative font-semibold text-black dark:text-white max-lg:text-sm leading-7 text tracking-wide after:content-[''] after:bg-mycolor2-50 after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]"
  );
  const pathname = usePathname();
  const path = pathname.split("/")?.[1];
  const linkpath = href.split("/")?.[1];

  const activePath = () => {
    path === linkpath
      ? setClasses(
          () =>
            "dark:text-white relative font-semibold text-black dark:text-white max-lg:text-sm leading-7 text tracking-wide after:content-[''] after:bg-mycolor2-50 after:h-[3px] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:duration-300 after:w-[100%]"
        )
      : setClasses(
          () =>
            "dark:text-white relative font-semibold text-black dark:text-white max-lg:text-sm leading-7 text tracking-wide after:content-[''] after:bg-mycolor2-50 after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]"
        );
  };

  useEffect(() => {
    activePath();

    //   return () => {

    //   }
  }, [pathname]);

  return (
    <Link href={href} className={classes}>
      {title}
    </Link>
  );
};

export default NavLink;
