"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _sectionElement = require("./sectionElement");
var _general = require("../general");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SectionForm = function SectionForm(_ref) {
  var section = _ref.section,
    label = _ref.label,
    onAddField = _ref.onAddField,
    onToggleQustion = _ref.onToggleQustion;
  return /*#__PURE__*/_react.default.createElement(_sectionElement.SectionContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, label), /*#__PURE__*/_react.default.createElement("div", {
    className: "button-wrapper"
  }, section.questions.length == 0 && /*#__PURE__*/_react.default.createElement(_general.StyledButton, {
    className: "add-button",
    onClick: onAddField
  }, "+ Question"), section.questions.length > 0 && /*#__PURE__*/_react.default.createElement(_general.StyledButton, {
    className: "add-button",
    onClick: onToggleQustion
  }, section.isQuestionsVisible ? "Hide" : "Show")));
};
var _default = SectionForm;
exports.default = _default;