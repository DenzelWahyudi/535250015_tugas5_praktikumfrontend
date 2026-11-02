import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT UNTAR - Vendor Makan Bergizi Gratis (MBG)",
  description: "Penyedia katering dan paket makan bergizi gratis untuk sekolah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
