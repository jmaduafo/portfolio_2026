import type { Metadata } from "next";
import {
  sans,
  sansMedium,
  sansBold,
  sansItalic,
  sansSemiboldItalic,
} from "@/fonts/font";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import LenisScroll from "@/components/lenis/LenisScroll";

export const metadata: Metadata = {
  title: "Jasmine Maduafokwa Portfolio",
  description:
    "This portfolio highlights Jasmine's UI/web design skills as well as her web development knowledge, showing users that she can deliver frontend websites from start to finish.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "antialiased",
        "font-sans",
        sans.variable,
        sansMedium.variable,
        sansBold.variable,
        sansItalic.variable,
        sansSemiboldItalic.variable,
      )}
      suppressHydrationWarning
    >
      <LenisScroll>
        <body className="relative p-4 flex flex-col">
          <TooltipProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </TooltipProvider>
        </body>
      </LenisScroll>
    </html>
  );
}
