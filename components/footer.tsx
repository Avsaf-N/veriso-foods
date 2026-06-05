"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { getEmailHref, getWhatsappHref, siteConfig } from "@/lib/site-config";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Quality Assurance", href: "/quality" },
  { label: "Packaging & Private Label", href: "/packaging-private-label" },
  { label: "Export Markets", href: "/export-markets" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const emailLabel = siteConfig.companyEmail || "Email placeholder";
  const whatsappLabel = siteConfig.whatsappNumber || "WhatsApp placeholder";

  return (
    <motion.footer
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden border-t border-white/10 px-5 pt-20 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(217,180,108,0.14),transparent_28rem),radial-gradient(circle_at_86%_18%,rgba(101,163,13,0.09),transparent_24rem)]" />
      <div className="mx-auto max-w-7xl">
        <div className="glass grid gap-10 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[1.15fr_0.75fr_0.85fr_0.9fr] lg:p-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
              
              

              <span>
                <span className="relative block h-12 w-56">
                  <Image
                    src={siteConfig.logo}
                    alt={`${siteConfig.name} logo`}
                    fill
                    sizes="176px"
                    className="object-contain object-left"
                  />
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-[#d9b46c]">
                  {siteConfig.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              {siteConfig.description}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-[#f5d999] px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-white"
            >
              Request Quote
            </Link>
          </div>

          <FooterColumn title="Quick Links">
            {quickLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Products">
            {products.map((product) => (
              <FooterLink key={product.slug} href={`/products/${product.slug}`}>
                {product.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <div className="grid gap-4 text-sm text-white/62">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#d9b46c]">Email</p>
                <a href={getEmailHref()} className="mt-2 block break-words transition hover:text-white">
                  {emailLabel}
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#d9b46c]">WhatsApp</p>
                <a href={getWhatsappHref()} className="mt-2 block break-words transition hover:text-white">
                  {whatsappLabel}
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#d9b46c]">Office</p>
                <p className="mt-2">{siteConfig.address}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#d9b46c]">Hours</p>
                <p className="mt-2">{siteConfig.businessHours}</p>
              </div>
            </div>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-4 py-8 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#d9b46c]">
        {title}
      </h2>
      <div className="grid gap-3">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-sm text-white/62 transition hover:translate-x-1 hover:text-white">
      {children}
    </Link>
  );
}
