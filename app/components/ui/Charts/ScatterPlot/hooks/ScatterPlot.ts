"use client";
import { useEffect, useRef, useState } from "react";
import { MARGIN, DOMAIN_UNITS } from "../utils/ScatterPlot";
import { SCATTER_DOT_INITIAL, SCATTER_DOT_MIN, SCATTER_DOT_RATIO } from "@/shared/const";

export const useDotSize = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dotSize, setDotSize] = useState(SCATTER_DOT_INITIAL);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let rafId = 0;
        const recalc = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const plotW = el.clientWidth  - MARGIN.left  - MARGIN.right;
                const plotH = el.clientHeight - MARGIN.top   - MARGIN.bottom;
                const cellW = plotW / DOMAIN_UNITS;
                const cellH = plotH / DOMAIN_UNITS;
                setDotSize(Math.max(SCATTER_DOT_MIN, Math.min(cellW, cellH) * SCATTER_DOT_RATIO));
            });
        };

        const ro = new ResizeObserver(recalc);
        ro.observe(el);
        recalc();

        return () => {
            ro.disconnect();
            cancelAnimationFrame(rafId);
        };
    }, []);

    return { containerRef, dotSize };
};
