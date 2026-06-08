import {
  MapPin,
  Award,
  ShieldCheck,
  Factory,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-[#0C0A09]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F59E0B] bg-[#1C1917]">
                <Factory className="h-4 w-4 text-[#F59E0B]" strokeWidth={1.75} />
              </div>
              <p className="text-sm font-bold tracking-[0.2em] text-stone-100">
                MC SPARES
              </p>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-stone-400">
              Precision-molded components and OEM-compatible spare parts for
              heavy machinery. Serving dealers, fleet operators, and industrial
              procurement teams across India and export markets.
            </p>
            <address className="not-italic">
              <div className="flex items-start gap-2 text-sm text-stone-400">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-medium text-stone-300">
                    MC Spares Manufacturing Unit
                  </p>
                  <p>Plot 42, GIDC Industrial Estate</p>
                  <p>Rajkot, Gujarat 360003, India</p>
                </div>
              </div>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-500">
              Manufacturing Credentials
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-stone-400">
                <Award className="h-4 w-4 shrink-0 text-[#F59E0B]" strokeWidth={1.75} />
                ISO 9001:2015 Certified Facility
              </li>
              <li className="flex items-center gap-2.5 text-sm text-stone-400">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#F59E0B]" strokeWidth={1.75} />
                IATF 16949 Compliant Production
              </li>
              <li className="flex items-center gap-2.5 text-sm text-stone-400">
                <Factory className="h-4 w-4 shrink-0 text-[#F59E0B]" strokeWidth={1.75} />
                In-House Tooling &amp; Injection Molding
              </li>
              <li className="flex items-center gap-2.5 text-sm text-stone-400">
                <Globe className="h-4 w-4 shrink-0 text-[#F59E0B]" strokeWidth={1.75} />
                Export-Ready Packaging &amp; Documentation
              </li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <div className="border border-stone-800 bg-[#1C1917] px-3 py-2 text-center">
                <p className="text-lg font-bold text-[#F59E0B]">50K+</p>
                <p className="text-[10px] uppercase tracking-wider text-stone-500">
                  Daily Capacity
                </p>
              </div>
              <div className="border border-stone-800 bg-[#1C1917] px-3 py-2 text-center">
                <p className="text-lg font-bold text-[#F59E0B]">48hr</p>
                <p className="text-[10px] uppercase tracking-wider text-stone-500">
                  Quote Turnaround
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-500">
              Plant Location
            </h3>
            <div className="aspect-video w-full overflow-hidden border border-stone-800">
              <iframe
                title="MC Spares Manufacturing Plant — Rajkot, Gujarat"
                src="https://maps.google.com/maps?q=GIDC+Industrial+Estate+Rajkot+Gujarat&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full grayscale-[30%] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-stone-800 pt-6 sm:flex-row">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} MC Spares. All rights reserved.
          </p>
          <p className="text-xs text-stone-600">
            GSTIN: 24AABCM1234F1Z5 &middot; CIN: U29300GJ2018PTC098765
          </p>
        </div>
      </div>
    </footer>
  );
}
