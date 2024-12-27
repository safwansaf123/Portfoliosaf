import React from 'react'
import Headings from './Headings'
import Cards from './Cards'

const data = [

    {
    id: 0,
    title: "Pakistan International Airlines",
    desc: "Working on BOEING 777 in Engineering department",
    img: "/IMG_3961.jpg",
    tags: ["NOKIA MOBILE", "NIGHT SHIFT", "ON-WINGS", "BOEING", ]
    },
    {
      id: 1,
      title: "Pakistan International Airlines",
      desc: "Boeing 777-340ER AP-BHV ",
      img: "/IMG_3981.jpg",
      tags: ["BOEING", "B777", "GREEN", "AIRCRAFT", "PAINT", "WORK"],
      },
      {
        id: 2,
        title: "Pakistan International Airlines",
        desc: "Working on BOEING 777 in Engineering department",
        img: "/IMG_3978.jpg",
        tags: ["EVENING SHIFT", "ON-WINGS", "BOEING", "HANGAR"]
        },
                       
      
    ]
    

const Workplace = () => {
  return (
    <div id = 'workplace' className='container pt-16 '>
      <Headings title={'MY WORK PLACE'}/>

<div className='grid gap-0 xl:gap-x-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
{data.map((el) => (<Cards 
key={el.id}
title={el.title} 
desc={el.desc} 
img={el.img} 
tags={el.tags}
/>))}

</div>
<br />
    </div>
  )
}

export default Workplace
