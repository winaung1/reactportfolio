import React from 'react'


export const ExperienceCards = ({title, info, description, dates, Icon, Icon2}) => {
  return (
      <div className='p-5 relative'>
        <div className='absolute left-10 bg-[#009897] w-[2px] min-h-full'/>
        <div className='relative border-none rounded-md flex flex-col gap-y-2 bg-gray-800 p-3 text-white w-60 h-auto ml-16'>
            <div className=' flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 absolute left-[-61px]'></div>
            <Icon className='absolute top-[15px] left-[-57px] h-7'/>
            <Icon2 className='absolute left-[-69px] top-[3.5px] -z-10 h-[52px] text-[#009897]' />
            <div className='arrow-left absolute left-[-10px]'></div>
            <h1 className='text-xl font-bold'>{title}</h1>
            <h2 className='text-[#009897] font-bold'>{info}</h2>
            <p>{description}</p>
            <p className='text-gray-400'>{dates}</p>
        </div>
    </div>
  )
}
