import Image from "next/image";
import React from "react";
import image1 from "../../public/1.jpg";
import image2 from "../../public/2.jpg";
import image3 from "../../public/3.jpg";
import image6 from "../../public/6.jpg";
import imagec from "../../public/image.svg";

const ImageCollage = () => {
  return (
    <section id='images' className='relative mx-auto flex flex-col gap-10 w-full mt-20 py-20'>
        <div className="absolute h-full w-full top-0 left-0 bg-mycolor-50/20 z-10"></div>
      <div className='flex items-center justify-center flex-col'>
        <h2 className='font-extrabold text-black dark:text-white text-4xl uppercase max-md:text-2xl'>
          <span className='text-mycolor-50'>Our</span> Fleet
        </h2>
        <div className='flex items-center justify-center my-5'>
          <div className='w-14 border border-dashed border-mycolor-50'></div>
          <Image
            src={imagec}
            alt='image icon'
            height={40}
            width={40}
            className='mx-5'
          />
          <div className='w-14 border border-dashed border-mycolor-50'></div>
        </div>
        <div className='grid w-full grid-cols-2 max-l:grid-cols-1'>
          <div className='h-full w-full'>
            <Image src={image1} alt='' />
          </div>
          <div className="h-full w-full bg-[url('/2.jpg')] bg-cover bg-center"></div>
          <div className='h-full w-full'>
            <Image src={image3} alt='' />
          </div>
          <div className=" w-full bg-[url('/4.jpg')] bg-cover bg-center"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;
