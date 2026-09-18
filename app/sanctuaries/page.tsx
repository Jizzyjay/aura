import type { Metadata } from "next";
import { ExplorePage } from "@/components/explore/explore-page";

export const metadata: Metadata = {
  title: "Sanctuaries",
};


export default function Page() {
  return <ExplorePage />;
}
