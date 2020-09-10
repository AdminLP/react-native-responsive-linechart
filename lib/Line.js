"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
var deepmerge_1 = __importDefault(require("deepmerge"));
var React = __importStar(require("react"));
var react_native_svg_1 = require("react-native-svg");
var ChartContext_1 = __importDefault(require("./ChartContext"));
var Line_utils_1 = require("./Line.utils");
var utils_1 = require("./utils");
var Line = function (props) {
    var _a = React.useContext(ChartContext_1.default), contextData = _a.data, dimensions = _a.dimensions, domain = _a.domain, lastTouch = _a.lastTouch;
    var _b = deepmerge_1.default(defaultProps, props), _c = _b.theme, stroke = _c.stroke, points = _c.points, tooltipComponent = _b.tooltipComponent, _d = _b.data, data = _d === void 0 ? contextData : _d, tension = _b.tension, smoothing = _b.smoothing;
    if (!dimensions) {
        return null;
    }
    var scaledPoints = utils_1.scalePointsToDimensions(data, domain, dimensions);
    var tooltipIndex = Line_utils_1.calculateTooltipIndex(scaledPoints, lastTouch);
    var adjustedPoints = Line_utils_1.adjustPointsForThickStroke(scaledPoints, stroke);
    var pointsWithinDimensions = adjustedPoints.filter(function (p) { return p.x >= 0 && p.x <= dimensions.width; });
    var path = utils_1.svgPath(pointsWithinDimensions, smoothing, tension);
    return (React.createElement(React.Fragment, null,
        React.createElement(react_native_svg_1.Path, { d: path, fill: "none", strokeLinecap: "round", stroke: stroke.color, strokeWidth: stroke.width, strokeOpacity: stroke.opacity }),
        pointsWithinDimensions.map(function (p, index) { return (React.createElement(react_native_svg_1.Circle, { key: "x" + p.x + ", y" + p.y, cx: p.x, cy: p.y, r: points.radius, fill: tooltipIndex === index ? points.selectedColor : points.color })); }),
        tooltipIndex !== undefined &&
            tooltipComponent &&
            React.cloneElement(tooltipComponent, { value: data[tooltipIndex], position: scaledPoints[tooltipIndex] })));
};
exports.Line = Line;
var defaultProps = {
    theme: {
        points: {
            color: 'black',
            selectedColor: 'red',
            radius: 5,
        },
        stroke: {
            color: 'black',
            width: 1,
            opacity: 1,
        },
    },
    tension: 0.3,
    smoothing: 'none',
};
