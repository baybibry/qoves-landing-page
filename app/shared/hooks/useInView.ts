"use client";

import { useEffect, useRef, useState } from "react";
import { observeElement } from "../utils/intersectionObserver";

/**
 * Returns a ref to attach to a container element and a `hasBeenVisible`
 * flag that flips to `true` the first time the element enters the viewport.
 * Once true it never resets, so the component stays mounted after scrolling away.
 *
 * Usage:
 *   const { ref, hasBeenVisible } = useInView();
 *   return <div ref={ref}>{hasBeenVisible && <ExpensiveComponent />}</div>;
 */
export function useInView<T extends Element = HTMLDivElement>() {
    const ref = useRef<T>(null);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || hasBeenVisible) return;

        const unobserve = observeElement(el, (entry) => {
            if (entry.isIntersecting) {
                setHasBeenVisible(true);
                unobserve(); // stop watching once rendered
            }
        });

        return unobserve;
    }, [hasBeenVisible]);

    return { ref, hasBeenVisible };
}
