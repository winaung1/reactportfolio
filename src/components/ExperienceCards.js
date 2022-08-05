import React from 'react'


export const ExperienceCards = ({title, info, description, dates, Icon, Icon2}) => {
  return (
      <div className='p-5 relative'>
        <div className='absolute left-10 bg-[#009897] w-[2px] min-h-full'/>
        <div className='z-10 relative border-none rounded-md flex flex-col gap-y-2 bg-gray-800 p-3 text-white w-72 md:w-[650px] lg:w-[780px] h-auto ml-16'>
            <div className=' flex items-center justify-center w-9 h-9  rounded-full bg-gray-800 absolute left-[-61px]'></div>
            <Icon className='z-10 absolute top-[15px] left-[-57px] h-7'/>
            <Icon2 className='absolute left-[-69px] top-[3.5px] -z-10 h-[52px] text-[#009897]' />
            <div className='arrow-left absolute left-[-10px]'></div>
            <h1 className='text-xl font-bold md:text-2xl'>{title}</h1>
            <h2 className='text-[#009897] font-bold md:text-lg'>{info}</h2>
            <p className='md:text-lg'>{description}</p>
            <p className='text-gray-400 md:text-lg'>{dates}</p>
        </div>
    </div>
  )
}
