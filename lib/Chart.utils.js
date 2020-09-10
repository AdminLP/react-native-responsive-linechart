"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDataDimensions = void 0;
exports.calculateDataDimensions = function (dimensions, padding) {
    if (dimensions) {
        return {
            top: 0,
            left: 0,
            width: dimensions.width - padding.left - padding.right,
            height: dimensions.height - padding.top - padding.bottom,
        };
    }
    return undefined;
};
