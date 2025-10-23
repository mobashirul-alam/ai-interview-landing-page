"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for getting started",
        features: [
            "5 practice questions/month",
            "Basic feedback",
            "Progress tracking",
            "Community access",
        ],
        cta: "Get Started",
    },
    {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "For serious interview prep",
        features: [
            "Unlimited questions",
            "Advanced AI feedback",
            "Company-specific prep",
            "Daily streaks",
            "Priority support",
            "Interview recordings",
        ],
        cta: "Start Free Trial",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For teams and organizations",
        features: [
            "Everything in Pro",
            "Team management",
            "Custom questions",
            "Analytics dashboard",
            "Dedicated support",
        ],
        cta: "Contact Sales",
    },
];

export default function Pricing() {
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
            className="py-20 px-4 bg-linear-to-b from-transparent to-primary/5"
            id="pricing"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose the plan that fits your interview prep needs
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            transition={{ duration: 0.6 }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Card
                                className={`p-8 h-full flex flex-col transition-all duration-300 ${
                                    plan.highlighted
                                        ? "border-accent/50 bg-linear-to-br from-accent/10 to-primary/10 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
                                        : "bg-card/50 border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                                }`}
                            >
                                <h3 className="text-2xl font-bold mb-2">
                                    {plan.name}
                                </h3>
                                <div className="mb-2">
                                    <span className="text-4xl font-bold">
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="text-muted-foreground">
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground mb-6">
                                    {plan.description}
                                </p>

                                <ul className="space-y-3 mb-8 grow">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <Check className="w-5 h-5 text-accent shrink-0" />
                                            <span className="text-sm">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full transition-all duration-300 ${
                                        plan.highlighted
                                            ? "bg-accent hover:bg-accent/90 text-accent-foreground hover:shadow-lg hover:shadow-accent/50"
                                            : "hover:bg-primary/10"
                                    }`}
                                    variant={
                                        plan.highlighted ? "default" : "outline"
                                    }
                                >
                                    {plan.cta}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
