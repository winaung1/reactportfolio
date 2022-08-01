import React, { useState } from 'react'
import './Home.css'
import { Topsection } from './Topsection';
import { Bodysection } from './Bodysection';

export const Home = (props) => {
  const [appear, setAppear] = useState(false);
  return (
    <div onClick={() => setAppear(!appear)} className="home relative flex justify-center items-center text-white font-medium  text-sm  py-2.5 text-center mb-2 min-h-screen w-full">
        <div className='text-gray-500'>
          {appear && <div>
            <Topsection/>
            <Bodysection />
          </div>}
        </div>
    </div>
  )
}

