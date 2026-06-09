"use client";

import { FormEvent, useEffect, useState } from "react";
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
  // const [accessKey, setAccessKey] = useState("");         delete krna
  const [data, setData] = useState<DashboardResponse | null>(null);
  //const [loading, setLoading] = useState(false);    delete kr dena 

  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [sessionReady, setSessionReady] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoginError("");

    const response = await fetch("/api/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      setLoginError(result.message || "Login failed.");
      return;
    }

    //setAccessKey(password);                      delete krna
    setLoggedIn(true);
    sessionStorage.setItem(
      "veriso_admin_logged_in",
      "true"
    );
    const inquiryResponse = await fetch("/api/inquiries", {
      headers: {
        "x-admin-access-key": password,
      },
      cache: "no-store",
    });

    const inquiryData =
      (await inquiryResponse.json()) as DashboardResponse;

    setData(inquiryData);
  }


  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem(
      "veriso_admin_logged_in"
    );

    if (isLoggedIn === "true") {
      setLoggedIn(true);
    }

    setSessionReady(true);
  }, []);

  if (!sessionReady) {
    return null;
  }

  if (!loggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5">
        <form
          onSubmit={handleLogin}
          className="glass w-full max-w-[450px] rounded-[1.75rem] p-8"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b46c]">
            Veriso Foods
          </p>

          <h1 className="mb-8 text-4xl font-semibold text-white">
            Admin Login
          </h1>

          <div className="grid gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Admin Email"
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-[#f5d999] px-7 py-3 font-semibold text-black"
            >
              Login
            </button>

            {loginError ? (
              <p className="text-sm text-red-400">
                {loginError}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pb-28 pt-36 lg:px-8">

        <div className="mb-6 flex justify-end">
          <button
            onClick={() => {
              sessionStorage.removeItem(
                "veriso_admin_logged_in"
              );

              setLoggedIn(false);
            }}
            className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            Logout
          </button>
        </div>

        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b46c]">
            Admin
          </p>
          <h1 className="font-display text-5xl text-white sm:text-7xl">Inquiries Dashboard</h1>
          <p className="mt-6 text-lg leading-8 text-white/62">
            Review and manage buyer inquiries received through the Veriso Foods website.
          </p>
        </div>









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
              <span>Name</span>
              <span>Company</span>
              <span>Product</span>
              <span>Country</span>
              <span>Status</span>
              <span>Date</span>
            </div>

            <div className="overflow-x-auto">
              {data.inquiries.map((inquiry) => (

                <div
                  key={inquiry.id}
                  onClick={() => setSelectedInquiry(inquiry)}
                  className="grid min-w-[900px] grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] cursor-pointer border-t border-white/10 p-4 text-sm text-white/70 hover:bg-white/[0.04]"
                >
                  <span>{inquiry.name}</span>
                  <span>{inquiry.company}</span>
                  <span>{inquiry.product}</span>
                  <span>{inquiry.country}</span>
                  <span>{inquiry.status}</span>
                  <span>{new Date(inquiry.createdAt).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>


      {selectedInquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5"
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            className="glass max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[1.75rem] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-semibold text-white">
                Inquiry Details
              </h2>

              <button
                onClick={() => setSelectedInquiry(null)}
                className="rounded-full border border-white/10 px-4 py-2 text-white/70 hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Info label="Name" value={selectedInquiry.name} />
              <Info label="Company" value={selectedInquiry.company} />
              <Info label="Email" value={selectedInquiry.email} />
              <Info label="Country" value={selectedInquiry.country} />
              <Info label="Product" value={selectedInquiry.product} />
              <Info label="Quantity" value={selectedInquiry.quantity} />
              <Info label="Status" value={selectedInquiry.status} />
              <Info
                label="Date"
                value={new Date(selectedInquiry.createdAt).toLocaleString()}
              />
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#d9b46c]">
                Message
              </p>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white/80">
                {selectedInquiry.message}
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <p className="text-xs uppercase tracking-wider text-[#d9b46c]">
        {label}
      </p>
      <p className="mt-2 text-white">{value}</p>
    </div>
  );
}