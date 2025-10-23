"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Software Engineer at Google",
        content:
            "This tool helped me prepare for my interviews in just 2 weeks. The feedback was incredibly detailed and actionable!",
        avatar: "SC",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        rating: 5,
        size: "large",
    },
    {
        name: "Marcus Johnson",
        role: "Product Manager at Meta",
        content:
            "The company-specific questions were spot-on. I felt so prepared walking into my interviews.",
        avatar: "MJ",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        rating: 5,
        size: "small",
    },
    {
        name: "Emily Rodriguez",
        role: "Data Scientist at Amazon",
        content:
            "Best investment I made for my career. The daily streaks kept me motivated throughout my entire job search journey.",
        avatar: "ER",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        rating: 5,
        size: "small",
    },
    {
        name: "Alex Kim",
        role: "Frontend Developer at Apple",
        content:
            "I landed my dream job at Apple thanks to this platform. The mock interviews felt so realistic!",
        avatar: "AK",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        rating: 5,
        size: "large",
    },
    {
        name: "Jessica Martinez",
        role: "UX Designer at Netflix",
        content:
            "The feedback on my communication skills was game-changing. Highly recommend to anyone preparing for interviews.",
        avatar: "JM",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        rating: 5,
        size: "small",
    },
    {
        name: "David Thompson",
        role: "Backend Engineer at Microsoft",
        content:
            "From struggling with system design to acing interviews. This platform transformed my interview preparation completely.",
        avatar: "DT",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        rating: 5,
        size: "large",
    },
];

export default function Testimonials() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="py-20 px-4 bg-linear-to-b from-transparent to-primary/5 dark:to-primary/10">
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
                        Loved by Job Seekers
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands who landed their dream jobs with our
                        AI-powered interview prep
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`${
                                testimonial.size === "large"
                                    ? "lg:col-span-1 lg:row-span-2"
                                    : ""
                            }`}
                            whileHover={{
                                y: -4,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Card className="p-6 h-full bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({
                                        length: testimonial.rating,
                                    }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-accent text-accent"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-foreground mb-6 italic grow">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                                    <Avatar className="w-12 h-12">
                                        <AvatarImage
                                            src={
                                                testimonial.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={testimonial.name}
                                        />
                                        <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                                            {testimonial.avatar}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-sm">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
