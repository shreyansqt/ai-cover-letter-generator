import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const avenirNext = localFont({
  src: [
    {
      path: "./fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNextLTPro-It.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/AvenirNextLTPro-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-avenir-next",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://covercraftai.com"),
  title: {
    default: "CoverCraft AI - AI-Powered Cover Letter Generator",
    template: "%s | CoverCraft AI",
  },
  description:
    "Generate personalized cover letters using AI. Built with GPT-4 for smart keyword extraction and professional content generation.",
  keywords: [
    "cover letter generator",
    "AI cover letter",
    "job application",
    "career tools",
    "GPT-4",
  ],
  authors: [{ name: "Shreyans Jain" }],
  creator: "Shreyans Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://covercraftai.com",
    title: "CoverCraft AI - AI-Powered Cover Letter Generator",
    description:
      "Generate personalized cover letters using AI. Built with GPT-4 for smart keyword extraction and professional content generation.",
    siteName: "CoverCraft AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoverCraft AI - AI-Powered Cover Letter Generator",
    description:
      "Generate personalized cover letters using AI. Built with GPT-4 for smart keyword extraction and professional content generation.",
    creator: "@shreyansqt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${avenirNext.variable} antialiased`}>
        <Analytics />
        <SidebarProvider>
          <AppSidebar />
          <div className="flex-1">{props.children}</div>
        </SidebarProvider>
      </body>
    </html>
  );
}
