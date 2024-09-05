'use client'


import Navbar from "./_common/_components/Header";
import HeroSection from "./_common/_components/HeroSection";
import About from "./_common/_components/About";
import Experience from "./_common/_components/Experience";
import Tech from "./_common/_components/Tech";
import Project from "./_common/_components/Project";
import Testimonials from "./_common/_components/Testimonials";
import Contact from "./_common/_components/Contact";


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
              <Project/>
              <Testimonials/>
              </section>


             <section id="contact" className="">
                  <Contact/>
              </section> 
                 
                </div>
            </div>
        </div>
    );
}
