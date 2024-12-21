import Aboutus from "@/components/Aboutus";
import BannerUI from "@/components/BannerUI";
import CrispApp from "@/components/Crisp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Terms from "@/components/Terms";
import TopNotification from "@/components/TopNotification";
import Image from "next/image";

export default function TOS() {
  return (
    <>
      <CrispApp />
      <TopNotification />
      <Header />
      <Terms />
      <BannerUI />
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";
