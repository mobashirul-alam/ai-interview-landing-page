"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Brain, Code, Rocket, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const showcaseItems = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Get instant feedback on your interview responses",
        color: "from-yellow-500 to-orange-500",
    },
    {
        icon: Code,
        title: "Real Questions",
        description: "Practice with actual questions from top tech companies",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Rocket,
        title: "Rapid Progress",
        description: "Track your improvement with detailed analytics",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Brain,
        title: "Smart Learning",
        description: "AI adapts to your learning style and pace",
        color: "from-green-500 to-emerald-500",
    },
];

export default function InteractiveShowcase() {
    const containerRef = useRef(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (typeof window === "undefined" || !containerRef.current) return;

        // Create staggered animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 3,
                markers: false,
            },
        });

        // Animate each item with rotation and scale
        itemsRef.current.forEach((item, index) => {
            if (item) {
                tl.to(
                    item,
                    {
                        rotation: 360,
                        scale: 1.05,
                        duration: 1,
                        ease: "power2.inOut",
                    },
                    index * 0.2
                );
            }
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                type: "tween",
            },
        },
    } as const;

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96], // Custom easing curve for smoother animation
            },
        },
    } as const;

    return (
        <section
            className="py-24 px-4 bg-linear-to-b from-transparent via-secondary/5 to-transparent"
            id="showcase"
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
                        Why Choose Our Platform?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Experience the future of interview preparation with
                        cutting-edge AI technology
                    </p>
                </motion.div>

                {/* Interactive Grid */}
                <motion.div
                    ref={containerRef}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {showcaseItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                ref={(el) => {
                                    if (el) itemsRef.current[index] = el;
                                }}
                                variants={itemVariants}
                            >
                                <Card className="p-6 h-full bg-linear-to-br from-card to-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group cursor-pointer overflow-hidden relative">
                                    {/* Animated background gradient */}
                                    <div
                                        className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                        aria-hidden="true"
                                    />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <motion.div
                                            className={`mb-4 inline-flex p-3 rounded-lg bg-linear-to-br ${item.color} text-white`}
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 12,
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 10,
                                            }}
                                        >
                                            <Icon className="w-6 h-6" />
                                        </motion.div>

                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors">
                                            {item.description}
                                        </p>

                                        {/* Animated bottom border */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-primary to-secondary"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                            aria-hidden="true"
                                        />
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Floating animation elements */}
                <div className="mt-16 flex justify-center gap-4">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full bg-primary"
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Number.POSITIVE_INFINITY,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
