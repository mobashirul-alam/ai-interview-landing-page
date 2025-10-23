"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

const messages = [
    {
        id: 1,
        type: "ai",
        content:
            "Tell me about a time you had to work with a difficult team member.",
        avatar: "🤖",
    },
    {
        id: 2,
        type: "user",
        content:
            "I once worked with someone who had different communication styles...",
        avatar: "👤",
    },
    {
        id: 3,
        type: "ai",
        content:
            "✓ Great STAR method usage! Your response shows strong conflict resolution skills.",
        avatar: "🤖",
    },
];

export default function ChatDemo() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const messageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="py-20 px-4 bg-linear-to-b from-transparent to-primary/5 dark:to-primary/10">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            Interactive Demo
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                        See AI Feedback in Action
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Real-time interview practice with intelligent feedback
                    </p>
                </motion.div>

                {/* Chat Demo Card */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Card className="p-6 md:p-8 bg-card/50 backdrop-blur border-primary/20 shadow-2xl">
                        <div className="space-y-4">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    variants={messageVariants}
                                    className={`flex gap-4 ${
                                        message.type === "user"
                                            ? "flex-row-reverse"
                                            : ""
                                    }`}
                                >
                                    <div className="shrink-0">
                                        <Avatar className="w-10 h-10">
                                            <AvatarFallback className="text-lg">
                                                {message.avatar}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div
                                        className={`flex-1 max-w-xs md:max-w-md ${
                                            message.type === "user"
                                                ? "text-right"
                                                : ""
                                        }`}
                                    >
                                        <div
                                            className={`inline-block px-4 py-3 rounded-lg ${
                                                message.type === "user"
                                                    ? "bg-primary text-primary-foreground rounded-br-none"
                                                    : "bg-secondary/20 text-foreground rounded-bl-none"
                                            }`}
                                        >
                                            <p className="text-sm md:text-base">
                                                {message.content}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                <Avatar className="w-10 h-10">
                                    <AvatarFallback>🤖</AvatarFallback>
                                </Avatar>
                                <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-secondary/20">
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-primary"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{
                                            duration: 0.6,
                                            repeat: Number.POSITIVE_INFINITY,
                                        }}
                                    />
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-primary"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{
                                            duration: 0.6,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: 0.1,
                                        }}
                                    />
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-primary"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{
                                            duration: 0.6,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: 0.2,
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Input Area */}
                        <div className="mt-6 pt-6 border-t border-border flex gap-2">
                            <input
                                type="text"
                                placeholder="Type your response..."
                                className="flex-1 px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                disabled
                            />
                            <button className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
