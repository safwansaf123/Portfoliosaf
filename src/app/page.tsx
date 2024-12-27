'use client'

import Image from "next/image";
import Projects from "@/components/Projects";
import Safoo from "@/components/Safoo"
import React from "react";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Workplace from "@/components/Workplace";

export default function Home() {
  
  useEffect(()=>{
    AOS.init({                                        //FOR ANIMATION 
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,

    })
    AOS.refresh
  }, []);
  return (
  <div>

<Safoo/>
<Workplace/>
<Projects/>
<Skills/>
<Contact/>
<About/>

  </div>
  );
}
