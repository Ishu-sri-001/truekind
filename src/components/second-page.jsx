"use client"
import React, { useEffect } from "react";
import {Search, Leaf, HandHeart, FlaskConical } from 'lucide-react'
import Image from "next/image";
import gsap from "gsap";

const SecondPage = () => {
  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from(".card-1",{
        // yPercent:40,
        y:"5vw",
        delay:1,
        opacity:0,
        
      })
    })
    return()=>ctx.revert()
  })
  return (
    <div className="mt-20 h-fit pb-10 overflow-y-hidden overflow-x-hidden">
      <div className="py-10 ml-16">
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
      <div className="w-full h-fit relative flex flex-col items-center justify-center">
        <div
          className='w-[60%] h-[90%]'
          style={{
            clipPath: "ellipse(28% 43% at 55% 49%)",
            WebkitClipPath: "ellipse(28% 43% at 55% 49%)",
            transform: "rotate(45deg)",
          }}
        >
          <Image
            src="/assets/bg-img.jpg"
            width={900}
            height={900}
            alt="Clipped"
            className="h-[70%] w-full object-cover -rotate-45"
          />
        </div>
       
          
                <div className="h-fit rounded-2xl w-52 bg-gray-100 absolute top-110 left-20 py-10 flex flex-col  justify-center items-center card-1">
                    <div className="mt-5 p-3 rounded-full bg-white w-12 "><Leaf /></div>
                     <div className="max-w-sm mx-2 flex flex-col  text-black font-body">
                      <h2 className="w-10 text-center text-sm font-semibold mt-8 mx-auto">Clean, Beyond Reproach</h2>
                      <p className="text-xs mt-4 text-center">Truly clean with only verified ingredients; and free from over 1800 questionable ingredients. Because what you put on your skin matters.</p>
                  </div>
                </div>

                <section id='card2' className="h-fit rounded-2xl w-52 py-10 bg-gray-100 absolute top-70 left-80 flex flex-col justify-center items-center">
                     <div className="mt-5 p-3 rounded-full bg-white w-12 "><Search /></div>
                     <div className="max-w-sm mx-2 flex flex-col text-black font-body">
                      <h2 className="px-1 text-center text-sm font-semibold mt-8 mx-auto">Radical Transparency</h2>
                      <p className="text-xs mt-4 text-center">No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what's in it and how much.</p>
                     </div>
                </section>

                <section id='card3' className="h-fit rounded-2xl w-52 absolute right-90 bottom-0 bg-gray-100 mt-[650px] py-10 flex flex-col justify-center items-center">
                  <div className="mt-5 p-3 rounded-full bg-white w-12 "><FlaskConical /></div>
                     <div className="max-w-sm mx-2 flex flex-col text-black font-body">
                      <h2 className="px-1 text-center text-sm font-semibold mt-8">Potent & Multi Tasking</h2>
                      <p className="text-xs mt-4 text-center">Our formulas are chock-a-block with actives, anti oxidants, skin restoring agents backed by dermal science that aim to deliver real results.</p>
                  </div>
                </section>

                <section id='card4' className="h-fit rounded-2xl w-52 absolute bottom-right-100 bottom-30 right-30 bg-gray-100 mt-[450px] py-10 flex flex-col justify-center items-center">
                  <div className="mt-5 p-3 rounded-full bg-white w-12 "><HandHeart /></div>
                     <div className="max-w-sm mx-2 flex flex-col text-black font-body">
                      <h2 className="px-1 text-center text-sm font-semibold mt-8">Conscious & Responsible</h2>
                      <p className="text-xs mt-4 text-center">Peta Certified Vegan and Cruelty Free. Our products are always housed in responsible packaging and made sustainably.</p>
                  </div>
                </section>

                <section id='leaf' className="absolute top-100 right-20">
                  <img src='/assets/leaf.png' className="w-40 " />
                </section>

                <section id='orange' className="absolute bottom-60 left-80">
                  <img src='/assets/orange.png' className="w-40 " />
                </section>

                <section id='orange'></section>
            <section className="w-full px-12">
              <hr  className="text-gray-300 w-full "/>
            </section>
        
      </div>
    </div>
  );
};

export default SecondPage;

