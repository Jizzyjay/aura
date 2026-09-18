"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CoverImage } from "@/components/cover-image";
import { Icon } from "@/components/icon";
import { BRAND } from "@/lib/data";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/", label: "Destinations" },
  { href: "/sanctuaries", label: "Sanctuaries" },
  { href: "/#journeys", label: "Curated Journeys" },
  { href: "/#concierge", label: "Private Concierge" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/75 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-gutter flex items-center justify-between">
        <div className="flex items-center gap-space-lg">
          <Link href="/" className="flex items-center gap-space-sm min-w-0">
            <img
              alt="AURA Luxury Sanctuaries Logo"
              className="h-7 sm:h-8 w-auto object-contain shrink-0"
              src={BRAND.logo}
            />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-space-xl">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/sanctuaries") && pathname.startsWith("/sanctuaries");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "uppercase transition-colors",
                  active
                    ? "text-primary font-medium"
                    : "font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-space-md md:gap-space-lg">
          <div
            className="hidden lg:flex items-center gap-space-xs font-label-caps text-label-caps text-tertiary px-space-sm py-space-xs bg-surface-container-low rounded-lg cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <span>USD</span>
            <span className="text-outline">/</span>
            <span>EN</span>
          </div>
          <Link
            href="/reserve"
            className="px-space-sm md:px-space-md py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-fixed-dim hover:text-on-primary-fixed-variant transition-all whitespace-nowrap"
          >
            <span className="lg:hidden">Reserve</span>
            <span className="hidden lg:inline">Reserve Sanctuary</span>
          </Link>
          <button
            type="button"
            className="lg:hidden text-on-surface min-h-11 min-w-11 inline-flex items-center justify-center"
            aria-label="Open navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} className="text-[22px]" />
          </button>
          <span className="hidden lg:flex items-center">
            <CoverImage
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src={BRAND.profile}
            />
          </span>
        </div>
      </div>
      {open ? (
        <nav className="lg:hidden border-t border-outline-variant/30 bg-surface/95 backdrop-blur-xl px-gutter-mobile py-space-md flex flex-col gap-space-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-on-surface py-space-sm min-h-11 flex items-center"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
