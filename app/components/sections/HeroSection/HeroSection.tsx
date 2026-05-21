import styles from './HeroSection.module.scss';
import {SectionContent,HeroCards, HeroModel, LinearLayout, SectionLabel, SectionTitle} from "@/ui";

const HeroSection = () => {
    return (
        <div className={styles.root}>
            <div className={styles.sectionInfo}>
                <SectionLabel
                    label="Introducing"
                    color="secondary"
                />

                <SectionTitle
                    primaryLabel="Get your personalised"
                    secondaryLabel="Qoves™ Plan"
                    color="secondary"
                />

                <SectionContent
                    color="secondary"
                    content="Understand your facial features and start your glow-up today with a proven action plan, no plastic surgery needed."
                />
            </div>

            <div className={styles.heroContent}>
                <LinearLayout isHaveVerticalBorder>
                    <HeroModel/>
                </LinearLayout>
                <LinearLayout
                    className={styles.cardsWrapper}
                    isHaveVerticalBorder
                >
                    <HeroCards/>
                </LinearLayout>
            </div>

        </div>
    )
}

export default HeroSection;
