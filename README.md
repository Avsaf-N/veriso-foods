# Veriso Foods Website

Premium multi-page B2B export website for Veriso Foods, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Pages

- `/` Home
- `/about` About Us
- `/products` Products
- `/products/onion-powder`
- `/products/garlic-powder`
- `/products/tomato-powder`
- `/products/ginger-powder`
- `/products/beetroot-powder`
- `/products/moringa-powder`
- `/quality` Quality Assurance
- `/packaging-private-label` Packaging & Private Label
- `/export-markets` Export Markets
- `/contact` Contact
- `/admin` Inquiries dashboard

## Editable Business Details

Update shared business details in:

- `lib/site-config.ts`
- `lib/products.ts`
- `lib/markets.ts`

No phone number or company email is hardcoded. Add those through environment variables.

## Environment Variables

Create `.env.local` when you are ready to connect real services:

```env
COMPANY_EMAIL=
WHATSAPP_NUMBER=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_ACCESS_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`ADMIN_ACCESS_KEY` is optional but recommended for protecting `/admin` data access in production.

## Inquiry Behavior

The contact form always works safely:

- If Supabase is configured, inquiries are saved to the `inquiries` table.
- If Resend is configured, an email notification is sent.
- If env vars are missing, inquiries are saved in local in-memory storage for the current server session.
- If email env vars are configured but Resend is not, the API returns a mailto fallback link.

## Supabase Free Setup

Create a table named `inquiries`:

```sql
create table inquiries (
  id uuid primary key,
  name text not null,
  company text not null,
  country text not null,
  email text not null,
  product text,
  quantity text,
  message text not null,
  status text not null default 'stored',
  created_at timestamptz not null default now()
);
```

Add `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`.

## Resend Free Setup

Add:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

Optionally add:

```env
CONTACT_FROM_EMAIL=Veriso Foods <your-verified-domain@example.com>
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```
