"use client";

import { useState, useEffect } from 'react';
import Hero from "@/components/hero";
import Header from '@/components/header';
import SecondPage from '@/components/second-page';
import Explore from "@/components/explore"
import Transparency from "@/components/transparency"
import Offers from "@/components/offers";
import Journal from '@/components/journal';
import Connect from "@/components/connect";
import Footer from "@/components/footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const scrolled = heroRect.bottom <= 0;
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <div id="hero-section" className='overflow-x-hidden'>
        <Hero/>
      </div>
      <SecondPage />
      <Explore />
      <Transparency />
      <Offers />
      <Journal />
      <Connect />
      <Footer />
   </>
  );
}