import * as React from 'react';
import { ChartDataPoint, Smoothing, Stroke } from './types';
declare type Props = {
    /** Theme for the line */
    theme?: {
        stroke?: Stroke;
    };
    smoothing?: Smoothing;
    /** Only works in combination with smoothing='bezier'. Value between 0 and 1. */
    tension?: number;
    /** Component to render tooltips. An example component is included: <BoxTooltip />. */
    tooltipComponent?: JSX.Element;
    /** Data for the chart. Overrides optional data provided in `<Chart />`. */
    data?: ChartDataPoint[];
};
declare const Line: React.FC<Props>;
export { Line };
