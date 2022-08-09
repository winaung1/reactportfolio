import React from 'react'
import { MyWorkCards } from './MyWorkCards'
import { Title } from './Title'


export const Mywork = ({title}) => {
  return (
    <div className='bg-gray-800 min-h-screen'>
        <Title title={title}/>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <MyWorkCards 
            myText='Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lourd upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;'
            IconImage={'https://www.upwork.com/catalog-images-resized/c511fb95749f718f04d5c7e21a978f01/large'}
          />
          <MyWorkCards 
            myText='Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lourd upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;'
            IconImage={'https://d334lak5lb2pjo.cloudfront.net/wp-content/uploads/b2b-web-design-examples-min.jpg'}
          />
          <MyWorkCards 
            myText='Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lourd upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;'
            IconImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBly9neOCI8eZnGlaNIejHMOdYq0mSAGpvA&usqp=CAU'}
          />
          <MyWorkCards 
            myText='Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lourd upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;'
            IconImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYH04E7PVSRHV7-A6Drl7SwGrTTxrJ8dmBbg&usqp=CAU'}
          />
        </div>
 
    </div>
  )
}
