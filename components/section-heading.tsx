import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-4xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b46c]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-tight text-white sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/62">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
