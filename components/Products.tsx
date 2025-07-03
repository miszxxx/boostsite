"use client";

import React, { useEffect, useState } from "react";
import RevealAnimation from "./framer/RevealAnimation";
import { ShoppingBag } from "lucide-react";
import DisplayProducts from "./DisplayProducts";
import Script from "next/script";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://sell.app/api/v2/groups?timestamp=${Date.now()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SELLAPP_API_KEY}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.statusText}`);
        }

        const data = await res.json();
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="relative pt-24 flex flex-col items-center px-4 middle overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#f4adfb]/10 blur-[100px]" />
        <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#5b2873]/10 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <RevealAnimation>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f4adfb]/20 bg-[#f4adfb]/5 px-4 py-2 backdrop-blur-sm">
              <ShoppingBag className="h-4 w-4 text-[#f4adfb]" />
              <span className="bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-lg font-medium text-transparent">
                Explore Our Products
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">
                Premium Services
              </span>
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Browse our selection of Discord boosting services, 
              each crafted to enhance your Discord experience.
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation>
          <div className="w-full">
            <DisplayProducts products={productsData} />
          </div>
        </RevealAnimation>

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