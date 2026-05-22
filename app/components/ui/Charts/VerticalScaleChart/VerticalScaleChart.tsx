"use client";

import { memo } from "react";
import styles from "./VerticalScaleChart.module.scss";
import type { VerticalScaleChartProps } from "./VerticalScaleChart.types";
import { colorStops } from "./data/VerticalScaleChart.data";
import { useAnimatedPosition } from "./hooks/VerticalScaleChart";
import { VERTICAL_SCALE_TARGET } from "@/shared/const";
import { useInView } from "@/shared/hooks";

const VerticalScaleChart = ({
    userLabel   = "YOU",
    markerLabel = "DARK BROWN",
    caption     = "Your eyes have a medium melanin concentration.",
}: VerticalScaleChartProps) => {
    const { ref, hasBeenVisible } = useInView<HTMLDivElement>();
    const position = useAnimatedPosition(VERTICAL_SCALE_TARGET, hasBeenVisible);

    return (
        <div ref={ref} className={styles.root}>
            <div className={styles.chartWrapper}>
                <div className={styles.barWrapper}>
                    <div className={styles.bar} />
                    {colorStops.map((stop) => (
                        <span key={stop.label} className={styles.zoneLabel} style={{ top: `${stop.position}%` }}>
                            {stop.label}
                        </span>
                    ))}
                </div>

                <div className={styles.markerLine} style={{ top: `${position}%` }}>
                    <span className={styles.markerLeft}>
                        <span className={styles.markerDot} />
                        {markerLabel}
                    </span>
                    <span className={styles.markerRight}>{userLabel}</span>
                </div>

                <div className={styles.highlight} style={{ top: `${position}%` }} />
            </div>

            <div className={styles.caption}>{caption}</div>
        </div>
    );
};

export default memo(VerticalScaleChart);
