"use client";

import { memo } from "react";
import {
    BarChart as RechartsBarChart, Bar, XAxis, YAxis,
    Cell, ResponsiveContainer, LabelList, ReferenceLine,
} from "recharts";
import { useContainerSize } from "./hooks/BarChart";
import { computeLayout, CustomLabel, DashedBackground } from "./utils/BarChart";
import { barData, REFERENCE_TICKS } from "./data/BarChart.data";
import styles from "./BarChart.module.scss";

const BarChart = () => {
    const { ref, width, height } = useContainerSize();
    const { rightMargin, labelFontSz, rightExtend, barSize, barGap, tbMargin } = computeLayout(width, height);

    return (
        <div className={styles.root} ref={ref}>
            <ResponsiveContainer width="100%" height="100%" debounce={50}>
                <RechartsBarChart
                    data={barData}
                    layout="vertical"
                    margin={{ top: tbMargin, right: rightMargin, bottom: tbMargin, left: 0 }}
                    barCategoryGap={barGap}
                >
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis type="category" dataKey="label" hide />

                    <Bar
                        dataKey="value"
                        radius={[0, 2, 2, 0]}
                        background={<DashedBackground rightExtend={rightExtend} />}
                        barSize={barSize}
                    >
                        {barData.map((_entry, index) => (
                            <Cell key={index} fill={barData[index].color} />
                        ))}
                        <LabelList
                            content={(props) => (
                                <CustomLabel {...props} index={props.index!} fontSize={labelFontSz} />
                            )}
                        />
                    </Bar>

                    {REFERENCE_TICKS.map((tick) => (
                        <ReferenceLine key={tick} x={tick} stroke="rgba(255,255,255,0.1)" strokeWidth={2} />
                    ))}
                </RechartsBarChart>
            </ResponsiveContainer>

            <div className={styles.labelWrapper}>
                <span>ASYMMETRICAL</span>
                <span>SYMMETRICAL</span>
            </div>
        </div>
    );
};

export default memo(BarChart);
