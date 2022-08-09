import React from 'react'

export const MyWorkCards = ({myText, IconImage}) => {
  return (
    <div className='text-white py-10 px-7'>
        <img className='pb-5 object-cover w-full' src={IconImage}/>
        <p>{myText}</p>
    </div>
  )
}
