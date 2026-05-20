import {TColor} from "@/app/shared/types/TColor";

export interface ISectionContentProps {
    content: string;
    color?: TColor;
    align?: "left" | "right" | "center" | "justify";
}
