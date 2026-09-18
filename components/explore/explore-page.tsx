"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CoverImage } from "@/components/cover-image";
import { Icon } from "@/components/icon";
import { SanctuaryCard } from "@/components/sanctuary-card";
import { sanctuaries } from "@/lib/data";
import { cn } from "@/lib/cn";

const SORTS = {
  recommended: "Curated / Recommended",
  "price-desc": "Price: High to Low",
  rating: "Highest Rated",
} as const;

type SortKey = keyof typeof SORTS;

export function ExplorePage() {
  const [mapOpen, setMapOpen] = useState(false);
  const [sort, setSort] = useState<SortKey>("recommended");

  const items = useMemo(() => {
    const next = [...sanctuaries];
    if (sort === "price-desc") next.sort((a, b) => b.pricePerNight - a.pricePerNight);
    if (sort === "rating") next.sort((a, b) => b.rating - a.rating);
    return next;
  }, [sort]);

  return (
    <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        <section className="relative w-full px-gutter-mobile md:px-margin-tablet lg:px-margin pt-space-xl pb-space-lg overflow-hidden">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                  Sanctuary Catalog • Autumn 2025
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-full shadow-sm">
                <span className="font-label-caps text-label-caps uppercase text-on-surface">
                  All Regions
                </span>
                <span className="text-outline-variant font-label-caps text-label-caps">•</span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface">
                  Oct 14 – 21
                </span>
                <span className="text-outline-variant font-label-caps text-label-caps">•</span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface">
                  2 Guests
                </span>
                <button
                  className="ml-space-xs flex items-center text-primary hover:text-primary-fixed transition-colors"
                  type="button"
                >
                  <Icon name="tune" className="text-[16px]" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-end">
              <div className="lg:col-span-8">
                <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
                  Curated Escapes & Sanctuaries
                </h1>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                  Strictly limited allocations of architecturally significant estates, secluded
                  retreats, and heritage hideaways curated for uninterrupted presence.
                </p>
              </div>
            </div>
            <div className="mt-space-md pt-space-md bg-surface-container-low/60 backdrop-blur-md rounded-xl p-space-md shadow-xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
              <div className="flex flex-wrap items-center gap-space-xs md:gap-space-sm flex-1">
                {[
                  ["Price:", "$1,000 – $5,000+"],
                  ["Architecture:", "All Styles"],
                  ["Amenities:", "Chef • Pool • Spa"],
                  ["Bedrooms:", "1 – 6+"],
                ].map(([label, value]) => (
                  <button
                    key={label}
                    className="flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface rounded font-label-md text-label-md transition-colors"
                    type="button"
                  >
                    <span className="text-outline-variant text-[12px] font-label-caps uppercase">
                      {label}
                    </span>
                    <span className="text-tertiary-fixed">{value}</span>
                    <Icon
                      name={label === "Amenities:" ? "tune" : "expand_more"}
                      className="text-[16px] text-outline"
                    />
                  </button>
                ))}
                <button
                  className="font-label-caps text-label-caps text-primary hover:text-primary-fixed uppercase tracking-wider px-space-xs transition-colors"
                  type="button"
                  onClick={() => setSort("recommended")}
                >
                  Reset All
                </button>
              </div>
              <div className="flex items-center justify-between lg:justify-end gap-space-sm pt-space-xs lg:pt-0">
                <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-space-xs rounded">
                  <span className="font-label-caps text-label-caps uppercase text-outline">
                    Sort:
                  </span>
                  <select
                    className="bg-transparent text-on-surface font-label-md text-label-md focus:outline-none cursor-pointer pr-space-xs"
                    value={sort}
                    onChange={(event) => setSort(event.target.value as SortKey)}
                  >
                    {Object.entries(SORTS).map(([value, label]) => (
                      <option
                        key={value}
                        className="bg-surface-container-highest text-on-surface"
                        value={value}
                      >
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  className={cn(
                    "flex items-center gap-space-xs px-space-md py-space-xs font-label-md text-label-md rounded transition-all shadow-md",
                    mapOpen
                      ? "bg-surface-container-highest text-primary"
                      : "bg-primary text-on-primary hover:bg-primary-fixed-dim",
                  )}
                  type="button"
                  onClick={() => setMapOpen((value) => !value)}
                >
                  <Icon name="map" className="text-[18px]" />
                  <span>{mapOpen ? "Hide Map" : "Map View"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {mapOpen ? (
          <section className="w-full px-gutter-mobile md:px-margin-tablet lg:px-margin pb-space-lg">
            <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl relative">
              <div className="w-full h-64 sm:h-80 bg-surface-container-highest relative">
                <CoverImage
                  className="absolute inset-0 h-full w-full object-cover"
                  alt="Global sanctuary coordinates map"
                  src="/images/map.jpg"
                />
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
                <div className="absolute top-space-md left-space-md max-w-[calc(100%-2rem)] bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded font-label-caps text-label-caps text-primary shadow-lg flex items-center gap-space-xs">
                  <Icon name="near_me" className="text-[16px]" />
                  <span>6 Active Coordinates Pinpointed</span>
                </div>
                <div className="absolute bottom-space-md left-space-md right-space-md sm:left-auto bg-surface/90 backdrop-blur-md px-space-md py-space-sm rounded font-body-sm text-body-sm text-on-surface-variant">
                  Showing private airstrips & direct helipad transfers
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="w-full px-gutter-mobile md:px-margin-tablet lg:px-margin pb-space-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md mb-space-lg">
              <div className="flex items-baseline gap-space-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {items.length} Sanctuaries Available
                </span>
                <span className="font-body-sm text-body-sm text-outline">
                  for your preferred window
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-space-md font-label-caps text-label-caps text-tertiary">
                <span>Complimentary Private Chauffeur Included</span>
                <span>•</span>
                <span>Dedicated Majordomo</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
              {items.map((sanctuary) => (
                <SanctuaryCard key={sanctuary.slug} sanctuary={sanctuary} />
              ))}
            </div>
            <div className="mt-space-3xl p-space-xl bg-surface-container-low rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-xl relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-space-xs max-w-xl">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                  Unlisted Portfolio
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Seeking an unlisted private estate?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  A significant portion of our global sanctuary network is preserved strictly
                  off-market for diplomatic protocols and complete visual anonymity.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-space-md w-full md:w-auto">
                <Link
                  href="/#concierge"
                  className="w-full sm:w-auto px-space-xl py-space-md bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-fixed-dim transition-all shadow-lg text-center"
                >
                  Consult Private Office
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
