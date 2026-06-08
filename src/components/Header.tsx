"use client";

import { Search, Factory, Phone, Mail } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-800 bg-[#0C0A09]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F59E0B] bg-[#1C1917]">
            <Factory className="h-5 w-5 text-[#F59E0B]" strokeWidth={1.75} />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-[0.2em] text-stone-100">
              MC SPARES
            </p>
            <p className="text-[10px] font-medium uppercase tracking-widest text-stone-500">
              Industrial Components
            </p>
          </div>
        </a>

        <div className="relative mx-auto w-full max-w-md flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500"
            strokeWidth={1.75}
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by part number, name, or compatibility…"
            className="w-full border border-stone-700 bg-[#1C1917] py-2 pl-10 pr-4 text-sm text-stone-200 placeholder:text-stone-600 outline-none transition-colors focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]/40"
            aria-label="Search products"
          />
        </div>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 text-xs text-stone-400 transition-colors hover:text-[#F59E0B]"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
            +91 98765 43210
          </a>
          <a
            href="mailto:quotes@mcspares.in"
            className="flex items-center gap-1.5 text-xs text-stone-400 transition-colors hover:text-[#F59E0B]"
          >
            <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
            quotes@mcspares.in
          </a>
        </div>
      </div>
    </header>
  );
}
