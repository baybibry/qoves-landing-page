"use client";

import { useEffect, useRef, useState } from "react";
import { observeElement } from "../utils/intersectionObserver";

/**
 * Tracks whether an element is currently inside the (extended) viewport.
 *
 * Unlike `useInView`, this resets to `false` when the element scrolls out —
 * making it suitable for toggling animations on/off rather than one-shot
 * lazy rendering.
 *
 * The underlying shared observer uses `rootMargin: "120px"` so animations
 * start just before the section enters view and stop just after it leaves.
 *
 * Usage:
 *   const { ref, isVisible } = useIsVisible<HTMLDivElement>();
 *   return (
 *     <div ref={ref} style={{ '--float-play': isVisible ? 'running' : 'paused' }}>
 *       ...
 *     </div>
 *   );
 */
export function useIsVisible<T extends Element = HTMLDivElement>() {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // observeElement returns an unobserve cleanup function.
        return observeElement(el, (entry) => {
            setIsVisible(entry.isIntersecting);
        });
    }, []);

    return { ref, isVisible };
}
