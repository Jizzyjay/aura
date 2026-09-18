"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";

export function PropertyActions({ title, description }: { title: string; description: string }) {
  const [saved, setSaved] = useState(false);
  const [shareLabel, setShareLabel] = useState("Share");

  async function share() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: description, url: window.location.href });
        return;
      } catch {
        return;
      }
    }
    await navigator.clipboard.writeText(window.location.href);
    setShareLabel("Link Copied");
    window.setTimeout(() => setShareLabel("Share"), 2500);
  }

  return (
    <div className="flex flex-wrap items-center gap-space-sm">
      <button
        className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"
        type="button"
        onClick={share}
      >
        <Icon name={shareLabel === "Link Copied" ? "check" : "share"} className="text-[16px] text-primary" />
        <span>{shareLabel}</span>
      </button>
      <button
        className="flex items-center gap-space-xs px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"
        type="button"
        onClick={() => setSaved((value) => !value)}
      >
        <Icon
          name={saved ? "favorite" : "favorite_border"}
          className="text-[16px] text-primary"
          filled={saved}
        />
        <span>{saved ? "Saved" : "Save to Wishlist"}</span>
      </button>
    </div>
  );
}
