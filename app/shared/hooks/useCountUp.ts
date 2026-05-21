"use client";

import { useEffect, useState } from "react";
import { COUNT_UP_DURATION } from "@/shared/const";

export function useCountUp(target: number, duration = COUNT_UP_DURATION): number {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let rafId: number;

        const step = (timestamp: number) => {
            if (startTime === null) startTime = timestamp;
            const elapsed  = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic

            setCurrent(Math.round(target * eased));

            if (progress < 1) rafId = requestAnimationFrame(step);
        };

        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, [target, duration]);

    return current;
}
