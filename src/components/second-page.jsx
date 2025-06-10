"use client"
import React, { useEffect } from "react";
import {Search, Leaf, HandHeart, FlaskConical } from 'lucide-react'
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const SecondPage = () => {
  useEffect(()=>{
    //var tl= gsap.timeline();
    const ctx = gsap.context(()=>{
      // tl.from(".card-1",{
      //   // yPercent:40,
      //   // y:"5vw",
      //   x: '-10vw',
      //   delay:1,
      //   opacity:0,
      // }),
      // tl.from(".card-2",{
      //   // yPercent:40,
      //   // y:"5vw",
      //   y: '-10vw',
      //   delay:0,
      //   opacity:0,
      // }),
      // tl.from(".card-3", {
      //     y: '10vw',
      //     opacity:0,
      // }),
      // tl.from(".card-4", {
      //   x:'10vw',
      //   opacity:0,
      // }),
      gsap.to(".moving-icon", {
          y: "-20vw",
          scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            trigger: "#leaf",
            markers: false,
            scrub: true
          }
      }),
      gsap.to(".moving-elements", {
          y: "-20vw",
          scrollTrigger: {
            start: 'top bottom',
            end: 'bottom -30%',
            trigger: ".card-1",
            markers: false,
            scrub: true
          }
      }),
      gsap.to(".moving-img", {
          yPercent: 10,
          // duration:5,
          scrollTrigger : {
            start: "top bottom",
            end: "bottom top",
            trigger: ".moving-img",
            // markers:true,
            scrub: true,
            
          }
      })
    })
    return()=>ctx.revert()
  })
  return (
    <div className="mt-20 h-fit pb-10 overflow-y-hidden overflow-x-hidden relative">
      <div className="py-10 ml-16 flex">
        <div>

        <h2 className="text-5xl font-body font-semibold text-neutral-700 max-w-lg">
          CLEAN, CONSIOUS, PERFORMANCE
        </h2>
        <div className="flex mt-5">
          <p className="font-body font-light text-neutral-700 text-xs pr-6 max-w-xs">
            Unreservedly honest products that truly work, be kind to skin and
            the planet – no exceptions!
          </p>
          <h2 className="text-6xl text-neutral-700 italic font-display underline font-light">
            skincare.
          </h2>
        </div>
        </div>
        <div className="w-fit h-[50vh] rotate-35 absolute right-40">
              <Image src='/assets/svg/down-curved-arrow.svg' height={500} width={500} alt='curved-arrow' className="h-full w-full"/>
        </div>
       
      </div>
      
      <div className="w-full h-fit relative flex flex-col items-center justify-center">
        <div
          className='w-[60%] h-[90%]'
          style={{
            clipPath: "ellipse(28% 43% at 55% 49%)",
            WebkitClipPath: "ellipse(28% 43% at 55% 49%)",
            transform: "rotate(45deg)",
          }}
        >

          <div className="w-full h-[70%] -rotate-45">

          <Image
            src="/assets/bg-img.jpg"
            width={900}
            height={900}
            alt="Clipped"
            className="h-full w-full object-cover moving-img"
            />
            </div>
        </div>
       
          
                <div className="h-fit rounded-2xl w-52 bg-gray-100 absolute top-110 left-20 py-10 flex flex-col  justify-center items-center card-1 moving-elements">
                    <div className="mt-5 p-3 rounded-full bg-white w-12 "><Leaf /></div>
                     <div className="max-w-sm mx-2 flex flex-col  text-neutral-700 font-body">
                      <h2 className="w-[60%] text-center text-sm font-semibold mt-8 mx-auto">Clean, Beyond Reproach</h2>
                      <p className="text-xs mt-4 text-center">Truly clean with only verified ingredients; and free from over 1800 questionable ingredients. Because what you put on your skin matters.</p>
                  </div>
                </div>

                <div id='card2' className="h-fit rounded-2xl w-52 py-10 bg-gray-100 absolute top-70 left-80 flex flex-col card-2 justify-center items-center moving-elements">
                     <div className="mt-5 p-3 rounded-full bg-white w-12 "><Search /></div>
                     <div className="max-w-sm mx-2 flex flex-col text-neutral-700 font-body">
                      <h2 className="px-1 text-center text-sm font-semibold mt-8 mx-auto">Radical Transparency</h2>
                      <p className="text-xs mt-4 text-center">No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what's in it and how much.</p>
                     </div>
                </div>

                <div id='card3' className="h-fit rounded-2xl w-52 absolute right-90 -bottom-20 bg-gray-100 mt-[650px] py-10 flex flex-col justify-center items-center card-3 moving-elements">
                  <div className="mt-5 p-3 rounded-full bg-white w-12 "><FlaskConical /></div>
                     <div className="max-w-sm mx-2 flex flex-col text-neutral-700 font-body">
                      <h2 className="px-1 text-center text-sm font-semibold mt-8">Potent & Multi Tasking</h2>
                      <p className="text-xs mt-4 text-center">Our formulas are chock-a-block with actives, anti oxidants, skin restoring agents backed by dermal science that aim to deliver real results.</p>
                  </div>
                </div>

                <div id='card4' className="h-fit rounded-2xl w-52 absolute bottom-right-100 bottom-30 right-30 bg-gray-100 mt-[450px] py-10 flex flex-col justify-center items-center card-4 moving-elements">
                  <div className="mt-5 p-3 rounded-full bg-white w-12 "><HandHeart /></div>
                     <div className="max-w-sm mx-2 flex flex-col font-body text-neutral-700">
                      <h2 className="px-1 text-center text-sm font-semibold  mt-8">Conscious & Responsible</h2>
                      <p className="text-xs mt-4 text-center">Peta Certified Vegan and Cruelty Free. Our products are always housed in responsible packaging and made sustainably.</p>
                  </div>
                </div>

                <section id='leaf' className="absolute top-100 right-20 moving-icon">
                  <img src='/assets/leaf.png' className="w-40 " />
                </section>

                <section id='orange' className="absolute bottom-0  left-80 moving-icon">
                  <img src='/assets/orange.png' className="w-40 " />
                </section>

                
            <div className="w-full px-12">
              <hr  className="text-neutral-300 w-full "/>
            </div>
        
      </div>
    </div>
  );
};

export default SecondPage;

