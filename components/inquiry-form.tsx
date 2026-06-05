"use client";

import { FormEvent, useState } from "react";
import { products } from "@/lib/products";

type SubmitStatus = "idle" | "sending" | "success" | "fallback" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        fallbackUrl?: string;
      };

      if (data.ok) {
        setStatus("success");
        setMessage(data.message || "Inquiry saved successfully. Veriso Foods will review the request.");
        form.reset();
        return;
      }

      if (data.fallbackUrl) {
        setStatus("fallback");
        setMessage(data.message || "Your inquiry was saved locally. Use the email link to send a copy.");
        window.setTimeout(() => {
          window.location.href = data.fallbackUrl as string;
        }, 300);
        return;
      }

      setStatus("error");
      setMessage(data.message || "The inquiry could not be submitted. Please try WhatsApp or email.");
    } catch {
      setStatus("error");
      setMessage("The inquiry could not be submitted. Please try WhatsApp or email.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass grid gap-4 rounded-[1.75rem] p-5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required />
        <Field label="Company" name="company" type="text" required />
        <Field label="Country" name="country" type="text" required />
        <Field label="Email" name="email" type="email" required />
        <label className="grid gap-2 text-sm font-medium text-white/78">
          Product
          <select
            name="product"
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#d9b46c]/60"
            defaultValue=""
          >
            <option value="" className="bg-black">Select product</option>
            {products.map((product) => (
              <option key={product.slug} value={product.name} className="bg-black">
                {product.name}
              </option>
            ))}
          </select>
        </label>
        <Field label="Quantity" name="quantity" type="text" />
      </div>
      <label className="grid gap-2 text-sm font-medium text-white/78">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#d9b46c]/60"
          placeholder="Tell us your required product, quantity, packaging, private-label needs, destination market, and timeline."
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-full bg-[#f5d999] px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending Inquiry..." : "Send Inquiry"}
      </button>
      {message ? (
        <p className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/70">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-white/78">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#d9b46c]/60"
        placeholder={label}
      />
    </label>
  );
}
