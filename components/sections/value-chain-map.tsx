"use client";

import { Section } from "@/components/ui/section";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function ValueChainMap() {
    return (
        <Section className="bg-neutral-950 border-y border-neutral-900 relative min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full mb-8 text-center pt-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold text-white mb-2"
                >
                    GLOBAL VALUE CHAIN
                </motion.h2>
                <p className="text-neutral-400 text-sm md:text-base max-w-3xl mx-auto">
                    <span className="text-blue-700 font-bold">Design/HQ</span> &rarr;
                    <span className="text-pink-500 font-bold"> Mfg (Asia)</span> &rarr;
                    <span className="text-pink-500 font-bold"> Logistics</span> &rarr;
                    <span className="text-yellow-400 font-bold"> Hubs</span> &rarr;
                    <span className="text-neutral-500 font-bold"> Distribution</span>
                </p>
            </div>

            <div className="w-full relative px-4">
                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 bg-neutral-900/50 p-4 rounded-full max-w-fit mx-auto backdrop-blur-sm border border-neutral-800">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-800" />
                        <span className="text-white text-xs font-mono uppercase">Design/HQ</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-white text-xs font-mono uppercase">Sourcing</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-pink-500" />
                        <span className="text-white text-xs font-mono uppercase">Manufacturing</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <span className="text-white text-xs font-mono uppercase">Global Hubs</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-0.5 bg-neutral-500" />
                        <span className="text-white text-xs font-mono uppercase">Distribution</span>
                    </div>
                </div>

                <WorldMap
                    lineColor="#333"
                    dots={[
                        /* =========================================
                           1. SOURCING (GREEN CIRCLES) - Static Nodes
                           ========================================= */
                        // Brazil
                        { start: { lat: -12.0, lng: -55.0 }, end: { lat: -12.0, lng: -55.0 }, color: "#22c55e", startColor: "#22c55e", lineColor: "transparent", radius: 3, opacity: 1 },
                        // India (Extreme South / Ocean)
                        { start: { lat: 7.0, lng: 79.0 }, end: { lat: 7.0, lng: 79.0 }, color: "#22c55e", startColor: "#22c55e", lineColor: "transparent", radius: 3, opacity: 1 },
                        // Vietnam (North - User sees as Bottom China) - Don't touch
                        { start: { lat: 21.0, lng: 105.8 }, end: { lat: 21.0, lng: 105.8 }, color: "#22c55e", startColor: "#22c55e", lineColor: "transparent", radius: 3, opacity: 1 },
                        // Vietnam (Extreme South / Ocean - Lowered again)
                        { start: { lat: 1.0, lng: 106.0 }, end: { lat: 1.0, lng: 106.0 }, color: "#22c55e", startColor: "#22c55e", lineColor: "transparent", radius: 3, opacity: 1 },
                        // South Korea (Extreme South / Ocean - Lowered again)
                        { start: { lat: 20.0, lng: 127.5 }, end: { lat: 20.0, lng: 127.5 }, color: "#22c55e", startColor: "#22c55e", lineColor: "transparent", radius: 3, opacity: 1 },


                        /* =========================================
                           2. DESIGN FLOW (DARK BLUE LINES)
                           Start: Blue (Design). End: Pink (Mfg).
                           ========================================= */
                        // Design -> China Mfg
                        {
                            start: { lat: 45.4871, lng: -122.8037 },
                            end: { lat: 16.0, lng: 107.0 }, // User defined pos
                            color: "#ec4899",
                            startColor: "#1e40af",
                            lineColor: "#1e40af",
                            radius: 4
                        },
                        // Design -> Vietnam Mfg
                        {
                            start: { lat: 45.4871, lng: -122.8037 },
                            end: { lat: -6.0, lng: 110.0 }, // User defined pos
                            color: "#ec4899",
                            startColor: "#1e40af",
                            lineColor: "#1e40af",
                            radius: 4
                        },
                        // Design -> Indonesia Mfg
                        {
                            start: { lat: 45.4871, lng: -122.8037 },
                            end: { lat: -15.0, lng: 100.0 }, // User defined "lower"
                            color: "#ec4899",
                            startColor: "#1e40af",
                            lineColor: "#1e40af",
                            radius: 4
                        },

                        /* =========================================
                           3. LOGISTICS FLOW (PINK LINES)
                           Start: Pink (Mfg). End: Yellow (Hubs).
                           ========================================= */
                        // China Mfg -> Memphis
                        {
                            start: { lat: 16.0, lng: 107.0 },
                            end: { lat: 35.1495, lng: -90.0490 },
                            color: "#facc15", // Target: YELLOW
                            startColor: "#ec4899", // Start: PINK
                            lineColor: "#ec4899",
                            radius: 5
                        },
                        // China Mfg -> Laakdal (Lowered to 40.0)
                        {
                            start: { lat: 16.0, lng: 107.0 },
                            end: { lat: 40.0, lng: 5.0680 },
                            color: "#facc15",
                            startColor: "#ec4899",
                            lineColor: "#ec4899",
                            radius: 5
                        },
                        // China Mfg -> Taicang (Lowered to 16.0)
                        {
                            start: { lat: 16.0, lng: 107.0 },
                            end: { lat: 16.0, lng: 121.1200 },
                            color: "#facc15",
                            startColor: "#ec4899",
                            lineColor: "#ec4899",
                            radius: 5
                        },

                        // Indonesia Mfg -> Melbourne (Australia Hub - Moved South to -55.0)
                        {
                            start: { lat: -15.0, lng: 100.0 },
                            end: { lat: -55.0, lng: 144.8380 },
                            color: "#facc15",
                            startColor: "#ec4899",
                            lineColor: "#ec4899",
                            radius: 5
                        },

                        // Vietnam Mfg -> Sao Paulo (SA Hub)
                        {
                            start: { lat: -6.0, lng: 110.0 },
                            end: { lat: -23.0856, lng: -46.9464 },
                            color: "#facc15",
                            startColor: "#ec4899",
                            lineColor: "#ec4899",
                            radius: 5
                        },

                        /* =========================================
                           4. DISTRIBUTION FLOW (GREY LINES)
                           Start: Yellow (Hubs). End: Hidden/Grey (Regions).
                           ========================================= */
                        // Melbourne -> Australia (User requested: "Shorter lines")
                        { start: { lat: -55.0, lng: 144.8380 }, end: { lat: -45.0, lng: 148.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -5, hideDots: true }, // Up & Right (Sydney region - Shortened)
                        { start: { lat: -55.0, lng: 144.8380 }, end: { lat: -45.0, lng: 130.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 5, hideDots: true },  // Up & Left (Perth region - Shortened)

                        // Brazil Hub -> South America Distribution
                        { start: { lat: -23.0856, lng: -46.9464 }, end: { lat: -45.0, lng: -70.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 15, hideDots: true }, // South-West (Extended)
                        { start: { lat: -23.0856, lng: -46.9464 }, end: { lat: -15.0, lng: -60.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -5, hideDots: true }, // North-West (Shortened)
                        { start: { lat: -23.0856, lng: -46.9464 }, end: { lat: -32.0, lng: -44.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 10, hideDots: true }, // South-East (Slightly Longer & Lower)

                        // USA Hub (Memphis) -> North America Distribution
                        { start: { lat: 35.1495, lng: -90.0490 }, end: { lat: 60.0, lng: -110.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -10, hideDots: true }, // To Canada (Even Higher & Left)
                        { start: { lat: 35.1495, lng: -90.0490 }, end: { lat: 34.0, lng: -118.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 10, hideDots: true }, // To USA West (LA)
                        { start: { lat: 35.1495, lng: -90.0490 }, end: { lat: 19.0, lng: -99.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 10, hideDots: true }, // To Mexico

                        // Europe Hub (Laakdal) -> EMEA Distribution
                        { start: { lat: 40.0, lng: 5.0680 }, end: { lat: 48.0, lng: -2.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -10, hideDots: true }, // To UK (Shorter)
                        { start: { lat: 40.0, lng: 5.0680 }, end: { lat: 30.0, lng: -6.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 10, hideDots: true },  // To Spain (Lower)
                        { start: { lat: 40.0, lng: 5.0680 }, end: { lat: 60.0, lng: 8.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -10, hideDots: true }, // To Norway
                        { start: { lat: 40.0, lng: 5.0680 }, end: { lat: 40.0, lng: 30.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -5, hideDots: true },  // To Baltics (Simply Lower)
                        { start: { lat: 40.0, lng: 5.0680 }, end: { lat: 55.0, lng: 55.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -5, hideDots: true },  // To Russia (Further)
                        { start: { lat: 40.0, lng: 5.0680 }, end: { lat: 25.0, lng: 14.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 0, hideDots: true },   // To Italy (Much Lower)
                        { start: { lat: 40.0, lng: 5.0680 }, end: { lat: 0.0, lng: 20.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 10, hideDots: true },    // To Africa (Moved from China)

                        // China Hub (Taicang) -> Asia/Africa Distribution
                        { start: { lat: 16.0, lng: 121.1200 }, end: { lat: 25.0, lng: 100.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -5, hideDots: true },  // To China Internal (Left)
                        { start: { lat: 16.0, lng: 121.1200 }, end: { lat: 45.0, lng: 80.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -10, hideDots: true },  // To Russia (Lower)
                        { start: { lat: 16.0, lng: 121.1200 }, end: { lat: 10.0, lng: 78.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 10, hideDots: true },   // To India (Lower)
                        { start: { lat: 16.0, lng: 121.1200 }, end: { lat: 25.0, lng: 140.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -10, hideDots: true }, // To Japan (Longer)
                        { start: { lat: 16.0, lng: 121.1200 }, end: { lat: 21.0, lng: 128.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: -10, hideDots: true }, // To Korea (Slightly Longer)
                        { start: { lat: 16.0, lng: 121.1200 }, end: { lat: -5.0, lng: 100.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 5, hideDots: true },   // To Vietnam (Further)
                        { start: { lat: 16.0, lng: 121.1200 }, end: { lat: 15.0, lng: 100.0 }, color: "#525252", startColor: "#facc15", lineColor: "#525252", radius: 4, curveOffset: 5, hideDots: true },   // To Thailand (New)


                    ]}
                />
            </div>
        </Section>
    );
}
