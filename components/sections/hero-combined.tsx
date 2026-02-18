"use client";

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import Image from "next/image";

export function HeroCombined() {
    return (
        <Section className="min-h-screen relative flex flex-col justify-center overflow-hidden py-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 z-0" />
            </div>

            {/* Main Title Area */}
            <div className="relative z-10 text-center space-y-4 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white/80 text-sm md:text-base font-mono tracking-[0.3em] uppercase"
                >
                    Nike, Inc.
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-display font-medium leading-tight tracking-wider text-white uppercase"
                >
                    GLOBAL
                    <br />
                    FACTORY
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/90 text-xl md:text-2xl mt-4 font-light tracking-wide shadow-black drop-shadow-md"
                >
                    Internationalization & Value Chain
                </motion.p>
            </div>

            {/* Info Grid (Detailed Profile) */}
            <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm">
                        <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">Company Profile</h3>
                        <div className="space-y-4">
                            <div>
                                <span className="block text-neutral-500 text-xs uppercase">Name</span>
                                <span className="text-white font-bold text-xl">Nike, Inc.</span>
                            </div>
                            <div>
                                <span className="block text-neutral-500 text-xs uppercase">Industry</span>
                                <span className="text-neutral-300">Textile, Apparel, Footwear, Sports Equipment</span>
                            </div>
                            <div>
                                <span className="block text-neutral-500 text-xs uppercase">HQ Location</span>
                                <span className="text-neutral-300">Beaverton, Oregon, USA</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm">
                        <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">Key Performance Indicators</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="block text-neutral-500 text-xs uppercase">Revenue (2023)</span>
                                <span className="text-white font-bold text-2xl">$51 Billion</span>
                            </div>
                            <div>
                                <span className="block text-neutral-500 text-xs uppercase">Employees</span>
                                <span className="text-white font-bold text-2xl">83,700</span>
                                <span className="block text-neutral-600 text-xs">(Direct)</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-6"
                >
                    <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm h-full">
                        <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">Why Selected?</h3>
                        <p className="text-neutral-300 leading-relaxed mb-4">
                            Nike is the prime example of a <strong>global factory</strong> model.
                        </p>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li className="flex gap-2">
                                <span className="text-cyan-500">✔</span>
                                Complete separation of Design (USA) and Production (Asia).
                            </li>
                            <li className="flex gap-2">
                                <span className="text-cyan-500">✔</span>
                                Outsourcing 100% of manufacturing (0 owned factories).
                            </li>
                            <li className="flex gap-2">
                                <span className="text-cyan-500">✔</span>
                                Complex international logistics chain.
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            <div className="mt-12 text-center relative z-10">
                <p className="max-w-2xl mx-auto text-neutral-400 text-sm md:text-base leading-relaxed">
                    Headquartered in <strong>Beaverton, Oregon</strong>. Nike focuses on design and marketing, outsourcing 100% of manufacturing to Asia.
                </p>
            </div>
        </Section>
    );
}
