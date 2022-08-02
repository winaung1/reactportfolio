import React, { useState, useEffect } from 'react'
import axios from 'axios';


export const About = () => {

  const url = 'http://localhost:8000/result'
  const[data, setData] = useState(null);
  let content = null


    useEffect(() => {
      axios.get(url)
       .then(response => {
         setData(response.data)

       })
        
       }, [url])
       
if(data){
  content = 
  <div>
    <p>{data[0].paragraph}</p>
    <p>{data[1].paragraph}</p>
  </div>
}

  return (
    <div>
      {content}
    </div>
  )
}
