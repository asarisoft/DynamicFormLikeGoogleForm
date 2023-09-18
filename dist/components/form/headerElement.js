"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderFormContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../utils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeaderFormContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-top: 2px solid ", ";\n  border-radius: 4px;: 20px;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-top: 5px solid ", ";\n  display: flex;\n  flex-direction: column;\n"])), _utils.colors.blue4, _utils.colors.blue4);
exports.HeaderFormContainer = HeaderFormContainer;
var _default = true;
exports.default = _default;