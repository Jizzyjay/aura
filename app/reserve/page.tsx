import type { Metadata } from "next";
import { Suspense } from "react";
import { ReservationFlow } from "@/components/reserve/reservation-flow";

export const metadata: Metadata = {
  title: "Reserve",
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="w-full pt-20 min-h-dvh bg-background text-on-surface-variant px-gutter-mobile py-space-3xl">
          Preparing allocation protocol…
        </main>
      }
    >
      <ReservationFlow />
    </Suspense>
  );
}
