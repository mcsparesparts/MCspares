"use client";

import { useEffect, useRef } from "react";
import { X, FileText, Send } from "lucide-react";
import type { Product } from "@/data/products";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/YOUR_GOOGLE_FORM_ID/formResponse";

interface RfqModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function RfqModal({ product, onClose }: RfqModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rfq-title"
        className="relative flex h-full w-full max-w-md flex-col border-l border-stone-700 bg-[#1C1917] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-stone-800 px-6 py-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#F59E0B]" strokeWidth={1.75} />
            <h2 id="rfq-title" className="text-sm font-semibold text-stone-100">
              Request Wholesale Quote
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-stone-500 transition-colors hover:text-stone-200"
            aria-label="Close quote form"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        <div className="border-b border-stone-800 bg-[#0C0A09] px-6 py-3">
          <p className="text-xs uppercase tracking-wider text-stone-500">
            Selected Part
          </p>
          <p className="mt-0.5 text-sm font-medium text-stone-200">
            {product.name}
          </p>
          <p className="font-mono text-xs text-[#F59E0B]">
            {product.oemPartNumber} &middot; {product.id}
          </p>
        </div>

        <form
          action={GOOGLE_FORM_ACTION}
          method="POST"
          target="_blank"
          className="flex flex-1 flex-col overflow-y-auto px-6 py-5"
        >
          <input
            type="hidden"
            name="entry.PRODUCT_ID"
            value={product.id}
          />

          <div className="space-y-4">
            <div>
              <label
                htmlFor="company-name"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500"
              >
                Company Name <span className="text-[#F59E0B]">*</span>
              </label>
              <input
                id="company-name"
                name="entry.COMPANY_NAME"
                type="text"
                required
                placeholder="e.g. Sharma Earthmovers Pvt. Ltd."
                className="w-full border border-stone-700 bg-[#0C0A09] px-3 py-2.5 text-sm text-stone-200 placeholder:text-stone-600 outline-none transition-colors focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]/40"
              />
            </div>

            <div>
              <label
                htmlFor="contact-person"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500"
              >
                Contact Person <span className="text-[#F59E0B]">*</span>
              </label>
              <input
                id="contact-person"
                name="entry.CONTACT_PERSON"
                type="text"
                required
                placeholder="Full name"
                className="w-full border border-stone-700 bg-[#0C0A09] px-3 py-2.5 text-sm text-stone-200 placeholder:text-stone-600 outline-none transition-colors focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]/40"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500"
              >
                WhatsApp / Phone <span className="text-[#F59E0B]">*</span>
              </label>
              <input
                id="phone"
                name="entry.PHONE"
                type="tel"
                required
                placeholder="+91 XXXXX XXXXX"
                className="w-full border border-stone-700 bg-[#0C0A09] px-3 py-2.5 text-sm text-stone-200 placeholder:text-stone-600 outline-none transition-colors focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]/40"
              />
            </div>

            <div>
              <label
                htmlFor="batch-qty"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500"
              >
                Target Batch Quantity <span className="text-[#F59E0B]">*</span>
              </label>
              <input
                id="batch-qty"
                name="entry.BATCH_QTY"
                type="number"
                required
                min={1000}
                step={100}
                defaultValue={product.minOrderQty}
                className="w-full border border-stone-700 bg-[#0C0A09] px-3 py-2.5 text-sm text-stone-200 outline-none transition-colors focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]/40"
              />
              <p className="mt-1 text-[11px] text-stone-600">
                Minimum order: {product.minOrderQty.toLocaleString()} units
              </p>
            </div>
          </div>

          <div className="mt-auto border-t border-stone-800 pt-5">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 bg-[#F59E0B] px-4 py-3 text-sm font-semibold text-[#0C0A09] transition-colors hover:bg-[#D97706]"
            >
              <Send className="h-4 w-4" strokeWidth={2} />
              Submit Quote Request
            </button>
            <p className="mt-3 text-center text-[11px] text-stone-600">
              Opens in a new tab. Our sales team responds within 48 hours.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
