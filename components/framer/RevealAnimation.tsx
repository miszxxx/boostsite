"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const RevealAnimation = ({
  children,
  delay = 0,
  screenReveal = false,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  screenReveal?: boolean;
  className?: string;
}) => {
  const controls = useAnimation();

  const screenRef = useRef(null);

  const inScreenView = useInView(screenRef, {
    once: true,
    margin: "-50px 0px -100px 0px",
  });

  useEffect(() => {
    if (inScreenView) {
      controls.start("visible");
    }
  }, [inScreenView, controls]); // Added 'controls' to the dependency array

  return (
    <motion.div
      ref={screenRef}
      initial={screenReveal ? "hidden" : "visible"}
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
