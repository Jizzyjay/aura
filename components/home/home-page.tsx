import Link from "next/link";
import { CoverImage } from "@/components/cover-image";
import { FavoriteButton } from "@/components/favorite-button";
import { Icon } from "@/components/icon";
import { SearchConsole } from "@/components/home/search-console";
import { featuredEstates, HOME_MEDIA, landscapes } from "@/lib/data";
import { formatUsd } from "@/lib/format";

export function HomePage() {
  return (
    <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full overflow-x-clip">
        <section className="relative w-full -mt-20 pt-20">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(700px,90vw)] h-[280px] md:h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-12 right-0 w-48 h-48 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-[110px] pointer-events-none" />
          <div className="relative w-full min-h-[100dvh] flex flex-col justify-end px-gutter-mobile md:px-margin-tablet lg:px-margin pb-space-2xl">
            <div className="absolute inset-0 overflow-hidden">
              <CoverImage
                src={HOME_MEDIA.hero}
                alt="Nocturnal luxury sanctuary pavilion at dusk"
                className="absolute inset-0 h-full w-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/50" />
            </div>
            <div className="relative z-10 max-w-4xl space-y-space-md mb-space-xl">
              <div className="inline-flex items-center gap-space-sm bg-surface-container-highest/60 backdrop-blur-md px-space-md py-space-xs rounded-full max-w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                <span className="font-label-caps text-label-caps text-tertiary-fixed tracking-widest uppercase truncate">
                  Curated Portfolios • Fall Equinox 2025
                </span>
              </div>
              <h1 className="font-display-hero text-[clamp(2rem,8vw,4.5rem)] leading-[1.08] text-on-surface tracking-tight">
                Rare Havens for the{" "}
                <span className="italic font-normal text-primary">Discerning Soul.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-tertiary max-w-2xl font-light">
                A collection of secluded private residences, architectural sanctuaries, and
                bespoke travel experiences across the earth&apos;s most quiet horizons.
              </p>
            </div>
            <div className="relative z-10">
              <SearchConsole />
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-low py-space-lg px-gutter-mobile md:px-margin-tablet lg:px-margin">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-space-lg">
            {[
              ["24", "Global Solitudes", "Strict non-crowd quotas"],
              ["100%", "Private Compounds", "Zero shared amenities"],
              ["1:3", "Attendant Ratio", "Discreet personal stewards"],
              ["99.8%", "Privacy Index", "Biometric sanctuary perimeters"],
            ].map(([value, label, note]) => (
              <div key={label} className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                  {value}
                </span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider mt-space-xs">
                  {label}
                </span>
                <span className="font-body-sm text-body-sm text-outline mt-0.5">{note}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full py-space-3xl px-gutter-mobile md:px-margin-tablet lg:px-margin relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
            <div className="space-y-space-xs">
              <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-primary tracking-widest">
                <Icon name="explore" className="text-sm" />
                <span>Chapter I • Geographic Horizons</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Curated Landscapes
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-md md:mt-0">
              Each perimeter is selected for geological isolation, architectural coherence,
              and absolute atmospheric quietude.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {landscapes.map((item, index) => (
              <Link
                key={item.slug}
                href={`/sanctuaries/${item.slug}`}
                className="group relative rounded-xl overflow-hidden flex flex-col justify-between min-h-[380px] h-[min(480px,70dvh)] hover:shadow-2xl hover:shadow-surface-container-lowest transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <CoverImage
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.75] group-hover:brightness-90"
                    alt={item.imageAlt}
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />
                </div>
                <div className="relative z-10 p-space-lg flex justify-between items-start">
                  <span
                    className={`px-space-sm py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded font-label-caps text-label-caps uppercase ${index === 1 ? "text-secondary" : "text-tertiary"}`}
                  >
                    {item.badge}
                  </span>
                  <span className="p-1.5 bg-surface-container-lowest/70 backdrop-blur-md rounded-full text-on-surface-variant group-hover:text-primary transition-colors">
                    <Icon name={item.icon} className="text-sm block" />
                  </span>
                </div>
                <div className="relative z-10 p-space-lg space-y-space-xs">
                  <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-primary tracking-wider">
                    <span>{item.location}</span>
                    <span>•</span>
                    <span>{item.climate}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    {item.description}
                  </p>
                  <div className="pt-space-sm flex items-center justify-between">
                    <span className="font-label-caps text-label-caps text-tertiary">
                      {item.footnote}
                    </span>
                    <Icon
                      name="arrow_forward"
                      className="text-primary group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="journeys"
          className="w-full bg-surface-container-lowest py-space-3xl px-gutter-mobile md:px-margin-tablet lg:px-margin"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
            <div className="space-y-space-xs">
              <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-primary tracking-widest">
                <Icon name="cottage" className="text-sm" />
                <span>Chapter II • Architectural Monuments</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                The Signature Estates
              </h2>
            </div>
            <div className="flex items-center gap-space-sm mt-space-md md:mt-0 overflow-x-auto pb-1">
              <Link
                href="/sanctuaries"
                className="px-space-md py-space-xs bg-surface-container-high rounded text-on-surface hover:bg-surface-bright transition-colors font-label-caps text-label-caps uppercase"
              >
                All Sanctuaries (24)
              </Link>
              <span className="px-space-md py-space-xs bg-surface-container-low rounded text-on-surface-variant font-label-caps text-label-caps uppercase">
                Waterfront
              </span>
              <span className="px-space-md py-space-xs bg-surface-container-low rounded text-on-surface-variant font-label-caps text-label-caps uppercase">
                Desert
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
            {featuredEstates.map((estate) => (
              <article
                key={estate.name}
                className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="relative h-56 sm:h-72 overflow-hidden">
                  <CoverImage
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={estate.imageAlt}
                    src={estate.image}
                  />
                  <div className="absolute top-space-md left-space-md flex gap-space-xs">
                    <span className="bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-0.5 rounded font-label-caps text-label-caps text-primary">
                      {estate.location}
                    </span>
                    <span className="bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-0.5 rounded font-label-caps text-label-caps text-on-surface">
                      {estate.suitesLabel}
                    </span>
                  </div>
                  <FavoriteButton className="absolute top-space-md right-space-md w-9 h-9 bg-surface-container-lowest/80 backdrop-blur-md rounded-full" iconClassName="text-lg" />
                </div>
                <div className="p-space-xl flex-1 flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between gap-space-sm flex-wrap">
                      <div className="flex items-center gap-1 text-primary">
                        <Icon name="star" className="text-sm" filled />
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {estate.rating.toFixed(estate.rating % 1 === 0 ? 1 : 2)}
                        </span>
                        <span className="font-body-sm text-body-sm text-outline">
                          {estate.reviewsLabel}
                        </span>
                      </div>
                      <span className="font-label-caps text-label-caps uppercase text-tertiary">
                        {estate.estateId}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      {estate.name}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {estate.description}
                    </p>
                    <div className="flex flex-wrap gap-space-xs pt-space-xs">
                      {estate.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="px-2 py-1 bg-surface-container rounded font-label-caps text-label-caps text-tertiary"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-space-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm">
                    <div>
                      <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                        {formatUsd(estate.pricePerNight)}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {" "}
                        / night
                      </span>
                    </div>
                    <Link
                      href={`/sanctuaries/${estate.slug}`}
                      className="px-space-md py-space-sm bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary transition-colors rounded font-label-md text-label-md uppercase tracking-wider"
                    >
                      Reserve Residence
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="concierge"
          className="w-full py-space-3xl px-gutter-mobile md:px-margin-tablet lg:px-margin"
        >
          <div className="max-w-3xl mb-space-2xl">
            <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-primary tracking-widest">
              <Icon name="room_service" className="text-sm" />
              <span>Chapter III • Tailored Immersions</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-space-xs">
              Invisible Service. Absolute Attunement.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
              Our private concierge exists in the background, orchestrating seamless moments
              without disturbing the stillness of your haven.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md">
            <div className="md:col-span-2 lg:col-span-8 bg-surface-container-low rounded-xl p-space-lg md:p-space-xl relative overflow-hidden flex flex-col justify-between min-h-[320px] md:min-h-[360px]">
              <div className="absolute inset-0">
                <CoverImage
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-700"
                  alt="Private luxury helicopter on an alpine helipad at twilight"
                  src={HOME_MEDIA.helicopter}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/90 via-surface-container-lowest/60 to-transparent" />
              </div>
              <div className="relative z-10 space-y-space-xs max-w-md">
                <span className="px-space-sm py-1 bg-surface-container-highest/80 backdrop-blur-md rounded font-label-caps text-label-caps text-primary uppercase">
                  Door-to-Sanctuary Protocol
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Point-to-Point Rotorcraft Transfers
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Bypassing conventional terminals entirely. Touch down directly within estate
                  perimeter grounds accompanied by discrete baggage marshals.
                </p>
              </div>
              <div className="relative z-10 pt-space-lg flex flex-col sm:flex-row sm:items-center gap-space-md text-tertiary font-body-sm text-body-sm">
                <span className="flex items-center gap-1">
                  <Icon name="flight_takeoff" className="text-primary text-base" /> Zero Delay
                  Transit
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="security" className="text-primary text-base" /> Custom Customs
                  Clearance
                </span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-space-lg md:p-space-xl flex flex-col justify-between min-h-[320px] md:min-h-[360px] relative overflow-hidden">
              <div className="absolute inset-0">
                <CoverImage
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.35]"
                  alt="Ancient dark stone vaulted wine cellar"
                  src={HOME_MEDIA.cellar}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 to-transparent" />
              </div>
              <span className="relative z-10 px-space-sm py-1 bg-surface-container-highest/80 backdrop-blur-md rounded font-label-caps text-label-caps text-secondary uppercase self-start">
                Private Vintages
              </span>
              <div className="relative z-10 space-y-space-xs">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Unlisted Cellars
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Access to closed Grand Cru allocations, private barrel samplings, and
                  nocturnal tasting sessions curated by Master Sommeliers.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-space-lg md:p-space-xl flex flex-col justify-between min-h-[360px] relative overflow-hidden">
              <div className="space-y-space-sm">
                <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary">
                  <Icon name="graphic_eq" />
                </div>
                <span className="font-label-caps text-label-caps text-primary uppercase block">
                  Somatic Silence
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Acoustic Architectures
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Properties tuned precisely for auditory stillness, fitted with resonant
                  singing bowl chambers and zero mechanical noise floors.
                </p>
              </div>
              <div className="pt-space-md">
                <div className="flex items-center justify-between text-outline font-label-caps text-label-caps">
                  <span>AMBIENT DECIBEL LEVEL</span>
                  <span className="text-primary font-semibold">&lt; 12 dB</span>
                </div>
                <div className="w-full bg-surface-container h-1 mt-space-xs rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[15%]" />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-8 bg-surface-container-low rounded-xl p-space-lg md:p-space-xl flex flex-col justify-between min-h-[360px] relative overflow-hidden">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between gap-space-sm flex-wrap">
                  <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-tertiary">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Head of Private Office • Live On-Duty</span>
                  </div>
                  <span className="font-label-caps text-label-caps text-outline">
                    GENEVA • 03:42 CET
                  </span>
                </div>
                <div className="max-w-xl">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    “Tell us the temperature of your bath upon arrival. We manage the rest.”
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    Every itinerary is assigned an exclusive Single Point of Sanctuary Contact
                    who coordinates provisioning, culinary timing, and air logistics with
                    discreet perfection.
                  </p>
                </div>
              </div>
              <div className="pt-space-md flex flex-wrap items-center gap-space-sm">
                <Link
                  href="/reserve"
                  className="px-space-md py-space-sm bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-primary-fixed-dim transition-colors flex items-center gap-space-xs"
                >
                  <Icon name="chat" className="text-base" />
                  <span>Initiate Secure Consultation</span>
                </Link>
                <Link
                  href="/sanctuaries"
                  className="px-space-md py-space-sm bg-surface-container-high text-on-surface rounded font-label-md text-label-md uppercase tracking-wider hover:bg-surface-bright transition-colors"
                >
                  View Protocol Charter
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-low py-space-3xl px-gutter-mobile md:px-margin-tablet lg:px-margin relative">
          <div className="max-w-5xl mx-auto space-y-space-2xl">
            <div className="text-center space-y-space-md">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Condé Nast Traveler • Gold List 2025
              </span>
              <blockquote className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface italic font-light tracking-tight max-w-3xl mx-auto">
                “The absolute pinnacle of architectural intimacy and uncompromised silence.
                AURA does not offer vacations; they provide sanctuary from the world.”
              </blockquote>
              <div className="w-12 h-0.5 bg-primary/40 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl pt-space-md">
              <div className="bg-surface-container rounded-xl p-space-xl flex flex-col justify-between space-y-space-md">
                <p className="font-body-lg text-body-lg text-tertiary-fixed font-light leading-relaxed">
                  “We spent twelve nights at the Kyoto Cedar Enclave during late autumn. No
                  other person stepped foot within two kilometers of our pavilion. The tea
                  pavilion master was simply supernatural.”
                </p>
                <div className="flex items-center gap-space-md pt-space-sm">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-primary font-semibold">
                    H.V.
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-medium">
                      Lord & Lady H. Vance
                    </div>
                    <div className="font-body-sm text-body-sm text-outline">
                      Patrons since 2022 • 6 Solitudes Visited
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container rounded-xl p-space-xl flex flex-col justify-between space-y-space-md">
                <p className="font-body-lg text-body-lg text-tertiary-fixed font-light leading-relaxed">
                  “The private funicular at Villa L&apos;Ombra allowed us to drop directly onto
                  our private rib boat without touching a public road once. An engineering and
                  hospitality masterstroke.”
                </p>
                <div className="flex items-center gap-space-md pt-space-sm">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-primary font-semibold">
                    E.K.
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-medium">
                      Elena K. Sørensen
                    </div>
                    <div className="font-body-sm text-body-sm text-outline">
                      Architectural Collector • Zurich
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-space-3xl px-gutter-mobile md:px-margin-tablet lg:px-margin">
          <div className="relative rounded-2xl overflow-hidden bg-surface-container-lowest p-space-lg md:p-space-xl lg:p-space-3xl">
            <div className="absolute inset-0 opacity-30">
              <CoverImage
                className="absolute inset-0 h-full w-full object-cover"
                alt="Monolithic charcoal architecture with amber light across a reflection pool"
                src={HOME_MEDIA.invitation}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent" />
            <div className="relative z-10 max-w-2xl space-y-space-lg">
              <div className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-primary tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>By Invitation & Qualified Request</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Claim Your Season of Uninterrupted Stillness.
              </h2>
              <p className="font-body-lg text-body-lg text-tertiary font-light">
                Sanctuary allocations are strictly rationed to ensure ecosystem protection and
                absolute guest anonymity. Contact the Private Office to reserve unlisted
                inventory.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-md">
                <Link
                  href="/reserve"
                  className="px-space-xl py-space-md bg-primary text-on-primary hover:bg-primary-fixed-dim hover:text-on-primary-fixed-variant transition-colors rounded font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-space-sm shadow-xl shadow-primary/20"
                >
                  <span>Reserve Sanctuary Now</span>
                  <Icon name="arrow_forward" className="text-base" />
                </Link>
                <Link
                  href="/#concierge"
                  className="px-space-lg py-space-md bg-surface-container-high/80 hover:bg-surface-bright text-on-surface transition-colors rounded font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-space-xs"
                >
                  <Icon name="call" className="text-base" />
                  <span>Request Concierge Callback</span>
                </Link>
              </div>
              <div className="pt-space-md flex flex-col sm:flex-row sm:items-center gap-space-lg font-label-caps text-label-caps text-outline">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 2025 Calendar: 78%
                  Committed
                </span>
                <span>Response Horizon &lt; 2 Hours</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
