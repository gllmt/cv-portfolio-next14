import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import LenisScroll from "@/components/LenisScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pierre | CV | Portfolio",
  description:
    "Pierre is a frontend|fullstack developer with 6 years of experience, based in France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative bg-gray-100 text-gray-950 pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* <div className="relative wrapper"> */}
        <LenisScroll>
          <div className="bg-[#e2fbf3] absolute top-[-6rem] right-[11rem] -z-10 w-[31.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#57538b]"></div>
          <div className="bg-[#dbe7fb] absolute top-[-1rem] left-[-35rem] -z-10 w-[50rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#5048a0]"></div>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </LenisScroll>
        {/* </div> */}
      </body>
    </html>
  );
}
