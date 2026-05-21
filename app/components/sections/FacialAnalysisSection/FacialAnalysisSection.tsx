"use client";

import styles from './FacialAnalysisSection.module.scss';
import Image from "next/image";
import clsx from "clsx";
import {
    SectionLabel, SectionTitle, SectionContent,
    CurveGraph, SlideGraph, ScatterPlot,
    BarChart, SegmentChart, VerticalScaleChart,
} from "@/ui";
import { useIsVisible } from "@/shared/hooks";

const FacialAnalysisSection = () => {
    // Drive --float-play on the section root so all chart float animations
    // are paused while the section is off-screen (zero compositor work)
    // and resume automatically as it scrolls into view.
    const { ref, isVisible } = useIsVisible<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={styles.root}
            data-float-active={isVisible ? '' : undefined}
            style={{ '--float-play': isVisible ? 'running' : 'paused' } as React.CSSProperties}
        >
            <div className={styles.sectionInfo}>

                <SectionLabel label="Personalized Aesthetics" />

                <SectionTitle
                    primaryLabel="Your complete"
                    secondaryLabel="facial analysis"
                    color="primary"
                />

                <SectionContent
                    color="primary"
                    content={`Every face is unique. We assess more than 100 unique facial markers to give you a precise understanding of your aesthetics.`}
                />

            </div>

            <div className={styles.graphContainer}>
                <div className={clsx(styles.graphGridWrapper, styles.gridLayout1)}>

                        <CurveGraph/>

                        <SlideGraph
                            label="Lip Smoothness"
                            value={56}
                        />

                        <ScatterPlot/>
                </div>

                <div className={clsx(styles.graphGridWrapper, styles.gridLayout2)}>

                    <BarChart/>

                    <SegmentChart/>

                    <VerticalScaleChart/>
                </div>

                <div className={styles.personModel}>
                    <div className={styles.personModelInner}>
                        <Image
                            fill
                            alt="facial-aesthetics"
                            src={`/assets/person/facial-analysis-model.webp`}
                            style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FacialAnalysisSection;
