import React from 'react'

const Skills = () => {
  return (
    <div id = 'skills' className='container pt-32 '>
      <h2 className='text-4xl md:text-8xl flex justify-center '><u>TECHNOLOGIES I WORK ON</u></h2>
    <br />
          <div className='grid md:grid-cols-2 gap-10 items-center'>
    
    <h2 className='text-4xl md:text-6xl flex justify-center'>AVIATION FIELD</h2>
    <h2 className='text-4xl md:text-6xl flex justify-center'>IT FIELD</h2>
    
    <div data-aos="zoom-out">
    <div className="grid grid-cols-2 text-accent text-4xl sm:text-4xl justify-items-start" >
      <div className='space-y-3'>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>BOEING</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>AIRBUS</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>FOKKER-27</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>CESSNA</h2>
              </div>
              <div className='space-y-2'>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>LINE MAINTENANCE</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>BASE MAINTENANCE</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>ENGINE OVERHAUL</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>AIRWORTHINESS</h2>
              </div>                                  
    </div>
      </div>
    <div className="grid grid-cols-2 text-accent text-4xl sm:text-4xl justify-items-end" >
      <div className='space-y-2'>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>PHOTOSHOP</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>TYPSCRIPT</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>REACT.JS</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>NODE.JS</h2>
              </div>                                  
              <div className='space-y-2'>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>JOOMLA!</h2>     
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>HTML</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>NPM</h2>
        <h2 data-aos="zoom-in-left" className='flex justify-self-center'>CSS</h2>
              </div>
      </div>
    <br />
    <br />  
    </div>

    </div> )
}

export default Skills
