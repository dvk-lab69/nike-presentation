"use client";

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { Lightbulb, Fingerprint, Cpu } from "lucide-react";

export function DesignStage() {
    return (
        <Section className="bg-neutral-950 text-white border-b border-neutral-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-cyan-500 font-mono tracking-widest text-sm uppercase mb-2 block">
                        Stage 01
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        THE BRAIN <br />
                        <span className="text-neutral-600">IN OREGON</span>
                    </h2>
                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        Every Nike product begins in <strong>Beaverton, Oregon</strong>. The "Innovation Kitchen" is where R&D, design, and prototyping happen. Nike does not manufacture; it invents.
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: Lightbulb, title: "Innovation Kitchen", desc: "Secret lab for prototyping." },
                            { icon: Fingerprint, title: "Intellectual Property", desc: "Patenting Air, Flyknit, Dri-Fit." },
                            { icon: Cpu, title: "R&D Focus", desc: "High value-add activities only." },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-cyan-400">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-neutral-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[500px] w-full bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden flex items-center justify-center p-8"
                >
                    {/* Abstract "Blueprint" Visual */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
                    <div className="grid grid-cols-2 gap-4 w-full h-full opacity-50">
                        <div className="border border-dashed border-neutral-700 rounded-lg bg-neutral-950/50" />
                        <div className="border border-dashed border-neutral-700 rounded-lg bg-neutral-950/50 translate-y-8" />
                        <div className="border border-dashed border-neutral-700 rounded-lg bg-neutral-950/50 -translate-y-8" />
                        <div className="border border-dashed border-neutral-700 rounded-lg bg-neutral-950/50" />
                    </div>
                    <div className="absolute text-center z-10">
                        <div className="text-6xl font-display font-bold text-white/20">AIR</div>
                        <div className="text-6xl font-display font-bold text-white/20">FLYKNIT</div>
                        <div className="text-6xl font-display font-bold text-white/20">DRI-FIT</div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
