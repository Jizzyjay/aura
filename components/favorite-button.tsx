"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/cn";

type FavoriteButtonProps = {
  className?: string;
  iconClassName?: string;
};

export function FavoriteButton({ className, iconClassName }: FavoriteButtonProps) {
  const [saved, setSaved] = useState(false);

  return (
    <button
      type="button"
      aria-label={saved ? "Remove from wishlist" : "Save to Wishlist"}
      aria-pressed={saved}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setSaved((value) => !value);
      }}
      className={cn(
        "flex items-center justify-center transition-colors",
        saved ? "text-primary" : "text-on-surface hover:text-primary",
        className,
      )}
    >
      <Icon name="favorite" className={iconClassName} filled={saved} />
    </button>
  );
}
