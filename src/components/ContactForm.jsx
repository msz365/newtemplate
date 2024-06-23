import Image from "next/image";
import React from "react";
import phone from "../../public/mobile.svg";
import mail from "../../public/mail.svg";
import Link from "next/link";

const ContactForm = () => {
  return (
    <section
      id='contact'
      className='mx-auto gap-10 w-full max-w-screen-xl max-xl:px-5 max-md:px-5 px-48 max-xl:py-5 py-20 max-l:px-10 max-sm:px-5'
    >
      <div className='grid grid-cols-2 gap-10 max-l:grid-cols-1 max-l:gap-5'>
        <div className='px-10 max-l:px-5 flex flex-col gap-10 items-center justify-start'>
          <div className='flex items-start justify-center'>
            <Image src={phone} alt='' height={60} width={60} className='mr-5' />
            <div className='pl-5 flex flex-col items-start justify-center border-l border-l-mycolor2-50'>
              <h5 className='font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl'>
                Phone:
              </h5>
              <Link
                href={"tel:5026438869"}
                className='mt-1 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'
              >
                502-643-8869
              </Link>
            </div>
          </div>
          <div className='flex items-start justify-center'>
            <Image
              src={mail}
              alt=''
              height={60}
              width={60}
              className='mr-5 ml-10'
            />
            <div className='pl-5 flex flex-col items-start justify-center border-l border-l-mycolor2-50'>
              <h5 className='font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl'>
                E-mail:
              </h5>
              <Link
                href={"mailto:info@cwexpressllc.com"}
                className='mt-1 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'
              >
                info@cwexpressllc.com
              </Link>
            </div>
          </div>
        </div>
        <div className='bg-white dark:bg-[#0d0d0d] w-full shadow-xl rounded-lg px-10 py-10 flex flex-col max-l:w-3/5 max-md:w-full max-md:px-5 max-md:py-5 max-l:mx-auto'>
          <h5 className='max-md:text-xl max-md:mb-3 mb-5 max-xl:text-3xl max-lg:text-2xl text-3xl font-extrabold tracking-tight z-10 dark:text-white'>
            <span className='text-mycolor-50'>DROP </span> US A LINE
          </h5>
          <div className='w-full flex flex-col gap-10'>
            <form className='w-full flex flex-col gap-5'>
              <input
                type='text'
                placeholder='Name'
                className='px-3 py-3 bg-transparent border border-mycolor2-50/60 rounded-md'
              />
              <input
                type='email'
                placeholder='E-Mail'
                className='px-3 py-3 bg-transparent border border-mycolor2-50/60 rounded-md'
              />
              <input
                type='tel'
                placeholder='Name'
                className='px-3 py-3 bg-transparent border border-mycolor2-50/60 rounded-md'
              />
              <textarea
                tabIndex='5'
                rows={5}
                placeholder='Your Message Here...'
                className='px-3 py-3 bg-transparent border border-mycolor2-50/60 rounded-md'
              />

              <button
               type="submit"
                className='text-center mt-8 py-4 px-8 rounded-full bg-mycolor-50 text-white hover:bg-mycolor-50/90 transition ease-in-out duration-500 font-medium'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
