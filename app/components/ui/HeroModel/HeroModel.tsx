"use client";

import styles from './HeroModel.module.scss';
import clsx from "clsx";
import Image from "next/image";
import {useSvgPath} from "./hooks/useSvgPath";
import { cardBeforeAfter } from './HeroModel.data';

const HeroModel = () => {

    const svgPath = useSvgPath();

    return (
        <div className={styles.root}>

            {svgPath}

            <div className={styles.innerWrapper}>
                {cardBeforeAfter.map((item, index) => (
                    <div
                        key={`${index}-${item.id}-${item.title}`}
                        className={clsx(styles.card, styles[item.id])}
                    >
                        <span>{item.title}</span>
                        <Image
                            fill
                            alt="facial-aesthetics"
                            src={`/assets/person/${item.image}`}
                            style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroModel;