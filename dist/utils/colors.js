"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = void 0;
var _colors;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var colors = (_colors = {
  "white": "#ffffff",
  "blue1": "#cadeef",
  "blue2": "#9bd4e4",
  "blue3": "#39ace7",
  "blue4": "#0784b5",
  "red": "#0784b5"
}, _defineProperty(_colors, "red", "#ff0000"), _defineProperty(_colors, "softRed", "#ffcccc"), _colors);
exports.colors = colors;