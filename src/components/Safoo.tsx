import React from 'react'
import Navbar from './Navbar'

const Safoo = () => {
  return (
<div id='safoo' className='bg-wheat justify-center'>
      <Navbar/>
      <br />
      <div className='grid grid-cols-4'>
<div data-aos="zoom-in" className='hidden lg:block'><img src='IMG_3959.jpg' width={355} height={360}/></div>
<div data-aos="zoom-in" className='hidden lg:block'><img src='IMG_3977.jpg' width={355} height={360} /></div>
<div data-aos="zoom-in" className='hidden lg:block'><img src='IMG_3835.jpg' width={355} height={360}/></div>
<div data-aos="zoom-in" className='hidden lg:block'><img src='IMG_3979.jpg' width={355} height={360}/></div>
</div>
    <div className='text-[88px] sm:text-[70px] font-semibold leading-tight flex justify-center items-center'>
<div>
  <br />
<p data-aos="zoom-in-up">MY PORTFOLIO </p>
<br />
<br/>


</div>

    

</div>
      </div>
    
  )
}

export default Safoo
