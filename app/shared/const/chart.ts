// ── CurveGraph ──────────────────────────────────────────────────────────────
export const CURVE_CHART_MARGIN   = { top: 10, right: 0, left: 0, bottom: 0 } as const;
export const CURVE_Y_DOMAIN_SCALE = 1.1;

// ── ScatterPlot ─────────────────────────────────────────────────────────────
export const SCATTER_INNER_DIST  = 3.2;
export const SCATTER_MID_DIST    = 5.5;
export const SCATTER_DOT_INITIAL = 16;
export const SCATTER_DOT_MIN     = 4;
export const SCATTER_DOT_RATIO   = 0.5;

// ── BarChart ────────────────────────────────────────────────────────────────
export const BAR_NARROW_WIDTH    = 200;
export const BAR_WIDE_WIDTH      = 300;

export const BAR_RIGHT_MARGIN    = { narrow: 52, mid: 65, wide: 80 } as const;
export const BAR_LABEL_FONT_SIZE = { narrow: 7,  mid: 8,  wide: 9  } as const;
export const BAR_RIGHT_EXTEND    = { narrow: 42, mid: 50, wide: 60 } as const;

export const BAR_SIZE_RATIO   = 0.09;
export const BAR_SIZE_MIN     = 4;
export const BAR_SIZE_MAX     = 5;
export const BAR_GAP_RATIO    = 0.08;
export const BAR_GAP_MIN      = 4;
export const BAR_GAP_MAX      = 16;
export const BAR_MARGIN_RATIO = 0.07;
export const BAR_MARGIN_MIN   = 4;
export const BAR_MARGIN_MAX   = 12;

export const BAR_CONTAINER_DEFAULT_WIDTH  = 300;
export const BAR_CONTAINER_DEFAULT_HEIGHT = 200;

// ── VerticalScaleChart ──────────────────────────────────────────────────────
export const VERTICAL_SCALE_INITIAL = 30;
export const VERTICAL_SCALE_TARGET  = 55;
