"use client";

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { Layers, Globe, Truck } from "lucide-react";

export function SourcingStage() {
    return (
        <Section className="bg-black text-white relative">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-900 to-transparent z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto w-full z-10">
                {/* Visual Side (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-2 md:order-1"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square hover:border-cyan-500/50 transition-colors">
                            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
                            <div className="font-bold text-xl">Polyester</div>
                            <div className="text-sm text-neutral-500">Recycled</div>
                        </div>
                        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square hover:border-cyan-500/50 transition-colors translate-y-8">
                            <Layers className="w-12 h-12 text-purple-400 mb-4" />
                            <div className="font-bold text-xl">Rubber</div>
                            <div className="text-sm text-neutral-500">Synthetic</div>
                        </div>
                        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square hover:border-cyan-500/50 transition-colors -translate-y-8">
                            <Layers className="w-12 h-12 text-green-400 mb-4" />
                            <div className="font-bold text-xl">Cotton</div>
                            <div className="text-sm text-neutral-500">Organic</div>
                        </div>
                        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square hover:border-cyan-500/50 transition-colors">
                            <Globe className="w-12 h-12 text-blue-400 mb-4" />
                            <div className="font-bold text-xl">19 Countries</div>
                            <div className="text-sm text-neutral-500">Global Sourcing</div>
                        </div>
                    </div>
                </motion.div>

                {/* Text Side (Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2"
                >
                    <span className="text-purple-500 font-mono tracking-widest text-sm uppercase mb-2 block">
                        Stage 02
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        SOURCING <br />
                        <span className="text-neutral-600 block text-3xl md:text-5xl mt-2">THE RAW MATERIALS</span>
                    </h2>
                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        Nike sources materials from <strong>19 countries</strong>. Independent suppliers provide the raw inputs—rubber, cotton, and polyester—which are then shipped to assembly factories.
                    </p>

                    <ul className="space-y-4 text-lg text-neutral-300">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                            Independent Suppliers (Not Nike-owned)
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                            China, Vietnam, Taiwan, South Korea
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            Focus on Sustainable Materials
                        </li>
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
}
