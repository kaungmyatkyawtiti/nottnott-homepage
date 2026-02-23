import type { Metadata } from "next";
import "./globals.css";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import CuteGirlGif from "@/components/CuteGirlGif";

const mplus = M_PLUS_Rounded_1c({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-mplus"
})

export const metadata: Metadata = {
  title: "Nott Nott - Home Page",
  description: "Kaung Myat Kyaw is a junior full-stack developer from Myanmar focused on building modern web applications using Next.js, Express.js, JavaScript, and TypeScript. Passionate about scalable backend APIs, performance optimization, and clean frontend architecture. Discover his portfolio, projects, and ongoing development journey.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    images: "/girl.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={mplus.variable}
      >
        <Providers>
          <main>
            <Header />

            <div className="relative h-90 md:h-100 max-w-sm mx-auto overflow-hidden">
              <CuteGirlGif />
            </div>

            <div className="max-w-xl mx-auto px-4">
              {children}
              <Toaster richColors />
              <Footer />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
