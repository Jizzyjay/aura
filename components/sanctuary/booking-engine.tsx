"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icon";
import { DEFAULT_STAY } from "@/lib/data";
import { formatUsd } from "@/lib/format";
import type { Sanctuary } from "@/lib/types";

export function BookingEngine({ sanctuary }: { sanctuary: Sanctuary }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "checking" | "ready">("idle");
  const nightsTotal = sanctuary.pricePerNight * DEFAULT_STAY.nights;
  const butler = 1200;
  const tax = 850;
  const total = nightsTotal + butler + tax;

  function reserve() {
    setStatus("checking");
    window.setTimeout(() => {
      setStatus("ready");
      window.setTimeout(() => router.push(`/reserve?sanctuary=${sanctuary.slug}`), 350);
    }, 600);
  }

  return (
    <div className="lg:sticky lg:top-28 bg-surface-container-low/90 backdrop-blur-2xl p-space-lg rounded-xl shadow-2xl space-y-space-lg">
      <div className="flex items-baseline justify-between gap-space-sm">
        <div className="space-y-0.5 min-w-0">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-tertiary">
            Nightly Allocation
          </span>
          <div className="flex items-baseline gap-1 flex-wrap">
            <span className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
              {formatUsd(sanctuary.pricePerNight)}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">/ night</span>
          </div>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
            <Icon name="star" className="text-primary text-[16px]" filled />
            <span className="font-medium">{sanctuary.rating.toFixed(1)}</span>
            <span className="text-outline">({sanctuary.reviews})</span>
          </div>
          <p className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
            Prime Autumn Term
          </p>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-lg overflow-hidden p-space-sm space-y-space-sm">
        <div className="grid grid-cols-2 gap-space-xs">
          <button type="button" className="text-left p-space-xs bg-surface-container rounded hover:bg-surface-container-high transition-colors">
            <span className="font-label-caps text-[10px] text-tertiary uppercase block">
              Check-In
            </span>
            <span className="font-body-sm text-body-sm font-medium text-on-surface">
              Tue, {DEFAULT_STAY.checkIn}
            </span>
          </button>
          <button type="button" className="text-left p-space-xs bg-surface-container rounded hover:bg-surface-container-high transition-colors">
            <span className="font-label-caps text-[10px] text-tertiary uppercase block">
              Check-Out ({DEFAULT_STAY.nights} Nights)
            </span>
            <span className="font-body-sm text-body-sm font-medium text-on-surface">
              Tue, {DEFAULT_STAY.checkOut}
            </span>
          </button>
        </div>
        <button type="button" className="w-full text-left p-space-xs bg-surface-container rounded hover:bg-surface-container-high transition-colors flex items-center justify-between">
          <div>
            <span className="font-label-caps text-[10px] text-tertiary uppercase block">
              Private Occupancy
            </span>
            <span className="font-body-sm text-body-sm font-medium text-on-surface">
              2 Adults, 1 Child (3 Guests)
            </span>
          </div>
          <Icon name="expand_more" className="text-tertiary text-[18px]" />
        </button>
      </div>
      <div className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
        <div className="flex justify-between items-center py-1">
          <span className="underline decoration-outline/50 underline-offset-4">
            {formatUsd(sanctuary.pricePerNight)} × {DEFAULT_STAY.nights} nights
          </span>
          <span className="text-on-surface font-medium">{formatUsd(nightsTotal)}</span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="underline decoration-outline/50 underline-offset-4">
            Concierge & Private Butler Fee
          </span>
          <span className="text-on-surface font-medium">{formatUsd(butler)}</span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="underline decoration-outline/50 underline-offset-4">
            Luxury Hospitality Tax & Linen
          </span>
          <span className="text-on-surface font-medium">{formatUsd(tax)}</span>
        </div>
        <div className="pt-space-sm mt-space-sm bg-surface-container/50 p-space-sm rounded flex justify-between items-baseline">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-primary">
              Total Investment
            </span>
            <p className="font-label-caps text-[10px] text-tertiary">Before jurisdictional VAT</p>
          </div>
          <span className="font-headline-md text-headline-md text-on-surface font-semibold">
            {formatUsd(total)}
          </span>
        </div>
      </div>
      <div className="space-y-space-sm pt-space-xs">
        <button
          className="w-full py-space-sm bg-primary text-on-primary hover:bg-primary-fixed-dim font-headline-sm text-[16px] rounded tracking-wide transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-space-xs"
          type="button"
          onClick={reserve}
        >
          {status === "checking" ? (
            <>
              <Icon name="refresh" className="text-[18px] animate-spin" />
              <span>Checking Dates...</span>
            </>
          ) : status === "ready" ? (
            <>
              <span>Proceed to Private Checkout</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </>
          ) : (
            <>
              <span>Reserve Sanctuary</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </>
          )}
        </button>
        <p className="text-center font-label-caps text-label-caps text-tertiary tracking-wider">
          You won&apos;t be charged yet. Free cancellation up to 30 days prior.
        </p>
      </div>
      <div className="pt-space-xs">
        <Link
          href="/#concierge"
          className="w-full py-space-xs px-space-md bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md rounded flex items-center justify-center gap-space-xs transition-colors"
        >
          <Icon name="support_agent" className="text-[16px]" />
          <span>Speak with Residence Specialist</span>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-space-xs font-label-caps text-label-caps text-tertiary">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <span>Private office is available right now</span>
      </div>
    </div>
  );
}
