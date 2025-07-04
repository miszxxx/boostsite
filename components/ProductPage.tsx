"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, Shield, Clock, Zap, InfinityIcon, ArrowRight, Eye, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Header from './Header';
import Footer from './Footer';
import TopNotification from './TopNotification';
import RevealAnimation from './framer/RevealAnimation';

interface ProductPageProps {
  product: any;
  group: any;
  relatedProducts: any[];
}

const ProductPage: React.FC<ProductPageProps> = ({ product, group, relatedProducts }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);

  // Get product features from description
  const getProductFeatures = () => {
    if (product.description) {
      const cleanDescription = product.description.replace(/<[^>]*>/g, '');
      const features = cleanDescription.split('\n').filter(line => line.trim()).slice(0, 6);
      return features.length > 0 ? features : [
        "High Quality Service",
        "Fast Delivery",
        "24/7 Support",
        "Secure Payment",
        "Money Back Guarantee",
        "Professional Team"
      ];
    }
    return [
      "High Quality Service",
      "Fast Delivery", 
      "24/7 Support",
      "Secure Payment",
      "Money Back Guarantee",
      "Professional Team"
    ];
  };

  const getPrice = () => {
    if (selectedVariant) {
      return selectedVariant.price;
    }
    if (product.default_price) {
      return parseFloat(product.default_price.price);
    }
    return 0;
  };

  const getStock = () => {
    if (selectedVariant) {
      return selectedVariant.stock || -1;
    }
    return -1;
  };

  const features = getProductFeatures();

  return (
    <>
      <TopNotification />
      <Header />
      
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#f4adfb]/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#5b2873]/10 blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#f4adfb]/5 to-[#5b2873]/5 blur-[150px]" />
        </div>

        <div className="relative container mx-auto px-4 py-8">
          {/* Enhanced Breadcrumb */}
          <RevealAnimation>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 p-4 rounded-lg bg-gradient-to-r from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] border border-[#f4adfb]/20 backdrop-blur-sm">
              <Link href="/" className="hover:text-[#f4adfb] transition-colors duration-300 hover:underline">
                Home
              </Link>
              <span className="text-[#f4adfb]/50">/</span>
              <Link href="/#products" className="hover:text-[#f4adfb] transition-colors duration-300 hover:underline">
                Products
              </Link>
              {group && (
                <>
                  <span className="text-[#f4adfb]/50">/</span>
                  <span className="text-[#f4adfb] font-medium">{group.title}</span>
                </>
              )}
              <span className="text-[#f4adfb]/50">/</span>
              <span className="text-white font-medium">{product.title}</span>
            </div>
          </RevealAnimation>

          {/* Enhanced Back Button */}
          <RevealAnimation>
            <Link href="/#products">
              <Button variant="outline" className="mb-8 border-[#f4adfb]/30 hover:border-[#f4adfb]/50 bg-gradient-to-r from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] hover:from-[#f4adfb]/10 hover:to-[#5b2873]/10 transition-all duration-300 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Products
              </Button>
            </Link>
          </RevealAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Product Images */}
            <RevealAnimation>
              <div className="space-y-4">
                {product.images && product.images.length > 0 ? (
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-[#f4adfb]/20 bg-gradient-to-br from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f4adfb]/10 to-[#5b2873]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={`https://sell.app/storage/${product.images[0].path}`}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-[#f4adfb]/10 to-[#5b2873]/10 border border-[#f4adfb]/20 flex items-center justify-center group hover:border-[#f4adfb]/40 transition-all duration-300">
                    <div className="text-center">
                      <Zap className="w-16 h-16 text-[#f4adfb] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-muted-foreground font-medium">Product Image</p>
                    </div>
                  </div>
                )}

                {/* Enhanced Additional Images */}
                {product.images && product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {product.images.slice(1, 5).map((image: any, index: number) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden border border-[#f4adfb]/20 hover:border-[#f4adfb]/40 transition-all duration-300 group">
                        <Image
                          src={`https://sell.app/storage/${image.path}`}
                          alt={`${product.title} ${index + 2}`}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </RevealAnimation>

            {/* Enhanced Product Details */}
            <div className="space-y-8">
              <RevealAnimation>
                <div>
                  {group && (
                    <Badge variant="outline" className="mb-3 border-[#f4adfb]/40 text-[#f4adfb] bg-gradient-to-r from-[#f4adfb]/10 to-[#5b2873]/10 hover:from-[#f4adfb]/20 hover:to-[#5b2873]/20 transition-all duration-300">
                      {group.title}
                    </Badge>
                  )}
                  <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{product.title}</h1>
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">
                      ${getPrice()}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#f4adfb]/10 to-[#5b2873]/10 border border-[#f4adfb]/20">
                      <span className="text-sm text-white/60">Stock:</span>
                      {getStock() === -1 ? (
                        <div className="flex items-center gap-1 text-green-400">
                          <InfinityIcon size={16} />
                          <span className="text-sm font-medium">Unlimited</span>
                        </div>
                      ) : (
                        <span className={`text-sm font-medium ${getStock() > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {getStock()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </RevealAnimation>

              {/* Enhanced Trust Indicators */}
              <RevealAnimation>
                <div className="flex items-center gap-6 py-6 border-y border-[#f4adfb]/20">
                  <div className="flex items-center gap-2 group">
                    <Shield className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Clock className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">Instant Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Star className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">5-Star Service</span>
                  </div>
                </div>
              </RevealAnimation>

              {/* Enhanced Variants */}
              {product.variants && product.variants.length > 1 && (
                <RevealAnimation>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Choose Variant</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {product.variants.map((variant: any) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariant(variant)}
                          className={`p-4 rounded-xl border text-left transition-all duration-300 group ${
                            selectedVariant?.id === variant.id
                              ? 'border-[#f4adfb] bg-gradient-to-r from-[#f4adfb]/10 to-[#5b2873]/10'
                              : 'border-[#f4adfb]/20 hover:border-[#f4adfb]/40 hover:bg-gradient-to-r hover:from-[#f4adfb]/5 hover:to-[#5b2873]/5'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-white group-hover:text-[#f4adfb] transition-colors duration-300">{variant.title}</span>
                            <span className="text-[#f4adfb] font-bold text-lg">${variant.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
              )}

              {/* Enhanced Quantity */}
              <RevealAnimation>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Quantity</h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 rounded-lg border border-[#f4adfb]/20 hover:border-[#f4adfb]/40 flex items-center justify-center bg-gradient-to-r from-[#f4adfb]/5 to-[#5b2873]/5 hover:from-[#f4adfb]/10 hover:to-[#5b2873]/10 transition-all duration-300 text-white font-bold text-lg"
                    >
                      -
                    </button>
                    <span className="w-20 text-center font-bold text-xl text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 rounded-lg border border-[#f4adfb]/20 hover:border-[#f4adfb]/40 flex items-center justify-center bg-gradient-to-r from-[#f4adfb]/5 to-[#5b2873]/5 hover:from-[#f4adfb]/10 hover:to-[#5b2873]/10 transition-all duration-300 text-white font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </RevealAnimation>

              {/* Enhanced Purchase Button */}
              <RevealAnimation>
                <div className="space-y-4">
                  <button
                    className="w-full py-4 bg-gradient-to-r from-[#f4adfb] to-[#5b2873] text-white rounded-xl font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-[#f4adfb]/25 transition-all duration-300 flex items-center justify-center gap-3 group"
                    data-sell-store={process.env.NEXT_PUBLIC_SELLAPP_STORE_ID}
                    data-sell-product={product.id}
                    data-sell-variant={selectedVariant?.id}
                    data-sell-quantity={quantity}
                    data-sell-darkmode="true"
                    data-sell-theme="f4adfb"
                  >
                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Purchase Now - ${(getPrice() * quantity).toFixed(2)}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    🔒 Secure checkout powered by Sell.app
                  </p>
                </div>
              </RevealAnimation>

              {/* Enhanced Features */}
              <RevealAnimation>
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] border border-[#f4adfb]/20">
                  <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#f4adfb]" />
                    What's Included
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <Check className="w-5 h-5 text-[#f4adfb] mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Enhanced Description */}
          {product.description && (
            <RevealAnimation>
              <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] border border-[#f4adfb]/20">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">Product Description</h2>
                <div 
                  className="prose prose-invert max-w-none text-white/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            </RevealAnimation>
          )}

          {/* Enhanced FAQ */}
          {product.other_settings?.faq && product.other_settings.faq.length > 0 && (
            <RevealAnimation>
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {product.other_settings.faq.map((faq: any, index: number) => (
                    <div key={index} className="border border-[#f4adfb]/20 rounded-xl p-6 bg-gradient-to-br from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] hover:border-[#f4adfb]/30 transition-all duration-300">
                      <h3 className="font-semibold mb-3 text-white text-lg">{faq.question}</h3>
                      <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          )}

          {/* Enhanced Related Products */}
          {relatedProducts.length > 0 && (
            <RevealAnimation>
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProducts.slice(0, 3).map((relatedProduct: any) => (
                    <Link key={relatedProduct.id} href={`/product/${relatedProduct.slug}`}>
                      <div className="group border border-[#f4adfb]/20 rounded-xl p-6 hover:border-[#f4adfb]/40 transition-all duration-300 bg-gradient-to-br from-[#f4adfb]/[0.05] to-[#5b2873]/[0.05] hover:shadow-lg hover:shadow-[#f4adfb]/10">
                        <h3 className="font-semibold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#f4adfb] group-hover:to-[#5b2873] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-white">
                          {relatedProduct.title}
                        </h3>
                        <p className="text-[#f4adfb] font-bold text-xl">
                          ${relatedProduct.default_price?.price || 'Contact for Price'}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                          <Eye className="w-4 h-4" />
                          View Details
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          )}
        </div>
      </div>

      <Footer />

      {/* Sell.app Embed Script */}
      <link href="https://cdn.sell.app/embed/style.css" rel="stylesheet" />
      <script src="https://cdn.sell.app/embed/script.js" type="module" async />
    </>
  );
};

export default ProductPage;