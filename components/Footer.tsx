"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUp, Bitcoin, Wallet, DollarSign, CircleDollarSign, Banknote, Coins } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "@/assests/svgs";
import { LINKS, LandingPageLinks } from "./config";

interface StatsCounterProps {
  value: number;
  label: string;
}

// Updated icon type to handle both Lucide and custom SVG components
type IconComponent = React.ComponentType<{ className?: string }>;

interface IconButtonProps {
  href?: string;
  icon: IconComponent;
  label: string;
}

interface QuickLink {
  name: string;
  link: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, label }) => {
  const [count, setCount] = useState<number>(0);

  React.useEffect(() => {
    const duration = 800;
    const steps = 40;
    const stepValue = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <span className="text-2xl font-bold bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">
        {count.toLocaleString()}+
      </span>
      <span className="text-sm text-white/60">{label}</span>
    </motion.div>
  );
};

const IconButton: React.FC<IconButtonProps> = ({ href, icon: Icon, label }) => {
  return (
    <Link href={href || "#"} target="_blank">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          className="relative group overflow-hidden hover:bg-gradient-to-r hover:from-[#f4adfb]/10 hover:to-[#5b2873]/10 transition-all duration-200"
        >
          <Icon className="h-[18px] w-[18px]" />
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#f4adfb] to-[#5b2873] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
        </Button>
      </motion.div>
    </Link>
  );
};

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  React.useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.pageYOffset > 500);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return visible ? (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.2 }}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-[#f4adfb] to-[#5b2873] hover:shadow-lg hover:shadow-[#f4adfb]/25 backdrop-blur-sm transition-all duration-200"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </motion.button>
  ) : null;
};

const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-b from-transparent to-black/5 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 xl:px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-6 rounded-xl bg-gradient-to-br from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] border border-[#f4adfb]/20 backdrop-blur-sm">
          <StatsCounter value={15000} label="Tools Sold" />
          <StatsCounter value={8000} label="Nitro Delivered" />
          <StatsCounter value={500} label="Happy Customers" />
          <StatsCounter value={99} label="Satisfaction Rate" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xl:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-xl">
            <Link href="/" className="inline-flex">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2"
              >
                <Image 
                  src="/logo.png" 
                  alt="Zyn Shop" 
                  width={40} 
                  height={40} 
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold PoseidonFont bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">
                  Zyn Shop
                </span>
              </motion.div>
            </Link>
            
            <p className="text-white/80 leading-relaxed">
              Zyn Shop is your trusted source for premium Discord tools, Nitro services, and enhancement utilities. 
              We exclusively accept cryptocurrency payments for maximum security and privacy.
            </p>
            
            <div className="p-4 rounded-lg bg-gradient-to-r from-[#f4adfb]/10 to-[#5b2873]/10 border border-[#f4adfb]/20">
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-5 h-5 text-[#f4adfb]" />
                <span className="text-sm font-semibold text-white">Cryptocurrency Payments Only</span>
              </div>
              <p className="text-xs text-white/70">
                Bitcoin, Ethereum, Litecoin, and other major cryptocurrencies accepted.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <IconButton href={LINKS?.DISCORD} icon={DiscordIcon} label="Discord" />
              <IconButton href={LINKS?.TWITTER} icon={TwitterIcon} label="Twitter" />
              <IconButton href={LINKS?.TELEGRAM} icon={TelegramIcon} label="Telegram" />
              <div className="w-px h-6 bg-[#f4adfb]/20" />
              <IconButton icon={Bitcoin} label="Bitcoin" />
              <IconButton icon={Wallet} label="Wallet" />
              <IconButton icon={DollarSign} label="USD" />
              <IconButton icon={CircleDollarSign} label="Currency" />
              <IconButton icon={Banknote} label="Cash" />
              <IconButton icon={Coins} label="Crypto" />
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {LandingPageLinks?.map((link: QuickLink, index: number) => (
                <Link 
                  href={link?.link} 
                  key={index}
                >
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:text-[#f4adfb] transition-colors duration-200" />
                    <span className="text-sm">{link?.name}</span>
                  </motion.div>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f4adfb]/20 to-transparent my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Zyn Shop. All rights reserved.
          </p>
          
          <Link 
            href="https://discord.gg/zynshop" 
            target="_blank"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="flex flex-col items-center md:items-end">
                <span className="text-xs text-white/50">Developed By</span>
                <span className="font-bold text-[#f4adfb] relative">
                  <span className="absolute inset-0 bg-[#f4adfb]/20 blur-lg group-hover:blur-xl transition-all duration-200" />
                  <span className="relative">Zyn Team</span>
                </span>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      <ScrollToTop />
    </motion.footer>
  );
};

export default Footer;