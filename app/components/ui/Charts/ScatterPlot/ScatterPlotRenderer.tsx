import type { CustomDotProps } from "./ScatterPlot.types";
import { dotColor } from "./utils/ScatterPlot";

export const createDotRenderer = (dotSize: number) =>
    ({ cx = 0, cy = 0, payload }: CustomDotProps) => {
        if (!payload) return <g />;
        const half = dotSize / 2;
        return (
            <rect
                x={cx - half} y={cy - half}
                width={dotSize} height={dotSize}
                rx={3} ry={3}
                fill={dotColor(payload)}
                strokeWidth={payload.isHighlighted ? 1.5 : 0}
            />
        );
    };
