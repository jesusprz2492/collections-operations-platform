import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Atlas Collections | Operations Demo",
  description: "A privacy-safe, synthetic collections operations portfolio project.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

