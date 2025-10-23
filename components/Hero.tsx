"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
            {/* Background gradient animation */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-gradient-shift" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-gradient-shift" />
            </div>

            <motion.div
                className="max-w-4xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="mb-6"
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-accent/10 border border-accent/30 bg-accent hover:bg-accent/90">
                        <Sparkles className="w-4 h-4 text-accent-foreground dark:text-accent" />
                        <span className="text-sm font-medium text-accent-foreground dark:text-accent">
                            AI-Powered Interview Prep
                        </span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={itemVariants}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-balance"
                >
                    Crack Your{" "}
                    <span className="bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                        Dream Job
                    </span>{" "}
                    with AI
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={itemVariants}
                    transition={{ duration: 0.8 }}
                    className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
                >
                    Practice real questions. Get smart feedback. Track your
                    progress.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 animate-pulse-glow"
                        >
                            Start Practicing
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto bg-transparent dark:hover:bg-accent duration-300"
                        >
                            Watch Demo
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Floating AI Avatar */}
                <motion.div
                    className="mt-16 flex justify-center"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    <div className="w-32 h-32 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                        <Sparkles className="w-16 h-16 text-white" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
