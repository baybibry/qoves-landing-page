import type { CurveDataPoint } from "../CurveGraph.types";

export const X_MIN  = -3.5;
export const X_MAX  =  3.5;
export const POINTS =  300;

export const pdf = (x: number): number =>
    Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);

export const PEAK = pdf(0);

export const invNorm = (p: number): number => {
    p = Math.max(1e-7, Math.min(1 - 1e-7, p));

    const a = [0, -3.969683028665376e1,  2.209460984245205e2, -2.759285104469687e2,
                   1.383577518672690e2,  -3.066479806614716e1,  2.506628277459239e0];
    const b = [0, -5.447609879822406e1,  1.615858368580409e2, -1.556989798598866e2,
                   6.680131188771972e1,  -1.328068155288572e1];
    const c = [0, -7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838e0,
                  -2.549732539343734e0,   4.374664141464968e0,   2.938163982698783e0];
    const d = [0,  7.784695709041462e-3,  3.224671290700398e-1,
                   2.445134137142996e0,   3.754408661907416e0];

    const pL = 0.02425;
    const pH = 1 - pL;

    if (p < pL) {
        const q = Math.sqrt(-2 * Math.log(p));
        return (((((c[1]*q+c[2])*q+c[3])*q+c[4])*q+c[5])*q+c[6]) /
               ((((d[1]*q+d[2])*q+d[3])*q+d[4])*q+1);
    }

    if (p <= pH) {
        const q = p - 0.5;
        const r = q * q;
        return (((((a[1]*r+a[2])*r+a[3])*r+a[4])*r+a[5])*r+a[6])*q /
               (((((b[1]*r+b[2])*r+b[3])*r+b[4])*r+b[5])*r+1);
    }

    const q = Math.sqrt(-2 * Math.log(1 - p));
    return -(((((c[1]*q+c[2])*q+c[3])*q+c[4])*q+c[5])*q+c[6]) /
             ((((d[1]*q+d[2])*q+d[3])*q+d[4])*q+1);
};

export const generateCurveData = (highlightFrom: number): CurveDataPoint[] => {
    const pts: CurveDataPoint[] = [];
    for (let i = 0; i < POINTS; i++) {
        const x = X_MIN + (i / (POINTS - 1)) * (X_MAX - X_MIN);
        const y = pdf(x);
        pts.push({ x, curve: y, highlighted: x >= highlightFrom ? y : undefined });
    }
    return pts;
};
