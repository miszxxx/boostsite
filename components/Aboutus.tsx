import { StarIcon, Zap, Shield, Coins } from "lucide-react";
import React from "react";
import RevealAnimation from "./framer/RevealAnimation";
import MobileScreenAnimation from "./framer/MobileScreenAnimation";

interface FeatureItemProps {
  text: string;
  icon?: React.ReactNode;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text, icon }) => (
  <RevealAnimation>
    <div className="flex flex-row items-center gap-3 group">
      <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#f4adfb]/10 to-[#5b2873]/10 border border-[#f4adfb]/20 group-hover:border-[#f4adfb]/40 transition-all duration-300">
        {icon || <div className="w-2 h-2 bg-gradient-to-r from-[#f4adfb] via-[#5b2873] to-[#f4adfb] rounded-full" />}
      </div>
      <div className="text-white font-medium group-hover:text-[#f4adfb] transition-colors duration-300">
        {text}
      </div>
    </div>
  </RevealAnimation>
);

const Aboutus = () => {
  const features = [
    { text: "24/7 Customer Support", icon: <Shield className="w-4 h-4 text-[#f4adfb]" /> },
    { text: "Instant Delivery", icon: <Zap className="w-4 h-4 text-[#f4adfb]" /> },
    { text: "Cryptocurrency Payments Only", icon: <Coins className="w-4 h-4 text-[#f4adfb]" /> }
  ];

  return (
    <div
      id="aboutus"
      className="relative pt-24 flex flex-col items-center px-4 middle overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#f4adfb]/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#5b2873]/10 blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#f4adfb]/5 to-[#5b2873]/5 blur-[120px]" />
      </div>

      <RevealAnimation screenReveal>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#f4adfb]/20 bg-gradient-to-r from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] px-6 py-3 backdrop-blur-sm">
          <StarIcon size={16} className="text-[#f4adfb]" />
          <span className="bg-gradient-to-r from-[#f4adfb] via-[#5b2873] to-[#f4adfb] bg-clip-text text-transparent font-semibold">
            Want to know more about us?
          </span>
        </div>
      </RevealAnimation>

      <RevealAnimation screenReveal delay={0.2}>
        <h2 className="mt-6 text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-[#f4adfb] via-[#5b2873] to-[#f4adfb] bg-clip-text text-transparent">
            About Zyn Shop
          </span>
        </h2>
      </RevealAnimation>

      <div className="flex flex-col-reverse lg:flex-row gap-10 w-full mt-20 lg:items-center">
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <RevealAnimation>
            <MobileScreenAnimation />
          </RevealAnimation>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-8">
          <RevealAnimation>
            <div className="font-semibold text-4xl text-white">
              Your trusted source for Discord tools & Nitro services.
            </div>
          </RevealAnimation>
          <RevealAnimation>
            <div className="text-muted-foreground/90 leading-relaxed">
              With over 24 months of experience, Zyn Shop specializes in premium Discord tools, 
              Nitro subscriptions, and enhancement services. We accept cryptocurrency payments only 
              for maximum security and privacy.
            </div>
          </RevealAnimation>
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <FeatureItem key={index} text={feature.text} icon={feature.icon} />
            ))}
          </div>
          
          {/* Crypto Payment Info */}
          <RevealAnimation>
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] border border-[#f4adfb]/20">
              <div className="flex items-center gap-3 mb-3">
                <Coins className="w-6 h-6 text-[#f4adfb]" />
                <h3 className="text-lg font-semibold text-white">Cryptocurrency Payments</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                We exclusively accept cryptocurrency payments including Bitcoin, Ethereum, 
                Litecoin, and other major cryptocurrencies for enhanced security and privacy.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;