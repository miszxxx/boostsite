"use client"; // This makes the component a Client Component

import React from "react";
import { Button } from "./ui/button";
import { DiscordBannerImage, DiscordFlowers } from "@/assests/svgs";
import Link from "next/link";
import { LINKS } from "./config";

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
        <div className="brand_gradient p-10 rounded-xl flex flex-col gap-3 relative overflow-hidden lg:px-32 items-center text-center">
          <DiscordFlowers className="hidden sm:flex flip_horizontal absolute bottom-0 left-0 z-0 opacity-50  h-[230px]" />
          <DiscordBannerImage className="hidden sm:flex absolute right-10 z-0 opacity-50 flip_horizontal  h-[230px]" />
          <div className="text-4xl font-semibold z-10 relative">
            Reach out to our support team instantly for any assistance you need.
          </div>
          <div className="max-w-md z-10 relative">
            {`Do you have any questions, concerns, or need assistance with your
            order? Join our server by clicking below.`}
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Link href={LINKS.DISCORD}>
              <Button className="w-fit z-10 relative">Join Discord</Button>
            </Link>
            <Button
              className="w-fit z-10 relative"
              onClick={handleLiveChat}
            >
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerUI;
