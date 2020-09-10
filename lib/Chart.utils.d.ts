import { Padding } from './types';
export declare const calculateDataDimensions: (dimensions: {
    width: number;
    height: number;
} | undefined, padding: Required<Padding>) => {
    top: number;
    left: number;
    width: number;
    height: number;
} | undefined;
