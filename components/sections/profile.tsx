"use client";

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const stats = [
    {
        label: "Annual Revenue (2023)",
        value: "$51B",
        description: "Global leader in athletic footwear & apparel.",
        className: "md:col-span-2 md:row-span-1 bg-neutral-900/50 border-neutral-800",
    },
    {
        label: "Direct Employees",
        value: "83,000",
        description: "Corporate & Retail staff.",
        className: "md:col-span-1 md:row-span-1 bg-neutral-900/50 border-neutral-800",
    },
    {
        label: "Supply Chain Workers",
        value: "1,000,000+",
        description: "Employed by independent suppliers.",
        className: "md:col-span-1 md:row-span-2 bg-cyan-950/20 border-cyan-900/50",
        valueColor: "text-cyan-400",
    },
    {
        label: "Global Presence",
        value: "170+",
        description: "Countries where products are sold.",
        className: "md:col-span-2 md:row-span-1 bg-neutral-900/50 border-neutral-800",
    },
];

export function Profile() {
    return (
        <Section className="bg-black relative">
            <div className="max-w-6xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        GENERAL PROFILE
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl">
                        Nike, Inc. is the world's leading supplier of athletic shoes and apparel and a major manufacturer of sports equipment. The company focuses on design and marketing, outsourcing 100% of its manufacturing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "p-8 rounded-3xl border flex flex-col justify-between backdrop-blur-sm",
                                stat.className
                            )}
                        >
                            <div className="text-neutral-500 font-mono uppercase tracking-wider text-sm">
                                {stat.label}
                            </div>
                            <div>
                                <div
                                    className={cn(
                                        "text-5xl md:text-7xl font-display font-bold text-white mb-2",
                                        stat.valueColor
                                    )}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-neutral-400 font-sans">
                                    {stat.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
