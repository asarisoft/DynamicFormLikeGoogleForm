"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldsContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../utils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

var FieldsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    text-align: left;\n    display: grid;\n    grid-template-columns: 20px 1fr;\n    border-radius: 4px;\n    margin: 4px 0 16px;\n    border: 1px solid #ccc;\n    padding: 8px;\n    position: relative;\n    &.active {\n        background-color: ", "\n    }\n    div {\n        .question {\n            display: grid;\n            grid-template-columns: 1fr 40px;\n            column-gap: 8px;\n            div {\n                display: flex;\n                justify-content: flex-start;\n                align-items: center;\n                span {\n                    width: 40px;\n                    display: block;\n                    text-align: center;\n                    font-weight: bold;\n                }\n                input {\n                    flex: 1\n                } \n            }\n            button {\n                background-color: red;\n            }\n        }\n        .body {\n            margin-top: 4px;\n            positon: relative;\n            select {\n                padding: 4px;\n                background-color: ", ";\n                color: white;\n                border-radius: 4px;\n                margin: 4px 0px 10px;\n            }\n            .btn-add-question {\n                position: absolute;\n                bottom: 8px;\n                right: 8px;\n            }\n        }\n    }\n"])), _utils.colors.blue1, _utils.colors.blue4);
exports.FieldsContainer = FieldsContainer;