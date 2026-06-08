"use client";

import { useMemo, useState } from "react";
import {
  Gauge,
  Layers,
  Filter,
  PackageSearch,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import RfqModal from "@/components/RfqModal";
import { products, categories, type Product } from "@/data/products";

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [rfqProduct, setRfqProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      if (!query) return matchesCategory;

      const searchable = [
        product.name,
        product.category,
        product.oemPartNumber,
        product.compatibility,
        product.material,
        product.id,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchable.includes(query);
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1">
        <section className="border-b border-stone-800 bg-[#0C0A09]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
                MC Spares &middot; B2B Catalog
              </p>
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-stone-100 sm:text-3xl lg:text-4xl">
                Industrial-Grade Molded Components &amp; Spare Parts
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">
                OEM-compatible tyre caps, dust covers, grease nipple caps, and
                precision valves — engineered for JCB and heavy machinery fleets.
                Bulk pricing, export documentation, and consistent batch quality.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-3 border border-stone-800 bg-[#1C1917] px-4 py-3">
                <Gauge className="h-5 w-5 text-[#F59E0B]" strokeWidth={1.75} />
                <div>
                  <p className="text-lg font-bold text-stone-100">
                    50,000+
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-stone-500">
                    Daily Capacity
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 border border-stone-800 bg-[#1C1917] px-4 py-3">
                <Layers className="h-5 w-5 text-[#F59E0B]" strokeWidth={1.75} />
                <div>
                  <p className="text-lg font-bold text-stone-100">
                    {products.length}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-stone-500">
                    Active SKUs
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 border border-stone-800 bg-[#1C1917] px-4 py-3">
                <Filter className="h-5 w-5 text-[#F59E0B]" strokeWidth={1.75} />
                <div>
                  <p className="text-lg font-bold text-stone-100">
                    {categories.length - 1}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-stone-500">
                    Product Lines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            <aside className="w-full shrink-0 lg:w-52">
              <div className="sticky top-[65px] border border-stone-800 bg-[#1C1917] p-4">
                <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-500">
                  <Filter className="h-3.5 w-3.5" strokeWidth={1.75} />
                  Category
                </h2>
                <ul className="space-y-0.5">
                  {categories.map((category) => {
                    const count =
                      category === "All"
                        ? products.length
                        : products.filter((p) => p.category === category).length;
                    const isActive = selectedCategory === category;

                    return (
                      <li key={category}>
                        <button
                          type="button"
                          onClick={() => setSelectedCategory(category)}
                          className={`flex w-full items-center justify-between px-2 py-2 text-left text-xs transition-colors ${
                            isActive
                              ? "border-l-2 border-[#F59E0B] bg-[#0C0A09] pl-[6px] font-semibold text-[#F59E0B]"
                              : "border-l-2 border-transparent text-stone-400 hover:bg-[#0C0A09] hover:text-stone-200"
                          }`}
                        >
                          <span>{category}</span>
                          <span
                            className={`font-mono text-[10px] ${
                              isActive ? "text-[#F59E0B]/70" : "text-stone-600"
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              <div className="mb-4 flex items-center justify-between border-b border-stone-800 pb-3">
                <p className="text-xs text-stone-500">
                  Showing{" "}
                  <span className="font-semibold text-stone-300">
                    {filteredProducts.length}
                  </span>{" "}
                  of {products.length} products
                  {selectedCategory !== "All" && (
                    <span>
                      {" "}
                      in{" "}
                      <span className="text-[#F59E0B]">{selectedCategory}</span>
                    </span>
                  )}
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onRequestQuote={setRfqProduct}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center border border-dashed border-stone-800 py-16 text-center">
                  <PackageSearch
                    className="mb-3 h-10 w-10 text-stone-700"
                    strokeWidth={1.25}
                  />
                  <p className="text-sm font-medium text-stone-400">
                    No products match your search
                  </p>
                  <p className="mt-1 text-xs text-stone-600">
                    Try a different part number, category, or compatibility term
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#F59E0B] hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RfqModal product={rfqProduct} onClose={() => setRfqProduct(null)} />
    </>
  );
}
