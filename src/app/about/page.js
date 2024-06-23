import InnerPageHeader from "@/components/InnerPageHeader";
import Image from "next/image";
import React from "react";
import pic from "../../../public/ryan-headshot.jpg";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Background2 from "@/components/Baclground2";

const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <InnerPageHeader title="About Us" />
    
      <section className='mx-auto  px-20 py-20 max-xl:px-10 max-sm:px-5'>
        <div className='mx-auto grid grid-cols-5 gap-10 w-3/5 max-xl:w-full'>
          <div className='relative col-span-2 max-l:col-span-3 flex items-start '>
            <Image
              src={pic}
              alt=''
              height={360}
              width={550}
              className='rounded-md'
            />
          </div>
          <div className='col-span-3 max-l:col-span-5 flex items-start justify-center flex-col'>
            <h3 className='max-md:text-base font-semibold max-lg:text-base text-xl uppercase text-mycolor-50 tracking-wider'>
              TopDev Website as a Service
            </h3>
            <h2 className='max-md:text-2xl max-md:mb-3 mb-5 max-xl:text-4xl max-lg:text-3xl text-4xl font-extrabold tracking-tight z-10 dark:text-white'>
              Giving Small Businesses The Big Business Treatment
            </h2>
            <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-justify'>
              My name is Ryan P, I am the owner and sole developer of Oak Harbor
              Web Designs. I got into programming after my wife had our first
              child. I was and still am a stay-at-home dad, and I wanted a
              career that I can do from home and still be there with the kids to
              watch them grow up. So over the course of two years I taught
              myself how to code websites the right way by hand and just started
              calling small businesses to offer my help.
            </p>
            <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-justify'>
              What I found was that a lot of small businesses don&apos;t have
              the funds to spend thousands of dollars upfront on a new website.
              And the ones that did, got taken advantage of and have a terrible
              website that looks like it was built by someone in a dungeon and
              haven&apos;t seen design trends for the last 10 years. They were
              in a frustrating spot - they either can&apos;t afford a good
              website, and if they can they don&apos;t know who to trust to make
              something great. So I tweaked my business model to fit their
              needs. That&apos;s how I came up with my $0 down and $150 a month
              model. It&apos;s more managable for a small business to handle and
              won&apos;t hurt their bank accounts.
            </p>
          </div>
        </div>
      </section>
      <section className='mx-auto  px-20 py-20 flex items-center flex-col max-w-screen-xl max-l:px-10 max-l:pt-0 max-sm:px-5'>
        <h3 className='max-md:text-2xl max-md:mb-3 mb-5 max-xl:text-4xl max-lg:text-3xl text-4xl font-extrabold tracking-tight z-10 dark:text-white'>
          <span className='text-mycolor-50'>Quality </span>Over Quantity
        </h3>
        <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-center'>
          We focus on the needs on each individual business and tailor content
          around what makes it unique. Our collaborative process is very hands
          on as we work closely with you to create a website you&apos;re 100%
          happy with and not something you just settle for.
        </p>
        <div className='grid grid-cols-3 gap-20 my-20 max-l:grid-cols-1'>
          <div className='flex flex-col gap-5 max-l:gap-3 items-center justify-center'>
            <div className="relative rounded-full bg-mycolor-50 w-[60px] h-[60px] flex items-center justify-center before:content[''] before:bg-mycolor-50/40 before:h-[80px] before:w-[80px] before:absolute before:rounded-full after:content[''] after:bg-mycolor-50/20 after:h-[100px] after:w-[100px] after:absolute after:rounded-full">
              <p className='max-md:text-2xl  max-xl:text-3xl max-lg:text-3xl text-3xl font-semibold tracking-tight text-white z-10 '>
                1
              </p>
            </div>
            <h5 className='mt-5 font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl'>
              No Pre-Written Content
            </h5>

            <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-center'>
              We write unique and engaging content around your company. Everyone
              is unique!
            </p>
          </div>
          <div className='flex flex-col gap-5 max-l:gap-3 items-center justify-center'>
            <div className="relative rounded-full bg-mycolor-50 w-[60px] h-[60px] flex items-center justify-center before:content[''] before:bg-mycolor-50/40 before:h-[80px] before:w-[80px] before:absolute before:rounded-full after:content[''] after:bg-mycolor-50/20 after:h-[100px] after:w-[100px] after:absolute after:rounded-full">
              <p className='max-md:text-2xl  max-xl:text-3xl max-lg:text-3xl text-3xl font-semibold tracking-tight text-white z-10'>
                2
              </p>
            </div>
            <h5 className='mt-5 font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl'>
              Unbeatable Customer Service
            </h5>

            <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-center'>
              No automated systems - When you need help the lead developer
              answers your call.
            </p>
          </div>
          <div className='flex flex-col gap-5 max-l:gap-3 items-center justify-center'>
            <div className="relative rounded-full bg-mycolor-50 w-[60px] h-[60px] flex items-center justify-center before:content[''] before:bg-mycolor-50/40 before:h-[80px] before:w-[80px] before:absolute before:rounded-full after:content[''] after:bg-mycolor-50/20 after:h-[100px] after:w-[100px] after:absolute after:rounded-full">
              <p className='max-md:text-2xl  max-xl:text-3xl max-lg:text-3xl text-3xl font-semibold tracking-tight text-white z-10'>
                3
              </p>
            </div>
            <h5 className='mt-5 font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl'>
              No Limits On Design
            </h5>

            <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-center'>
              We can edit the design to cater to your tastes. Everything is
              customizable!
            </p>
          </div>
        </div>
        <Link
          href='/services'
          className='text-center mt-8 py-4 px-8 rounded-full bg-mycolor-50 text-white hover:bg-mycolor-50/90 transition ease-in-out duration-500 font-medium'
        >
          Our Services
        </Link>
      </section>
      <ContactForm />
    </main>
  );
};

export default page;
