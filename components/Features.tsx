"use client";

import { cn } from "@/lib/utils";
import {
  HandCoinsIcon,
  GemIcon,
  BookCheckIcon,
  ScaleIcon,
  MessageCircleMoreIcon,
  SunMoonIcon,
  WorkflowIcon,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import RevealAnimation from "./framer/RevealAnimation";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeaturesData: Feature[] = [
  {
    icon: <HandCoinsIcon size={30} className="text-purple-400" />,
    title: "Seamless Payment",
    description:
      "Ordering from us is a breeze. We accept all major cryptocurrencies, Cash App, PayPal, Venmo, cards, and gift cards for your convenience.",
  },
  {
    icon: <GemIcon size={30} className="text-pink-500" />,
    title: "Cheap Prices",
    description:
      "Our ultimate motto is to ensure that everyone, regardless of their location, can access high-quality services at an affordable price.",
  },
  {
    icon: <BookCheckIcon size={30} className="text-purple-400" />,
    title: "Trusted & Reputated Seller",
    description:
      "Our customers consistently provide positive feedback, praising not only our top-tier services but also our premium support.",
  },
  {
    icon: <ScaleIcon size={30} className="text-purple-400" />,
    title: "Legal Methods",
    description:
      "Rest assured, every service we offer is acquired through entirely legal channels, ensuring you peace of mind without concerns about reversals.",
  },
  {
    icon: <MessageCircleMoreIcon size={30} className="text-pink-500" />,
    title: "24/7 Support",
    description:
      "Our unmatched chat support is available 24/7, ready to address any questions or concerns you may have, every single day.",
  },
  {
    icon: <WorkflowIcon size={30} className="text-purple-400" />,
    title: "Automatic Delivery",
    description:
      "Your order will be delivered in just around 30 seconds after placement, thanks to our ultra-fast automatic delivery system.",
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <RevealAnimation>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={cn(
          "relative group flex flex-col items-start p-8 rounded-lg",
          "bg-gradient-to-r from-purple-500/[0.05] to-pink-500/[0.05]",
          "border border-purple-500/20 hover:border-purple-500/30",
          "backdrop-blur-sm transition-all"
        )}
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400" />
        </div>

        {/* Icon container */}
        <div className="relative p-4 rounded-xl bg-gradient-to-r from-purple-500/[0.05] to-pink-500/[0.05] border border-purple-500/20 group-hover:border-purple-500/30">
          {feature.icon}
        </div>

        {/* Title with gradient effect on hover */}
        <h3 className="mt-4 text-lg font-semibold group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground/90">
          {feature.description}
        </p>
      </motion.div>
    </RevealAnimation>
  );
};

const Features: React.FC = () => {
  return (
    <div id="features" className="relative px-4 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-[100px]" />
      </div>

      <div className="relative container mx-auto">
        <div className="flex items-center flex-col text-center mb-16">
          <RevealAnimation screenReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-gradient-to-r from-purple-500/[0.05] to-pink-500/[0.05] px-6 py-3 backdrop-blur-sm">
              <SunMoonIcon size={16} className="text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent font-semibold">
                We Have Exciting Features
              </span>
            </div>
          </RevealAnimation>

          <RevealAnimation screenReveal delay={0.2}>
            <h2 className="mt-6 text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                Premium Features
              </span>
            </h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FeaturesData.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;