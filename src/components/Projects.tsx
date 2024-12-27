import React from 'react'
import Headings from './Headings'
import Cards from './Cards'

const data = [

{
id: 0,
title: "Pakistan International Airlines",
desc: "Working on BOEING 777 in Engineering department",
img: "/IMG_3961.jpg",
tags: ["NOKIA MOBILE", "NIGHT SHIFT", "ON-WINGS", "BOEING"]
},
{
  id: 1,
  title: "Governor House Sindh Pakistan",
  desc: "Studing at Governor IT Initiative Program",
  img: "/IMG_3961.jpg",
  tags: ["TYPSCRIPT", "NODE", "NPM", "CSS", "REACT", "HTML"],
  },
  {
    id: 2,
    title: "Pakistan International Airlines",
    desc: "Working on BOEING 777 in Engineering department",
    img: "/IMG_3978.jpg",
    tags: ["NIGHT SHIFT", "ON-WINGS", "BOEING"]
    },
                   
  
]



const Projects = () => {
  return (
    <div id = 'projects' className='container pt-16 '>
      <Headings title={'MY IT PROJECTS'}/>

<div className='grid gap-0 xl:gap-x-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
{data.map((el) => (<Cards 
key={el.id}
title={el.title} 
desc={el.desc} 
img={el.img} 
tags={el.tags}
/>))}

</div>

    </div>

    
  )
}

export default Projects
