"use client";

import { useRef } from 'react';
import { ISectionLabelProps } from './SectionLabel.types';
import styles from './SectionLabel.module.scss';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const RADIUS = 10; // matches $radius-xl token

const SectionLabel = ({ label, color = 'default' }: ISectionLabelProps) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const svgRef  = useRef<SVGSVGElement>(null);
    const rectRef = useRef<SVGRectElement>(null);

    useGSAP(() => {
        const root = rootRef.current;
        const svg  = svgRef.current;
        const rect = rectRef.current;
        if (!root || !svg || !rect) return;

        const { width, height } = root.getBoundingClientRect();

        // Size SVG to match the element exactly
        svg.setAttribute('width',   String(width));
        svg.setAttribute('height',  String(height));
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

        // Inset rect by 1px on each side so stroke doesn't get clipped
        const rw = width  - 2;
        const rh = height - 2;
        rect.setAttribute('width',  String(rw));
        rect.setAttribute('height', String(rh));
        rect.setAttribute('x',  '1');
        rect.setAttribute('y',  '1');
        rect.setAttribute('rx', String(RADIUS));

        // Perimeter of a rounded rectangle
        const perimeter = 2 * (rw + rh) + RADIUS * (2 * Math.PI - 8);

        gsap.set(rect, { strokeDasharray: perimeter, strokeDashoffset: perimeter });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: root,
                start: 'top 88%',
                once: true,
            },
        });

        tl.to(rect, {
            strokeDashoffset: 0,
            duration: 0.9,
            ease: 'power2.inOut',
        })

    }, { scope: rootRef });

    return (
        <div ref={rootRef} className={clsx(styles.root, styles[color])}>
            <svg
                ref={svgRef}
                className={styles.borderSvg}
                fill="none"
                aria-hidden="true"
            >
                <rect
                    ref={rectRef}
                    className={styles.borderRect}
                    fill="none"
                    strokeWidth="1"
                />
            </svg>
            <span>{label}</span>
        </div>
    );
};

export default SectionLabel;
