"use client";

import { motion } from "framer-motion";
import { Award, Brain, MessageSquare, TrendingUp } from "lucide-react";
import Image from "next/image";

const steps = [
    {
        icon: MessageSquare,
        title: "Choose Your Topic",
        description:
            "Select from behavioral, technical, or company-specific questions.",
    },
    {
        icon: Brain,
        title: "Practice with AI",
        description:
            "Get real-time feedback on your answers and communication style.",
    },
    {
        icon: TrendingUp,
        title: "Track Progress",
        description:
            "Monitor your improvement with detailed analytics and insights.",
    },
    {
        icon: Award,
        title: "Get Certified",
        description:
            "Earn badges and certificates to showcase your interview skills.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 px-4" id="how-it-works">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                        How It Works
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Four simple steps to master your interview skills
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Steps */}
                    <motion.div className="space-y-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent dark:bg-accent/20 text-white dark:text-accent">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Image - Updated with different image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative h-96 rounded-lg overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                            alt="How it works"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
