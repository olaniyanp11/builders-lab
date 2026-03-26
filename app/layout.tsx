import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Builders Core Academy — CareerBuild Studio",
  description: "Where knowledge meets execution. A structured environment to build real skills, real systems, and real ventures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-zinc-950 text-[#F4F1EB] font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
