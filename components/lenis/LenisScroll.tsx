"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

function LenisScroll({ children }: { children: React.ReactNode}) {
  return (
    <ReactLenis 
      root 
      options={{
        duration: 1.5,       // Speed of scroll (in seconds)
        lerp: 0.1,           // Linear interpolation (lower means smoother/slower)
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default LenisScroll;
