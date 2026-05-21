"use client"

import styles from './ConsiderationSection.module.scss';
import {InfoCard, LinearLayout, SectionContent, SectionLabel, SectionTitle} from "@/ui";

const ConsiderationSection = () => {

    return (
        <div className={styles.root}>
            <LinearLayout className={styles.linearLayout}>
                <div className={styles.sectionInfo}>
                    <SectionLabel
                        label="Backed by 2000+ research papers"
                    />

                    <div className={styles.groupContent}>
                        <SectionTitle
                            primaryLabel="Will analyzing my face"
                            secondaryLabel="make me insecure?"
                            color="primary"
                        />

                        <SectionContent
                            align="justify"
                            content="Get your personalized facial analysis and transformation plan based n 2000+ academic studies."
                        />
                    </div>

                    <button className={styles.actionButton}>
                        <span>
                            Start your glow-up
                        </span>

                        <div className={styles.arrowButton}>
                        </div>
                    </button>
                </div>

                <InfoCard/>
            </LinearLayout>
        </div>
    )
}

export default ConsiderationSection;
