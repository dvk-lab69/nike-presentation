"use client";

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import {
    ShoppingBag,
    Banknote,
    MapPin,
    Megaphone
} from "lucide-react";

export function GeographicalImpact() {
    const columns = [
        {
            title: "PRODUCT",
            subtitle: "Innovation & Materials",
            icon: ShoppingBag,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            content: [
                {
                    region: "USA",
                    desc: "Drives global innovation, and core design. Sets the global product standard."
                },
                {
                    region: "China, Vietnam and South Korea",
                    desc: "Influence the physical product by supplying advanced, high-tech, and sustainable materials"
                }
            ]
        },
        {
            title: "PRICE",
            subtitle: "Cost, Purchasing Power & Premiumization",
            icon: Banknote,
            color: "text-green-500",
            bg: "bg-green-500/10",
            border: "border-green-500/20",
            content: [
                {
                    region: "USA",
                    desc: "Sets the global benchmark for retail pricing (MSRP). As the largest single market, it drives the premium pricing strategy through high purchasing power and 'sneakerhead' culture."
                },
                {
                    region: "Western Europe",
                    desc: "Represents a massive, high-income consumer base sustaining premium pricing, but requires adaptation to high Value Added Taxes (VAT) and currency fluctuations."
                },
                {
                    region: "China",
                    desc: "Plays a dual role. It optimizes manufacturing costs at scale, while its rapidly growing middle class dictates premium regional pricing tiers for exclusive models."
                },
                {
                    region: "Vietnam & Indonesia",
                    desc: "Provide cost-efficient, highly skilled labor, significantly lowering baseline production costs and allowing Nike to maintain high global profit margins."
                }
            ]
        },
        {
            title: "PLACE",
            subtitle: "Distribution & Logistics Hubs",
            icon: MapPin,
            color: "text-yellow-500",
            bg: "bg-yellow-500/10",
            border: "border-yellow-500/20",
            content: [
                {
                    region: "USA (Memphis)",
                    desc: "The primary fulfillment hub for North America. It powers massive DTC (Direct-to-Consumer) operations and ensures rapid delivery across Nike's largest single market."
                },
                {
                    region: "Europe (Belgium - Laakdal)",
                    desc: "Acts as the central logistical artery for the entire EMEA region, managing complex cross-border distribution to keep shelves stocked across diverse countries."
                },
                {
                    region: "China (Taicang)",
                    desc: "A highly automated logistics center critical for the vast Asian market, handling huge volumes of both physical retail and fast-growing e-commerce."
                },
                {
                    region: "South America (Brazil - São Paulo)",
                    desc: "Operates as a crucial regional distribution center to supply the South American continent, often functioning through a strategic partner-operated model."
                }
            ]
        },
        {
            title: "PROMOTION",
            subtitle: "Brand Identity & Culture",
            icon: Megaphone,
            color: "text-pink-500",
            bg: "bg-pink-500/10",
            border: "border-pink-500/20",
            content: [
                {
                    region: "USA",
                    desc: "Forms the global brand identity through massive sports culture and megastar sponsorships (e.g., NBA, LeBron James), creating a worldwide 'halo effect.'"
                },
                {
                    region: "Western Europe",
                    desc: "Drives localized promotion through football (soccer) dominance by sponsoring top-tier clubs (e.g., PSG, FC Barcelona) and local heroes."
                },
                {
                    region: "Japan & South Korea",
                    desc: "Leverage K-pop icons and streetwear influencers to drive hype-based marketing and promote limited-edition sneaker drops globally."
                }
            ]
        }
    ];

    return (
        <Section className="bg-neutral-950 border-y border-neutral-900 py-24">
            <div className="max-w-[1400px] mx-auto w-full px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        GEOGRAPHICAL IMPACT ON NIKE'S 4Ps
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Marketing actions adapted at each step of global value delivery.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {columns.map((col, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-neutral-900/40 backdrop-blur-sm border ${col.border} rounded-2xl flex flex-col overflow-hidden group hover:bg-neutral-900/60 transition-colors duration-300`}
                        >
                            {/* Header */}
                            <div className={`p-6 border-b border-neutral-800 ${col.bg}`}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 rounded-lg bg-black/40 ${col.color}`}>
                                        <col.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-lg md:text-xl text-white tracking-wide">
                                        {col.title}
                                    </h3>
                                </div>
                                <p className={`text-xs font-mono uppercase tracking-wider ${col.color} opacity-90`}>
                                    {col.subtitle}
                                </p>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-6 flex-grow">
                                {col.content.map((item, i) => (
                                    <div key={i} className="relative pl-4 border-l-2 border-dashed border-neutral-800 hover:border-neutral-600 transition-colors">
                                        <h4 className={`text-sm font-bold text-white mb-1 ${col.color}`}>
                                            {item.region}
                                        </h4>
                                        <p className="text-sm text-neutral-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
