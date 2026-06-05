import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(217,180,108,0.18),transparent_30rem),radial-gradient(circle_at_85%_10%,rgba(107,114,128,0.18),transparent_28rem)]" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-5xl">
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b46c]">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[0.96] text-white sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-white/66">{description}</p>
          {cta ? <div className="mt-9 flex flex-wrap gap-4">{cta}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
