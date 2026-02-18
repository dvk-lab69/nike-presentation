"use client";

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { TrendingUp, AlertTriangle, Scale, Zap, ShieldAlert, Leaf } from "lucide-react";

export function Analysis() {
    return (
        <Section className="bg-neutral-950 text-white border-t border-neutral-900">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-neutral-500 font-mono tracking-widest text-sm uppercase mb-2 block">
                        Discussion
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        STRATEGIC ANALYSIS
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Advantages */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900/50 rounded-3xl p-8 border border-neutral-800"
                    >
                        <h3 className="text-3xl font-display font-bold mb-8 text-cyan-400 flex items-center gap-3">
                            <TrendingUp /> ADVANTAGES
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="bg-cyan-500/10 p-3 rounded-lg h-fit text-cyan-500"><Zap size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Cost Efficiency</h4>
                                    <p className="text-neutral-400 text-sm">Labor costs in Vietnam/Indonesia are significantly lower than US/EU, maximizing margins.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-cyan-500/10 p-3 rounded-lg h-fit text-cyan-500"><Scale size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Focus on Core Competency</h4>
                                    <p className="text-neutral-400 text-sm">Nike invests in Brand, Marketing & Design (Ronaldo, Jordan), not factory maintenance.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-cyan-500/10 p-3 rounded-lg h-fit text-cyan-500"><Zap size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Flexibility</h4>
                                    <p className="text-neutral-400 text-sm">Agile supply chain allows rapid shifting of production between countries to avoid tariffs.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Risks */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900/50 rounded-3xl p-8 border border-neutral-800"
                    >
                        <h3 className="text-3xl font-display font-bold mb-8 text-red-400 flex items-center gap-3">
                            <AlertTriangle /> CHALLENGES
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="bg-red-500/10 p-3 rounded-lg h-fit text-red-500"><ShieldAlert size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Supply Chain Risks</h4>
                                    <p className="text-neutral-400 text-sm">COVID-19 shutdowns in Vietnam caused global shortages. Over-reliance on Asia is a vulnerability.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-red-500/10 p-3 rounded-lg h-fit text-red-500"><Scale size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Ethical Concerns</h4>
                                    <p className="text-neutral-400 text-sm">Constant scrutiny on labor conditions ("sweatshops"). Requires massive audit resources.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-red-500/10 p-3 rounded-lg h-fit text-red-500"><Leaf size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Logistics & Carbon</h4>
                                    <p className="text-neutral-400 text-sm">Long shipping distances from Asia to West increase carbon footprint and lead times.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* China Role */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-neutral-900 to-black rounded-3xl p-8 border border-neutral-800 text-center"
                >
                    <h3 className="text-2xl font-display font-bold text-white mb-4">THE EVOLUTION OF CHINA</h3>
                    <p className="text-neutral-400 max-w-3xl mx-auto">
                        China has transformed from just a "World Factory" to a <strong>Key Consumer Market</strong>. While low-cost manufacturing migrates to Vietnam, China remains crucial for high-tech production and domestic sales.
                    </p>
                </motion.div>

            </div>
        </Section>
    );
}
