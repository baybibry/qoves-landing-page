import type { ISectionTitleProps } from './SectionTitle.types';
import styles from './SectionTitle.module.scss';
import clsx from "clsx";

const SectionTitle = ({ primaryLabel, secondaryLabel, color = 'default' }: ISectionTitleProps) => {
    return (
        <div className={clsx(styles.root, styles[color])}>
            <span>
                {primaryLabel}
            </span>

            <span>
                {secondaryLabel}
            </span>
        </div>
    )
};

export default SectionTitle;
