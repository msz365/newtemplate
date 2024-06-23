import Image from "next/image";
import Hero from "../components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Offers from "@/components/Offers";
import Portfolio from "@/components/Portfolio";
import Whoweare from "@/components/Whoweare";
import Blog from "@/components/Blog";
import Pricing from "@/components/Pricing";
import ImageCollage from "@/components/ImageCollage";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />
      <WhatWeDo />
      {/* <Offers />
      <Portfolio /> */}
      <Whoweare />
      {/* <Pricing /> */}
      <ImageCollage />
      <Blog />
      <ContactForm />
    </main>
  );
}
