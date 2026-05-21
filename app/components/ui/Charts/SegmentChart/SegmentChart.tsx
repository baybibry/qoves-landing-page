import styles from "./SegmentChart.module.scss";
import { segmentData } from "./data/SegmentChart.data";

const SegmentChart = () => (
    <div className={styles.root}>
        <span className={styles.title}>FACIAL THIRDS</span>

        <div className={styles.chartWrapper}>
            <div className={styles.labelsRow}>
                {segmentData.map((seg, i) => (
                    <div key={i} className={styles.segment} style={{ width: `${seg.value * 100}%` }}>
                        <span className={styles.label}>{seg.label}</span>
                    </div>
                ))}
            </div>

            <div className={styles.barRow}>
                {segmentData.map((seg, i) => (
                    <div key={i} className={styles.bar} style={{ width: `${seg.value * 100}%` }}>
                        <div className={styles.fill} style={{ backgroundColor: seg.color }} />
                        {i < segmentData.length - 1 && <div className={styles.divider} />}
                    </div>
                ))}
            </div>

            <div className={styles.valuesRow}>
                {segmentData.map((seg, i) => (
                    <div key={i} className={styles.segment} style={{ width: `${seg.value * 100}%` }}>
                        <span className={styles.value}>{seg.value}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default SegmentChart;
