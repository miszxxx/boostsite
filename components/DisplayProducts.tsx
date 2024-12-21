"use client";

import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, InfinityIcon } from "lucide-react";
import RevealAnimation from "./framer/RevealAnimation";
import { cn } from "@/lib/utils";
import Script from "next/script";

type SellixProduct = {
  id: string;
  title: string;
  price: number;
  stock: number;
  uniqid: string;
  description: string;
  custom_fields?: Array<{ name: string; default: string }>;
};

type ProductGroup = {
  title: string;
  products_bound: SellixProduct[];
};

const DisplayProducts = ({ products }: { products: any }) => {
  const handleScriptLoad = () => {
    console.log("Sellix script loaded successfully");
  };

  const getProductFeatures = (product: SellixProduct) => {
    let features: string[] = [];
    product.custom_fields?.forEach((field) => {
      if (field?.name === "Features") {
        features = field?.default?.split("|") || [];
      }
    });
    
    if (features.length === 0 && product.description) {
      features = product.description.split("\n").filter(line => line.trim());
    }
    
    return features;
  };

  const setProductsInAscendingOrder = (products: SellixProduct[]) => {
    return products.sort((a, b) => a.price - b.price);
  };

  if (!products?.data?.groups) {
    return <div className="px-4 mt-10 text-center">Loading products...</div>;
  }

  const productGroups = products.data.groups;

  if (!productGroups || productGroups.length === 0) {
    return <div className="px-4 mt-10 text-center">No products available</div>;
  }

  return (
    <>
      <Script 
        src="https://cdn.sellix.io/static/js/embed.js" 
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
                className="flex-shrink-0 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500"
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
                {setProductsInAscendingOrder(group?.products_bound || []).map(
                  (product, productIndex) => (
                    <RevealAnimation
                      delay={productIndex * 0.1}
                      screenReveal={true}
                      key={productIndex}
                    >
                      <div className="group relative flex flex-col rounded-lg bg-purple-500/5 border border-purple-500/20 hover:border-purple-500/30 backdrop-blur-sm transition-all">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500" />
                        </div>
                        
                        <div className="px-6 pt-4 pb-6">
                          <h3 className="text-xl font-semibold text-center group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {product?.title}
                          </h3>
                          <div className="flex flex-row justify-between items-end mt-4">
                            <div className="text-3xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                              {`$${product?.price}`}
                            </div>
                            <div className="flex flex-row items-center">
                              <div className="text-xs text-white/70">Stock:</div>
                              {product?.stock !== -1 ? (
                                <div className={cn("text-xs ml-1", product?.stock === 0 ? "text-red-500" : "text-green-500")}>
                                  {product?.stock}
                                </div>
                              ) : (
                                <InfinityIcon size={16} className="text-green-500 ml-1" />
                              )}
                            </div>
                          </div>
                          <div className="w-full border-t border-purple-500/20 my-4"></div>
                          <div className="text-white/70 text-sm mb-2">Features</div>
                          <div className="flex flex-col gap-2">
                            {getProductFeatures(product).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex flex-row items-start gap-2">
                                <Check size={18} className="text-purple-500 mt-0.5 shrink-0" />
                                <span className="text-sm text-white/70">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="relative group/button overflow-hidden rounded-lg border border-purple-500/20 hover:border-purple-500/30 mt-6">
                            <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300">
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500" />
                            </div>
                            <button
                              className="relative w-full py-3 text-sm bg-purple-500/5 backdrop-blur-sm"
                              data-sellix-product={product?.uniqid}
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