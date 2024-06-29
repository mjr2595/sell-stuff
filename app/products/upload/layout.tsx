import { getCanonicalUrl } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Stuff - Upload",
  description: "Upload your files to sell stuff",
  alternates: {
    canonical: `${getCanonicalUrl()}/products/upload`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
