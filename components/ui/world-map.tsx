"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

interface MapProps {
    dots?: Array<{
        start: { lat: number; lng: number; label?: string };
        end: { lat: number; lng: number; label?: string };
        color?: string;
        lineColor?: string; // Optional override for the line color specifically
        radius?: number; // Optional radius for the endpoint
        opacity?: number; // Optional opacity for the line/dot
        curveOffset?: number; // Optional curve height/direction
        startColor?: string; // Optional start color
        hideDots?: boolean; // New prop to hide dots for specific lines
    }>;
    lineColor?: string;
}

export default function WorldMap({
    dots = [],
    lineColor = "#0ea5e9",
}: MapProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const map = new DottedMap({ height: 100, grid: "diagonal" });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { theme } = useTheme();

    if (!mounted) {
        return <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans animate-pulse" />;
    }

    const svgMap = map.getSVG({
        radius: 0.22,
        color: theme === "dark" || !theme ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" || !theme ? "black" : "white",
    });

    const projectPoint = (lat: number, lng: number) => {
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return { x, y };
    };

    const createCurvedPath = (
        start: { x: number; y: number },
        end: { x: number; y: number },
        curveOffset: number = -20 // Default curve height
    ) => {
        const midX = (start.x + end.x) / 2;
        const midY = (start.y + end.y) / 2 + curveOffset; // Use average Y + offset
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    return (
        <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg  relative font-sans">
            <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
                alt="world map"
                height="495"
                width="1056"
                draggable={false}
            />
            <svg
                ref={svgRef}
                viewBox="0 0 800 400"
                className="w-full h-full absolute inset-0 pointer-events-none select-none"
            >
                {dots.map((dot, i) => {
                    const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                    return (
                        <g key={`path-group-${i}`}>
                            <motion.path
                                d={createCurvedPath(startPoint, endPoint, dot.curveOffset)}
                                fill="none"
                                stroke={`url(#path-gradient-${i})`}
                                strokeWidth="1"
                                strokeOpacity={dot.opacity !== undefined ? dot.opacity : 1}
                                initial={{
                                    pathLength: 0,
                                }}
                                animate={{
                                    pathLength: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5 * i,
                                    ease: "easeOut",
                                }}
                                key={`start-upper-${i}`}
                            ></motion.path>
                            <defs>
                                <linearGradient id={`path-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor={dot.lineColor || dot.color || lineColor} stopOpacity="0" />
                                    <stop offset="10%" stopColor={dot.lineColor || dot.color || lineColor} stopOpacity="1" />
                                    <stop offset="90%" stopColor={dot.lineColor || dot.color || lineColor} stopOpacity="1" />
                                    <stop offset="100%" stopColor={dot.lineColor || dot.color || lineColor} stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </g>
                    );
                })}

                {dots.map((dot, i) => (
                    !dot.hideDots && (
                        <g key={`points-group-${i}`}>
                            <g key={`start-${i}`}>
                                <circle
                                    cx={projectPoint(dot.start.lat, dot.start.lng).x}
                                    cy={projectPoint(dot.start.lat, dot.start.lng).y}
                                    r="3"
                                    fill={dot.startColor || dot.color || lineColor}
                                    opacity={dot.opacity !== undefined ? dot.opacity : 1}
                                />
                            </g>
                            <g key={`end-${i}`}>
                                <circle
                                    cx={projectPoint(dot.end.lat, dot.end.lng).x}
                                    cy={projectPoint(dot.end.lat, dot.end.lng).y}
                                    r={dot.radius === undefined ? 3 : dot.radius}
                                    fill={dot.color || lineColor}
                                    opacity={dot.opacity !== undefined ? dot.opacity : 1}
                                />
                            </g>
                        </g>
                    )
                ))}
            </svg>
        </div>
    );
}
