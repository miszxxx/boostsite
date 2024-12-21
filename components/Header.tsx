"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { DiscordIcon } from "@/assests/svgs";
import Link from "next/link";
import RevealAnimation from "./framer/RevealAnimation";
import { LINKS, LandingPageLinks } from "./config";
import { Sidebar } from "./Sidebar";

const Header = () => {
  return (
    <div className="px-4">
      <div className="middle h-[60px] flex items-center justify-between">
        <Link href="/">
          <div className="flex flex-row items-center gap-1">
            <Image src="/logo.png" alt="Robolox" width={40} height={40} />
            <span className="text-xl font-bold PoseidonFont">Hyper Boosts</span>
          </div>
        </Link>
        <div className="hidden md:flex flex-row items-center gap-2">
          {LandingPageLinks?.map((link, index) => (
            <RevealAnimation key={index} delay={index * 0.1}>
              <Link key={link.name} href={link.link}>
                <div
                  style={{
                    padding: '0.375rem 0.875rem',
                    borderRadius: '1.5rem',
                    fontSize: '0.875rem',
                    transition: 'background 0.3s ease, color 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'linear-gradient(90deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'inherit';
                  }}
                >
                  {link.name}
                </div>
              </Link>
            </RevealAnimation>
          ))}
        </div>
        <Link className="hidden md:flex" href={LINKS.DISCORD} target="_blank">
          <Button
            variant={"brand"}
            style={{
              background: 'linear-gradient(90deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)',
              color: 'white',
              transition: 'background 0.3s ease, color 0.3s ease',
              padding: '0.375rem 0.875rem',
              borderRadius: '0.375rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                'linear-gradient(90deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                'linear-gradient(90deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)';
            }}
          >
            <DiscordIcon className="text-white h-[18px] w-[18px]" />
            <span className="ml-2">Discord</span>
          </Button>
        </Link>
        <div className="block md:hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;