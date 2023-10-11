"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../utils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 80%;\n    .input-wrapper {\n        display: flex;\n        flex-direcation: column;\n        align-items: center;\n        column-gap: 4px;\n        input {\n            width: 43%\n        }\n        .remove-button {\n            background-color: ", "\n        }\n    }\n    .last-wrapper {\n        display: flex;\n        align-items: center;\n        margin-top: 10px;\n    }\n    .label-last-options {\n        font-size: 14px;\n        max-width: 60%;\n        display: block;\n        margin-left: 10px;\n    }\n"])), _utils.colors.red);
exports.Container = Container;