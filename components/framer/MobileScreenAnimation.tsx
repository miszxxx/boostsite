"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const mobile_images = [
  "/PNG/phone_1.png",
  "/PNG/phone_2.png",
  "/PNG/phone_3.png",
];

const MobileScreenAnimation = () => {
  const controls = useAnimation();

  const screenRef = useRef(null);

  const inScreenView = useInView(screenRef, {
    once: true,
    margin: "-50px 0px -100px 0px",
  });

  useEffect(() => {
    if (inScreenView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inScreenView, controls]); // Added 'controls' to the dependency array

  const getRotation = (index: number) => {
    switch (index) {
      case 0:
        return 0;
      case 1:
        return 30;
      case 2:
        return -30;
      default:
        return 0;
    }
  };

  const getXAxis = (index: number) => {
    switch (index) {
      case 0:
        return 0;
      case 1:
        return 100;
      case 2:
        return -100;
      default:
        return 0;
    }
  };

  const getYAxis = (index: number) => {
    switch (index) {
      case 0:
        return 0;
      case 1:
        return -20;
      case 2:
        return -20;
      default:
        return 0;
    }
  };

  return (
    <div className="relative px-14 items-center flex justify-center">
      {
        // mobile screen
        mobile_images?.map((image, index) => (
          <motion.div
            key={index}
            className={cn(index != 0 && "absolute top-0")}
            ref={screenRef}
            animate={controls}
            initial="hidden"
            transition={{
              duration: 0.5,
              delay: index != 0 ? 0.5 : 0,
              type: "spring",
              damping: 12,
              bounce: 0.1,
              mass: 2,
            }}
            variants={{
              visible: {
                opacity: 1,
                y: getYAxis(index),
                zIndex: 2 - index,
                x: getXAxis(index),
                rotate: getRotation(index),
              },
              hidden: {
                opacity: 0,
                y: 50,
                zIndex: 0,
                x: 0,
                rotate: 0,
              },
            }}
          >
            <Image
              className={cn("h-max w-[250px]")}
              alt="Mobile phone image"
              src={image}
              width={400}
              height={800}
              priority
              draggable={false}
            />
          </motion.div>
        ))
      }
    </div>
  );
};

export default MobileScreenAnimation;
