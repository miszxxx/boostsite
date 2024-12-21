'use client';

import React, { useRef } from 'react';

function SlidingBanner() {
  const bannerText = "Hyper Boosts | #1 Wallet Friendly Boosting Service";
  
  return (
    <section 
      className="w-full overflow-hidden relative" 
      style={{
        background: 'linear-gradient(90deg, #ff69b4, #9333ea, #ff69b4)',
        backgroundSize: '200% 100%',
        animation: 'gradientMove 15s linear infinite'
      }}
    >
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .marquee {
            display: flex;
            width: max-content;
            animation: scroll 60s linear infinite;
          }
          
          .marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="py-1">
        <div className="marquee">
          {/* First set */}
          <div className="text-white text-sm whitespace-nowrap px-4">
            {bannerText} <span className="mx-3">•</span>
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4">
            {bannerText} <span className="mx-3">•</span>
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4">
            {bannerText} <span className="mx-3">•</span>
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4">
            {bannerText} <span className="mx-3">•</span>
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4">
            {bannerText} <span className="mx-3">•</span>
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="text-white text-sm whitespace-nowrap px-4">
            {bannerText} <span className="mx-3">•</span>
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4">
            {bannerText} <span className="mx-3">•</span>
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4">
            {bannerText} <span className="mx-3">•</span>
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4">
            {bannerText} <span className="mx-3">•</span>
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4">
            {bannerText} <span className="mx-3">•</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SlidingBanner;