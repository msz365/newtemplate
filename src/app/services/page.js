import InnerPageHeader from "@/components/InnerPageHeader";
import Image from "next/image";
import React from "react";
import dev from "../../../public/dev.svg";
import seo from "../../../public/seo.svg";
import design from "../../../public/design.svg";
import revision from "../../../public/revision.svg";
import accessibility from "../../../public/accessibility.svg";
import search from "../../../public/search.svg";
import google from "../../../public/google.svg";

import { IoMdCheckmarkCircle } from "react-icons/io";
import Link from "next/link";
import Pricing from "@/components/Pricing";

const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <InnerPageHeader title='Our Services' />

      <section
        id='feaures'
        className='mx-auto max-w-screen-xl  px-20 py-20 max-xl:px-10 max-sm:px-5'
      >
        <div className='mx-auto grid grid-cols-5 gap-10 py-20 px-20 max-xl:px-5 max-xl:py-10 max-sm:px-0'>
          <div className='relative col-span-2 max-l:col-span-3 flex items-start '>
            <Image
              src={dev}
              alt=''
              height={360}
              width={550}
              className='rounded-md'
            />
          </div>
          <div className='col-span-3 max-l:col-span-5 flex items-start justify-center flex-col'>
            <h2 className='max-md:text-2xl max-md:mb-3 mb-5 max-xl:text-4xl max-lg:text-3xl text-4xl font-extrabold tracking-tight z-10 dark:text-white'>
              Web Design & Development Done Differently
            </h2>
            <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-justify'>
              What makes us unique in the development world is that we
              don&apos;t use WordPress, frameworks, or page builders. We
              meticulously write the code line by line. This gives us much more
              control over the design, and the website performs lightning fast
              because there&apos;s no bloated or messy code that slows it down.
            </p>
            <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-justify'>
              Websites built by hand will{" "}
              <span className='text-mycolor-50'>
                out-perform most WordPress sites
              </span>{" "}
              and drag and drop page builders which could cost thousands of
              dollars. When it comes to the web, the faster and more organized
              websites win.
            </p>
          </div>
        </div>
        <div className='max-l:hidden relative h-[100px] w-[70%] mx-auto border-dashed border-l-2 border-l-[#666666] border-b-2 border-b-[#666666] after:absolute after:h-[100px] after:w-[10px] after:right-0 after:-bottom-[100px] after:border-r-2 after:border-r-[#666666] after:border-dashed'>
          <div className='absolute w-[50px] -right-[25px] -bottom-[160px]'>
            <Image src='/codesign.svg' alt='code sign' height={50} width={50} />
          </div>
        </div>
        <div className='mx-auto grid grid-cols-5 gap-10 py-20 px-20 mt-40 max-l:mt-0 max-xl:px-5 max-xl:py-10 max-sm:px-0'>
          <div className='col-span-3 max-l:col-span-5 flex items-start justify-center flex-col'>
            <h2 className='max-md:text-2xl max-md:mb-3 mb-5 max-xl:text-4xl max-lg:text-3xl text-4xl font-extrabold tracking-tight z-10 dark:text-white'>
              Search Engine Optimization For 2024
            </h2>
            <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-justify'>
              If someone tells you they can get you to the front page of Google
              in 3 months - <span className='text-mycolor-50'>RUN!</span> Unless
              your website was featured by The New York Times it could take
              years to rank in the top of the search results.
            </p>
            <p className=' pb-3 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-justify'>
              We offer a number of the latest search engine optimization
              techniques for 2024:
            </p>
            <div className='flex flex-col'>
              <div className='flex gap-2 w-full items-center'>
                <IoMdCheckmarkCircle className='text-2xl text-mycolor-50' />
                <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                  Keyword-Centered Content & Blogs
                </p>
              </div>

              <div className='mt-1 flex gap-2 w-full items-center'>
                <IoMdCheckmarkCircle className='text-2xl text-mycolor-50' />
                <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                  Mobile-First-Optimized for the Best Experience
                </p>
              </div>
              <div className='mt-1 flex gap-2 w-full items-center'>
                <IoMdCheckmarkCircle className='text-2xl text-mycolor-50' />
                <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                  Clean & Organized Code Structure For Web Crawlers
                </p>
              </div>
              <div className='mt-1 flex gap-2 w-full items-center'>
                <IoMdCheckmarkCircle className='text-2xl text-mycolor-50' />
                <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                  Fully Responsive For Mobile, Tablet, & Desktop
                </p>
              </div>
            </div>
          </div>
          <div className='relative col-span-2 max-l:col-span-3 flex items-start '>
            <Image
              src={seo}
              alt=''
              height={360}
              width={550}
              className='rounded-md'
            />
          </div>
        </div>
        <div className='max-l:hidden relative h-[100px] w-[70%] mx-auto border-dashed border-r-2 border-r-[#666666] border-b-2 border-b-[#666666] after:absolute after:h-[100px] after:w-[10px] after:left-0 after:-bottom-[100px] after:border-l-2 after:border-l-[#666666] after:border-dashed'>
          <div className='absolute w-[50px] -left-[25px] -bottom-[160px]'>
            <Image src='/codesign.svg' alt='code sign' height={50} width={50} />
          </div>
        </div>
        <div className='mx-auto grid grid-cols-5 gap-10 py-20 px-20 mt-40 max-l:mt-0 max-xl:px-5 max-xl:py-10 max-sm:px-0'>
          <div className='relative col-span-2 max-l:col-span-3 flex items-start '>
            <Image
              src={design}
              alt=''
              height={360}
              width={550}
              className='rounded-md'
            />
          </div>
          <div className='col-span-3 max-l:col-span-5 flex items-start justify-center flex-col'>
            <h2 className='max-md:text-2xl max-md:mb-3 mb-5 max-xl:text-4xl max-lg:text-3xl text-4xl font-extrabold tracking-tight z-10 dark:text-white'>
              Logos, Graphic Design, & Branding
            </h2>
            <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-justify'>
              We also offer logo and graphic design services via our own
              in-house graphic designer. If you have an existing logo that needs
              a touch up or need a completely new one we can help build your
              business&apos;s brand.
            </p>

            <div className='flex flex-col'>
              <div className='flex gap-2 w-full items-start'>
                <IoMdCheckmarkCircle className='text-2xl text-mycolor-50' />
                <div className='flex flex-col  justify-center'>
                  <h6 className='font-semibold text-black dark:text-white max-lg:text-sm leading-7 text'>
                    Logos Starting at $350
                  </h6>
                  <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                    Rates may increase based on complexity, number of hours, and
                    number of revisions
                  </p>
                </div>
              </div>
              <div className='mt-2 flex gap-2 w-full items-start'>
                <IoMdCheckmarkCircle className='text-2xl text-mycolor-50' />
                <div className='flex flex-col  justify-center'>
                  <h6 className='font-semibold text-black dark:text-white max-lg:text-sm leading-7 text'>
                    Social Media Graphics
                  </h6>
                  <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                    Make a post that stands out with its own custom graphics.
                    Give us a call for plans and rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='w-full bg-mycolor-50/5'>
        <section
          id='updates'
          className='mx-auto max-w-screen-xl px-20 py-20 max-xl:px-10 max-sm:px-5 '
        >
          <div className='mx-auto grid grid-cols-2 max-l:grid-cols-1 gap-10 py-20 px-20 max-l:px-10 max-l:py-10 max-sm:px-0   '>
            <div className='flex flex-col justify-center'>
              <h2 className='max-md:text-2xl max-md:mb-3 mb-5 max-xl:text-4xl max-lg:text-3xl text-4xl font-extrabold tracking-tight z-10 dark:text-white'>
                Lifetime Updates For Your Website
              </h2>
              <p className=' pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-justify'>
                Google changes its search alogrithm standards every so often,
                changing what is important to rank. And web accessibility
                guidelines for users with screen readers get updated as well. So
                we also include{" "}
                <span className='text-mycolor-50'>lifetime updates</span> to
                your website to make sure it never goes out of date and is
                always changing with the times.
              </p>
              <div>
                <Link
                  href='/'
                  className='my-8 py-4 px-8 rounded-full bg-mycolor-50/80 text-white hover:bg-mycolor-50 transition ease-in-out duration-500 font-medium'
                >
                  Get my Website
                </Link>
              </div>
            </div>
            <div className='flex items-center justify-center max-l:mt-4'>
              <div class='grid grid-rows-2 grid-cols-12 max-md:grid-cols-1 gap-4 max-xl:gap-8'>
                <div class='col-span-7 max-xl:col-span-6 px-5 py-10 bg-white dark:bg-[#0d0d0d] border-t-2 border-t-mycolor-50 rounded-lg shadow-3xl'>
                  <div className='flex flex-col gap-5 justify-center px-2 py-5'>
                    <Image
                      src={revision}
                      alt='Design Revision'
                      height={50}
                      width={50}
                    />
                    <h6 className='font-semibold text-black dark:text-white max-lg:text-sm leading-7 text'>
                      Design Updates
                    </h6>
                    <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                      If you ever want a new design, we will rebuild your
                      website at no extra cost.
                    </p>
                  </div>
                </div>
                <div class='col-span-5 max-xl:col-span-6 px-5 py-10 bg-white dark:bg-[#0d0d0d] border-t-2 border-t-mycolor-50 rounded-lg shadow-3xl'>
                  <div className='flex flex-col gap-5 justify-center px-2 py-5'>
                    <Image
                      src={accessibility}
                      alt='Design Revision'
                      height={50}
                      width={50}
                    />
                    <h6 className='font-semibold text-black dark:text-white max-lg:text-sm leading-7 text'>
                      Web Accessibility
                    </h6>
                    <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                      Staying on top of the latest guidelines for web
                      accessibility compliance.
                    </p>
                  </div>
                </div>
                <div class='col-span-5 max-xl:col-span-6 px-5 py-10 bg-white dark:bg-[#0d0d0d] border-t-2 border-t-mycolor-50 rounded-lg shadow-3xl'>
                  <div className='flex flex-col gap-5 justify-center px-2 py-5'>
                    <Image
                      src={search}
                      alt='Design Revision'
                      height={50}
                      width={50}
                    />
                    <h6 className='font-semibold text-black dark:text-white max-lg:text-sm leading-7 text'>
                      Search Engine Updates
                    </h6>
                    <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                      Your website will stay up to date with Google&apos;s
                      search guidelines for ranking.
                    </p>
                  </div>
                </div>
                <div class='col-span-7 max-xl:col-span-6 px-5 py-10 bg-white dark:bg-[#0d0d0d] border-t-2 border-t-mycolor-50 rounded-lg shadow-3xl'>
                  <div className='flex flex-col gap-5 justify-center px-2 py-5'>
                    <Image
                      src={google}
                      alt='Design Revision'
                      height={50}
                      width={50}
                    />
                    <h6 className='font-semibold text-black dark:text-white max-lg:text-sm leading-7 text'>
                      Google Business Profile
                    </h6>
                    <p className=' font-light text-gray-500 max-lg:text-sm leading-7 text'>
                      We also help optimize and manage your Google, Bing, &
                      Yahoo Business Profile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Pricing />
    </main>
  );
};

export default page;
