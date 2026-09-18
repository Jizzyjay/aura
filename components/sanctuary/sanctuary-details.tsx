import Link from "next/link";
import { CoverImage } from "@/components/cover-image";
import { Icon } from "@/components/icon";
import { BookingEngine } from "@/components/sanctuary/booking-engine";
import { PropertyActions } from "@/components/sanctuary/property-actions";
import { VILLA_GALLERY, VILLA_MEDIA } from "@/lib/data";
import type { Sanctuary } from "@/lib/types";

const AMENITIES = [
  ["pool", "Infinity Edge Plunge Pool"],
  ["skillet", "Private Chef upon Request"],
  ["flight_takeoff", "Heliport (5 mins transfer)"],
  ["hot_tub", "Wellness Spa & Sauna"],
  ["wifi", "High-Speed Starlink"],
  ["wine_bar", "Private Volcanic Wine Cellar"],
  ["directions_boat", "Private Riva Yacht Mooring"],
  ["local_laundry_service", "Daily Laundry & Valet"],
  ["ac_unit", "Zoned Climate Filtration"],
];

const SUITES = [
  ["king_bed", "Suite 01", "The Cliffside Master", "King Bed, Sea Loggia, Roman Tub"],
  ["king_bed", "Suite 02", "Lemon Grove Suite", "King Bed, Garden Patio, Rain Shower"],
  ["bed", "Suite 03", "The Tower Chamber", "Queen Bed, 360° Belvédère, En-suite"],
  ["bed", "Suite 04", "The Grotto Suite", "King Bed, Natural Cave Alcove"],
];

