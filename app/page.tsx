"use client";

import ChatDemo from "@/components/ChatDemo";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        // Initialize GSAP animations
        const script = document.createElement("script");
        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
        script.async = true;
        document.body.appendChild(script);

        const scrollTriggerScript = document.createElement("script");
        scrollTriggerScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        scrollTriggerScript.async = true;
        document.body.appendChild(scrollTriggerScript);
    }, []);

    return (
        <main className="min-h-screen bg-linear-to-br from-background via-primary/5 to-secondary/5 dark:from-background dark:via-primary/10 dark:to-secondary/10">
            <Hero />
            <ChatDemo />
            <Features />
            <Stats />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    );
}
