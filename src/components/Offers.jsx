import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import OfferFeature from "./OfferFeature";

const Offers = () => {
  return (
    <section
      id='offer'
      className='mx-auto gap-10 w-full max-xl:px-5 max-md:px-5 px-48 max-xl:py-5 py-20'
    >
      <div className='grid grid-cols-2 w-full mx-auto max-l:grid-cols-1'>
        <div className='flex items-start justify-center pt-20 max-l:py-5'>
          <Image
            src='/offer.svg'
            alt='offer illustration'
            height={350}
            width={350}
            className=''
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='font-extrabold text-black dark:text-white text-4xl  max-md:text-2xl'>
            <span className='text-mycolor-50'>$0</span> Down,{" "}
            <span className='text-mycolor-50'>$250 </span>Per Month,
          </h2>
          <h2 className='font-extrabold text-black dark:text-white text-4xl  max-md:text-2xl'>
            12 Month Minimum Contract
          </h2>
          <p className='mt-5  font-light text-gray-500 max-lg:text-sm leading-7 text-xl'>
            $0 down for a standard 5 page small business website. If you need
            more than that then we have to do custom pricing based on the scope
            of work, number of additional pages, and time involved.
          </p>
          <p className='mt-5 pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'>
            You own your domain, content, listing, and profiles. Cancel anytime
            with no fees or hassle.
          </p>
          <div className='w-full flex flex-col gap-10'>
            <div className='grid grid-cols-2 gap-5 max-xl:grid-cols-1'>
              <OfferFeature
                heading=' Hosting Fees Included'
                detail='Hosting fees are built right into the monthly payment.'
              />
              <OfferFeature
                heading='Unlimited Edits'
                detail='Change anything you want at anytime and it will be done that day.'
              />
              <OfferFeature
                heading='24/7 Customer Service'
                detail='Call direct anytime day or night, no phone trees or automated responses.'
              />
              <OfferFeature
                heading='Web Design & Development'
                detail='Includes over 40 hours of design, development, and testing.'
              />
              <OfferFeature
                heading='100 Google Page Speed Score'
                detail='We can achieve a perfect 100 on Google Page Speed scores and boost your search ranking.'
              />
              <OfferFeature
                heading='Google Analytics'
                detail='We install Analytics for free to monitor traffic and where it comes from.'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
