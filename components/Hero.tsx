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
    <section className="relative min-h-[90vh] overflow-hidden bg-pattern">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#f4adfb]/15 blur-[120px] float-animation" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#5b2873]/15 blur-[120px] float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-r from-[#f4adfb]/8 to-[#5b2873]/8 blur-[180px]" />
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto px-4">
        <div className="flex min-h-[90vh] flex-col items-center justify-center">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div className="relative z-10 flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
              {/* Premium Badge */}
              <div className="relative">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#f4adfb]/30 bg-gradient-to-r from-[#f4adfb]/[0.08] to-[#5b2873]/[0.08] px-8 py-4 backdrop-blur-enhanced glow-purple">
                  <Sparkles className="h-6 w-6 text-[#f4adfb] animate-pulse" />
                  <span className="bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-xl font-semibold text-transparent">
                    Premium Discord Tools & Nitro
                  </span>
                </div>
              </div>

              {/* Main Heading Group */}
              <div className="relative space-y-6">
                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl leading-tight">
                  <span className="block text-white">Premium Discord</span>
                  <span className="relative block">
                    <span className="bg-gradient-to-r from-[#f4adfb] via-[#e879f9] to-[#5b2873] bg-clip-text text-transparent">
                      Tools & Nitro Services
                    </span>
                  </span>
                  <span className="block mt-2 text-4xl sm:text-5xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Secure & Anonymous</span>
                </h1>
                
                <p className="mx-auto max-w-xl text-xl text-white/70 lg:mx-0 leading-relaxed">
                  Get premium Discord tools, Nitro subscriptions, and enhancement services. 
                  Lightning-fast delivery with secure cryptocurrency payments and 24/7 support.
                </p>
              </div>

              {/* Features List */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80 lg:justify-start">
                {[
                  { icon: Zap, text: 'Instant Delivery', color: 'text-yellow-400' },
                  { icon: Shield, text: '24/7 Support', color: 'text-green-400' },
                  { icon: Coins, text: 'Crypto Only', color: 'text-blue-400' }
                ].map((feature, index) => (
                  <div 
                    key={feature.text} 
                    className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#f4adfb]/20 to-[#5b2873]/20 border border-[#f4adfb]/30 group-hover:border-[#f4adfb]/50 transition-all duration-300">
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <span className="font-semibold text-lg group-hover:text-white transition-colors duration-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-6 sm:flex-row">
                <Link href="/#products">
                  <Button 
                    size="lg"
                    className="group relative w-52 h-14 overflow-hidden bg-gradient-to-r from-[#f4adfb] via-[#e879f9] to-[#5b2873] text-white transition-all duration-300 hover:scale-110 glow-purple text-lg font-bold"
                  >
                    Browse Products
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
                
                <Link href={LINKS.DISCORD}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-52 h-14 border-[#f4adfb]/30 bg-gradient-to-r from-[#f4adfb]/[0.08] to-[#5b2873]/[0.08] backdrop-blur-enhanced transition-all duration-300 hover:scale-110 hover:border-[#f4adfb]/50 hover:from-[#f4adfb]/20 hover:to-[#5b2873]/20 text-lg font-bold"
                  >
                    <DiscordLogoIcon className="mr-3 h-6 w-6 text-white" />
                    Join Discord
                  </Button>
                </Link>
              </div>

              {/* Enhanced Stats */}
              <div className="grid w-full grid-cols-3 gap-6 mt-8">
                {[
                  { label: 'Tools Sold', value: '15K+', color: 'from-[#f4adfb] to-[#e879f9]' },
                  { label: 'Nitro Delivered', value: '8K+', color: 'from-[#e879f9] to-[#5b2873]' },
                  { label: 'Response Time', value: '<30s', color: 'from-[#5b2873] to-[#f4adfb]' },
                ].map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="rounded-xl border border-[#f4adfb]/30 bg-gradient-to-r from-[#f4adfb]/[0.08] to-[#5b2873]/[0.08] p-6 text-center backdrop-blur-enhanced transition-all duration-300 hover:border-[#f4adfb]/50 hover:shadow-lg hover:shadow-[#f4adfb]/20 hover:scale-105 group"
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>{stat.value}</div>
                    <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 h-[700px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#f4adfb]/30 via-[#5b2873]/30 to-[#f4adfb]/30 blur-3xl float-animation" />
                
                <Image
                  className="relative mx-auto h-auto w-[85%] max-w-[550px] drop-shadow-2xl hover:scale-110 transition-transform duration-700 float-animation"
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