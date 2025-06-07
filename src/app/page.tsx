
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
  return (
    <>
    
      <Header />
      <Hero/>
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
