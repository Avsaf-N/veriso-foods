"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";

export function SiteShell({
  children,
  whatsappHref,
}: {
  children: React.ReactNode;
  whatsappHref: string;
}) {
  const pathname = usePathname();

  return (
    <>
      <div className="grain" />
      <div className="aurora" />
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
            <span className="relative block h-14 w-36">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                fill
                sizes="144px"
                className="object-contain object-left"
                priority
              />
            </span>
          </Link>


          <div className="hidden xl:flex items-center gap-5 text-sm text-white/64">

            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-white ${pathname === item.href ? "text-white" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden xl:inline-flex rounded-full border border-[#d9b46c]/35 bg-[#d9b46c]/10 px-4 py-2 text-sm font-medium text-[#ffe7ad] transition hover:border-[#d9b46c]/70 hover:bg-[#d9b46c]/20"
          >

            Request Quote
          </Link>
        </nav>
      </header>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-screen overflow-hidden"
      >
        {children}
      </motion.main>
      <a
        href={whatsappHref}
        aria-label="Open WhatsApp inquiry"
        className="fixed bottom-5 right-5 z-30 rounded-full border border-white/15 bg-[#25D366] px-5 py-4 text-sm font-bold text-black shadow-[0_24px_70px_rgba(37,211,102,0.28)] transition hover:-translate-y-1 hover:bg-white"
      >
        WhatsApp
      </a>
      <Footer />
    </>
  );
}
