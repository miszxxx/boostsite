"use client"; // This makes the component a Client Component

import React from "react";
import { Button } from "./ui/button";
import { DiscordBannerImage, DiscordFlowers } from "@/assests/svgs";
import Link from "next/link";
import { LINKS } from "./config";
import { Coins, MessageCircle } from "lucide-react";

const BannerUI = () => {
  // Function to open Crisp chat
  const handleLiveChat = () => {
    if (typeof window !== "undefined" && window.$crisp) {
      window.$crisp.push(['do', 'chat:open']);
    }
  };

  return (
    <div className="px-4 mt-10">
      <div className="middle">
        <div className="bg-gradient-to-r from-[#f4adfb] to-[#5b2873] p-10 rounded-xl flex flex-col gap-4 relative overflow-hidden lg:px-32 items-center text-center shadow-lg shadow-[#f4adfb]/20">
          <DiscordFlowers className="hidden sm:flex flip_horizontal absolute bottom-0 left-0 z-0 opacity-30 h-[230px]" />
          <DiscordBannerImage className="hidden sm:flex absolute right-10 z-0 opacity-30 flip_horizontal h-[230px]" />
          
          <div className="text-4xl font-bold z-10 relative text-white">
            Need help with your Discord tools or Nitro services?
          </div>
          
          <div className="max-w-md z-10 relative text-white/90">
            Our expert support team is available 24/7 to assist with any questions about our services, 
            cryptocurrency payments, or technical support.
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 items-center z-10 relative">
            <Link href={LINKS.DISCORD}>
              <Button className="w-fit bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Discord
              </Button>
            </Link>
            <Button
              className="w-fit bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
              onClick={handleLiveChat}
            >
              <Coins className="w-4 h-4 mr-2" />
              Live Chat
            </Button>
          </div>
          
          <div className="text-sm text-white/70 z-10 relative mt-2">
            💰 Cryptocurrency payments only • 🚀 Instant delivery • 🔒 Secure & anonymous
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerUI;