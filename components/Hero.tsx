"use client";

import React from 'react';
import { ArrowRight, Sparkles, Zap, Shield, Coins } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import { LINKS } from './config';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#f4adfb]/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#5b2873]/10 blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#f4adfb]/5 to-[#5b2873]/5 blur-[150px]" />
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto px-4">
        <div className="flex min-h-[90vh] flex-col items-center justify-center">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div className="relative z-10 flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
              {/* Premium Badge */}
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f4adfb]/20 bg-gradient-to-r from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] px-6 py-3 backdrop-blur-sm">
                  <Sparkles className="h-5 w-5 text-[#f4adfb]" />
                  <span className="bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-lg font-medium text-transparent">
                    Premium Discord Tools & Nitro
                  </span>
                </div>
              </div>

              {/* Main Heading Group */}
              <div className="relative space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  <span className="block">Premium Discord</span>
                  <span className="relative">
                    <span className="bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">
                      Tools & Nitro Services
                    </span>
                  </span>
                  <span className="block mt-1 text-3xl sm:text-4xl text-white/90">Secure & Anonymous</span>
                </h1>
                
                <p className="mx-auto max-w-xl text-lg text-muted-foreground/90 lg:mx-0">
                  Get premium Discord tools, Nitro subscriptions, and enhancement services. 
                  Lightning-fast delivery with secure cryptocurrency payments and 24/7 support.
                </p>
              </div>

              {/* Features List */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground/90 lg:justify-start">
                {[
                  { icon: Zap, text: 'Instant Delivery' },
                  { icon: Shield, text: '24/7 Support' },
                  { icon: Coins, text: 'Crypto Only' }
                ].map((feature, index) => (
                  <div 
                    key={feature.text} 
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#f4adfb]/10 to-[#5b2873]/10 border border-[#f4adfb]/20">
                      <feature.icon className="h-4 w-4 text-[#f4adfb]" />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/#products">
                  <Button 
                    size="lg"
                    className="group relative w-48 overflow-hidden bg-gradient-to-r from-[#f4adfb] to-[#5b2873] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f4adfb]/25"
                  >
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Link href={LINKS.DISCORD}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-48 border-[#f4adfb]/20 bg-gradient-to-r from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#f4adfb]/30 hover:from-[#f4adfb]/10 hover:to-[#5b2873]/10"
                  >
                    <DiscordLogoIcon className="mr-2 h-5 w-5 text-white" />
                    Join Discord
                  </Button>
                </Link>
              </div>

              {/* Enhanced Stats */}
              <div className="grid w-full grid-cols-3 gap-4">
                {[
                  { label: 'Tools Sold', value: '15K+' },
                  { label: 'Nitro Delivered', value: '8K+' },
                  { label: 'Response Time', value: '<30s' },
                ].map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="rounded-xl border border-[#f4adfb]/20 bg-gradient-to-r from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#f4adfb]/30 hover:shadow-lg hover:shadow-[#f4adfb]/10"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground/90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#f4adfb]/20 via-[#5b2873]/20 to-[#f4adfb]/20 blur-3xl animate-pulse" />
                
                <Image
                  className="relative mx-auto h-auto w-[80%] max-w-[500px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  alt="Discord mobile interface"
                  src="/PNG/phone.png"
                  width={1250}
                  height={2410}
                  priority
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;