import { useCallback, useState } from "react";
import type { CustomLabelProps, DashedBgProps } from "../BarChart.types";
import { barData } from "../data/BarChart.data";
import {
    BAR_NARROW_WIDTH, BAR_WIDE_WIDTH,
    BAR_RIGHT_MARGIN, BAR_LABEL_FONT_SIZE, BAR_RIGHT_EXTEND,
    BAR_SIZE_RATIO, BAR_SIZE_MIN, BAR_SIZE_MAX,
    BAR_GAP_RATIO,  BAR_GAP_MIN,  BAR_GAP_MAX,
    BAR_MARGIN_RATIO, BAR_MARGIN_MIN, BAR_MARGIN_MAX,
} from "@/shared/const";

export const computeLayout = (width: number, height: number) => {
    const isNarrow = width < BAR_NARROW_WIDTH;
    const isWide   = width >= BAR_WIDE_WIDTH;
    return {
        rightMargin: isNarrow ? BAR_RIGHT_MARGIN.narrow    : isWide ? BAR_RIGHT_MARGIN.wide    : BAR_RIGHT_MARGIN.mid,
        labelFontSz: isNarrow ? BAR_LABEL_FONT_SIZE.narrow : isWide ? BAR_LABEL_FONT_SIZE.wide : BAR_LABEL_FONT_SIZE.mid,
        rightExtend: isNarrow ? BAR_RIGHT_EXTEND.narrow    : isWide ? BAR_RIGHT_EXTEND.wide    : BAR_RIGHT_EXTEND.mid,
        barSize:     Math.max(BAR_SIZE_MIN,   Math.min(BAR_SIZE_MAX,   height * BAR_SIZE_RATIO)),
        barGap:      Math.max(BAR_GAP_MIN,    Math.min(BAR_GAP_MAX,    height * BAR_GAP_RATIO)),
        tbMargin:    Math.max(BAR_MARGIN_MIN, Math.min(BAR_MARGIN_MAX, height * BAR_MARGIN_RATIO)),
    };
};

export const CustomLabel = ({
    x = 0, y = 0, width = 0, height = 0, index = 0, fontSize = 9,
}: CustomLabelProps) => {
    const [textWidth, setTextWidth] = useState(0);

    const textRef = useCallback((node: SVGTextElement | null) => {
        if (node) setTextWidth(node.getComputedTextLength() + 16);
    }, []);

    const xn = Number(x);
    const yn = Number(y);
    const wn = Number(width);
    const hn = Number(height);
    const cx = xn + wn + 8;
    const cy = yn + hn / 2;

    return (
        <g>
            <rect x={cx - 7} y={cy - 9} width={textWidth} height={18} rx={3} fill="#ffffff" />
            <text ref={textRef} x={cx + 2} y={cy + 3} fontSize={fontSize} textAnchor="start">
                <tspan fill={barData[index].color}>▪ </tspan>
                <tspan fill="#000000">{barData[index].label}</tspan>
            </text>
        </g>
    );
};

export const DashedBackground = ({
    x = 0, y = 0, width = 0, height = 0, rightExtend = 60,
}: DashedBgProps) => (
    <line
        x1={Number(x)}
        y1={Number(y) + Number(height) / 2}
        x2={Number(x) + Number(width) + rightExtend}
        y2={Number(y) + Number(height) / 2}
        stroke="#ffffff"
        strokeWidth={1}
        strokeDasharray="4 4"
    />
);
