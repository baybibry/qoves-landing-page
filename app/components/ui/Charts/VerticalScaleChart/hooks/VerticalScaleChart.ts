"use client";
import { useEffect, useState } from "react";
import { POSITION_ANIMATION_DELAY, VERTICAL_SCALE_INITIAL } from "@/shared/const";

export const useAnimatedPosition = (target: number, delay = POSITION_ANIMATION_DELAY) => {
    const [position, setPosition] = useState(VERTICAL_SCALE_INITIAL);

    useEffect(() => {
        const timer = setTimeout(() => setPosition(target), delay);
        return () => clearTimeout(timer);
    }, [target, delay]);

    return position;
};
