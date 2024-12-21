"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ArrowUp,
  Bitcoin,
  CreditCard,
  Wallet,
  DollarSign,
  CircleDollarSign,
  Banknote,
  LucideIcon
} from "lucide-react";
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
type IconComponent = LucideIcon | React.FC<{ className?: string }>;

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
      <span className="text-2xl font-bold text-white">
        {count.toLocaleString()}+
      </span>
      <span className="text-sm text-brandGray">{label}</span>
    </motion.div>
  );
};

const IconButton: React.FC<IconButtonProps> = ({ href, icon: Icon, label }) => {
  // Type guard to check if the icon is a Lucide icon
  const isLucideIcon = (icon: IconComponent): icon is LucideIcon => {
    return 'render' in icon;
  };

  return (
    <Link href={href || "#"} target="_blank">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          className="relative group overflow-hidden hover:bg-gray-800/50 transition-all duration-200"
        >
          {isLucideIcon(Icon) ? (
            <Icon className="h-[18px] w-[18px]" />
          ) : (
            <Icon className="h-[18px] w-[18px]" />
          )}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
        </Button>
      </motion.div>
    </Link>
  );
};

// Rest of the component remains the same...
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
      className="fixed bottom-8 right-8 p-3 rounded-full bg-gray-800/80 hover:bg-gray-800 backdrop-blur-sm transition-colors duration-200"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  ) : null;
};

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg bg-gray-800/20 border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors duration-200 text-sm"
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.98 }}
          className="absolute right-1 top-1"
        >
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 rounded-md transition-all duration-200 shadow-lg hover:shadow-pink-500/25"
          >
            <span className="flex items-center gap-2">
              Subscribe
              <ChevronRight className="w-4 h-4" />
            </span>
          </Button>
        </motion.div>
      </div>
    </form>
  );
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-4 rounded-xl bg-gray-800/5 backdrop-blur-sm">
          <StatsCounter value={5000} label="Happy Customers" />
          <StatsCounter value={10000} label="Discord Boosts" />
          <StatsCounter value={500} label="Communities Served" />
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
                  alt="Hyper Boosts" 
                  width={40} 
                  height={40} 
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold PoseidonFont bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Hyper Boosts
                </span>
              </motion.div>
            </Link>
            
            <p className="text-brandGray/90 leading-relaxed">
              Hyper Boosts is a Discord shop that sells high-quality Discord boosts, tools, and more. 
              We offer a wide range of services to help you grow your community.
            </p>
            
            <p className="text-sm font-medium bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Hyper Boosts is not affiliated or endorsed by Discord in any way.
            </p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <NewsletterForm />
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <IconButton href={LINKS?.DISCORD} icon={DiscordIcon} label="Discord" />
              <IconButton href={LINKS?.TWITTER} icon={TwitterIcon} label="Twitter" />
              <IconButton href={LINKS?.TELEGRAM} icon={TelegramIcon} label="Telegram" />
              <div className="w-px h-6 bg-gray-700/20" />
              <IconButton icon={Bitcoin} label="Bitcoin" />
              <IconButton icon={Wallet} label="Wallet" />
              <IconButton icon={CreditCard} label="Card" />
              <IconButton icon={DollarSign} label="USD" />
              <IconButton icon={CircleDollarSign} label="Currency" />
              <IconButton icon={Banknote} label="Cash" />
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {LandingPageLinks?.map((link: QuickLink, index: number) => (
                <Link 
                  href={link?.link} 
                  key={index}
                >
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="group flex items-center gap-2 text-brandGray hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
                    <span className="text-sm">{link?.name}</span>
                  </motion.div>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="w-full h-px bg-gray-700/20 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
          <p className="text-sm text-brandGray/80">
            &copy; {new Date().getFullYear()} Hyper Boosts. All rights reserved.
          </p>
          
          <Link 
            href="https://discord.gg/hyperboosts" 
            target="_blank"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="flex flex-col items-center md:items-end">
                <span className="text-xs text-brandGray/70">Developed By</span>
                <span className="font-bold text-[#ec3d6f] relative">
                  <span className="absolute inset-0 bg-[#ec3d6f]/20 blur-lg group-hover:blur-xl transition-all duration-200" />
                  <span className="relative">Choppa</span>
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