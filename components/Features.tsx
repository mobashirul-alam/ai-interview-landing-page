"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Flame, Target } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: Brain,
        title: "Smart Feedback",
        description:
            "Get AI-powered insights on your answers with actionable improvements.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
    {
        icon: Target,
        title: "Company-Specific Prep",
        description:
            "Practice with questions tailored to your target companies.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
    {
        icon: Flame,
        title: "Daily Streaks",
        description:
            "Build consistency with daily practice challenges and rewards.",
        image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
];

export default function Features() {
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

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section
            className="py-20 px-4 bg-linear-to-b from-secondary/5 to-transparent"
            id="features"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                        Powerful Features for Success
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to ace your next interview
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                transition={{ duration: 0.6 }}
                            >
                                <Card className="p-0 h-full bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={
                                                feature.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={feature.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <motion.div
                                            className="mb-4 inline-flex p-3 rounded-lg bg-accent dark:bg-accent/10"
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                            }}
                                        >
                                            <Icon className="w-6 h-6 text-white dark:text-accent" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
