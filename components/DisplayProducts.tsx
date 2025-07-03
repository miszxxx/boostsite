"use client";

import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, InfinityIcon } from "lucide-react";
import RevealAnimation from "./framer/RevealAnimation";
import { cn } from "@/lib/utils";
import Script from "next/script";

type SellAppProduct = {
  id: number;
  title: string;
  slug: string;
  description: string;
  variants?: Array<{
    id: number;
    title: string;
    price: number;
    stock?: number;
  }>;
  default_price?: {
    price: string;
    currency: string;
  };
};

type ProductGroup = {
  id: number;
  title: string;
  products: SellAppProduct[];
};

const DisplayProducts = ({ products }: { products: any }) => {
  const handleScriptLoad = () => {
    console.log("Sell.app script loaded successfully");
  };

  const getProductFeatures = (product: SellAppProduct) => {
    let features: string[] = [];
    
    if (product.description) {
      // Extract features from description
      const descriptionText = product.description.replace(/<[^>]*>/g, ''); // Remove HTML tags
      features = descriptionText.split('\n').filter(line => line.trim()).slice(0, 3);
    }
    
    if (features.length === 0) {
      features = [
        "High Quality Service",
        "Fast Delivery",
        "24/7 Support"
      ];
    }
    
    return features;
  };

  const setProductsInAscendingOrder = (products: SellAppProduct[]) => {
    return products.sort((a, b) => {
      const priceA = a.default_price ? parseFloat(a.default_price.price) : 0;
      const priceB = b.default_price ? parseFloat(b.default_price.price) : 0;
      return priceA - priceB;
    });
  };

  const getProductPrice = (product: SellAppProduct) => {
    if (product.default_price) {
      return `$${product.default_price.price}`;
    }
    if (product.variants && product.variants.length > 0) {
      return `$${product.variants[0].price}`;
    }
    return "Contact for Price";
  };

  const getProductStock = (product: SellAppProduct) => {
    if (product.variants && product.variants.length > 0) {
      return product.variants[0].stock || -1;
    }
    return -1; // Infinite stock
  };

  if (!products?.data) {
    return (
      <div className="px-4 mt-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#f4adfb]/20 bg-[#f4adfb]/5 px-4 py-2 backdrop-blur-sm">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#f4adfb] border-t-transparent"></div>
          <span className="bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-lg font-medium text-transparent">
            Loading products...
          </span>
        </div>
      </div>
    );
  }

  const productGroups = products.data;

  if (!productGroups || productGroups.length === 0) {
    return (
      <div className="px-4 mt-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-2 backdrop-blur-sm">
          <span className="text-yellow-400 text-lg font-medium">
            No products available
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script 
        src="https://cdn.sell.app/embed/script.js" 
        type="module"
        onLoad={handleScriptLoad}
      />

      <div className="w-full">
        <Tabs
          defaultValue={productGroups[0]?.title}
          className="flex flex-col items-center"
        >
          <TabsList className="flex flex-wrap justify-center h-auto gap-2 mb-8 relative z-10">
            {productGroups.map((group: ProductGroup, groupIndex: number) => (
              <TabsTrigger 
                key={groupIndex} 
                value={group?.title}
                className="flex-shrink-0 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#f4adfb] data-[state=active]:to-[#5b2873]"
              >
                {group?.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {productGroups.map((group: ProductGroup, groupIndex: number) => (
            <TabsContent 
              key={groupIndex} 
              value={group?.title}
              className="w-full relative z-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
                {setProductsInAscendingOrder(group?.products || []).map(
                  (product, productIndex) => (
                    <RevealAnimation
                      delay={productIndex * 0.1}
                      screenReveal={true}
                      key={productIndex}
                    >
                      <div className="group relative flex flex-col rounded-lg bg-[#f4adfb]/5 border border-[#f4adfb]/20 hover:border-[#f4adfb]/30 backdrop-blur-sm transition-all">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#f4adfb] to-[#5b2873]" />
                        </div>
                        
                        <div className="px-6 pt-4 pb-6">
                          <h3 className="text-xl font-semibold text-center group-hover:bg-gradient-to-r group-hover:from-[#f4adfb] group-hover:to-[#5b2873] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {product?.title}
                          </h3>
                          <div className="flex flex-row justify-between items-end mt-4">
                            <div className="text-3xl font-semibold bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">
                              {getProductPrice(product)}
                            </div>
                            <div className="flex flex-row items-center">
                              <div className="text-xs text-white/70">Stock:</div>
                              {getProductStock(product) !== -1 ? (
                                <div className={cn("text-xs ml-1", getProductStock(product) === 0 ? "text-red-500" : "text-green-500")}>
                                  {getProductStock(product)}
                                </div>
                              ) : (
                                <InfinityIcon size={16} className="text-green-500 ml-1" />
                              )}
                            </div>
                          </div>
                          <div className="w-full border-t border-[#f4adfb]/20 my-4"></div>
                          <div className="text-white/70 text-sm mb-2">Features</div>
                          <div className="flex flex-col gap-2">
                            {getProductFeatures(product).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex flex-row items-start gap-2">
                                <Check size={18} className="text-[#f4adfb] mt-0.5 shrink-0" />
                                <span className="text-sm text-white/70">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="relative group/button overflow-hidden rounded-lg border border-[#f4adfb]/20 hover:border-[#f4adfb]/30 mt-6">
                            <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300">
                              <div className="absolute inset-0 bg-gradient-to-r from-[#f4adfb] to-[#5b2873]" />
                            </div>
                            <button
                              className="relative w-full py-3 text-sm bg-[#f4adfb]/5 backdrop-blur-sm"
                              data-sell-store={process.env.NEXT_PUBLIC_SELLAPP_STORE_ID}
                              data-sell-product={product?.id}
                              data-sell-darkmode="true"
                              data-sell-theme="f4adfb"
                              type="button"
                            >
                              <span className="flex items-center justify-center gap-2 transition-transform duration-300 group-hover/button:translate-x-[-10px]">
                                Purchase
                                <ArrowRight className="w-4 h-4 transition-all duration-300 opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-[20px]" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </RevealAnimation>
                  )
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default DisplayProducts;