import type { BarEntry } from "../BarChart.types";

export const barData: BarEntry[] = [
    { label: "IDEAL",   value: 90, color: "#F2F2F2" },
    { label: "YOU",     value: 75, color: "#98a7ae" },
    { label: "AVERAGE", value: 50, color: "#60747c" },
];

export const REFERENCE_TICKS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const;
