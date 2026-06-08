"use client";

import { useState } from "react";
import { Package, ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onRequestQuote: (product: Product) => void;
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-stone-800/80 last:border-0">
      <td className="py-1.5 pr-3 text-[11px] font-medium uppercase tracking-wider text-stone-500 whitespace-nowrap">
        {label}
      </td>
      <td className="py-1.5 text-xs text-stone-300">{value}</td>
    </tr>
  );
}

export default function ProductCard({
  product,
  onRequestQuote,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col border border-stone-800 bg-[#1C1917] transition-colors hover:border-stone-700">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-stone-800 bg-[#0C0A09]">
        {imageError ? (
          <div className="flex h-full w-full items-center justify-center bg-[#0C0A09]">
            <Package className="h-12 w-12 text-stone-800" strokeWidth={1} />
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        )}
        <span className="absolute left-0 top-0 bg-[#F59E0B] px-2 py-0.5 font-mono text-[10px] font-bold text-[#0C0A09]">
          {product.id}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-stone-500">
          {product.category}
        </p>
        <h3 className="mb-3 text-sm font-semibold leading-snug text-stone-100">
          {product.name}
        </h3>

        <table className="mb-4 w-full">
          <tbody>
            <SpecRow label="OEM P/N" value={product.oemPartNumber} />
            <SpecRow label="Material" value={product.material} />
            <SpecRow label="Compat." value={product.compatibility} />
            <SpecRow label="Dims." value={product.dimensions} />
            <SpecRow
              label="MOQ"
              value={`${product.minOrderQty.toLocaleString()} units`}
            />
          </tbody>
        </table>

        <button
          type="button"
          onClick={() => onRequestQuote(product)}
          className="mt-auto flex w-full items-center justify-center gap-2 border border-[#F59E0B] bg-transparent px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F59E0B] transition-colors hover:bg-[#F59E0B] hover:text-[#0C0A09]"
        >
          Request Wholesale Quote
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      </div>
    </article>
  );
}
