"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Chart = void 0;
var React = __importStar(require("react"));
var deepmerge_1 = __importDefault(require("deepmerge"));
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
var lodash_clamp_1 = __importDefault(require("lodash.clamp"));
var lodash_minby_1 = __importDefault(require("lodash.minby"));
var lodash_maxby_1 = __importDefault(require("lodash.maxby"));
var react_native_svg_1 = __importStar(require("react-native-svg"));
var useComponentDimensions_1 = require("./useComponentDimensions");
var ChartContext_1 = require("./ChartContext");
var Chart_utils_1 = require("./Chart.utils");
var Chart = function (props) {
    var _a = deepmerge_1.default(computeDefaultProps(props.data), props), style = _a.style, children = _a.children, _b = _a.data, data = _b === void 0 ? [] : _b, padding = _a.padding, xDomain = _a.xDomain, yDomain = _a.yDomain;
    var _c = useComponentDimensions_1.useComponentDimensions(), dimensions = _c.dimensions, onLayout = _c.onLayout;
    var dataDimensions = Chart_utils_1.calculateDataDimensions(dimensions, padding);
    var _d = React.useState(undefined), lastTouch = _d[0], setLastTouch = _d[1];
    var handleTouchEvent = function (evt) {
        if (dataDimensions) {
            setLastTouch({
                x: lodash_clamp_1.default(evt.nativeEvent.locationX - padding.left, 0, dataDimensions.width),
                y: lodash_clamp_1.default(evt.nativeEvent.locationY - padding.top, 0, dataDimensions.height),
            });
        }
        return true;
    };
    var panResponder = react_native_2.PanResponder.create({
        onMoveShouldSetPanResponder: function () { return true; },
        onPanResponderGrant: handleTouchEvent,
        onPanResponderMove: handleTouchEvent,
        onStartShouldSetPanResponder: handleTouchEvent,
    });
    return (React.createElement(react_native_1.View, { style: style, onLayout: onLayout }, !!dimensions && (React.createElement(react_native_1.View, __assign({ style: { width: dimensions.width, height: dimensions.height } }, panResponder.panHandlers),
        React.createElement(ChartContext_1.ChartContextProvider, { value: {
                data: data,
                dimensions: dataDimensions,
                domain: {
                    x: xDomain,
                    y: yDomain,
                },
                lastTouch: lastTouch,
            } },
            React.createElement(react_native_svg_1.default, { width: dimensions.width, height: dimensions.height },
                React.createElement(react_native_svg_1.G, { translateX: padding.left, translateY: padding.top }, children)))))));
};
exports.Chart = Chart;
var computeDefaultProps = function (data) {
    if (data === void 0) { data = []; }
    return ({
        padding: {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
        },
        xDomain: {
            min: data.length > 0 ? lodash_minby_1.default(data, function (d) { return d.x; }).x : 0,
            max: data.length > 0 ? lodash_maxby_1.default(data, function (d) { return d.x; }).x : 10,
        },
        yDomain: {
            min: data.length > 0 ? lodash_minby_1.default(data, function (d) { return d.y; }).y : 0,
            max: data.length > 0 ? lodash_maxby_1.default(data, function (d) { return d.y; }).y : 10,
        },
    });
};
