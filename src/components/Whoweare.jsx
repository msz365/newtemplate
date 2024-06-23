import Image from "next/image";
import Link from "next/link";
import React from "react";
import pic from "../../public/ryan.png";
import blob from "../../public/blob.svg";
import truckbg from '../../public/truckbg.webp'
const Whoweare = () => {
  return (
    <section
      id='whoweare'
      className='relative flex flex-col  gap-10 w-full max-lg:px-10 max-md:px-5 px-24 py-20  bg-[url("/truckbg.webp")] bg-cover bg-center rounded-tl-4xl rounded-br-4xl'
    >
      <div className="absolute w-full h-full top-0 left-0 bg-mycolor-50/20 dark:bg-mycolor-50/30 rounded-tl-4xl rounded-br-4xl"></div>
      <div className=' pt-8 flex items-center justify-center flex-col rounded-lg bg-black/50 dark:bg-black/70 backdrop-grayscale'>
        <h2 className='font-extrabold text-white text-4xl uppercase max-md:text-2xl'>
          <span className='text-mycolor-50'>WHO</span> WE ARE
        </h2>
        <div className='flex items-center justify-center mt-5'>
          <div className='w-14 border border-dashed border-mycolor-50'></div>
          <Image
            src='/profile.svg'
            alt='code icon'
            height={40}
            width={40}
            className='mx-5'
          />
          <div className='w-14 border border-dashed border-mycolor-50'></div>
        </div>
        <p className='mt-5 text-justify max-w-screen-l max-lg:w-auto  pb-8 font-light text-white max-lg:text-sm leading-7 text-xl'>
          At CW Express LLC, we are dedicated to providing reliable, efficient,
          and customized logistics solutions tailored to meet the unique needs
          of each client. Founded with a passion for excellence, our journey
          from a small operation to a nationwide leader in transportation is a
          testament to our unwavering commitment to quality and customer
          satisfaction. Our experienced team, state-of-the-art technology, and
          core values of integrity, innovation, and safety ensure that every
          shipment is handled with the utmost care. Discover the CW Express LLC
          difference and partner with us for seamless, dependable logistics
          solutions that drive your success.{" "}
          <span>
            <Link
              className='font-medium text-mycolor-50 max-lg:text-sm leading-7 text-base uppercase'
              href='/about'
            >
              Learn More
            </Link>
          </span>
        </p>
        <div className='max-w-screen-l py-10 flex'>
          <div className='grid grid-cols-5 gap-5'>
            <div className='flex flex-col items-center justify-center'>
              <div className='rounded-full bg-white shadow-lg px-2 py-2'>
                <Image
                  src='/truck.svg'
                  alt='value icon'
                  height={50}
                  width={50}
                />
              </div>
              <h3 className='pt-2 font-semibold max-lg:text-sm text-xl text-white  tracking-tighter'>
                Integrity
              </h3>
              <p className='pb-8 font-light text-white max-lg:text-xs leading-5 text-sm text-center'>
                Honesty and transparency in all our interactions
              </p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div className='rounded-full bg-white shadow-lg px-2 py-2'>
                <Image
                  src='/truck.svg'
                  alt='value icon'
                  height={50}
                  width={50}
                />
              </div>
              <h3 className='pt-2 font-semibold max-lg:text-sm text-xl text-white dark:text-white tracking-tighter'>
                Customer Focus
              </h3>
              <p className='pb-8 font-light text-white max-lg:text-xs leading-5 text-sm text-center'>
                Placing client needs at the heart of our operations
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='rounded-full bg-white shadow-lg px-2 py-2'>
                <Image
                  src='/truck.svg'
                  alt='value icon'
                  height={50}
                  width={50}
                />
              </div>
              <h3 className='pt-2 font-semibold max-lg:text-sm text-xl text-white dark:text-white tracking-tighter'>
                Innovation
              </h3>
              <p className='pb-8 font-light text-white max-lg:text-xs leading-5 text-sm text-center'>
                Continuously seeking new ways to improve our services
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='rounded-full bg-white shadow-lg px-2 py-2'>
                <Image
                  src='/truck.svg'
                  alt='value icon'
                  height={50}
                  width={50}
                />
              </div>
              <h3 className='pt-2 font-semibold max-lg:text-sm text-xl text-white dark:text-white tracking-tighter'>
                Reliability
              </h3>
              <p className='pb-8 font-light text-white max-lg:text-xs leading-5 text-sm text-center'>
                Ensuring dependability in every delivery
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='rounded-full bg-white shadow-lg px-2 py-2'>
                <Image
                  src='/truck.svg'
                  alt='value icon'
                  height={50}
                  width={50}
                />
              </div>
              <h3 className='pt-2 font-semibold max-lg:text-sm text-xl text-white dark:text-white tracking-tighter'>
                Safety
              </h3>
              <p className='pb-8 font-light text-white max-lg:text-xs leading-5 text-sm text-center'>
                Prioritizing the well-being of our communities
              </p>
            </div>
          </div>
        </div>
        {/* <div className='mt-20 relative mx-auto w-full'>
          <div className='w-80 top-[50%] left-[50%] transition-transform translate-x-[-50%] translate-y-[-45%] mx-auto h-96 absolute z-[-1]'>
            <Image src={blob} alt='blob' fill />
          </div>
          <div className='max-w-72 mx-auto'>
            <Image src={pic} alt='' />
          </div>
        </div>
        <h5 className='mt-14 font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl'>
          Mohammad Suleman Zia
        </h5>
        <p className='mt-1 pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-xl uppercase'>
          Owner / Developer
        </p> */}
      </div>
    </section>
  );
};

export default Whoweare;
