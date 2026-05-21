import clsx from "clsx";
import styles from "./VanityCard.module.scss";
import {IVanityCardProps} from "@/app/components/ui/VanityCard/VanityCard.types";
import {memo} from "react";

const VanityCard = ({title, gridArea, miniCards} : IVanityCardProps) => {
    return(
        <div className={clsx(styles.vanityCardContainer, styles[gridArea])}>
            <div className={styles.cardTitle}>{title}</div>

            <div className={styles.miniCardContainer}>
                {miniCards.map((miniCard: string, i: number) => (
                    <div key={i} className={styles.miniCardContent}>
                        {miniCard}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(VanityCard);