export function SanctuaryDetails({ sanctuary }: { sanctuary: Sanctuary }) {
  const gallery =
    sanctuary.slug === "villa-belvedere"
      ? VILLA_GALLERY
      : [
          { src: sanctuary.image, alt: sanctuary.imageAlt, caption: sanctuary.location },
          ...VILLA_GALLERY.slice(1),
        ];
  const [hero, ...rest] = gallery;

  return (
    <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        <div className="relative w-full max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-gutter">
          <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <section className="pt-space-lg pb-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-space-xs font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest flex-wrap"
            >
              <Link href="/sanctuaries" className="hover:text-primary transition-colors">
                Sanctuaries
              </Link>
              <span className="text-outline">/</span>
              <span>{sanctuary.region}</span>
              <span className="text-outline">/</span>
              <span>{sanctuary.country}</span>
              <span className="text-outline">/</span>
              <span className="text-primary font-medium">{sanctuary.name}</span>
            </nav>
            <PropertyActions title={sanctuary.name} description={sanctuary.description} />
          </section>
          <section className="py-space-md">
            <div className="space-y-space-xs">
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="px-space-sm py-space-xs bg-surface-container-high text-primary font-label-caps text-label-caps tracking-widest uppercase rounded">
                  Privileged Allocation
                </span>
                <span className="inline-flex items-center gap-1 font-label-caps text-label-caps text-tertiary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Private Concierge Active
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
                {sanctuary.name}: {sanctuary.badge} of {sanctuary.location.split(",")[0]}
              </h1>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-space-lg text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
                <div className="flex items-center gap-1">
                  <Icon name="star" className="text-primary text-[18px]" filled />
                  <span className="text-on-surface font-medium">
                    {sanctuary.rating.toFixed(1)}
                  </span>
                  <span className="text-outline underline">
                    ({sanctuary.reviews} Curated Reviews)
                  </span>
                </div>
                <span className="text-outline">•</span>
                <div className="flex items-center gap-1">
                  <Icon name="verified" className="text-primary text-[18px]" />
                  <span className="text-on-surface">Superhost Distinction</span>
                </div>
                <span className="text-outline">•</span>
                <div className="flex items-center gap-1">
                  <Icon name="location_on" className="text-primary text-[18px]" />
                  <span>{sanctuary.location}</span>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-space-sm pb-space-2xl">
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-space-sm rounded-lg overflow-hidden bg-surface-container-lowest p-space-xs">
              <div className="lg:col-span-7 h-[240px] sm:h-[360px] lg:h-[580px] relative overflow-hidden group cursor-pointer">
                <CoverImage
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  alt={hero.alt}
                  src={hero.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 font-label-caps text-label-caps uppercase text-tertiary-fixed tracking-widest bg-surface-container-lowest/70 backdrop-blur-md px-space-sm py-space-xs rounded max-w-[calc(100%-2rem)]">
                  {hero.caption}
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 gap-space-sm h-[220px] sm:h-[280px] lg:h-[580px]">
                {rest.slice(0, 4).map((photo) => (
                  <div key={photo.caption} className="relative overflow-hidden group cursor-pointer h-full min-h-0">
                    <CoverImage
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      alt={photo.alt}
                      src={photo.src}
                    />
                    <div className="absolute inset-0 bg-surface-container-lowest/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-2 left-2 font-label-caps text-label-caps uppercase text-tertiary-fixed text-[9px] bg-surface-container-lowest/80 backdrop-blur-sm px-2 py-0.5 rounded">
                      {photo.caption}
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-space-xs px-space-sm sm:px-space-md py-space-xs bg-surface-container-lowest/90 hover:bg-surface-container text-on-surface font-label-md text-label-md rounded backdrop-blur-md shadow-xl transition-all"
                type="button"
              >
                <Icon name="grid_view" className="text-[18px] text-primary" />
                <span>Show all {sanctuary.galleryCount} photos</span>
              </button>
            </div>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start pb-space-3xl">
            <div className="lg:col-span-7 space-y-space-2xl min-w-0">
              <div className="bg-surface-container-low rounded-lg p-space-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md shadow-sm">
                <div className="flex items-center gap-space-md">
                  <div className="relative">
                    <CoverImage
                      className="w-16 h-16 rounded-full object-cover"
                      alt="Residence director"
                      src={VILLA_MEDIA.director}
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-surface-container-lowest text-[10px]">
                      <Icon name="shield" className="text-[10px]" filled />
                    </span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
                      Estate Curatorship
                    </p>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Camilla Moretti & AURA Private Office
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      12 years of curated hospitality & confidential guest steward
                    </p>
                  </div>
                </div>
                <Link
                  href="/#concierge"
                  className="px-space-md py-space-xs bg-surface-container-high hover:bg-surface-bright text-primary font-label-caps text-label-caps uppercase rounded transition-colors whitespace-nowrap"
                >
                  Inquire Privately
                </Link>
              </div>
              <div className="space-y-space-md">
                <h2 className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                  Distinguished Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  {[
                    ["auto_stories", "AD Feature 2024", "Recognized for vanguard integration into its surrounding landscape."],
                    ["tram", "Private Arrival", "Secluded mechanical transfer from the private coastal road directly to haven."],
                    ["concierge", "Dedicated Sommelier", "Daily breakfast curation, evening aperitivo, and tailored wine vault access."],
                  ].map(([icon, title, copy]) => (
                    <div key={title} className="bg-surface-container-low p-space-md rounded-lg space-y-space-xs">
                      <Icon name={icon} className="text-primary text-[28px]" />
                      <h4 className="font-headline-sm text-[16px] leading-[22px] text-on-surface">
                        {title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                    Architectural Monograph
                  </span>
                </div>
                <div className="space-y-space-md font-body-lg text-body-lg text-on-surface leading-relaxed">
                  <p>
                    Suspended above its landscape,{" "}
                    <span className="text-primary font-medium">{sanctuary.name}</span>{" "}
                    represents a rare allocation of architectural mastery. Originally conceived
                    as a private cloister, the compound has undergone a meticulous conservation
                    project directed by AURA&apos;s private office.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {sanctuary.description} Every room preserves original material character while
                    introducing precision steel glazing and calibrated nocturnal lighting.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Guests discover deliberate stillness across secluded reading pavilions, an
                    unhurried water sequence, and subterranean wine cellars carved into the
                    site&apos;s original geology.
                  </p>
                </div>
              </div>
              <div className="space-y-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                  <h2 className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                    Suite Configurations
                  </h2>
                  <span className="font-label-caps text-label-caps text-tertiary">
                    {sanctuary.suites} Master Suites • {sanctuary.baths} Bathrooms • Up to{" "}
                    {sanctuary.guests} Guests
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
                  {SUITES.slice(0, Math.max(sanctuary.suites, 1)).map(([icon, label, title, copy]) => (
                    <div key={label} className="bg-surface-container-low p-space-md rounded-lg space-y-1">
                      <Icon name={icon} className="text-primary text-[20px]" />
                      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        {label}
                      </p>
                      <h5 className="font-headline-sm text-[15px] text-on-surface">{title}</h5>
                      <p className="font-body-sm text-[12px] text-tertiary">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-space-md">
                <h2 className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                  Sanctuary Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-space-md gap-x-space-lg bg-surface-container-low p-space-lg rounded-lg">
                  {AMENITIES.map(([icon, label]) => (
                    <div key={label} className="flex items-center gap-space-sm">
                      <Icon name={icon} className="text-primary text-[22px]" />
                      <span className="font-body-md text-body-md text-on-surface">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-space-md pt-space-sm">
                <div>
                  <h2 className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                    Guest Evaluation Protocol
                  </h2>
                  <p className="font-headline-md text-headline-md text-on-surface mt-1">
                    {sanctuary.rating.toFixed(1)}{" "}
                    <span className="text-primary text-[20px]">★</span>{" "}
                    <span className="font-body-md text-body-md text-on-surface-variant font-normal">
                      Based on {sanctuary.reviews} verified guest stays
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-xl gap-y-space-md bg-surface-container-low p-space-lg rounded-lg">
                  {[
                    "Cleanliness & Stewardship",
                    "Architectural Fidelity",
                    "Private Concierge Service",
                    "Location & Seclusion",
                  ].map((label) => (
                    <div key={label} className="space-y-space-xs">
                      <div className="flex justify-between font-label-md text-label-md text-on-surface">
                        <span>{label}</span>
                        <span className="font-medium text-primary">5.0</span>
                      </div>
                      <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-full" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                  <div className="bg-surface-container-lowest p-space-md rounded-lg space-y-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-primary">
                        HP
                      </div>
                      <div>
                        <h6 className="font-label-md text-label-md text-on-surface">Henrietta P.</h6>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">
                          Zurich • September 2024
                        </p>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      &quot;An untouchable standard of silence. Arrival felt like ascending into
                      another century. The private office orchestrated every transfer seamlessly.&quot;
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-lg space-y-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-primary">
                        MV
                      </div>
                      <div>
                        <h6 className="font-label-md text-label-md text-on-surface">Marcus V.</h6>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">
                          London • July 2024
                        </p>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      &quot;The finest private vantage we have occupied. Architectural restoration
                      of uncommon purity, with a concierge that never breaks the stillness.&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-space-md pt-space-sm">
                <h2 className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                  Environs & Topography
                </h2>
                <div className="w-full h-56 sm:h-72 rounded-lg overflow-hidden relative shadow-lg">
                  <CoverImage
                    className="absolute inset-0 h-full w-full object-cover"
                    alt={`Map of ${sanctuary.location}`}
                    src={VILLA_MEDIA.map}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div>
                      <p className="font-headline-sm text-headline-sm text-on-surface">
                        {sanctuary.location}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Private coordinate • {sanctuary.region}
                      </p>
                    </div>
                    <Link
                      href="/sanctuaries"
                      className="px-space-md py-space-xs bg-surface-container-highest/90 hover:bg-surface-bright text-primary font-label-caps text-label-caps uppercase rounded backdrop-blur-md transition-colors"
                    >
                      Explore Vicinity
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative w-full">
              <BookingEngine sanctuary={sanctuary} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
