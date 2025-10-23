"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const links = [
  { label: "About", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Contact", href: "#" },
]

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
]

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur dark:bg-card/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-2">AI Interview Prep</h3>
            <p className="text-sm text-muted-foreground">Master your interviews with AI-powered practice.</p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-border text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} AI Interview Prep. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
