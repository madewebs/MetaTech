import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Metatech Automation | Industrial Automation Solutions",
  description:
    "Expert industrial automation services specializing in PLC programming, SCADA/HMI systems, variable frequency drives, and robotic integration. Trusted by industry leaders with over a decade of automation expertise.",
  keywords: [
    "industrial automation",
    "PLC programming",
    "HMI SCADA",
    "automation solutions",
    "robotics",
    "control systems",
    "Siemens",
    "Rockwell",
    "Mitsubishi",
    "industrial drives",
  ],
  authors: [{ name: "Metatech Automation" }],
  creator: "Metatech Automation",
  publisher: "Metatech Automation",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://metatechautomation.com",
    siteName: "Metatech Automation",
    title: "Metatech Automation | Industrial Automation Solutions",
    description:
      "Comprehensive automation engineering services: PLC programming, SCADA development, drive systems, and robotic solutions for modern manufacturing.",
    images: [
      {
        url: "https://metatechautomation.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Metatech Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metatech Automation | Industrial Automation Solutions",
    description:
      "Professional automation engineering with 10+ years of experience in control systems, robotics, and industrial manufacturing solutions.",
    creator: "@metatechautomation",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://metatechautomation.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#151515" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
