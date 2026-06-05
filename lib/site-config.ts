export const siteConfig = {
  name: "Veriso Foods",
  legalName: "Veriso Foods",
  tagline: "Premium Dehydrated Ingredients. Trusted Global Supply.",
  description:
    "B2B dehydrated food ingredient sourcing and export company connecting international buyers with trusted manufacturing partners across India.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logo: "/logo/veriso-logo.png",
  icon: "/logo/veriso-icon.png",
  favicon: "/logo/favicon.png",
  companyEmail: process.env.COMPANY_EMAIL || process.env.CONTACT_TO_EMAIL || "sonu.tn63@gmail.com",
  whatsappNumber: process.env.WHATSAPP_NUMBER || "7385513790",
  address: "Nashik, Maharashtra 422004, India",
  businessHours: "10:00 AM - 10:00 PM",
  responseTime: "Within 2 Hours",
  fallbackEmailLabel: "sonu.tn63@gmail.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Quality", href: "/quality" },
    { label: "Packaging", href: "/packaging-private-label" },
    { label: "Markets", href: "/export-markets" },
    { label: "Contact", href: "/contact" },
  ],
};

export function getEmailHref(subject = "Veriso Foods export inquiry") {
  if (!siteConfig.companyEmail) {
    return "/contact";
  }

  return `mailto:${siteConfig.companyEmail}?subject=${encodeURIComponent(subject)}`;
}

export function getWhatsappHref(message = "Hello Veriso Foods, I would like to inquire about dehydrated ingredient exports.") {
  const encodedMessage = encodeURIComponent(message);
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  const whatsappNumber = number.length === 10 ? `91${number}` : number;

  if (!whatsappNumber) {
    return `https://wa.me/?text=${encodedMessage}`;
  }

  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}
