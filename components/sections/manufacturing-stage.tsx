"use client";

import { Section } from "@/components/ui/section";
import { motion } from "motion/react";
import { Factory, MapPin } from "lucide-react";

export function ManufacturingStage() {
    return (
        <Section className="bg-neutral-950 text-white relative border-b border-neutral-900 overflow-hidden">
            <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-blue-500 font-mono tracking-widest text-sm uppercase mb-2 block">
                        Stage 03
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        MANUFACTURING <br />
                        <span className="text-neutral-600 block text-3xl md:text-5xl mt-2">THE OFFSHORING MODEL</span>
                    </h2>
                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        Nike owns <strong>0 factories</strong>. Production is 100% outsourced to independent contractors in Asia to optimize costs and scalability.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h4 className="flex items-center gap-2 font-bold text-xl mb-4">
                                <Factory className="text-cyan-500" />
                                Footwear Production
                            </h4>
                            <div className="space-y-3">
                                <div className="w-full bg-neutral-900 h-10 rounded-full overflow-hidden relative flex items-center px-4 border border-neutral-800">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "50%" }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="absolute left-0 top-0 h-full bg-cyan-600/50"
                                    />
                                    <span className="relative z-10 flex justify-between w-full text-sm font-mono">
                                        <span>Vietnam</span>
                                        <span>~50%</span>
                                    </span>
                                </div>
                                <div className="w-full bg-neutral-900 h-10 rounded-full overflow-hidden relative flex items-center px-4 border border-neutral-800">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "27%" }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="absolute left-0 top-0 h-full bg-cyan-700/40"
                                    />
                                    <span className="relative z-10 flex justify-between w-full text-sm font-mono">
                                        <span>Indonesia</span>
                                        <span>~27%</span>
                                    </span>
                                </div>
                                <div className="w-full bg-neutral-900 h-10 rounded-full overflow-hidden relative flex items-center px-4 border border-neutral-800">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "18%" }}
                                        transition={{ duration: 1, delay: 0.6 }}
                                        className="absolute left-0 top-0 h-full bg-cyan-800/30"
                                    />
                                    <span className="relative z-10 flex justify-between w-full text-sm font-mono">
                                        <span>China</span>
                                        <span>~18%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                >
                    {[
                        { country: "Vietnam", role: "Key Hub", color: "bg-cyan-500" },
                        { country: "Indonesia", role: "Footwear", color: "bg-blue-500" },
                        { country: "China", role: "High-Tech", color: "bg-purple-500" },
                        { country: "Cambodia", role: "Apparel", color: "bg-green-500" },
                    ].map((item, idx) => (
                        <div key={idx} className="aspect-square bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-end group hover:border-neutral-600 transition-colors">
                            <div className={`w-3 h-3 ${item.color} rounded-full mb-auto`} />
                            <div className="font-display font-bold text-3xl text-white mb-1 group-hover:translate-x-1 transition-transform">{item.country}</div>
                            <div className="text-neutral-500 text-sm font-mono uppercase">{item.role}</div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </Section>
    );
}
