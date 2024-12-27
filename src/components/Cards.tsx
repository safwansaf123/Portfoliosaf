import React from 'react'
import Image from 'next/image';


interface propsType {
title: string;
desc: string;
img: string;
tags: string[];
}


const Cards:React.FC<propsType> = ({title, desc, img, tags}) => {
  return (
    <div className='border w-[330px] sm:w-[430px]' data-aos="zoom-in">
     <div>
      <Image className='w-[330px] sm:w-[430px] h-[390]' 
      src={img}
      width={350}
      height={350}
      alt={title}
/>
      </div> 
      <div className='p-4 space-y-4'>
<div className="text-4xl font-extralight">{title}</div>
<div>{desc}</div>
<div>{tags.map((el) => (<div className='tags' key={el}>{el}</div>))}</div>

      </div>
    </div>
  )
}

export default Cards
