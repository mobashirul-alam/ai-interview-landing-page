"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
    { label: "Active Users", value: 40, suffix: "K+" },
    { label: "Interview Questions", value: 18, suffix: "K+" },
    { label: "Success Rate", value: 94, suffix: "%" },
    { label: "Companies Covered", value: 550, suffix: "+" },
];

function CountUp({
    end,
    suffix,
    duration = 2.5,
}: {
    end: number;
    suffix: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);

            setCount(Math.floor(end * progress));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasStarted]);

    return (
        <div ref={ref}>
            {count.toLocaleString()}
            {suffix}
        </div>
    );
}

export default function Stats() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

    return (
        <section className="py-20 px-4 bg-card/30 backdrop-blur">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="grid md:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="p-8 text-center bg-linear-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                                    <CountUp
                                        end={stat.value}
                                        suffix={stat.suffix}
                                    />
                                </div>
                                <p className="text-muted-foreground">
                                    {stat.label}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
