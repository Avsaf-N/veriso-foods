import { NextRequest, NextResponse } from "next/server";
import { listInquiries } from "@/lib/inquiry-store";

export async function GET(request: NextRequest) {
  const adminKey = process.env.ADMIN_ACCESS_KEY;
  const providedKey = request.headers.get("x-admin-access-key");

  if (adminKey && providedKey !== adminKey) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const result = await listInquiries();

  return NextResponse.json({
    ok: true,
    protected: Boolean(adminKey),
    ...result,
    setup:
      result.configured
        ? null
        : "Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to show persistent inquiries in production.",
  });
}
