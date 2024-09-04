'use client'

import { useEffect, useState } from "react";
import Navbar from "./_common/_components/Header";
import HeroSection from "./_common/_components/HeroSection";


export default function Home() {

    return (
        <div className="bg-black">
          <Navbar/>
            <div className="border border-b-inputFieldColor-500"></div>
            <div className="mx-auto  overflow-x-hidden">
                <div className="flex flex-col">
                <section id="home" className=" h-[500px] w-full">

                   <HeroSection/>
 
                </section>
                {/* <section id="about" className="pt-20">
 
               </section>

<section id="work" className="pt-20">
 
</section>

<section id="contact" className="pt-20">
 
</section> */}
                 
                </div>
            </div>
        </div>
    );
}
