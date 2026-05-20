import styles from './FAQSection.module.scss';
import { SectionContent, SectionLabel, SectionTitle, Accordion } from "@/ui";
import faqData from '../../../data/faq.json';
import LinearLayout from "@/app/components/ui/LinearLayout/LinearLayout";

const FAQSection = () => {
    return (
        <div className={styles.root}>
            <LinearLayout
                isHaveVerticalBorder
                className={styles.linearLayout}
            >
                <div className={styles.sectionInfo}>
                    <SectionLabel
                        label="Introducing"
                        color="secondary"
                    />

                    <SectionTitle
                        primaryLabel="Frequently asked"
                        secondaryLabel="questions"
                        color="secondary"
                    />

                    <SectionContent
                        color="secondary"
                        content={`If you have any further questions, please use the chat box in the bottom right or contact us by email at hello@qoves.com.`}
                    />
                </div>

                <div className={styles.accordionWrapper}>
                    <Accordion categories={faqData.categories} />
                </div>
            </LinearLayout>
        </div>
    );
};

export default FAQSection;
