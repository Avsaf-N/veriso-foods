export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  useCase: string;
  origin: string;
  meshOptions: string;
  moistureGuidance: string;
  packagingOptions: string[];
  privateLabel: string;
  moq: string;
  color: string;
  gradient: string;
  image: string;
  heroImage: string;
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "onion-powder",
    name: "Onion Powder",
    shortDescription: "Clean aroma, fine texture, and dependable export-grade consistency.",
    description:
      "Premium dehydrated onion powder for seasoning manufacturers, ready meal producers, sauce makers, spice blenders, and food-service distributors.",
    useCase: "Seasonings, sauces, marinades, soups, snacks, and ready-to-cook blends.",
    origin: "India",
    meshOptions: "80-100 mesh options, with buyer-specific sizing reviewed on request.",
    moistureGuidance: "Moisture parameters are aligned to buyer application and destination-market expectations.",
    packagingOptions: ["10 kg cartons", "25 kg cartons", "Food-grade liners", "Moisture-barrier bags"],
    privateLabel: "Available for qualifying MOQ and packaging formats.",
    moq: "MOQ is quoted based on grade, packaging, and shipment plan.",
    color: "#ead1b2",
    gradient: "from-fuchsia-200 via-rose-300 to-amber-100",
    image: "/products/onion-powder.webp",
    heroImage: "/products/hero/onion-bowl.webp",
    applications: ["Seasoning blends", "Food service", "Sauce bases", "Instant mixes"],
  },
  {
    slug: "garlic-powder",
    name: "Garlic Powder",
    shortDescription: "Bold profile for seasoning, snack, food-service, and industrial buyers.",
    description:
      "Export-focused garlic powder sourced for buyers who need repeatable taste, practical packaging, and professional order coordination.",
    useCase: "Spice blends, snack coatings, sauces, dips, soups, and prepared foods.",
    origin: "India",
    meshOptions: "Fine powder, with application-led sizing support.",
    moistureGuidance: "Batch-wise quality checks are coordinated before shipment.",
    packagingOptions: ["Bulk cartons", "Lined bags", "Pallet-ready cartons", "Custom labels"],
    privateLabel: "Supported for importer and distributor programs.",
    moq: "MOQ depends on packaging format and batch availability.",
    color: "#f1dfb7",
    gradient: "from-stone-100 via-amber-100 to-yellow-300",
    image: "/products/garlic-powder.webp",
    heroImage: "/products/hero/garlic-bowl.webp",
    applications: ["Snack seasoning", "Food service", "Spice blends", "Ready meals"],
  },
  {
    slug: "tomato-powder",
    name: "Tomato Powder",
    shortDescription: "Bright color and concentrated flavor for formulation-led buyers.",
    description:
      "Dehydrated tomato powder selected for food manufacturers seeking color, acidity, and flavor contribution in scalable formulations.",
    useCase: "Soups, sauces, instant mixes, snack seasonings, and prepared food bases.",
    origin: "India",
    meshOptions: "Application-based sizing and flow characteristics reviewed on request.",
    moistureGuidance: "Controlled for shelf stability and export handling.",
    packagingOptions: ["Moisture-barrier bags", "Lined cartons", "Bulk export packs", "Retail-ready options"],
    privateLabel: "Available for private-label food and ingredient ranges.",
    moq: "Quoted after application, pack size, and route are confirmed.",
    color: "#e95732",
    gradient: "from-red-300 via-orange-500 to-amber-200",
    image: "/products/tomato-powder.webp",
    heroImage: "/products/hero/tomato-bowl.webp",
    applications: ["Sauce bases", "Soups", "Snack coatings", "Instant foods"],
  },
  {
    slug: "ginger-powder",
    name: "Ginger Powder",
    shortDescription: "Warm, aromatic powder for spice, bakery, wellness, and beverage buyers.",
    description:
      "Ginger powder sourced from trusted Indian manufacturing partners for international buyers seeking aroma, warmth, and repeat supply.",
    useCase: "Tea blends, bakery ingredients, spice mixes, beverages, and wellness-oriented products.",
    origin: "India",
    meshOptions: "Fine and custom options depending on buyer application.",
    moistureGuidance: "Batch quality reviewed before export packing.",
    packagingOptions: ["10 kg cartons", "25 kg cartons", "Bulk bags", "Private-label packs"],
    privateLabel: "Available for qualified private-label projects.",
    moq: "MOQ varies by pack format and buyer specifications.",
    color: "#d99b42",
    gradient: "from-yellow-100 via-amber-300 to-orange-200",
    image: "/products/ginger-powder.webp",
    heroImage: "/products/hero/ginger-bowl.webp",
    applications: ["Tea blends", "Bakery", "Spice mixes", "Beverage ingredients"],
  },
  {
    slug: "beetroot-powder",
    name: "Beetroot Powder",
    shortDescription: "Vivid powder for natural color, wellness, beverage, and bakery applications.",
    description:
      "Premium beetroot powder for importers and brands building natural-color and nutrition-forward ingredient lines.",
    useCase: "Beverages, bakery, health foods, natural color applications, and blends.",
    origin: "India",
    meshOptions: "Fine powder with product-specific review.",
    moistureGuidance: "Aligned to shelf-life and destination handling expectations.",
    packagingOptions: ["Light-protective packs", "Moisture-barrier liners", "Bulk cartons", "Retail pouches"],
    privateLabel: "Supported for brand programs and retail packs.",
    moq: "MOQ quoted according to packaging and artwork needs.",
    color: "#a51642",
    gradient: "from-rose-900 via-red-600 to-pink-300",
    image: "/products/beetroot-powder.webp",
    heroImage: "/products/hero/beetroot-bowl.webp",
    applications: ["Health foods", "Beverages", "Bakery", "Natural color"],
  },
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    shortDescription: "Green nutrient-rich powder for superfood, tea, and wellness ranges.",
    description:
      "Moringa powder selected for premium international buyers creating superfood, tea, ingredient, and private-label wellness lines.",
    useCase: "Superfood blends, tea blends, smoothies, wellness products, and private-label ranges.",
    origin: "India",
    meshOptions: "Fine powder, with buyer application reviewed.",
    moistureGuidance: "Batch reviewed and packed for export requirements.",
    packagingOptions: ["Bulk cartons", "Retail pouch support", "Lined bags", "Buyer label cartons"],
    privateLabel: "Available for bulk, retail, and white-label support.",
    moq: "MOQ depends on pack format and recurring supply plan.",
    color: "#6f9f32",
    gradient: "from-lime-700 via-green-500 to-lime-200",
    image: "/products/moringa-powder.webp",
    heroImage: "/products/hero/moringa-bowl.webp",
    applications: ["Superfood blends", "Tea", "Wellness", "Private label"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string) {
  return products.filter((product) => product.slug !== slug).slice(0, 3);
}
