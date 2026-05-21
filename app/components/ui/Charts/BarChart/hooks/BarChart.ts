"use client";
import { useEffect, useRef, useState } from "react";
import { BAR_CONTAINER_DEFAULT_WIDTH, BAR_CONTAINER_DEFAULT_HEIGHT } from "@/shared/const";

export const useContainerSize = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [width,  setWidth]  = useState(BAR_CONTAINER_DEFAULT_WIDTH);
    const [height, setHeight] = useState(BAR_CONTAINER_DEFAULT_HEIGHT);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let rafId = 0;
        const measure = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                setWidth(el.clientWidth);
                setHeight(el.clientHeight);
            });
        };

        const ro = new ResizeObserver(measure);
        ro.observe(el);
        measure();

        return () => {
            ro.disconnect();
            cancelAnimationFrame(rafId);
        };
    }, []);

    return { ref, width, height };
};
