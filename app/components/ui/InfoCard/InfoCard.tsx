"use client"

import styles from './InfoCard.module.scss';
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import { useRef} from "react";
import { cardContents } from './InfoCard.data';

gsap.registerPlugin(ScrollTrigger);

const InfoCard = () => {

    const rootCardRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        ScrollTrigger.refresh();

        const buildAnimation = () => {
            const rootCard = rootCardRef.current;

            if (!rootCard) return;

            const section = rootCard.parentElement;
            if (!section) return;

            const media = gsap.matchMedia();

            media.add("(max-width: 1000px)", () => {

                const totalWidth = rootCard.scrollWidth - section.offsetWidth;
                if (totalWidth <= 0) return;

                gsap.to(rootCard, {
                    x: -totalWidth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 20%",
                        end: () => `+=${section.offsetHeight}`,
                        scrub: 5,
                        pin: false,
                        anticipatePin: 1,
                        pinSpacing: true,
                        markers: false
                    }
                });

                ScrollTrigger.refresh();
            });
        }

        buildAnimation();

        // Rebuild on resize with debounce
        let timer: ReturnType<typeof setTimeout>;

        const onResize = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                ScrollTrigger.getAll().forEach(t => t.kill()); // kill old
                gsap.set(rootCardRef.current, { clearProps: "x" }); // reset x
                buildAnimation(); // rebuild fresh
            }, 200);
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(t => t.kill());
            gsap.set(rootCardRef.current, { clearProps: "all" });
        };

    }, { scope: rootCardRef });

    return (
        <div
            className={styles.root}
            ref={rootCardRef}
        >
            {
                cardContents.map((item, index) =>(
                    <div
                        key={`${index}-${item.img}-${item.title}`}
                        className={styles.cardWrapper}
                    >
                        <div className={styles.cardInnerWrapper}>

                            <div className={styles.cardImageContainer}>
                                <Image
                                    fill
                                    alt={item.img}
                                    src={`/assets/card/${item.img}.webp`}
                                />
                            </div>

                            <span>
                                {item.title}
                            </span>

                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default InfoCard;
