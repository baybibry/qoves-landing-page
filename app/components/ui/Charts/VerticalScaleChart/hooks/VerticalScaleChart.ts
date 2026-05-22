"use client";
import { useEffect, useState } from "react";
import { POSITION_ANIMATION_DELAY, VERTICAL_SCALE_INITIAL } from "@/shared/const";

export const useAnimatedPosition = (target: number, started = true, delay = POSITION_ANIMATION_DELAY) => {
    const [position, setPosition] = useState(VERTICAL_SCALE_INITIAL);

    useEffect(() => {
        if (!started) return;
        const timer = setTimeout(() => setPosition(target), delay);
        return () => clearTimeout(timer);
    }, [target, delay, started]);

    return position;
};
