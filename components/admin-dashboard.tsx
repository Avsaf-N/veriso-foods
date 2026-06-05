"use client";

import { FormEvent, useState } from "react";
import { Inquiry } from "@/lib/inquiry-types";

type DashboardResponse = {
  ok: boolean;
  message?: string;
  protected?: boolean;
  configured?: boolean;
  source?: string;
  setup?: string | null;
  inquiries?: Inquiry[];
};

export function AdminDashboard() {
  const [accessKey, setAccessKey] = useState("");
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadInquiries(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const response = await fetch("/api/inquiries", {
      headers: accessKey ? { "x-admin-access-key": accessKey } : {},
      cache: "no-store",
    });
    const nextData = (await response.json()) as DashboardResponse;
    setData(nextData);
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-7xl px-5 pb-28 pt-36 lg:px-8">
      <div className="mb-10 max-w-4xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b46c]">
          Admin
        </p>
        <h1 className="font-display text-5xl text-white sm:text-7xl">Inquiries Dashboard</h1>
        <p className="mt-6 text-lg leading-8 text-white/62">
          Review incoming buyer inquiries. Add Supabase environment variables for
          persistent production storage and ADMIN_ACCESS_KEY for access control.
        </p>
      </div>

      <form onSubmit={loadInquiries} className="glass mb-8 grid gap-4 rounded-[1.75rem] p-5 sm:grid-cols-[1fr_auto] sm:p-6">
        <input
          value={accessKey}
          onChange={(event) => setAccessKey(event.target.value)}
          type="password"
          placeholder="Admin access key if configured"
          className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#d9b46c]/60"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-[#f5d999] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white disabled:opacity-60"
        >
          {loading ? "Loading..." : "Load Inquiries"}
        </button>
      </form>

      {data?.ok === false ? (
        <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-6 text-red-100">
          {data.message || "Unable to load inquiries."}
        </div>
      ) : null}

      {data?.ok && (!data.inquiries || data.inquiries.length === 0) ? (
        <div className="glass rounded-[1.75rem] p-8">
          <h2 className="text-2xl font-semibold text-white">No inquiries to show yet.</h2>
          <p className="mt-4 leading-7 text-white/62">
            {data.setup ||
              "When buyers submit the contact form, inquiries will appear here."}
          </p>
        </div>
      ) : null}

      {data?.ok && data.inquiries && data.inquiries.length > 0 ? (
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
          <div className="grid min-w-[900px] grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] bg-white/[0.08] p-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46c]">
            <span>Status</span>
            <span>Product</span>
            <span>Country</span>
            <span>Email</span>
            <span>Quantity</span>
            <span>Date</span>
          </div>
          <div className="overflow-x-auto">
            {data.inquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="grid min-w-[900px] grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] border-t border-white/10 p-4 text-sm text-white/70"
              >
                <span>{inquiry.status}</span>
                <span>{inquiry.product}</span>
                <span>{inquiry.country}</span>
                <span>{inquiry.email}</span>
                <span>{inquiry.quantity}</span>
                <span>{new Date(inquiry.createdAt).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
