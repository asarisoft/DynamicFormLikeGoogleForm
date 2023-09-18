"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../utils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Membuat sebuah komponen styled untuk tombol
var StyledButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", "; /* Warna latar belakang */\n  color: #fff; /* Warna teks */\n  padding: 8px 16px; /* Padding atas dan bawah 8px, padding kiri dan kanan 16px */\n  border: none; /* Tidak ada border */\n  border-radius: 4px;: 4px; /* Sudut melengkung */\n  cursor: pointer; /* Kursor berubah menjadi tangan saat diarahkan */\n  transition: background-color 0.2s ease-in-out; /* Transisi warna latar belakang */\n\n  &:hover {\n    background-color: #0056b3; /* Warna latar belakang saat hover */\n  }\n"])), _utils.colors.blue4);
exports.StyledButton = StyledButton;