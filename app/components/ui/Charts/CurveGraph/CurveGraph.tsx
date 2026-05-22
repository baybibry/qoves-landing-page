"use client";

import { memo } from "react";
import {
    AreaChart, Area, XAxis, YAxis,
    ResponsiveContainer, ReferenceDot, CartesianGrid,
} from "recharts";
import type { CurveGraphProps } from "./CurveGraph.types";
import { PEAK, X_MAX, pdf } from "./utils/CurveGraph";
import { useCurveData } from "./hooks/CurveGraph";
import { SquareMark } from "./CurveGraphSquareMark";
import { CURVE_CHART_MARGIN, CURVE_Y_DOMAIN_SCALE } from "@/shared/const";
import styles from "./CurveGraph.module.scss";

const CurveGraph = ({
    caption       = "Your eyebrow density is in the mid 40th percentile",
    highlightFrom = 1.0,
}: CurveGraphProps) => {
    const data = useCurveData(highlightFrom);

    return (
        <div className={styles.root}>
            <div className={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height="100%" debounce={50}>
                    <AreaChart data={data} margin={CURVE_CHART_MARGIN}>
                        <CartesianGrid opacity={0.5} />
                        <Area type="monotone" dataKey="curve" stroke="#c8c5bf" fillOpacity={0} isAnimationActive={false} />
                        <Area type="monotone" dataKey="highlighted" stroke="none" fill="rgba(255,255,255,0.3)" fillOpacity={1} isAnimationActive={false} />
                        <ReferenceDot x={highlightFrom} y={0} shape={<SquareMark />} />
                        <ReferenceDot x={X_MAX} y={pdf(X_MAX)} shape={<SquareMark />} />
                        <XAxis dataKey="x" hide />
                        <YAxis domain={[0, PEAK * CURVE_Y_DOMAIN_SCALE]} hide />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className={styles.axisLabelWrapper}>
                <span className={`${styles.axisLabel} ${styles.low}`}>LOW DENSITY</span>
                <span className={`${styles.axisLabel} ${styles.mid}`}>MEDIUM DENSITY</span>
                <span className={`${styles.axisLabel} ${styles.high}`}>HIGH DENSITY</span>
            </div>

            <div className={styles.caption}>{caption}</div>
        </div>
    );
};

export default memo(CurveGraph);
