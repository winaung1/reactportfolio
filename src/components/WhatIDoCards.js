import React from 'react'

export const WhatIDoCards = ({WhatIDoTitle, IconWhatIDo, text}) => {
  return (
    <div className="what-cards text-white w-[350px] ml-auto mr-auto">
      <h1 className="text-xl font-bold mb-2 flex gap-x-3 py-5 items-center">
        <IconWhatIDo className='h-8 border-[1px] py-1 px-4'/>
        {WhatIDoTitle}
      </h1>
      <p>{text}</p>
    </div>
  )
}
