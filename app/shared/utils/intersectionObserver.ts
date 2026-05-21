import { INTERSECTION_ROOT_MARGIN } from "@/shared/const";

type Callback = (entry: IntersectionObserverEntry) => void;

const registry = new Map<Element, Callback>();

const sharedObserver =
    typeof window !== "undefined"
        ? new IntersectionObserver(
              (entries) => {
                  entries.forEach((entry) => registry.get(entry.target)?.(entry));
              },
              { rootMargin: INTERSECTION_ROOT_MARGIN },
          )
        : null;

export function observeElement(el: Element, cb: Callback): () => void {
    registry.set(el, cb);
    sharedObserver?.observe(el);

    return () => {
        registry.delete(el);
        sharedObserver?.unobserve(el);
    };
}
