"use client";

import { memo, useMemo } from "react";
import {
    ScatterChart, Scatter, XAxis, YAxis,
    ReferenceLine, ResponsiveContainer,
} from "recharts";
import { useDotSize } from "./hooks/ScatterPlot";
import { gridData, MARGIN, DOMAIN } from "./utils/ScatterPlot";
import { createDotRenderer } from "./ScatterPlotRenderer";
import styles from "./ScatterPlot.module.scss";

const ScatterPlot = () => {
    const { containerRef, dotSize } = useDotSize();
    const dot = useMemo(() => createDotRenderer(dotSize), [dotSize]);

    return (
        <div className={styles.root}>
            <div className={styles.chartContainer}>
                <div className={styles.innerChart} ref={containerRef}>
                    <div className={`${styles.axisLabel} ${styles.labelTop}`}>BOLD</div>
                    <div className={`${styles.axisLabel} ${styles.labelBottom}`}>SUBTLE</div>
                    <div className={`${styles.axisLabel} ${styles.labelLeft}`}>FEMININE</div>
                    <div className={`${styles.axisLabel} ${styles.labelRight}`}>MASCULINE</div>

                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={MARGIN}>
                            <XAxis type="number" dataKey="x" domain={[...DOMAIN]} tick={false} axisLine={false} tickLine={false} height={0} />
                            <YAxis type="number" dataKey="y" domain={[...DOMAIN]} tick={false} axisLine={false} tickLine={false} width={0} />
                            <ReferenceLine x={0} stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
                            <ReferenceLine y={0} stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
                            <Scatter data={gridData} shape={dot} />
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <p className={styles.caption}>Brows fall in the top 20% for natural fullness.</p>
        </div>
    );
};

export default memo(ScatterPlot);
