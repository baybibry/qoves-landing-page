"use client"

import clsx from "clsx";
import styles from "./VanityCard.module.scss";
import {IVanityCardProps} from "@/app/components/ui/VanityCard/VanityCard.types";
import {memo} from "react";
import {GlassCard} from "@developer-hub/liquid-glass";

const VanityCard = ({title, gridArea, miniCards} : IVanityCardProps) => {
    return(
        <div className={clsx(styles.vanityCardContainer, styles[gridArea])}>
            <GlassCard
                displacementScale={100}
                blurAmount={0}
                cornerRadius={10}
                padding="0"
            >
                <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>{title}</div>

                    <div className={styles.miniCardContainer}>
                        {miniCards.map((miniCard: string, i: number) => (
                            <div key={i} className={styles.miniCardContent}>
                                {miniCard}
                            </div>
                        ))}
                    </div>
                </div>
            </GlassCard>
        </div>
    )
}

export default memo(VanityCard);