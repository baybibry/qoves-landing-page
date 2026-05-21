export interface BarEntry {
    label: string;
    value: number;
    color: string;
}

export interface CustomLabelProps {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    index?: number;
    fontSize?: number;
}

export interface DashedBgProps {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    rightExtend?: number;
}
