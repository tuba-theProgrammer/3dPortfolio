'use client'

import { useEffect, useState } from "react";
import Navbar from "./_common/_components/Header";
import HeroSection from "./_common/_components/HeroSection";
import About from "./_common/_components/About";
import Experience from "./_common/_components/Experience";
import Tech from "./_common/_components/Tech";


export default function Home() {

    return (
        <div className="bg-black">
          <div className="sticky top-0 z-50">
          <Navbar/>
            <div className="border border-b-inputFieldColor-500"></div>
            </div>
            <div className="mx-auto  overflow-x-hidden">
                <div className="flex flex-col">
     
                <section id="home" className=" h-[800px] w-full">
                   <HeroSection/>
                </section>

                <section id="about" className="">
                <About/>
               </section>

              <section id="work" className="">
              <Experience/>
              <Tech/>
              </section>


             <section id="contact" className="">
 
              </section> 
                 
                </div>
            </div>
        </div>
    );
}
