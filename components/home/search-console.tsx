"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icon";

export function SearchConsole() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "searching" | "done">("idle");

  function explore() {
    setStatus("searching");
    window.setTimeout(() => {
      setStatus("done");
      window.setTimeout(() => router.push("/sanctuaries"), 400);
    }, 700);
  }

  return (
    <div className="w-full bg-surface-container-lowest/80 backdrop-blur-2xl rounded-xl p-space-sm sm:p-space-md shadow-2xl shadow-surface-container-lowest">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-sm items-stretch">
        <button
          type="button"
          className="lg:col-span-4 min-w-0 text-left bg-surface-container-low/70 hover:bg-surface-container-low transition-colors rounded-lg p-space-md group"
        >
          <div className="flex items-center justify-between mb-space-xs gap-space-xs">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              Destination
            </span>
            <Icon
              name="travel_explore"
              className="text-sm text-primary shrink-0 group-hover:translate-x-0.5 transition-transform"
            />
          </div>
          <div className="font-body-md text-body-md text-on-surface font-medium truncate">
            Kyoto, Japan
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
            Aman-style Cedar Grove • Kansai
          </div>
        </button>
        <button
          type="button"
          className="lg:col-span-4 min-w-0 text-left bg-surface-container-low/70 hover:bg-surface-container-low transition-colors rounded-lg p-space-md group"
        >
          <div className="flex items-center justify-between mb-space-xs gap-space-xs">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              Dates of Seclusion
            </span>
            <Icon
              name="calendar_month"
              className="text-sm text-primary shrink-0 group-hover:rotate-12 transition-transform"
            />
          </div>
          <div className="font-body-md text-body-md text-on-surface font-medium truncate">
            Oct 14, 2025 — Oct 21, 2025
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
            7 Nights • Autumn Moon Phase
          </div>
        </button>
        <button
          type="button"
          className="lg:col-span-2 min-w-0 text-left bg-surface-container-low/70 hover:bg-surface-container-low transition-colors rounded-lg p-space-md group"
        >
          <div className="flex items-center justify-between mb-space-xs gap-space-xs">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              Allocation
            </span>
            <Icon name="person" className="text-sm text-primary shrink-0" />
          </div>
          <div className="font-body-md text-body-md text-on-surface font-medium truncate">
            2 Guests
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
            Master Zen Suite
          </div>
        </button>
        <div className="lg:col-span-2 min-w-0 h-full flex">
          <button
            className="w-full h-full min-h-[72px] lg:min-h-[64px] bg-primary text-on-primary hover:bg-primary-fixed-dim hover:text-on-primary-fixed-variant transition-all duration-300 font-label-md text-label-md uppercase tracking-wider rounded-lg flex items-center justify-center gap-space-sm px-space-md shadow-lg shadow-primary/10"
            type="button"
            onClick={explore}
          >
            {status === "searching" ? (
              <>
                <Icon name="progress_activity" className="text-base animate-spin" />
                <span className="truncate">Verifying Havens...</span>
              </>
            ) : status === "done" ? (
              <>
                <span className="truncate">24 Havens Unlocked</span>
                <Icon name="check" className="text-base shrink-0" />
              </>
            ) : (
              <>
                <span>Explore</span>
                <Icon name="north_east" className="text-base shrink-0" />
              </>
            )}
          </button>
        </div>
      </div>
      <div className="hidden xl:flex items-center justify-between pt-space-sm px-space-sm text-tertiary-fixed-dim font-label-caps text-label-caps">
        <div className="flex items-center gap-space-lg">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />
            Private Air Charter Available
          </span>
          <span>•</span>
          <span>Bespoke Concierge Escort Included</span>
          <span>•</span>
          <span>100% Carbon-Neutral Transfers</span>
        </div>
        <div className="tracking-widest uppercase text-outline">
          LAT 35.0116° N • LON 135.7681° E
        </div>
      </div>
    </div>
  );
}
