"use client";

import { cn } from "@/lib/utils";
import {
  Coins,
  Zap,
  Shield,
  Clock,
  MessageCircleMoreIcon,
  WorkflowIcon,
  CrownIcon,
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
    icon: <Coins size={30} className="text-[#f4adfb]" />,
    title: "Cryptocurrency Only",
    description:
      "We exclusively accept Bitcoin, Ethereum, Litecoin, and other major cryptocurrencies for maximum security and privacy protection.",
  },
  {
    icon: <CrownIcon size={30} className="text-[#5b2873]" />,
    title: "Premium Discord Tools",
    description:
      "Access the best Discord tools, utilities, and enhancement services to supercharge your Discord experience and server management.",
  },
  {
    icon: <Zap size={30} className="text-[#f4adfb]" />,
    title: "Discord Nitro Services",
    description:
      "Get Discord Nitro subscriptions and premium features at competitive prices with instant delivery and full warranty coverage.",
  },
  {
    icon: <Shield size={30} className="text-[#f4adfb]" />,
    title: "Secure & Anonymous",
    description:
      "All transactions are processed securely through cryptocurrency payments, ensuring your privacy and financial security at all times.",
  },
  {
    icon: <MessageCircleMoreIcon size={30} className="text-[#5b2873]" />,
    title: "24/7 Expert Support",
    description:
      "Our dedicated support team is available around the clock to assist with any questions, issues, or technical support you may need.",
  },
  {
    icon: <WorkflowIcon size={30} className="text-[#f4adfb]" />,
    title: "Instant Automated Delivery",
    description:
      "Your orders are processed and delivered automatically within seconds of payment confirmation through our advanced delivery system.",
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <RevealAnimation>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className={cn(
          "relative group flex flex-col items-start p-8 rounded-xl",
          "bg-gradient-to-br from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05]",
          "border border-[#f4adfb]/20 hover:border-[#f4adfb]/40",
          "backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#f4adfb]/10"
        )}
      >
        {/* Enhanced background gradient effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f4adfb] via-[#5b2873] to-[#f4adfb]" />
        </div>

        {/* Enhanced icon container */}
        <div className="relative p-4 rounded-xl bg-gradient-to-br from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] border border-[#f4adfb]/20 group-hover:border-[#f4adfb]/40 group-hover:scale-110 transition-all duration-300">
          {feature.icon}
        </div>

        {/* Enhanced title with gradient effect on hover */}
        <h3 className="mt-6 text-xl font-semibold group-hover:bg-gradient-to-r group-hover:from-[#f4adfb] group-hover:via-[#5b2873] group-hover:to-[#f4adfb] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-white">
          {feature.title}
        </h3>

        {/* Enhanced description */}
        <p className="mt-3 text-sm text-muted-foreground/90 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
          {feature.description}
        </p>
      </motion.div>
    </RevealAnimation>
  );
};

const Features: React.FC = () => {
  return (
    <div id="features" className="relative px-4 py-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#f4adfb]/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#5b2873]/10 blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#f4adfb]/5 to-[#5b2873]/5 blur-[150px]" />
      </div>

      <div className="relative container mx-auto">
        <div className="flex items-center flex-col text-center mb-16">
          <RevealAnimation screenReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f4adfb]/20 bg-gradient-to-r from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] px-6 py-3 backdrop-blur-sm">
              <Zap size={16} className="text-[#f4adfb]" />
              <span className="bg-gradient-to-r from-[#f4adfb] via-[#5b2873] to-[#f4adfb] bg-clip-text text-transparent font-semibold">
                Why Choose Zyn Shop
              </span>
            </div>
          </RevealAnimation>

          <RevealAnimation screenReveal delay={0.2}>
            <h2 className="mt-6 text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#f4adfb] via-[#5b2873] to-[#f4adfb] bg-clip-text text-transparent">
                Premium Features
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation screenReveal delay={0.4}>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed">
              Experience the best Discord tools and Nitro services with secure cryptocurrency payments, 
              instant delivery, and professional support.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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