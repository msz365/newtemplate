import Image from 'next/image'
import React from 'react'

const ServiceCard = ({title,description,imageUrl}) => {
  return (
    <div className="w-full rounded-xl bg-blue-100 dark:bg-[#0d0d0d] overflow-hidden shadow-md">
        <div className="px-5 py-5 flex relative">
            <div className="flex flex-col">
            <h3 className='font-semibold max-lg:text-sm text-xl text-black dark:text-white tracking-tighter'>
          {title}
          </h3>
          <div className="w-2/3 pt-2">
          <p className='pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-md'>
          {description}
          </p>
          
          </div>
          <div className="absolute bottom-2 -right-10">
            <Image src={imageUrl} height={200} width={200} alt="Truck" />
          </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard