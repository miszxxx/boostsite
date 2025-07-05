"use client";

import React from "react";
import { Button } from "./ui/button";
import { DiscordBannerImage, DiscordFlowers } from "@/assests/svgs";
import Link from "next/link";
import { LINKS } from "./config";
import { MessageCircle, Users } from "lucide-react";

const BannerUI = () => {
  return (
    <div className="px-4 mt-16">
      <div className="middle">
        <div className="bg-gradient-to-r from-[#f4adfb] via-[#e879f9] to-[#5b2873] p-12 rounded-2xl flex flex-col gap-6 relative overflow-hidden lg:px-40 items-center text-center shadow-2xl shadow-[#f4adfb]/30 border border-[#f4adfb]/20">
          <DiscordFlowers className="hidden sm:flex flip_horizontal absolute bottom-0 left-0 z-0 opacity-20 h-[280px]" />
          <DiscordBannerImage className="hidden sm:flex absolute right-10 z-0 opacity-20 flip_horizontal h-[280px]" />
          
          <div className="text-5xl font-bold z-10 relative text-white leading-tight">
            Need help with your Discord tools or Nitro services?
          </div>
          
          <div className="max-w-2xl z-10 relative text-white/90 text-lg leading-relaxed">
            Our expert support team is available 24/7 to assist with any questions about our services, 
            cryptocurrency payments, or technical support. Join our community today!
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center z-10 relative">
            <Link href={LINKS.DISCORD}>
              <Button className="w-fit bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-lg font-semibold px-8 py-4 h-auto">
                <MessageCircle className="w-5 h-5 mr-3" />
                Join Discord Community
              </Button>
            </Link>
            <Link href={LINKS.TRUSTPILOT}>
              <Button className="w-fit bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-lg font-semibold px-8 py-4 h-auto">
                <Users className="w-5 h-5 mr-3" />
                View Reviews
              </Button>
            </Link>
          </div>
          
          <div className="text-sm text-white/80 z-10 relative mt-4 font-medium">
            💰 Cryptocurrency payments only • 🚀 Instant delivery • 🔒 Secure & anonymous • ⭐ 5-star rated
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerUI;