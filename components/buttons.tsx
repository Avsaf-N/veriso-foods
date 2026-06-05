import Link from "next/link";

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-full bg-[#f5d999] px-7 py-4 text-center text-sm font-semibold text-black shadow-[0_18px_60px_rgba(217,180,108,0.22)] transition hover:-translate-y-1 hover:bg-white"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.1]"
    >
      {children}
    </Link>
  );
}
