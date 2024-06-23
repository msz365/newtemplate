import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const OfferFeature = ({heading, detail}) => {
  return (
    <div className='flex gap-2 '>
    <div className='flex items-start justify-start '>
      <IoMdCheckmarkCircleOutline className='font-extrabold text-mycolor-50 text-3xl' />
    </div>
    <div className='flex flex-col'>
      <h5 className='font-extrabold text-black dark:text-white max-lg:text-sm leading-7 text-xl'>
       {heading}
      </h5>
      <p className='mt-1 pb-8 font-light text-gray-500 max-lg:text-sm leading-7 text-xl'>
       {detail}
      </p>
    </div>
  </div>
  )
}

export default OfferFeature