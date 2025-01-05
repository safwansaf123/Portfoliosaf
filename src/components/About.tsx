import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaSoundcloud } from "react-icons/fa";  


const About = () => {
  return (
    <div id = 'about' className='p-32 container' data-aos="fade-down">
      
<h2 className='text-5xl md:text-5xl text-center' data-aos="fade-down"><u>ABOUT ME</u></h2>
<br />
<h2 className='text-5xl md:text-5xl text-center' data-aos="fade-down">AVIATION MAINTENANCE TECHNICIAN</h2>
<h2 className='text-5xl md:text-5xl text-center' data-aos="fade-down">&</h2>
<h2 className='text-5xl md:text-5xl text-center' data-aos="fade-down">SIMPLE  IT SPECIALIST</h2>
<br />
<p className='text-wheat PT-4 text-center text-3xl' data-aos="fade-down">Hello! I’m Safwan Ahmed. I am passionate about Aviation. I am a skilled in Aviation Maintenance also Learned Computer languages like C-Language, Type-Script, HTML, CSS & Graphic Design tools such as Photoshop & Coral Draw and much more in IT. More details are in my CV</p>
    <br />
    <br />
    <div className='grid grid-cols-9 justify-center text-9xl'>
    <a href="https://www.facebook.com/safwan.ahmed.777"><FaFacebook /></a>
    <a href="https://twitter.com/@SafwanAhmed_"><FaTwitter /></a>
    <a href="#safoo"><FaLinkedin /></a>
    <a href="https://www.youtube.com/@safwanahmed4216"><FaYoutube /></a>
    <a href="https://www.instagram.com/safwanahmed_"><FaInstagram /></a>
    <a href="https://github.com/safwansaf123"><FaGithub /></a>
    <a href="https://soundcloud.com/safwan-ahmed-6"><FaSoundcloud /></a>
    <a href="https://www.tiktok.com/@safwansafahmed"><FaTiktok /></a>
    <a href="https://vercel.com/teams/invite/undefined"><IoLogoVercel /></a>
</div>
    
    
    </div>
  )
}

export default About
