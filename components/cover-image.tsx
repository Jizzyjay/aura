"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
};

const FALLBACK = "/images/hero.jpg";

export function CoverImage({ src, alt, className, fallback = FALLBACK }: CoverImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={failed ? fallback : src}
      alt={alt}
      className={cn("block max-w-none", className)}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
