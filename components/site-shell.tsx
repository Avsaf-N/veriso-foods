"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden rounded-lg border border-white/10 px-3 py-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>


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


        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 z-50 h-screen w-72 bg-[#111111] border-l border-white/10 shadow-2xl xl:hidden"
            >
              <div className="flex h-full flex-col px-6 pt-24">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute right-6 top-6 text-3xl text-white/80"
                >
                  ✕
                </button>
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}

                    className={`py-4 text-lg font-medium text-white/80 transition hover:text-white ${pathname === item.href ? "text-white" : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 rounded-full border border-[#d9b46c]/35 bg-[#d9b46c]/10 px-4 py-3 text-center text-sm font-medium text-[#ffe7ad]"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


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
