import React from 'react'
import './Home.css'

export const Home = () => {

  const w = ['{', '}']
  const numbers = [];
  for(let i = 1; i < 16; i++){
    numbers.push(i)
  }

  return (
    <div className="home flex justify-center items-center text-white font-medium  text-sm  py-2.5 text-center mb-2 min-h-screen w-full">
        <div className='text-lg text-gray-500'>
          <div className='w-[900px] h-[40px] bg-gray-800 rounded-tl-lg rounded-tr-lg text-left flex gap-x-1 items-center justify-between px-2'>
            <div className='buttons flex gap-x-1 items-center justify-start px-2'>
              <button className='bg-red-400 w-3 h-3 rounded-full'></button>
              <button className='bg-green-400 w-3 h-3 rounded-full'></button>
              <button className='bg-blue-400 w-3 h-3 rounded-full'></button>
            </div>
            <p className='italic'>/C:users/desktop/winportfolio</p>
            <p></p>
          </div>
          <div className='flex gap-x-14 leading-normal p-5 w-[900px] h-[500px] bg-[#030f1e] rounded-bl-lg rounded-br-lg '>
            <div>
              {numbers.map(num => <p>{num}</p>)}
            </div>
            <div className='text-left'>
              <p className='text-gray-700 pb-5'>/* Welcome to my portfolio website! */</p>
              <h1 className='flex gap-x-2 text-white'><span className='text-[#009897]'>#INTRO</span>{w[0]}</h1>
              <div className='pl-10 py-5 text-white leading-10'>
                <p><span className='text-yellow-500'>Name:</span> Win Aung</p>
                <p><span className='text-yellow-500'>Occupation:</span> Frontend Developer</p>
                <p><span className='text-yellow-500'>Country:</span> Thailand</p>
                <p><span className='text-yellow-500'>Location:</span> SLC, UT</p>
                <p><span className='text-yellow-500'>Interesting Fact:</span> I love to play soccer during my free time, it is the only sport that get me to
                 loose weight without thinking that I'm actually exercising. It is the best!</p>
              </div>
              <h1 className='flex gap-x-2 text-white'> {w[1]}</h1>
              <p></p>
            </div>
          </div>
        </div>
    </div>
  )
}
