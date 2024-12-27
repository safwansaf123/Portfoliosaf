import React from 'react'
import { IoIosMail } from "react-icons/io"; 
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div id = 'contact' className='pt-28 container'>
        <div className='grid md:grid-col-2 gap-10'>
            <div className='space-y-2'>
                <h2 className='text-5xl' data-aos="zoom-out-down">Get in Touch</h2>
                <p className='text-wheat text-[18px] pt-2' data-aos="zoom-out-down">CONTACT ME</p>

<div className='flex gap-4 items-center' data-aos="zoom-out-down"><IoIosMail size={30}/>safwan_saf@ymail.com</div>
<div className='flex gap-4 items-center' ><FaPhoneAlt  size={30}/>0092-3002203047</div>

</div>
<div className='space-y-3'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <div className='flex flex-col gap-1'>
        <label htmlFor="name">NAME</label>
        <input type="text"  
        className='h-[40px] bg-transparent border border-accent'
        id='NAME'
        />
    </div>
    <div className='flex flex-col gap-1'>
        <label htmlFor="email">Email</label>
        <input type="text"  
        className='h-[40px] bg-transparent border border-accent'
        id='email'
        />
    </div>
    <div className='flex flex-col gap-1'>
        <label htmlFor="message">MEASSAGE</label>
        <textarea  
        className='bg-transparent border border-accent'
        id='msg' rows={5}></textarea>
    </div>
    <button className='bg-accent p-2 px-6 text-black'>SEND</button>
</div>
            </div>
            </div>
        
      
    
  )
}

export default Contact
