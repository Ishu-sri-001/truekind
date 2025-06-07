import React from "react";
import { FlaskRound, MapPinCheckInside } from "lucide-react";
import Button from "./btn";
import Image from "next/image";

const Transparency = () => {
  const qualities = [
    {
      icon: <FlaskRound />,
      heading: "100% Transparent Formulas",
      subheading: "Highest Standards.",
      content:
        "We formulate to the highest standards of efficacyand safety – using only proven, verifiedingredients in bio-compatible bases; and freefrom over 1800 questionable ingredients",
    },
    {
      icon: <MapPinCheckInside />,
      heading: "Only Verified Ingredients",
      subheading: "Real Results.",
      content:
        "Skin care packed with anti oxidants, skinreplenishing and skin restoring agents instable pH levels that don’t promise miracles,but deliver real results.",
    },
  ];

  return (
    <div className="h-fit w-full relative py-24">
      <div className="w-full flex flex-col justify-center items-center mx-auto font-body text-neutral-700">
        <div className="flex items-end justify-baseline">
          <div className="mr-20 rounded-xl border border-gray-600 mb-10">
            <p className="text-xs font-body px-7 py-1">ETHOS</p>
          </div>
          <h2 className="font-body text-9xl font-semibold">RADICAL</h2>
        </div>
        <h2 className="font-body text-9xl font-semibold">TRANSPARENCY.</h2>
      </div>

      <div className="w-full flex flex-col justify-between text-neutral-700">
        <div className="flex justify-center pr-[500px]">
          <div className="flex items-start cursor-pointer mx-auto font-body text-neutral-700">
            <Button />
            <div className="ml-2 font-body text-xs ">
              <p className="underline">OUR</p>
              <p className="underline">PHILOSOPHY</p>
            </div>
          </div>
          <h2 className="font-display italic text-9xl">HIDE</h2>
        </div>
        <h2 className="items-end font-body text-9xl font-semibold pl-[520px]">
          NOTHING.
        </h2>
      </div>

      <div className="flex items-center justify-between w-full pr-10 space-y-5 ">
        <div className="w-[150vm] h-[150vm] w-f ull mx-auto absolute top-80 left-50">
          <Image alt='texture' src="/assets/texture.png" height={500} width={500} />
        </div>


      <div className="flex items-end justify-end w-full">
        <div className="flex flex-col items-start justify-between max-w-lg mt-20 mr-6 space-y-5">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="flex justify-between items-center space-x-8"
            >
              <p>{quality.icon}</p>
              <h3 className="text-sm font-body">{quality.heading}</h3>
              <div className="flex flex-col text-xs font-body pl-10">
                <p className="font-semibold">{quality.subheading}</p>
                <p className="font-extralight">{quality.content}</p>
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
