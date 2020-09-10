import * as React from 'react';
import { ViewStyle } from 'react-native';
import { AxisDomain, ChartDataPoint, Padding } from './types';
declare type Props = {
    /** All styling can be used except for padding. If you need padding, use the explicit `padding` prop below.*/
    style?: ViewStyle;
    /** Data to be used by `<Area />` or `<Line />` children. Not required, and can be overridden in Area or Line components. */
    data?: ChartDataPoint[];
    /** Domain for the horizontal (X) axis. */
    xDomain?: AxisDomain;
    /** Domain for the vertical (Y) axis. */
    yDomain?: AxisDomain;
    /** Padding of the chart. Use this instead of setting padding in the `style` prop. */
    padding?: Padding;
};
declare const Chart: React.FC<Props>;
export { Chart };
