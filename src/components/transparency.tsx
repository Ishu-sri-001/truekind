'use client';

import React from "react";
import { FlaskRound, MapPinCheckInside } from "lucide-react";
import Button from "./btn";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Transparency = () => {
  const qualities = [
    {
      iconSrc: '/assets/svg/icon-highest-standards.svg',
      heading: "100% Transparent Formulas",
      subheading: "Highest Standards.",
      content:
        "We formulate to the highest standards of efficacyand safety – using only proven, verifiedingredients in bio-compatible bases; and freefrom over 1800 questionable ingredients",
    },
    {
      iconSrc: '/assets/svg/icon-real-results.svg',
      heading: "Only Verified Ingredients",
      subheading: "Real Results.",
      content:
        "Skin care packed with anti oxidants, skinreplenishing and skin restoring agents instable pH levels that don’t promise miracles,but deliver real results.",
    },
  ];

  useEffect (() => {
      gsap.to(".shades", {
           y: "-20vw",
          scrollTrigger: {
            start: 'top 80%',
            end: 'bottom top',
            trigger: ".shades",
            markers: false,
            scrub: true
          }
      })
  })

  return (
    <div className="h-fit w-full relative py-24">
      <div className="w-full flex flex-col justify-center items-center mx-auto font-body text-neutral-700">
        <div className="flex items-end justify-baseline">
          <div className="mr-20 rounded-xl border border-gray-600 mb-10">
            <p className="text-[8px] font-body px-10 py-1">ETHOS</p>
          </div>
          <h2 className="font-body text-9xl font-semibold">RADICAL</h2>
        </div>
        <h2 className="font-body text-9xl font-semibold">TRANSPARENCY.</h2>
      </div>

      
      <div className="w-full flex justify-between text-neutral-700">
        <div className="w-[40%] pt-5">

          <div className="flex items-start cursor-pointer pl-32 font-body text-neutral-700">
            <Button />
            <div className="ml-2 font-body text-[10px] my-auto">
              <p className="underline">OUR</p>
              <p className="underline">PHILOSOPHY</p>
            </div>
          </div>

        </div>

        <div className="w-[60%] leading-none">

          <h2 className="font-display italic text-9xl">HIDE</h2>
        
          <h2 className="items-end font-body text-9xl font-semibold">
          NOTHING.
        </h2>

        </div>

      </div>

      <div className="flex items-center justify-between w-full pr-10 space-y-5 ">
        <div className="w-[150vm] h-[150vm] w-f ull mx-auto absolute top-110 left-50">
          <Image alt='texture' src="/assets/texture.png" className="shades" height={500} width={500} />
        </div>


      <div className="flex items-end justify-end w-full">
        <div className="flex flex-col items-start justify-between max-w-[40vw] mt-20 mr-6 space-y-5">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="flex justify-between items-center space-x-8"
            >
              
              <div className="h-[3vh] w-[3vw] ">
                <Image src={quality.iconSrc} height={600} width={600} alt='icon'/>
              </div>
              <h3 className="text-sm font-display max-w-[10vw]">{quality.heading}</h3>
              <div className="flex flex-col text-xs font-body max-w-[18vw]">
                <p className="font-normal">{quality.subheading}</p>
                <p className="font-extralight text-gray-500">{quality.content}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
