"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section className="py-20 px-4 bg-linear-to-b from-secondary/5 to-transparent dark:from-secondary/10">
            <motion.div
                className="max-w-2xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                    Ready to Ace Your Next Interview?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Start your free trial today. No credit card required.
                </p>

                {/* Email Input */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-3 mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-[19px] rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2"
                        >
                            Try It Free
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.div>

                <p className="text-sm text-muted-foreground">
                    14-day free trial. Cancel anytime.
                </p>
            </motion.div>
        </section>
    );
}
