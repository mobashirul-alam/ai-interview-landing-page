import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AI Interview Prep Assistant | Practice Smarter",
    description:
        "Prepare for job interviews with AI-powered questions, feedback, and progress tracking.",
    generator: "v0.app",
    openGraph: {
        title: "AI Interview Prep Assistant | Practice Smarter",
        description:
            "Prepare for job interviews with AI-powered questions, feedback, and progress tracking.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`font-sans antialiased ${_geist.className} ${_geistMono.className}`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Header />
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
