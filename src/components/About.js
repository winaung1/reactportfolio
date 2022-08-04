import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Title } from './Title';


export const About = ({title}) => {

  const url = 'http://localhost:8000/result'
  const[data, setData] = useState(null);
  let content = null
  
    useEffect(() => {
      axios.get(url)
       .then(response => {
         setData(response.data)
         console.log(response.data)
       })
        
       }, [url])
       
if(data){
  content = 
  <div className='px-2 flex flex-col gap-y-2 leading-normal'>
    <p>{data[0].paragraph}</p>
    <p>{data[1].paragraph}</p>
  </div>
}

  return (
    <div>
      <Title title={title}/>
      {content}
    </div>
  )
}