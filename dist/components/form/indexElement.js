"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../utils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

var FormContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    .form-footer {\n        text-align: center;\n        margin-top: 8px;\n        width: 100%;\n        button {\n            margin: 0 8px;\n        }\n    }\n    @media ", " {\n        width: 80%;\n        margin: 0 auto;\n    }\n"])), _utils.screensize.desktopUp);
exports.FormContainer = FormContainer;