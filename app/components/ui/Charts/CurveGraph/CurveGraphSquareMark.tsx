import type { SquareMarkProps } from "./CurveGraph.types";

export const SquareMark = ({ cx, cy }: SquareMarkProps) => {
    if (cx == null || cy == null) return null;
    return (
        <rect
            x={cx - 4} y={cy - 4}
            width={8} height={8}
            rx={1.5}
            fill="rgba(255,255,255,0.75)"
        />
    );
};
