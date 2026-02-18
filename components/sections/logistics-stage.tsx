"use client";

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { Container, Plane, Ship } from "lucide-react";

export function LogisticsStage() {
    return (
        <Section className="bg-black text-white relative">
            {/* Background World Map hint */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-cover mix-blend-overlay pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full z-10 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-orange-500 font-mono tracking-widest text-sm uppercase mb-2 block">
                        Stage 04
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        DISTRIBUTION HUBS
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Product moves from Asian factories to massive distribution centers before reaching retailers and consumers.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full z-10">
                {[
                    {
                        city: "Memphis, USA",
                        region: "North America",
                        desc: "Largest distribution center in the world, servicing the biggest market.",
                        icon: Plane,
                        color: "text-blue-500",
                        bg: "bg-blue-500/10 border-blue-500/20"
                    },
                    {
                        city: "Laakdal, Belgium",
                        region: "Europe (ELC)",
                        desc: "European Logistics Campus. Serving EMEA region with focus on sustainability.",
                        icon: Ship,
                        color: "text-purple-500",
                        bg: "bg-purple-500/10 border-purple-500/20"
                    },
                    {
                        city: "Taicang, China",
                        region: "Greater China",
                        desc: "Strategic hub for the fastest growing market and local distribution.",
                        icon: Container,
                        color: "text-red-500",
                        bg: "bg-red-500/10 border-red-500/20"
                    }
                ].map((hub, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className={`p-8 rounded-3xl border ${hub.bg} backdrop-blur-md flex flex-col items-center text-center`}
                    >
                        <hub.icon className={`w-16 h-16 ${hub.color} mb-6`} strokeWidth={1} />
                        <h3 className="text-3xl font-display font-bold mb-2">{hub.city}</h3>
                        <div className="text-neutral-400 font-mono text-sm uppercase mb-4">{hub.region}</div>
                        <p className="text-neutral-300">
                            {hub.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
