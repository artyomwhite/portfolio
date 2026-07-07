import { GeistSans } from "geist/font/sans";
import { Background } from "@/components/common/Background";
import { createRootMetadata } from "@/lib/metadata";
import "@/styles/globals.css";

export const metadata = createRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body
        className={`${GeistSans.className} noise-texture antialiased`}
        suppressHydrationWarning
      >
        <Background />
        <div className="relative z-10 min-w-0">{children}</div>
      </body>
    </html>
  );
}
