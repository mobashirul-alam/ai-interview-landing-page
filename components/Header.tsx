"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const navItems = [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-bold text-xl bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
                    >
                        AI Interview Prep
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                                whileHover={{ y: -2 }}
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </motion.nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </motion.button>

                        {/* CTA Button - Desktop */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="hidden md:block"
                        >
                            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                                Start Free
                            </Button>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.nav
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        height: isOpen ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="pt-4 pb-4 space-y-3 border-t border-border/40">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                            Start Free
                        </Button>
                    </div>
                </motion.nav>
            </div>
        </header>
    );
}
