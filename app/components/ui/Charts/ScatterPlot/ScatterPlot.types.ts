export interface GridPoint {
    x: number;
    y: number;
    dist: number;
    isHighlighted: boolean;
}

export interface CustomDotProps {
    cx?: number;
    cy?: number;
    payload?: GridPoint;
}
