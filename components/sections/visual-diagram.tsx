"use client";

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { Cpu, Factory, Truck, ShoppingBag, Globe, MapPin } from "lucide-react";

export function VisualDiagram() {
    const steps = [
        {
            icon: Cpu,
            title: "Design & HQ",
            subtitle: "Innovation Center",
            details: ["Beaverton, Oregon (USA)"],
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            icon: Globe,
            title: "Sourcing",
            subtitle: "Material Suppliers",
            details: ["Brazil", "India", "China", "South Korea", "Taiwan", "Bangladesh"],
            color: "text-green-500",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
        {
            icon: Factory,
            title: "Manufacturing",
            subtitle: "Production (0% Owned)",
            details: ["Vietnam (Key)", "Indonesia", "China"],
            color: "text-pink-500",
            bg: "bg-pink-500/10",
            border: "border-pink-500/20"
        },
        {
            icon: Truck,
            title: "Global Hubs",
            subtitle: "Logistics Centers",
            details: ["Memphis (North America)", "Laakdal (Europe)", "Taicang (China)", "Sao Paulo (LATAM)"],
            color: "text-yellow-500",
            bg: "bg-yellow-500/10",
            border: "border-yellow-500/20"
        },
        {
            icon: ShoppingBag,
            title: "Distribution",
            subtitle: "Key Markets",
            details: ["USA, Canada, Mexico", "Europe, Russia, Africa", "Japan, India, Thailand", "Brazil, Argentina, Korea"],
            color: "text-neutral-400",
            bg: "bg-neutral-500/10",
            border: "border-neutral-500/20"
        },
    ];

    return (
        <Section className="bg-neutral-950 border-y border-neutral-900 py-16 md:py-24">
            <div className="max-w-7xl mx-auto w-full px-4">
                <div
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">THE OFFSHORE MODEL</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        A unilinear flow of value creation: from design in Oregon to manufacturing in Asia,
                        consolidating in global hubs for final distribution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-neutral-800 -z-0 hidden md:block" />

                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`relative z-10 bg-neutral-900/50 backdrop-blur-sm border ${step.border} p-6 rounded-2xl flex flex-col gap-4 hover:bg-neutral-900 transition-colors h-full`}
                        >
                            {/* Header */}
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className={`p-4 rounded-full ${step.bg} ${step.color} shadow-lg ring-1 ring-white/5`}>
                                    <step.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white leading-tight">{step.title}</h3>
                                    <p className={`text-xs font-mono uppercase tracking-wider mt-1 ${step.color}`}>{step.subtitle}</p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-neutral-800" />

                            {/* Details List */}
                            <ul className="space-y-2">
                                {step.details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                                        <MapPin size={14} className={`mt-1 shrink-0 ${step.color}`} />
                                        <span className="text-left leading-snug">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
