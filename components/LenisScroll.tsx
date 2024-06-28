"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function LenisScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}
