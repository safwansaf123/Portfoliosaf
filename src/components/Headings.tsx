import React from 'react'
 
interface propsType {
    title: string;
}


const Headings: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-5xl pb-7'>
<p className='border-b-4 inline-block pb-3'>{title}</p>      
    </div>
  )
}

export default Headings
