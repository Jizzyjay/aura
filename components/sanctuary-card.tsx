import Link from "next/link";
import { CoverImage } from "@/components/cover-image";
import { FavoriteButton } from "@/components/favorite-button";
import { Icon } from "@/components/icon";
import { formatUsd } from "@/lib/format";
import { stayTotal } from "@/lib/data";
import type { Sanctuary } from "@/lib/types";

export function SanctuaryCard({ sanctuary }: { sanctuary: Sanctuary }) {
  return (
    <article className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-highest">
        <CoverImage
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          alt={sanctuary.imageAlt}
          src={sanctuary.image}
        />
        <div className="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
          <span className="bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-space-xs font-label-caps text-label-caps uppercase text-secondary rounded">
            {sanctuary.badge}
          </span>
        </div>
        <div className="absolute top-space-sm right-space-sm flex items-center gap-space-xs">
          <FavoriteButton className="w-8 h-8 rounded-full bg-surface-container-lowest/70 backdrop-blur-md" iconClassName="text-[18px]" />
        </div>
        <div className="absolute bottom-space-sm right-space-sm bg-surface-container-lowest/85 backdrop-blur-sm px-space-sm py-space-xs rounded font-label-caps text-label-caps text-tertiary">
          1 / {sanctuary.galleryCount}
        </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 justify-between bg-surface-container-low">
        <div className="space-y-space-xs">
          <div className="flex items-center justify-between gap-space-sm flex-wrap font-label-caps text-label-caps">
            <span className="text-outline uppercase tracking-wider">{sanctuary.location}</span>
            <div className="flex items-center gap-space-xs text-primary">
              <Icon name="star" className="text-[14px]" filled />
              <span className="text-on-surface font-semibold">
                {sanctuary.rating.toFixed(sanctuary.rating % 1 === 0 ? 1 : 2)}
              </span>
              <span className="text-outline font-normal">({sanctuary.reviews})</span>
            </div>
          </div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors pt-space-xs">
            {sanctuary.name}
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            {sanctuary.description}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-space-xs py-space-md my-space-sm bg-surface-container/70 rounded px-space-sm text-center font-label-caps text-label-caps text-tertiary">
          {[
            [String(sanctuary.guests), "GUESTS"],
            [String(sanctuary.suites), sanctuary.suites === 1 ? "SUITE" : "SUITES"],
            [String(sanctuary.baths), "BATHS"],
            [sanctuary.sqft, "SQ FT"],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col">
              <span className="text-on-surface font-medium">{value}</span>
              <span className="text-outline-variant text-[10px]">{label}</span>
            </div>
          ))}
        </div>
        <div className="pt-space-xs flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
          <div>
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary">
                {formatUsd(sanctuary.pricePerNight)}
              </span>
              <span className="font-body-sm text-body-sm text-outline">/ night</span>
            </div>
            <p className="font-label-caps text-label-caps text-tertiary-container">
              {formatUsd(stayTotal(sanctuary.pricePerNight))} total • {sanctuary.nights} nights
            </p>
          </div>
          <Link
            href={`/sanctuaries/${sanctuary.slug}`}
            className="px-space-md py-space-sm bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md rounded transition-all text-center"
          >
            View Residence
          </Link>
        </div>
      </div>
    </article>
  );
}
