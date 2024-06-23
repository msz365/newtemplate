import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdMobileFriendly } from "react-icons/md";
import { PiResize } from "react-icons/pi";
import { GrOptimize } from "react-icons/gr";
import ServiceCard from "./ServiceCard";
import truck from "../../public/truck.png";
import truckico from "../../public/truck.svg";
import ltl from "../../public/ltl.png";
import red from "../../public/red-truck.png";
import boxes from "../../public/boxes.png";

const WhatWeDo = () => {
  return (
    <section
      id='whatwedo'
      className='mx-auto flex flex-col gap-10 w-full max-lg:px-10 max-md:px-5 px-24 py-20'
    >
      <div className='flex items-center justify-center flex-col'>
        <h2 className='font-extrabold text-black dark:text-white text-4xl uppercase max-md:text-2xl'>
          <span className='text-mycolor-50'>What</span> We Do
        </h2>
        <div className='flex items-center justify-center mt-5'>
          <div className='w-14 border border-dashed border-mycolor-50'></div>
          <Image
            src={truckico}
            alt='truck icon'
            height={40}
            width={40}
            className='mx-5'
          />
          <div className='w-14 border border-dashed border-mycolor-50'></div>
        </div>
        <p className='mt-5 max-w-screen-l max-lg:w-auto text-justify pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'>
          We specialize in providing local and global transportation solutions
          to our customers. Our expertise, reliable track record and a passion
          for customer satisfaction are designed to meet the needs of
          today&apos;s fast-paced world. CW EXPRESS LLC is the only call you
          need to make for your next shipping arrangement.
        
        </p>
      </div>
      <div className='max-w-screen-l mx-auto px-10 mt-5 grid grid-cols-2 max-lg:grid-cols-1 max-md:px-5 max-l:px-8 gap-10'>
        <ServiceCard
          title={"Truckload Services"}
          description={
            "CW Express LLC provides comprehensive truckload transportation solutions across the United States. Our services are tailored to meet the unique needs of each client, ensuring safe and timely delivery of your cargo."
          }
          imageUrl={truck}
        />
        <ServiceCard
          title={"Less-than-Truckload (LTL) Services"}
          description={
            "Our LTL services are designed for businesses that need to ship smaller quantities of goods without the expense of a full truckload. We consolidate shipments from multiple clients, ensuring cost-effective and efficient delivery."
          }
          imageUrl={ltl}
        />
        <ServiceCard
          title={"Expedited Shipping"}
          description={
            "When time is of the essence, our expedited shipping services ensure your urgent deliveries reach their destination as quickly as possible. Available 24/7, we prioritize your critical shipments."
          }
          imageUrl={red}
        />
        <ServiceCard
          title={"Warehousing and Distribution"}
          description={
            "CW Express LLC offers secure, efficient warehousing and distribution services to streamline your supply chain. Our state-of-the-art facilities are equipped to handle a wide range of storage needs."
          }
          imageUrl={boxes}
        />

        {/* <div className='flex items-center justify-center flex-col gap-3 px-5 max-md:px-1'>
       
          <Image src='/mobile.svg' alt='mobile icon' height={60} width={60} />
          <h3 className='font-semibold max-lg:text-sm text-xl text-black dark:text-white tracking-tighter'>
          Freight Hauling
          </h3>
          <p className='text-center pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'>
          CW EXPRESS LLC offers a wide range of hauling solutions. Browse the categories below to find the services that meet your demands.
          </p>
        </div>
        <div className='flex items-center justify-center flex-col gap-3 px-5 max-md:px-1'>
    
          <Image
            src='/responsive.svg'
            alt='mobile icon'
            height={60}
            width={60}
          />
          <h3 className='font-semibold max-lg:text-sm text-xl text-black dark:text-white tracking-tighter'>
            Fully Responsive
          </h3>
          <p className='text-center pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'>
            Your website will fit all mobile screens sizes, tablets, and desktop
            sizes so new clients can access your site from anywhere.
          </p>
        </div>
        <div className='flex items-center justify-center flex-col gap-3 px-5 max-md:px-1'>
         
          <Image src='/optimize.svg' alt='mobile icon' height={60} width={60} />
          <h3 className='font-semibold max-lg:text-sm text-xl text-black dark:text-white tracking-tighter'>
            Optimization
          </h3>
          <p className='text-center pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'>
            60% of all internet traffic is on mobile devices, so we optimize
            your mobile to perform their best in search engines.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default WhatWeDo;
