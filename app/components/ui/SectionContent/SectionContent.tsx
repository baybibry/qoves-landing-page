import {ISectionContentProps} from './SectionContent.types';
import styles from './SectionContent.module.scss';
import clsx from 'clsx';

const SectionContent = ({
                            content,
                            color = 'default',
                            align = 'center',
}: ISectionContentProps) => {
    return (
        <div className={
            clsx(
                styles.root,
                styles[color],
            )
        }
        style={{ textAlign: align }}
        >
            {content}
        </div>
    )
};

export default SectionContent;
