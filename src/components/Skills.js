import React from 'react'
import { SkillsCard } from './SkillsCard'
import { Title } from './Title'

import {
 CogIcon,
 SearchIcon,
 CheckIcon,
 PaperAirplaneIcon
} from '@heroicons/react/outline';
import { Tools } from './Tools';


export const Skills = ({title}) => {

  return (
    <div className='min-h-screen bg-gray-800'>
        <Title title={title}/>
        <p className='pt-10 mx-20 flex items-center space-x-2 text-white'><CogIcon className='h-7'/><span className='text-2xl font-bold'>DEVELOPMENT</span></p>
        <div className='ml-auto mr-auto w-72 h-72 md:max-w-sm flex flex-wrap space-y-3 space-x-3 items-center justify-center mt-2'>
          <SkillsCard skillsTitle='React'/>
          <SkillsCard skillsTitle='Axios'/>
          <SkillsCard skillsTitle='Express'/>
          <SkillsCard skillsTitle='NEXT.Js'/>
          <SkillsCard skillsTitle='Node.Js'/>
          <SkillsCard skillsTitle='HTML5'/>
          <SkillsCard skillsTitle='Tailwind'/>
          <SkillsCard skillsTitle='CSS3'/>
          <SkillsCard skillsTitle='JavaScript'/>
        </div>
   
        <p className='pt-10 mx-20 flex items-center space-x-2 text-white'><PaperAirplaneIcon className='h-7'/><span className='text-2xl font-bold'>DESIGN</span></p>
        <div className='pt-2 space-y-5 mx-24 text-white'>
          <p className='border-4 flex items-center justify-center text-bold text-4xl h-14 w-14'>Ps</p>
        </div>
        <p className='pt-10 mx-20 flex items-center space-x-2 text-white'><SearchIcon className='h-7'/><span className='text-2xl font-bold'>TOOLS</span></p>
        <div className='pt-2 space-y-5 mx-24 '>
          <Tools toolsTitle='Git + GitHub' IconTool={CheckIcon}/>
          <Tools toolsTitle='Commandline' IconTool={CheckIcon}/>
          <Tools toolsTitle='Chrome DevTools' IconTool={CheckIcon}/>
        </div>
    </div>
  )
}
