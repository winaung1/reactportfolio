import React from 'react'

export const MyWorkCards = ({myText, IconImage, Tag, Title, skills1, skills2, skills3, skills4, skills5}) => {
  return (
    <div className='text-white py-10 px-7'>
        <a href={Tag} target='_blank'>
          <img className='pb-5 object-cover w-full' src={IconImage}/>
        </a>
        <div className='flex justify-between my-4 items-center'>
          <h1 className='font-bold text-3xl'>{Title}</h1>
          <div className='space-x-2'>
            <button className='border-2 border-[#009897] text-[#009897] p-2 px-4'>DEMO</button>
            <button className='border-2 border-[#009897] text-[#009897] p-2 px-4'>CODE</button>
          </div>
        </div>
        <p className='text-gray-300'>{myText}</p>
        <div className='flex space-x-2 my-4 items-center'>
          <p className='bg-gray-600 px-3 rounded-lg text-gray-400'>{skills1}</p>
          <p  className='bg-gray-600 px-3 rounded-lg text-gray-400'>{skills2}</p>
          <p  className='bg-gray-600 px-3 rounded-lg text-gray-400'>{skills3}</p>
          <p  className='bg-gray-600 px-3 rounded-lg text-gray-400'>{skills4}</p>
          <p  className='bg-gray-600 px-3 rounded-lg text-gray-400'>{skills5}</p>
        </div>
    </div>
  )
}
