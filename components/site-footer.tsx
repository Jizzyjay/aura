import Link from "next/link";
import { COORDINATES } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest mt-space-3xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-gutter py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl mb-space-3xl">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-md text-headline-md text-primary tracking-tight">
                  AURA SANCTUARIES
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Private sanctuaries woven into Earth&apos;s most dramatic landscapes.
                Quiet architectural mastery designed for deliberate stillness.
              </p>
            </div>
            <div className="mt-space-xl">
              <p className="font-label-caps text-label-caps uppercase text-tertiary mb-space-xs">
                Ecological Accord
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                Net-positive architectural footprint, carbon-sequestering building
                matter, and dedicated regional conservation trusts.
              </p>
            </div>
          </div>
          <div className="md:col-span-3 space-y-space-md">
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
              Sanctuary Coordinates
            </p>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              {COORDINATES.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-on-surface transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4 space-y-space-md">
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
              Privileged Inquiries
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Receive unlisted property allocations, seasonal migrations, and private
              invitations.
            </p>
            <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-xs mt-space-sm">
              <input
                className="w-full bg-surface-container-low px-space-md py-space-sm font-body-sm text-body-sm text-on-surface placeholder-outline focus:outline-none rounded"
                placeholder="Enter your correspondence"
                type="email"
                name="email"
              />
              <button
                className="px-space-md py-space-sm bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-caps text-label-caps uppercase transition-colors rounded"
                type="button"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="pt-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md font-label-caps text-label-caps text-tertiary-container">
          <p>© 2025 AURA Sanctuaries Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-space-lg">
            <Link href="/#concierge" className="hover:text-on-surface transition-colors">
              Privacy Charter
            </Link>
            <Link href="/#concierge" className="hover:text-on-surface transition-colors">
              Terms of Seclusion
            </Link>
            <Link href="/#concierge" className="hover:text-on-surface transition-colors">
              Private Office
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
