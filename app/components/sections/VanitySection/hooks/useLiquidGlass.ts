// useLiquidGlass.ts
import { useEffect } from 'react';

export const useLiquidGlass = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    rootRef: React.RefObject<HTMLDivElement>,
    cardRefs?: React.MutableRefObject<(HTMLDivElement | null)[]>
) => {
    useEffect(() => {
        const canvas = canvasRef.current;
        const root = rootRef.current;
        if (!canvas || !root) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // ✅ match canvas size to root
        const resize = () => {
            canvas.width = root.offsetWidth;
            canvas.height = root.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // ✅ draw distortion per card
        const drawGlass = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            cardRefs?.current.forEach((card) => {
                if (!card) return;

                const rootRect = root.getBoundingClientRect();
                const cardRect = card.getBoundingClientRect();

                // card position relative to root
                const x = cardRect.left - rootRect.left;
                const y = cardRect.top - rootRect.top;
                const w = cardRect.width;
                const h = cardRect.height;

                // ✅ draw refraction distortion in card area
                ctx.save();
                ctx.beginPath();
                ctx.roundRect(x, y, w, h, 16); // match border-radius
                ctx.clip();

                // distortion effect — shift pixels
                for (let row = 0; row < h; row += 2) {
                    const wave = Math.sin((row / h) * Math.PI * 4) * 6; // ← wave strength
                    ctx.drawImage(
                        canvas,
                        x + wave, y + row,  // source with wave offset
                        w, 2,               // source slice
                        x, y + row,         // destination
                        w, 2
                    );
                }

                ctx.restore();
            });

            requestAnimationFrame(drawGlass);
        };

        drawGlass();

        return () => {
            window.removeEventListener('resize', resize);
        };

    }, [cardRefs]);
};