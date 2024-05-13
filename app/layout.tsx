import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pierre | CV | Portfolio",
  description: "Pierre is a frontend|fullstack developer with 7 years of experience, based in France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className="bg-[#e2fbf3] absolute top-[-6rem] right-[11rem] -z-10 w-[31.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbe7fb] absolute top-[-1rem] left-[-35rem] -z-10 w-[50rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
