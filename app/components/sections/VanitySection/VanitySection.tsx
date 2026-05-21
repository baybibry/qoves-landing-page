'use client';

import styles from './VanitySection.module.scss';
import { SectionContent, SectionTitle, VanityCard } from "@/ui";
import { vanityCard } from './VanitySection.data';

const VanitySection = () => {
    return (
        <div className={styles.root}>
            <div className={styles.vanityContainer}>
                <div className={styles.sectionInfo}>
                    <div className={styles.groupContent}>
                        <SectionTitle
                            primaryLabel="Is it vain to care"
                            secondaryLabel="about your appearance?"
                            color="primary"
                        />
                        <SectionContent
                            content="Many feel guilty about wanting to improve their looks, fearing it means they're shallow or insecure. But here's what research tells us : caring about appearance is natural. Like health, finances, and education, it's just another form of self-improvement."
                        />
                    </div>
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.scrollWrapper}>
                        {vanityCard.map((item, index) => (
                            <VanityCard
                                key={`${index}-${item.title}`}
                                title={item.title}
                                gridArea={item.gridArea}
                                miniCards={item.miniCards}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VanitySection;
