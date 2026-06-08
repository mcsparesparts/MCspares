export interface Product {
  id: string;
  name: string;
  category: string;
  oemPartNumber: string;
  compatibility: string;
  material: string;
  dimensions: string;
  minOrderQty: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "MC-TC-001",
    name: "Heavy Duty Knurled Tyre Caps",
    category: "Tyre Caps",
    oemPartNumber: "32/925346",
    compatibility: "JCB 3DX, 3CX Backhoe, JS200",
    material: "Nylon 6/6 GF30",
    dimensions: "Ø 32 mm × 18 mm",
    minOrderQty: 1000,
    image: "/images/product-1.jpg",
  },
  {
    id: "MC-DC-002",
    name: "M10 Hex Dust Caps",
    category: "Dust Caps",
    oemPartNumber: "123/04351",
    compatibility: "JCB 3DX, 2DX, Telehandler 540-170",
    material: "LDPE (UV-Stabilised)",
    dimensions: "M10 × 12 mm height",
    minOrderQty: 2000,
    image: "/images/product-2.jpg",
  },
  {
    id: "MC-GN-003",
    name: "Grease Nipple Cover Caps",
    category: "Grease Nipple Caps",
    oemPartNumber: "980/88210",
    compatibility: "JCB 3CX, 4CX, JS130–JS220",
    material: "Thermoplastic Elastomer (TPE)",
    dimensions: "Ø 14 mm × 9 mm",
    minOrderQty: 1500,
    image: "/images/product-3.jpg",
  },
  {
    id: "MC-VL-004",
    name: "Inline Check Valve — Grease Line",
    category: "Valves",
    oemPartNumber: "15/920102",
    compatibility: "JCB Backhoe Loaders, Excavators",
    material: "Brass Body / NBR Seal",
    dimensions: "M8 × 1.0 thread, 22 mm OAL",
    minOrderQty: 500,
    image: "/images/product-4.jpg",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];
