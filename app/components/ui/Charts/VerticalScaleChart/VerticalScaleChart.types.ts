export interface ColorStop {
    label: string;
    position: number; // 0–100 percentage down the bar
    color: string;
}

export interface VerticalScaleChartProps {
    userPosition?: number; // 0–100
    userLabel?: string;
    markerLabel?: string;
    caption?: string;
}
