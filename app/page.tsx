// pages/index.tsx
import Aboutus from "@/components/Aboutus";
import BannerUI from "@/components/BannerUI";
import CrispApp from "@/components/Crisp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import TopNotification from "@/components/TopNotification";
import SlidingBanner from "@/components/SlidingBanner";


export default function Home() {
  return (
    <>
      <CrispApp />
      <TopNotification />
      <Header />
      <Hero />
      <Aboutus />
      <Products />
      <Features />
      <Faq />
      <BannerUI />
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";
