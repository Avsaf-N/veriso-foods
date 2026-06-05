import { getEmailHref, getWhatsappHref, siteConfig } from "@/lib/site-config";

export function ContactCard() {
  const items = [
    {
      label: "Email",
      value: siteConfig.companyEmail,
      href: getEmailHref(),
    },
    {
      label: "WhatsApp",
      value: siteConfig.whatsappNumber,
      href: getWhatsappHref(),
    },
    {
      label: "Address",
      value: siteConfig.address,
      href: "",
    },
    {
      label: "Business Hours",
      value: siteConfig.businessHours,
      href: "",
    },
    {
      label: "Response Time",
      value: siteConfig.responseTime,
      href: "",
    },
  ];

  return (
    <div className="glass rounded-[1.75rem] p-8">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b46c]">
        Contact Information
      </p>
      <h2 className="text-3xl font-semibold text-white">Veriso Foods export desk</h2>
      <div className="mt-8 grid gap-4">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[#d9b46c]">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="mt-2 block break-words text-white/72 transition hover:text-white">
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-white/72">{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
