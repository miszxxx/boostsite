import { StarIcon } from "lucide-react";
import React from "react";
import RevealAnimation from "./framer/RevealAnimation";
import MobileScreenAnimation from "./framer/MobileScreenAnimation";

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <RevealAnimation>
    <div className="flex flex-row items-center gap-2 group">
      <div className="relative w-2 h-2">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 rounded-full" />
      </div>
      <div className="text-white font-medium">
        {text}
      </div>
    </div>
  </RevealAnimation>
);

const Aboutus = () => {
  const features = [
    "24/7 Customer Support",
    "Instant Delivery",
    "Most affordable pricing."
  ];

  return (
    <div
      id="aboutus"
      className="relative pt-24 flex flex-col items-center px-4 middle overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-[100px]" />
      </div>

      <RevealAnimation screenReveal>
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-gradient-to-r from-purple-500/[0.05] to-pink-500/[0.05] px-6 py-3 backdrop-blur-sm">
          <StarIcon size={16} className="text-purple-400" />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent font-semibold">
            Want to know more about us?
          </span>
        </div>
      </RevealAnimation>

      <RevealAnimation screenReveal delay={0.2}>
        <h2 className="mt-6 text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
            About Us
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
              We&apos;re your top choice for Discord needs.
            </div>
          </RevealAnimation>
          <RevealAnimation>
            <div className="text-muted-foreground/90">
              With over 24 months of experience, our server boosting service stands as the pinnacle of reliability, respect, and renown in the industry.
            </div>
          </RevealAnimation>
          <div className="flex flex-col gap-3">
            {features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;