"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TextArea = _styledComponents.default.textarea(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;: 4px;\n  margin-bottom: 16px;\n"])));
exports.TextArea = TextArea;