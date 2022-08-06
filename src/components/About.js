import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Title } from './Title';

export const About = ({title}) => {

//   const url = 'http://localhost:8000/result'
//   const[data, setData] = useState(null);
//   let content = null
  
//     useEffect(() => {
//       axios.get(url)
//        .then(response => {
//          setData(response.data)
//          console.log(response.data)
//        })
        
//        }, [url])
       
// if(data){
//   content = 
//   <div className='px-2 flex flex-col gap-y-2 leading-normal'>
//     <p>{data[0].paragraph}</p>
//     <p>{data[1].paragraph}</p>
//   </div>
// }

  return (
    <div className=' bg-gray-800 px-5 text-lg min-h-screen text-gray-300 '>
      <Title title={title}/>
      {/* {content} */}
      <p className='pb-5 leading-normal md:px-5 md:text-2xl max-w-4xl ml-auto mr-auto'>
        My name is Win Aung. I'm from Thailand refugee camp. 
        I am a self-taught developer. 
        I've worked on many projects to expand my skills as a front-end developer. 
        I work hard everyday regardless, I used to like going out and stuff,
        now I've been obsessed with making websites because I see many opportunities. 
        I work hard because I know I can do great things one day. I can be creative,
        this is the only field that I can play and expand my skills.
      </p>
      <div className='my mx-auto py-32 md:py-96 max-w-4xl'>
        <p className='opacity-0'>
          dfsaaaaaaaaaa
      adsf
      afds
      dfsa
      adfs

      dfas
      dsf
      fdsa
      asdf
      asd</p>
      </div>
    </div>
  )
}