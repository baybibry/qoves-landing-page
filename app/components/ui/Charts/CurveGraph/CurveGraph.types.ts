export interface SquareMarkProps {
    cx?: number;
    cy?: number;
}

export interface CurveDataPoint {
    x: number;
    curve: number;
    highlighted: number | undefined;
}

export interface CurveGraphProps {
    caption?: string;
    highlightFrom?: number;
}
