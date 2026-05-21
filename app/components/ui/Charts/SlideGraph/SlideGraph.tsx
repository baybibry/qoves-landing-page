"use client";

import type { SliderGraphProps } from "./SlideGraph.types";
import { useCountUp } from "@/shared/hooks/useCountUp";
import styles from "./SlideGraph.module.scss";

const SliderGraph = ({
    label,
    value,
    minLabel = "(0%)",
    maxLabel = "(100%)",
}: SliderGraphProps) => {
    const animated = useCountUp(value);

    return (
        <div className={styles.root}>
            <div className={styles.labelWrapper}>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{animated}%</span>
            </div>

            <div className={styles.footer}>
                <div className={styles.trackWrapper}>
                    <div className={styles.marker} style={{ left: `${animated}%` }} />

                    <div className={styles.trackLabels}>
                        <div className={styles.minLabel}>
                            <span>Rough</span>
                            {minLabel}
                        </div>
                        <div className={styles.youLabel} style={{ left: `${animated - 12}%` }}>
                            <span>{animated}%</span>
                            (You)
                        </div>
                        <div className={styles.maxLabel}>
                            <span>Smooth</span>
                            {maxLabel}
                        </div>
                    </div>

                    <div className={styles.track}>
                        <div className={styles.fill} style={{ width: `${animated}%` }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderGraph;
