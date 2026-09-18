"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CoverImage } from "@/components/cover-image";
import { Icon } from "@/components/icon";
import { DEFAULT_STAY, getSanctuary, VILLA_MEDIA } from "@/lib/data";
import { formatUsd, formatUsdExact } from "@/lib/format";
import { cn } from "@/lib/cn";

const STEPS = [
  { id: 1, label: "1. Details", short: "Details" },
  { id: 2, label: "2. Review", short: "Review" },
  { id: 3, label: "3. Guarantee", short: "Guarantee" },
  { id: 4, label: "4. Confirmation", short: "Confirmation" },
] as const;

type PaymentMethod = "card" | "wire" | "crypto";

export function ReservationFlow() {
  const searchParams = useSearchParams();
  const sanctuary = getSanctuary(searchParams.get("sanctuary") ?? "villa-belvedere") ?? getSanctuary("villa-belvedere")!;
  const [step, setStep] = useState(3);
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [authorizing, setAuthorizing] = useState(false);
  const [guest, setGuest] = useState({
    name: "Elena Rostova",
    email: "elena.rostova@sanctuary-voyage.com",
    phone: "+1 (415) 890-2341",
    region: "United States (Diplomatic/Global Pass)",
  });
  const [protocol, setProtocol] = useState({
    transit:
      "Private helicopter transfer from Naples International (NAP) direct to Ravello Helipad at 14:15 CET. Luggage forwarding protocol requested.",
    cuisine:
      "Strictly organic Mediterranean sea-forage, zero refined sugars, rare Super Tuscan cellar pairings.",
  });

  const nightsTotal = sanctuary.pricePerNight * DEFAULT_STAY.nights;
  const logistics = 1200;
  const tax = 850;
  const total = nightsTotal + logistics + tax;

  const stepClass = (id: number) => {
    if (id === step) return "bg-primary text-on-primary";
    if (id < step) return "bg-surface-container text-on-surface";
    return "text-on-surface-variant hover:text-on-surface";
  };

  function confirm() {
    setAuthorizing(true);
    window.setTimeout(() => {
      setAuthorizing(false);
      setStep(4);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
  }

  const paymentTabs = useMemo(
    () =>
      [
        ["card", "Luxury Card (Centurion / Visa)"],
        ["wire", "Private Wire Escrow"],
        ["crypto", "Crypto Concierge"],
      ] as const,
    [],
  );

  return (
    <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        <div className="relative w-full max-w-7xl mx-auto px-gutter-mobile md:px-margin-tablet lg:px-gutter py-space-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-2xl pb-space-lg">
            <div className="space-y-space-xs max-w-xl">
              <div className="flex items-center gap-space-sm text-tertiary">
                <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
                  Sanctuary Reservation
                </span>
                <span className="text-outline">/</span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  Reference #AUR-88219
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
                Private Allocation Protocol
              </h1>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex items-center justify-between lg:justify-end gap-1 sm:gap-4 bg-surface-container-low p-2 rounded-xl overflow-x-auto">
                {STEPS.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-2 sm:gap-4">
                    <button
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded transition-all duration-300",
                        stepClass(item.id),
                      )}
                      type="button"
                      onClick={() => setStep(item.id)}
                    >
                      <span
                        className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center font-label-caps text-label-caps",
                          item.id === step
                            ? "bg-on-primary text-primary"
                            : item.id < step
                              ? "bg-primary/20 text-primary"
                              : "bg-surface-container-high text-tertiary",
                        )}
                      >
                        {item.id < step ? (
                          <Icon name="check" className="text-[14px]" />
                        ) : (
                          item.id
                        )}
                      </span>
                      <span
                        className={cn(
                          "font-label-caps text-label-caps uppercase tracking-wider",
                          item.id === 3 ? "font-semibold" : "hidden sm:inline",
                          item.id !== 3 && "hidden sm:inline",
                        )}
                      >
                        {item.label}
                      </span>
                    </button>
                    {index < STEPS.length - 1 ? (
                      <div className="h-px w-4 bg-surface-container-highest hidden sm:block" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-7 flex flex-col space-y-space-xl">
              {step !== 4 ? (
                <div className="space-y-space-md">
                  <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-start sm:items-center gap-space-md">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon name="verified_user" className="text-[18px]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-label-caps text-label-caps uppercase text-primary">
                            Primary Resident
                          </span>
                          <span className="w-1 h-1 rounded-full bg-outline" />
                          <span className="font-body-sm text-body-sm text-tertiary">
                            Verified Identity
                          </span>
                        </div>
                        <p className="font-headline-sm text-headline-sm text-on-surface">
                          {guest.name}
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          {guest.email} • {guest.phone}
                        </p>
                      </div>
                    </div>
                    <button
                      className="self-start sm:self-center px-3 py-1.5 bg-surface-container-high text-on-surface hover:bg-surface-bright font-label-caps text-label-caps uppercase tracking-wider rounded transition-colors"
                      type="button"
                      onClick={() => setStep(1)}
                    >
                      Amend
                    </button>
                  </div>
                  <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div className="flex items-start sm:items-center gap-space-md">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon name="flight_land" className="text-[18px]" />
                      </div>
                      <div>
                        <span className="font-label-caps text-label-caps uppercase text-primary">
                          Special Protocol
                        </span>
                        <p className="font-body-md text-body-md text-on-surface">
                          Private helicopter transfer (Naples → Ravello)
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Organic biodynamic Mediterranean nutrition, cellar curation request.
                        </p>
                      </div>
                    </div>
                    <button
                      className="self-start sm:self-center px-3 py-1.5 bg-surface-container-high text-on-surface hover:bg-surface-bright font-label-caps text-label-caps uppercase tracking-wider rounded transition-colors"
                      type="button"
                      onClick={() => setStep(2)}
                    >
                      Amend
                    </button>
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div className="bg-surface-container-low p-space-lg md:p-space-xl rounded-xl space-y-space-lg shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-space-sm">
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      1. Resident Identification
                    </h2>
                    <span className="font-label-caps text-label-caps text-primary uppercase">
                      Active Step
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    {(
                      [
                        ["Full Legal Name", "name", "text"],
                        ["Secure Email", "email", "email"],
                        ["Direct Telephone", "phone", "text"],
                        ["Passport / Sovereign Region", "region", "text"],
                      ] as const
                    ).map(([label, key, type]) => (
                      <div key={key} className="space-y-space-xs">
                        <label className="font-label-caps text-label-caps uppercase text-tertiary">
                          {label}
                        </label>
                        <input
                          className="w-full bg-surface-container px-space-md py-space-sm text-body-md text-on-surface rounded focus:outline-none focus:bg-surface-bright transition-colors"
                          type={type}
                          value={guest[key]}
                          onChange={(event) =>
                            setGuest((current) => ({ ...current, [key]: event.target.value }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end pt-space-sm">
                    <button
                      className="px-space-lg py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-fixed-dim transition-colors"
                      type="button"
                      onClick={() => setStep(2)}
                    >
                      Save & Continue
                    </button>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="bg-surface-container-low p-space-lg md:p-space-xl rounded-xl space-y-space-lg shadow-xl">
                  <div className="flex items-center justify-between">
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      2. Trip Protocol & Seclusion Curation
                    </h2>
                    <span className="font-label-caps text-label-caps text-primary uppercase">
                      Active Step
                    </span>
                  </div>
                  <div className="space-y-space-md">
                    <div className="space-y-space-xs">
                      <label className="font-label-caps text-label-caps uppercase text-tertiary">
                        Transit Manifest & Arrival Coordinate
                      </label>
                      <textarea
                        className="w-full bg-surface-container p-space-md text-body-md text-on-surface rounded focus:outline-none focus:bg-surface-bright transition-colors"
                        rows={3}
                        value={protocol.transit}
                        onChange={(event) =>
                          setProtocol((current) => ({ ...current, transit: event.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-space-xs">
                      <label className="font-label-caps text-label-caps uppercase text-tertiary">
                        Dietary Architecture & Cellar Provisions
                      </label>
                      <textarea
                        className="w-full bg-surface-container p-space-md text-body-md text-on-surface rounded focus:outline-none focus:bg-surface-bright transition-colors"
                        rows={2}
                        value={protocol.cuisine}
                        onChange={(event) =>
                          setProtocol((current) => ({ ...current, cuisine: event.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-space-sm">
                    <button
                      className="font-label-caps text-label-caps text-tertiary hover:text-on-surface uppercase tracking-wider"
                      type="button"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>
                    <button
                      className="px-space-lg py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-fixed-dim transition-colors"
                      type="button"
                      onClick={() => setStep(3)}
                    >
                      Advance to Guarantee
                    </button>
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="bg-surface-container-low p-space-lg md:p-space-xl rounded-xl space-y-space-xl shadow-2xl relative overflow-hidden">
                  <div className="absolute -right-24 -top-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                    <div>
                      <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
                        Step 3 of 4
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                        Payment & Sovereign Guarantee
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-label-caps text-label-caps bg-surface-container-high px-space-sm py-1 rounded">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Encrypted 256-Bit Vault
                    </div>
                  </div>
                  <div className="bg-surface-container-highest/60 p-space-md rounded-lg flex items-start gap-space-sm text-tertiary">
                    <Icon name="info" className="text-primary text-[20px] shrink-0 mt-0.5" />
                    <div className="font-body-sm text-body-sm space-y-1">
                      <p className="text-on-surface font-medium">
                        Demonstration Settlement Environment
                      </p>
                      <p className="text-on-surface-variant">
                        Transactions are simulated for allocation preview. No sovereign banking
                        credit will be debited until your dedicated liaison conducts voice
                        confirmation.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-space-xs">
                    <label className="font-label-caps text-label-caps uppercase text-tertiary">
                      Settlement Channel
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs bg-surface-container p-1 rounded-lg">
                      {paymentTabs.map(([id, label]) => (
                        <button
                          key={id}
                          className={cn(
                            "py-space-sm px-space-sm rounded text-center transition-all font-label-md text-label-md",
                            method === id
                              ? "bg-primary text-on-primary font-medium"
                              : "text-on-surface-variant hover:text-on-surface",
                          )}
                          type="button"
                          onClick={() => setMethod(id)}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                  {method === "card" ? (
                    <div className="space-y-space-lg">
                      <div className="relative w-full h-48 rounded-xl bg-gradient-to-br from-surface-container-high via-surface-container-lowest to-surface-container p-space-lg flex flex-col justify-between overflow-hidden shadow-xl">
                        <div className="absolute right-0 top-0 w-44 h-44 bg-primary/10 rounded-full blur-2xl" />
                        <div className="flex justify-between items-start z-10">
                          <div className="flex items-center gap-2">
                            <span className="font-headline-sm text-headline-sm tracking-widest text-primary">
                              AURA
                            </span>
                            <span className="font-label-caps text-label-caps text-outline uppercase">
                              Private Sovereign
                            </span>
                          </div>
                          <Icon name="contactless" className="text-primary text-[28px]" />
                        </div>
                        <div className="z-10 tracking-[0.25em] font-headline-md text-headline-md text-on-surface">
                          •••• &nbsp; •••• &nbsp; •••• &nbsp;{" "}
                          <span className="text-primary font-bold">4242</span>
                        </div>
                        <div className="flex justify-between items-end z-10">
                          <div>
                            <div className="font-label-caps text-label-caps uppercase text-outline text-[9px]">
                              Cardholder
                            </div>
                            <div className="font-body-md text-body-md uppercase tracking-wider text-on-surface font-medium">
                              {guest.name}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-label-caps text-label-caps uppercase text-outline text-[9px]">
                              Expiry / CVV
                            </div>
                            <div className="font-body-md text-body-md text-on-surface">
                              08 / 29 • <span className="text-primary font-medium">888</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-space-md">
                        <div className="space-y-space-xs">
                          <label className="font-label-caps text-label-caps uppercase text-tertiary">
                            Cardholder Full Name
                          </label>
                          <input
                            className="w-full bg-surface-container px-space-md py-space-sm text-body-md text-on-surface rounded focus:outline-none focus:bg-surface-bright transition-all"
                            type="text"
                            defaultValue={guest.name}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
                          <div className="md:col-span-6 space-y-space-xs">
                            <label className="font-label-caps text-label-caps uppercase text-tertiary">
                              Card Number
                            </label>
                            <div className="relative">
                              <input
                                className="w-full bg-surface-container px-space-md py-space-sm text-body-md text-on-surface rounded focus:outline-none focus:bg-surface-bright transition-all"
                                type="text"
                                defaultValue="•••• •••• •••• 4242"
                              />
                              <span className="absolute right-3 top-3 font-label-caps text-label-caps uppercase text-primary">
                                Amex Centurion
                              </span>
                            </div>
                          </div>
                          <div className="md:col-span-3 space-y-space-xs">
                            <label className="font-label-caps text-label-caps uppercase text-tertiary">
                              Expiration
                            </label>
                            <input
                              className="w-full bg-surface-container px-space-md py-space-sm text-body-md text-on-surface rounded focus:outline-none focus:bg-surface-bright transition-all text-center"
                              type="text"
                              defaultValue="08 / 29"
                            />
                          </div>
                          <div className="md:col-span-3 space-y-space-xs">
                            <label className="font-label-caps text-label-caps uppercase text-tertiary">
                              CVC / Pin
                            </label>
                            <input
                              className="w-full bg-surface-container px-space-md py-space-sm text-body-md text-on-surface rounded focus:outline-none focus:bg-surface-bright transition-all text-center"
                              type="password"
                              defaultValue="888"
                            />
                          </div>
                        </div>
                        <div className="space-y-space-xs">
                          <label className="font-label-caps text-label-caps uppercase text-tertiary">
                            Sovereign Billing Jurisdiction
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                            <select className="w-full bg-surface-container px-space-md py-space-sm text-body-md text-on-surface rounded focus:outline-none focus:bg-surface-bright transition-all">
                              <option>United States (California Residence)</option>
                              <option>Switzerland (Zurich Office)</option>
                              <option>United Kingdom (Mayfair)</option>
                              <option>Monaco (Monte Carlo)</option>
                              <option>Singapore (Marina Bay)</option>
                            </select>
                            <input
                              className="w-full bg-surface-container px-space-md py-space-sm text-body-md text-on-surface rounded focus:outline-none focus:bg-surface-bright transition-all"
                              type="text"
                              defaultValue="94107 - Presidio Heights, San Francisco"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {method === "wire" ? (
                    <div className="space-y-space-md bg-surface-container p-space-lg rounded-lg">
                      <div className="flex items-center gap-space-sm text-primary">
                        <Icon name="account_balance" />
                        <span className="font-headline-sm text-headline-sm">
                          Private Lombard Escrow Coordinates
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Your allocation will be locked for 48 hours awaiting irrevocable swift
                        release via AURA Geneva Private Treasury.
                      </p>
                      <div className="font-body-sm text-body-sm space-y-1 bg-surface-container-low p-space-md rounded">
                        <p>
                          <span className="text-tertiary">IBAN:</span>{" "}
                          <span className="text-on-surface font-mono">
                            CH93 0024 5245 8892 0182 A
                          </span>
                        </p>
                        <p>
                          <span className="text-tertiary">BIC / SWIFT:</span>{" "}
                          <span className="text-on-surface font-mono">AURACHGGXXX</span>
                        </p>
                        <p>
                          <span className="text-tertiary">Reference:</span>{" "}
                          <span className="text-primary font-mono font-medium">
                            AUR-BELVEDERE-88219
                          </span>
                        </p>
                      </div>
                    </div>
                  ) : null}
                  {method === "crypto" ? (
                    <div className="space-y-space-md bg-surface-container p-space-lg rounded-lg">
                      <div className="flex items-center gap-space-sm text-primary">
                        <Icon name="currency_bitcoin" />
                        <span className="font-headline-sm text-headline-sm">
                          Institutional Digital Asset Desk
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Instant settlement via USDC / USDT (Ethereum / Arbitrum) or direct BTC
                        cold vault clearing with zero slippage protocol.
                      </p>
                      <div className="p-space-md bg-surface-container-low rounded font-mono text-body-sm text-on-surface break-all">
                        0x8a91C80B0F33A5E95cf0f15CeD3e54b6B06927Fd
                      </div>
                    </div>
                  ) : null}
                  <div className="flex items-start gap-space-sm pt-2">
                    <input
                      defaultChecked
                      className="mt-1 w-4 h-4 rounded accent-primary bg-surface-container text-on-primary"
                      id="auth-agree"
                      type="checkbox"
                    />
                    <label
                      className="font-body-sm text-body-sm text-on-surface-variant"
                      htmlFor="auth-agree"
                    >
                      I authorize the immediate preliminary hold of{" "}
                      <span className="text-on-surface font-medium">
                        {formatUsdExact(total)} USD
                      </span>
                      . I have reviewed the Coastal Environmental Accord and understand that full
                      concierge check-in protocols will be transmitted post-authorization.
                    </label>
                  </div>
                  <button
                    className="w-full py-space-md bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-md text-label-md rounded flex items-center justify-center gap-space-sm transition-all active:scale-[0.99] shadow-lg hover:shadow-primary/20"
                    type="button"
                    onClick={confirm}
                    disabled={authorizing}
                  >
                    {authorizing ? (
                      <>
                        <Icon name="sync" className="text-[20px] animate-spin" />
                        <span className="tracking-wider uppercase font-semibold text-body-md">
                          Cryptographically Authorizing {formatUsd(total)}...
                        </span>
                      </>
                    ) : (
                      <>
                        <Icon name="lock" className="text-[20px]" />
                        <span className="tracking-wider uppercase font-semibold text-body-md">
                          Authorize & Confirm Sanctuary Reservation ({formatUsd(total)})
                        </span>
                      </>
                    )}
                  </button>
                  <div className="flex items-center justify-center gap-space-lg text-tertiary font-label-caps text-label-caps uppercase">
                    <span className="flex items-center gap-1">
                      <Icon name="shield" className="text-[14px]" /> PCI-DSS Tier 1
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Icon name="lock" className="text-[14px]" /> TLS 1.3 Strict
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Icon name="spa" className="text-[14px]" /> 100% Carbon Neutral Stay
                    </span>
                  </div>
                </div>
              ) : null}

              {step === 4 ? (
                <div className="space-y-space-xl">
                  <div className="relative bg-surface-container-low rounded-2xl p-space-xl overflow-hidden shadow-2xl">
                    <div className="absolute -right-16 -top-16 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 space-y-space-lg">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        Reservation Confirmed • Reference #AUR-88219
                      </div>
                      <div>
                        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
                          We Look Forward to Welcoming You, {guest.name.split(" ")[0]}.
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs max-w-xl">
                          Your allocation for{" "}
                          <strong className="text-on-surface font-medium">{sanctuary.name}</strong>{" "}
                          has been permanently inscribed in our private ledger. A formal sealed
                          dossier has been dispatched to your email.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-md py-space-md bg-surface-container/70 p-space-md rounded-xl">
                        {[
                          ["Arrival Date", DEFAULT_STAY.checkIn, "3:00 PM CET"],
                          ["Departure Date", DEFAULT_STAY.checkOut, "11:00 AM CET"],
                          ["Resident Count", "3 Guests", "Secluded Estate"],
                          ["Settlement Total", formatUsdExact(total), "Fully Authorized"],
                        ].map(([label, value, note]) => (
                          <div key={label} className="space-y-0.5">
                            <p className="font-label-caps text-label-caps uppercase text-tertiary">
                              {label}
                            </p>
                            <p
                              className={cn(
                                "font-headline-sm text-headline-sm",
                                label === "Settlement Total" ? "text-primary" : "text-on-surface",
                              )}
                            >
                              {value}
                            </p>
                            <p className="font-body-sm text-body-sm text-outline">{note}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-space-md bg-surface-container rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                        <div className="flex items-center gap-space-md">
                          <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-surface-container-high">
                            <CoverImage
                              className="w-full h-full object-cover"
                              alt="Assigned estate liaison"
                              src={VILLA_MEDIA.concierge}
                            />
                          </div>
                          <div>
                            <span className="font-label-caps text-label-caps uppercase text-primary tracking-wider">
                              Assigned Estate Liaison
                            </span>
                            <p className="font-headline-sm text-headline-sm text-on-surface">
                              Marco Bellini
                            </p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              Personal Butler & Private Host • Direct Secure Line Active
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-space-sm">
                          <button
                            className="px-space-md py-space-sm bg-surface-container-high text-on-surface hover:text-primary font-label-md text-label-md rounded transition-colors flex items-center gap-1.5"
                            type="button"
                          >
                            <Icon name="chat" className="text-[16px]" />
                            <span>Chat Securely</span>
                          </button>
                          <button
                            className="px-space-md py-space-sm bg-surface-container-high text-on-surface hover:text-primary font-label-md text-label-md rounded transition-colors flex items-center gap-1.5"
                            type="button"
                          >
                            <Icon name="call" className="text-[16px]" />
                            <span>Call Concierge</span>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-space-sm pt-2">
                        <button
                          className="px-space-lg py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-fixed-dim transition-colors flex items-center gap-2"
                          type="button"
                        >
                          <Icon name="download" className="text-[18px]" />
                          <span>Download Booking Dossier (PDF)</span>
                        </button>
                        <button
                          className="px-space-md py-space-sm bg-surface-container text-on-surface hover:bg-surface-bright font-label-md text-label-md rounded transition-colors flex items-center gap-2"
                          type="button"
                        >
                          <Icon name="wallet" className="text-[18px]" />
                          <span>Add to Apple Wallet</span>
                        </button>
                        <button
                          className="px-space-md py-space-sm bg-surface-container text-on-surface hover:bg-surface-bright font-label-md text-label-md rounded transition-colors flex items-center gap-2"
                          type="button"
                        >
                          <Icon name="calendar_add_on" className="text-[18px]" />
                          <span>Sync to Calendar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-space-lg rounded-xl space-y-space-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-label-caps text-label-caps uppercase text-primary">
                          Arrival Manifest Coordinate
                        </span>
                        <p className="font-headline-sm text-headline-sm text-on-surface">
                          {sanctuary.location}
                        </p>
                      </div>
                      <span className="font-body-sm text-body-sm text-tertiary">
                        Private coordinate
                      </span>
                    </div>
                    <div className="w-full h-56 rounded-lg shadow-inner relative overflow-hidden flex items-end p-4">
                      <CoverImage
                        className="absolute inset-0 h-full w-full object-cover"
                        alt={`Arrival map for ${sanctuary.location}`}
                        src={VILLA_MEDIA.map}
                      />
                      <div className="relative z-10 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-2 rounded font-body-sm text-body-sm text-on-surface flex items-center gap-2">
                        <Icon name="flight_takeoff" className="text-primary text-[18px]" />
                        <span>Helicopter Transit Pad 02 • Pre-cleared</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-space-lg">
              <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-64 overflow-hidden group">
                  <CoverImage
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={sanctuary.imageAlt}
                    src={sanctuary.slug === "villa-belvedere" ? VILLA_MEDIA.booking : sanctuary.image}
                  />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/85 backdrop-blur-md px-3 py-1 rounded text-primary font-label-caps text-label-caps uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Private Sanctuary
                  </div>
                  <div className="absolute top-4 right-4 bg-surface-container-lowest/85 backdrop-blur-md px-3 py-1 rounded text-on-surface font-label-caps text-label-caps uppercase tracking-wider">
                    Exclusive Buyout
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/60 to-transparent p-space-md">
                    <p className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
                      {sanctuary.location}
                    </p>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      {sanctuary.name}
                    </h3>
                  </div>
                </div>
                <div className="p-space-lg space-y-space-lg">
                  <div className="grid grid-cols-2 gap-space-md pb-space-md bg-surface-container/50 p-space-md rounded-xl">
                    <div>
                      <span className="font-label-caps text-label-caps uppercase text-tertiary">
                        Check-In
                      </span>
                      <p className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
                        {DEFAULT_STAY.checkIn}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        From 3:00 PM
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-label-caps text-label-caps uppercase text-tertiary">
                        Check-Out
                      </span>
                      <p className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
                        {DEFAULT_STAY.checkOut}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Until 11:00 AM
                      </p>
                    </div>
                  </div>
                  <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    {[
                      "Dedicated 24/7 Estate Butler & Sommelier",
                      "Private Air & Marine Logistics Included",
                      "Personal Concierge from Arrival to Departure",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Icon name="check_circle" className="text-primary text-[16px]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-space-sm pt-space-md">
                    <div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
                      <span>
                        Sanctuary Residency ({DEFAULT_STAY.nights} Nights •{" "}
                        {formatUsd(sanctuary.pricePerNight)}/night)
                      </span>
                      <span className="text-on-surface font-medium">
                        {formatUsdExact(nightsTotal)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
                      <span>Private Air & Marine Logistics</span>
                      <span className="text-on-surface font-medium">
                        {formatUsdExact(logistics)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
                      <span>Conservation & Carbon Offset Trust</span>
                      <span className="text-on-surface font-medium">{formatUsdExact(tax)}</span>
                    </div>
                    <div className="pt-space-md flex justify-between items-baseline">
                      <div>
                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          Total Guarantee
                        </span>
                        <p className="font-body-sm text-body-sm text-tertiary">
                          All sovereign duties & transfers included
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">
                          {formatUsdExact(total)}
                        </span>
                        <p className="font-label-caps text-label-caps text-outline uppercase">
                          USD Equivalent
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container rounded-lg space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center gap-2 font-label-caps text-label-caps text-tertiary uppercase">
                      <Icon name="policy" className="text-[15px] text-primary" />
                      <span>Residency Covenants</span>
                    </div>
                    <ul className="space-y-1 pl-5 list-disc marker:text-primary text-[12px]">
                      <li>Complimentary rescheduling until 30 days prior to arrival.</li>
                      <li>Nocturnal silence covenant after 23:00 local time.</li>
                      <li>Strictly non-smoking interior architectural preserve.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <Icon name="support_agent" className="text-primary text-[24px]" />
                  <div>
                    <p className="font-body-md text-body-md text-on-surface font-medium">
                      Have bespoke constraints?
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Private Desk is online in London & Milan
                    </p>
                  </div>
                </div>
                <Link
                  href="/#concierge"
                  className="px-space-md py-space-xs bg-surface-container-high hover:bg-surface-bright text-primary font-label-caps text-label-caps uppercase rounded transition-colors whitespace-nowrap"
                >
                  Inquire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
