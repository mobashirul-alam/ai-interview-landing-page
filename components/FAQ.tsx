"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How does the AI feedback work?",
        answer: "Our AI analyzes your responses for clarity, structure, and relevance. It provides specific suggestions for improvement and compares your answers to industry best practices.",
    },
    {
        question: "Can I practice company-specific questions?",
        answer: "Yes! We have curated question sets for 500+ companies including FAANG and other top tech companies. You can filter by company and role.",
    },
    {
        question: "Is there a free trial?",
        answer: "Start with our free plan that includes 5 practice questions per month. Upgrade to Pro anytime for unlimited access.",
    },
    {
        question: "How long does it take to see results?",
        answer: "Most users see improvement within 2-3 weeks of consistent practice. Our analytics dashboard tracks your progress in real-time.",
    },
    {
        question: "Can I download my interview recordings?",
        answer: "Yes, Pro users can record and download their practice interviews for review and sharing with mentors.",
    },
    {
        question: "What if I need help?",
        answer: "We offer email support for all users and priority support for Pro members. Check our help center for tutorials and guides.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about AI Interview Prep
                    </p>
                </motion.div>

                <motion.div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className="overflow-hidden cursor-pointer bg-card/50 border-primary/20 hover:border-primary/50 transition-all"
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index
                                    )
                                }
                            >
                                <div className="p-6 flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{
                                            rotate:
                                                openIndex === index ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height:
                                            openIndex === index ? "auto" : 0,
                                        opacity: openIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-muted-foreground border-t border-primary/10 pt-6">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
