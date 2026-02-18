"use client";

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <Section className="min-h-screen relative flex items-center justify-center overflow-hidden font-sans">
            {/* Background Image using next/image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-20 text-center max-w-5xl mx-auto space-y-8 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-cyan-400 text-lg md:text-2xl font-mono tracking-[0.2em] uppercase"
                >
                    Internationalization of Nike, Inc.
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-7xl md:text-9xl font-display font-bold leading-none tracking-tighter text-white uppercase"
                >
                    <span className="block mb-2">Global</span>
                    <span className="block mb-2">Factory</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        Of Sport
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-neutral-300 text-xl md:text-2xl max-w-2xl mx-auto font-light tracking-wide"
                >
                    Analyzing the value chain, outsourcing strategy, and global impact.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 z-20"
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.div>
        </Section>
    );
}
