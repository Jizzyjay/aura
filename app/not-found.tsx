import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full pt-20 min-h-dvh bg-background flex items-center justify-center px-gutter-mobile">
      <div className="max-w-lg space-y-space-md text-center">
        <p className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
          Allocation Unavailable
        </p>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          This sanctuary is not in the current catalog.
        </h1>
        <Link
          href="/sanctuaries"
          className="inline-flex px-space-lg py-space-sm bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider"
        >
          Return to Catalog
        </Link>
      </div>
    </main>
  );
}
