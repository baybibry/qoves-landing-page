import styles from './HeroCards.module.scss';
import { cardContents } from './HeroCards.data';

const HeroCards = () => {

    return (
        <div className={styles.root}>
            {
                cardContents.map((item, index) =>(
                    <div
                        key={`${item.id}-${index}`}
                        className={styles.cardContainer}
                    >
                        <div className={styles.innerCardWrapper}>
                            <span className={styles.badge}>
                                {item.id}
                            </span>

                            <p className={styles.content}>
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HeroCards;