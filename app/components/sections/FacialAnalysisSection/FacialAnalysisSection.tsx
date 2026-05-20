import styles from './FacialAnalysisSection.module.scss';
import {SectionLabel, SectionTitle, SectionContent} from "@/ui";
import Image from "next/image";
import clsx from "clsx";
import { graphLayer1, graphLayer2 } from './FacialAnalysisSection.data';

const FacialAnalysisSection = () => {

    return (
        <div className={styles.root}>
            <div className={styles.sectionInfo}>

                <SectionLabel label="Personalized Aesthetics" />

                <SectionTitle
                    primaryLabel="Your complete"
                    secondaryLabel="facial analysis"
                    color="primary"
                />

                <SectionContent
                    color="primary"
                    content={`Every face is unique. We assess more than 100 unique facial markers to \n give you a precise understanding of your aesthetics.`}
                />

            </div>

            <div className={styles.graphContainer}>
                <div className={clsx(styles.graphGridWrapper, styles.gridLayout1)}>
                    {
                        graphLayer1.map((item, index) =>(
                            <div
                                className={styles.graphImage}
                                key={`${index}-${item.img}-${item.area}`}
                                style={{gridArea: item.area}}
                            >
                                <Image
                                    fill
                                    alt={item.img}
                                    src={`/assets/graph/${item.img}.webp`}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className={clsx(styles.graphGridWrapper, styles.gridLayout2)}>
                    {
                        graphLayer2.map((item, index) =>(
                            <div
                                className={styles.graphImage}
                                key={`${index}-${item.img}-${item.area}`}
                                style={{gridArea: item.area}}
                            >
                                <Image
                                    fill
                                    alt={item.img}
                                    src={`/assets/graph/${item.img}.webp`}
                                />
                            </div>
                        ))
                    }
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
