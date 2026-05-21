import type { GridPoint } from "../ScatterPlot.types";
import { SCATTER_INNER_DIST, SCATTER_MID_DIST } from "@/shared/const";

export const MARGIN       = { top: 16, right: 16, bottom: 16, left: 16 } as const;
export const DOMAIN       = [-5, 5] as const;
export const DOMAIN_UNITS = 10;

export const gridData: GridPoint[] = (() => {
    const pts: GridPoint[] = [];
    const coords = [-4.5, -3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5, 4.5];
    for (const x of coords) {
        for (const y of coords) {
            const dist = Math.sqrt(x * x + y * y);
            const isHighlighted = (x === 0.5 || x === 1.5) && (y === 0.5 || y === 1.5);
            pts.push({ x, y, dist, isHighlighted });
        }
    }
    return pts;
})();

const INNER_COLOR = "rgba(195, 210, 222, 0.90)";
const MID_COLOR   = "rgba(148, 163, 180, 0.65)";
const OUTER_COLOR = "rgba(105, 122, 140, 0.42)";

export const dotColor = (entry: GridPoint): string => {
    if (entry.isHighlighted)              return "#f5f0e8";
    if (entry.dist <= SCATTER_INNER_DIST) return INNER_COLOR;
    if (entry.dist <= SCATTER_MID_DIST)   return MID_COLOR;
    return OUTER_COLOR;
};
