"use client";

import React, { useEffect, useState } from "react";
import RevealAnimation from "./framer/RevealAnimation";
import { ShoppingBag, Zap, CrownIcon } from "lucide-react";
import DisplayProducts from "./DisplayProducts";
import Script from "next/script";
import { api } from "@/lib/api";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await api.getGroups(Date.now().toString());
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section id="products" className="relative pt-24 flex flex-col items-center px-4 middle overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#f4adfb]/10 blur-[100px] animate-pulse" />
          <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#5b2873]/10 blur-[100px] animate-pulse" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f4adfb]/20 bg-gradient-to-r from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] px-6 py-3 backdrop-blur-sm">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#f4adfb] border-t-transparent"></div>
              <span className="bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-lg font-medium text-transparent">
                Loading Services...
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="relative pt-24 flex flex-col items-center px-4 middle overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#f4adfb]/10 blur-[100px] animate-pulse" />
          <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#5b2873]/10 blur-[100px] animate-pulse" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 backdrop-blur-sm">
              <span className="text-red-400 text-lg font-medium">
                {error}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="relative pt-24 flex flex-col items-center px-4 middle overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#f4adfb]/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#5b2873]/10 blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#f4adfb]/5 to-[#5b2873]/5 blur-[150px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <RevealAnimation>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f4adfb]/20 bg-gradient-to-r from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] px-6 py-3 backdrop-blur-sm">
              <ShoppingBag className="h-5 w-5 text-[#f4adfb]" />
              <span className="bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-lg font-medium text-transparent">
                Explore Our Services
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">
                Discord Tools & Nitro Services
              </span>
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed">
              Browse our premium collection of Discord tools, Nitro subscriptions, and enhancement services. 
              All payments processed securely with cryptocurrency.
            </p>
            
            {/* Service Categories */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#f4adfb]/10 to-[#5b2873]/10 border border-[#f4adfb]/20">
                <Zap className="w-4 h-4 text-[#f4adfb]" />
                <span className="text-sm font-medium text-white">Discord Tools</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#f4adfb]/10 to-[#5b2873]/10 border border-[#f4adfb]/20">
                <CrownIcon className="w-4 h-4 text-[#f4adfb]" />
                <span className="text-sm font-medium text-white">Nitro Services</span>
              </div>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation>
          <div className="w-full">
            <DisplayProducts products={productsData} />
          </div>
        </RevealAnimation>

        {/* Decorative elements */}
        <div className="absolute -top-10 left-0 w-20 h-20 border-t-2 border-l-2 border-[#f4adfb]/20 rounded-tl-3xl" />
        <div className="absolute -bottom-10 right-0 w-20 h-20 border-b-2 border-r-2 border-[#5b2873]/20 rounded-br-3xl" />
      </div>

      <link href="https://cdn.sell.app/embed/style.css" rel="stylesheet" />
      <Script 
        src="https://cdn.sell.app/embed/script.js" 
        type="module"
        strategy="beforeInteractive"
      />
    </section>
  );
};

export default Products;