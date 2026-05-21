import {useEffect, useRef} from "react";

const TAIL_LENGTH = 100;

export const useSvgPath = () => {
    const pathRef = useRef<SVGPathElement | null>(null);

    const dotLeftRef = useRef<SVGRectElement | null>(null);
    const dotRightRef = useRef<SVGRectElement | null>(null);

    const tailLeftRefs = useRef<SVGRectElement[]>([]);
    const tailRightRefs = useRef<SVGRectElement[]>([]);

    useEffect(() => {
        const path = pathRef.current;
        const dot = dotLeftRef.current;
        const mainDot = dotRightRef.current;
        if (!path || !dot || !mainDot) return;

        const totalLength = path.getTotalLength();
        let progress = 0;
        let rafId: number;

        // tail history: stores recent positions
        const historyLeft: { x: number; y: number }[] = [];
        const historyRight: { x: number; y: number }[] = [];

        const animate = () => {
            progress += 1.2; // speed — px per frame
            if (progress > totalLength) progress = 0;

            const point = path.getPointAtLength(progress);

            const oppositeProgress = (progress + totalLength / 2) % totalLength;
            const oppositePoint = path.getPointAtLength(oppositeProgress);

            // move main dot
            dot.setAttribute('transform', `matrix(1,0,0,1,${point.x - 2.5},${point.y - 2.5})`);

            // move opposite dot
            mainDot.setAttribute('transform', `matrix(1,0,0,1,${oppositePoint.x - 2.5},${oppositePoint.y - 2.5})`);

            // update history
            historyLeft.unshift({ x: point.x, y: point.y });
            if (historyLeft.length > TAIL_LENGTH) historyLeft.pop();

            historyRight.unshift({ x: oppositePoint.x, y: oppositePoint.y });
            if (historyRight.length > TAIL_LENGTH) historyRight.pop();

            tailLeftRefs.current.forEach((rect, i) => {
                if (!rect) return;
                const pos = historyLeft[i + 1];
                if (!pos) return;
                rect.setAttribute('transform', `matrix(1,0,0,1,${pos.x - 1},${pos.y - 1})`);
                rect.style.opacity = String(1 - i / TAIL_LENGTH);
            });

            tailRightRefs.current.forEach((rect, i) => {
                if (!rect) return;
                const pos = historyRight[i + 1];
                if (!pos) return;
                rect.setAttribute('transform', `matrix(1,0,0,1,${pos.x - 1},${pos.y - 1})`);
                rect.style.opacity = String(1 - i / TAIL_LENGTH);
            });

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <svg
            viewBox="-11.5 -11.5 1012 414"
            fill="none"
            style={{
                position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'visible',
                    pointerEvents: 'none',
                    zIndex: 2
            }}
        >
            {/* static border path */}
            <path
                ref={pathRef}
            d="M16.9998 0.498047C7.88706 0.498047 0.499756 7.88536 0.499756 16.9981V374.838C0.499756 383.951 7.88708 391.338 16.9998 391.338H328C337.113 391.338 344.5 383.951 344.5 374.838V274.859V268.474V226.359C344.5 217.799 351.44 210.859 360 210.859H629C637.56 210.859 644.5 217.799 644.5 226.359L644.5 268.474V374.838C644.5 383.951 651.887 391.338 661 391.338H972C981.113 391.338 988.5 383.951 988.5 374.838V16.9981C988.5 7.88536 981.113 0.498047 972 0.498047H661C651.887 0.498047 644.5 7.88535 644.5 16.998V60.1582H644.257V166.158C644.257 174.719 637.317 181.658 628.757 181.658H360C351.44 181.658 344.5 174.719 344.5 166.158V146.111V111.158V16.998C344.5 7.88535 337.113 0.498047 328 0.498047H16.9998Z"
            stroke="#D7E5EB"
            strokeWidth="1"
            />

            {/* svg filter */}
            <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
                <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
                </feMerge>
                </filter>
                </defs>

            {/* tail rects */}
            {Array.from({ length: TAIL_LENGTH }).map((_, i) => (
                <rect
                    key={i}
                    ref={el => { if (el) tailLeftRefs.current[i] = el; }}
                    width="1"
                    height="2"
                    rx="1"
                    fill="#869aa1"
                    opacity="0"
                    filter="url(#glow)"
                />
            ))}

            {/* tail rects */}
            {Array.from({ length: TAIL_LENGTH }).map((_, i) => (
                <rect
                    key={i}
                    ref={el => { if (el) tailRightRefs.current[i] = el; }}
                    width="1"
                    height="2"
                    rx="1"
                    fill="#869aa1"
                    opacity="0"
                    filter="url(#glow)"
                />
            ))}

            {/* leading dot */}
            <rect
                ref={dotLeftRef}
                width="5"
                height="5"
                rx="2.5"
                fill="#869AA1"
                filter="url(#glow)"
            />

            <rect
                ref={dotRightRef}
                width="5"
                height="5"
                rx="2.5"
                fill="#869AA1"
            />
        </svg>
    )
};