export type Inquiry = {
  id: string;
  name: string;
  company: string;
  country: string;
  email: string;
  product: string;
  quantity: string;
  message: string;
  status: "new" | "stored" | "emailed" | "fallback";
  createdAt: string;
};

export type InquiryInput = Omit<Inquiry, "id" | "status" | "createdAt">;
