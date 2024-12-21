"use client";
//@ts-ignore

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispApp = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Crisp.configure(`2be798df-1ae4-45e4-859a-fbfcae5c1629`);
    }
  }, []);

  return null;
};

export default CrispApp;
