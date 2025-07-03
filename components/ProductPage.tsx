"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, Shield, Clock, Zap, InfinityIcon, ArrowRight } from 'lucide-react';
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
      const features = cleanDescription.split('\n').filter(line => line.trim()).slice(0, 5);
      return features.length > 0 ? features : [
        "High Quality Service",
        "Fast Delivery",
        "24/7 Support",
        "Secure Payment",
        "Money Back Guarantee"
      ];
    }
    return [
      "High Quality Service",
      "Fast Delivery", 
      "24/7 Support",
      "Secure Payment",
      "Money Back Guarantee"
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
      
      <div className="min-h-screen bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#f4adfb]/10 blur-[100px]" />
          <div className="absolute bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#5b2873]/10 blur-[100px]" />
        </div>

        <div className="relative container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <RevealAnimation>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-[#f4adfb] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#products" className="hover:text-[#f4adfb] transition-colors">
                Products
              </Link>
              {group && (
                <>
                  <span>/</span>
                  <span className="text-[#f4adfb]">{group.title}</span>
                </>
              )}
              <span>/</span>
              <span className="text-white">{product.title}</span>
            </div>
          </RevealAnimation>

          {/* Back Button */}
          <RevealAnimation>
            <Link href="/#products">
              <Button variant="outline" className="mb-8 border-[#f4adfb]/20 hover:border-[#f4adfb]/40">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </RevealAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <RevealAnimation>
              <div className="space-y-4">
                {product.images && product.images.length > 0 ? (
                  <div className="relative aspect-square rounded-lg overflow-hidden border border-[#f4adfb]/20">
                    <Image
                      src={`https://sell.app/storage/${product.images[0].path}`}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-[#f4adfb]/10 to-[#5b2873]/10 border border-[#f4adfb]/20 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-16 h-16 text-[#f4adfb] mx-auto mb-4" />
                      <p className="text-muted-foreground">Product Image</p>
                    </div>
                  </div>
                )}

                {/* Additional Images */}
                {product.images && product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {product.images.slice(1, 5).map((image: any, index: number) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden border border-[#f4adfb]/20">
                        <Image
                          src={`https://sell.app/storage/${image.path}`}
                          alt={`${product.title} ${index + 2}`}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </RevealAnimation>

            {/* Product Details */}
            <div className="space-y-6">
              <RevealAnimation>
                <div>
                  {group && (
                    <Badge variant="outline" className="mb-2 border-[#f4adfb]/40 text-[#f4adfb]">
                      {group.title}
                    </Badge>
                  )}
                  <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#f4adfb] to-[#5b2873] bg-clip-text text-transparent">
                      ${getPrice()}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Stock:</span>
                      {getStock() === -1 ? (
                        <div className="flex items-center gap-1 text-green-500">
                          <InfinityIcon size={16} />
                          <span className="text-sm">Unlimited</span>
                        </div>
                      ) : (
                        <span className={`text-sm ${getStock() > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {getStock()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </RevealAnimation>

              {/* Trust Indicators */}
              <RevealAnimation>
                <div className="flex items-center gap-6 py-4 border-y border-[#f4adfb]/20">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Instant Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">5-Star Service</span>
                  </div>
                </div>
              </RevealAnimation>

              {/* Variants */}
              {product.variants && product.variants.length > 1 && (
                <RevealAnimation>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Choose Variant</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {product.variants.map((variant: any) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariant(variant)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            selectedVariant?.id === variant.id
                              ? 'border-[#f4adfb] bg-[#f4adfb]/10'
                              : 'border-[#f4adfb]/20 hover:border-[#f4adfb]/40'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{variant.title}</span>
                            <span className="text-[#f4adfb] font-bold">${variant.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
              )}

              {/* Quantity */}
              <RevealAnimation>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg border border-[#f4adfb]/20 hover:border-[#f4adfb]/40 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-16 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg border border-[#f4adfb]/20 hover:border-[#f4adfb]/40 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </RevealAnimation>

              {/* Purchase Button */}
              <RevealAnimation>
                <div className="space-y-3">
                  <button
                    className="w-full py-4 bg-gradient-to-r from-[#f4adfb] to-[#5b2873] text-white rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
                    data-sell-store={process.env.NEXT_PUBLIC_SELLAPP_STORE_ID}
                    data-sell-product={product.id}
                    data-sell-variant={selectedVariant?.id}
                    data-sell-quantity={quantity}
                    data-sell-darkmode="true"
                    data-sell-theme="f4adfb"
                  >
                    Purchase Now - ${(getPrice() * quantity).toFixed(2)}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Secure checkout powered by Sell.app
                  </p>
                </div>
              </RevealAnimation>

              {/* Features */}
              <RevealAnimation>
                <div>
                  <h3 className="text-lg font-semibold mb-3">What's Included</h3>
                  <div className="space-y-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#f4adfb] mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <RevealAnimation>
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Product Description</h2>
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            </RevealAnimation>
          )}

          {/* FAQ */}
          {product.other_settings?.faq && product.other_settings.faq.length > 0 && (
            <RevealAnimation>
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {product.other_settings.faq.map((faq: any, index: number) => (
                    <div key={index} className="border border-[#f4adfb]/20 rounded-lg p-6">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <RevealAnimation>
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProducts.slice(0, 3).map((relatedProduct: any) => (
                    <Link key={relatedProduct.id} href={`/product/${relatedProduct.slug}`}>
                      <div className="group border border-[#f4adfb]/20 rounded-lg p-6 hover:border-[#f4adfb]/40 transition-all">
                        <h3 className="font-semibold mb-2 group-hover:text-[#f4adfb] transition-colors">
                          {relatedProduct.title}
                        </h3>
                        <p className="text-[#f4adfb] font-bold">
                          ${relatedProduct.default_price?.price || 'Contact for Price'}
                        </p>
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