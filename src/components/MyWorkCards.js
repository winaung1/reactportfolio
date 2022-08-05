import React from 'react'

export const MyWorkCards = ({myText, IconImage}) => {
  return (
    <div className='text-white py-10 px-7'>
        <img className='pb-5 w-80' src={IconImage}/>
        <p>{myText}</p>
    </div>
  )
}
