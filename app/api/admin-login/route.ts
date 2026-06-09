import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminEmail2 = process.env.ADMIN_EMAIL_2;
  const adminPassword = process.env.ADMIN_ACCESS_KEY;

  const validEmail =
    email === adminEmail ||
    email === adminEmail2;

  const validPassword =
    password === adminPassword;

  if (!validEmail || !validPassword) {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid email or password.",
      },
      {
        status: 401,
      },
    );
  }

  return NextResponse.json({
    ok: true,
  });
}