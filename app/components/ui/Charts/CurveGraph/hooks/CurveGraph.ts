"use client";
import { useMemo } from "react";
import { generateCurveData } from "../utils/CurveGraph";
import type { CurveDataPoint } from "../CurveGraph.types";

export const useCurveData = (highlightFrom: number): CurveDataPoint[] =>
    useMemo(() => generateCurveData(highlightFrom), [highlightFrom]);
