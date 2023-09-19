"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import { screensize } from '../../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 80%;\n    .input-wrapper {\n        display: flex;\n        justify-content: space-between;\n        flex-direcation: column;\n        align-items: center;\n        column-gap: 4px;\n        input {\n            width: 43%\n        }\n    }\n"])));
exports.Container = Container;