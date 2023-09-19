"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _section = _interopRequireDefault(require("./section"));
var _question = _interopRequireDefault(require("./question"));
var _header = _interopRequireDefault(require("./header"));
var _indexElement = require("./indexElement");
var _general = require("../general");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var initialData = [{
  "sections": [{
    "label": "Section 1",
    "questions": [{
      "type": "",
      "question": ""
    }],
    "isQuestionsVisible": true
  }],
  "title": ""
}];
var Form = /*#__PURE__*/function (_Component) {
  _inherits(Form, _Component);
  var _super = _createSuper(Form);
  function Form(props) {
    var _this;
    _classCallCheck(this, Form);
    _this = _super.call(this, props);
    // Fungsi untuk menambah section baru
    _defineProperty(_assertThisInitialized(_this), "addSection", function () {
      var newSection = {
        label: "Section ".concat(_this.state.sections.length + 1),
        questions: [],
        isQuestionsVisible: true // Tambahkan ini
      };

      _this.setState(function (prevState) {
        return {
          sections: [].concat(_toConsumableArray(prevState.sections), [newSection])
        };
      });
    });
    // Fungsi untuk menambah pertanyaan baru ke dalam section
    _defineProperty(_assertThisInitialized(_this), "addQuestionToSection", function (sectionIndex) {
      // Set semua pertanyaan dalam section sebagai non-aktif saat pertanyaan baru ditambahkan
      var updatedSections = _toConsumableArray(_this.state.sections);
      updatedSections[sectionIndex].questions.forEach(function (question) {
        question.isActive = false;
      });

      // update data question
      updatedSections[sectionIndex].questions.push({
        isActive: true
      });
      updatedSections[sectionIndex].isQuestionsVisible = true;
      _this.setState({
        sections: updatedSections
      });
    });
    // digunakan untuk menghapus question
    _defineProperty(_assertThisInitialized(_this), "removeQuestionFromSection", function (sectionIndex, questionIndex) {
      var updatedSections = _toConsumableArray(_this.state.sections);
      var section = updatedSections[sectionIndex];
      if (section) {
        var updatedquestions = section.questions.filter(function (question, index) {
          return index !== questionIndex;
        });
        section.questions = updatedquestions;
        _this.setState({
          sections: updatedSections
        });
      }
    });
    // Fungsi untuk mengatur pertanyaan sebagai aktif saat diklik
    _defineProperty(_assertThisInitialized(_this), "setActiveQuestion", function (sectionIndex, questionIndex) {
      var updatedSections = _toConsumableArray(_this.state.sections);
      updatedSections[sectionIndex].questions.forEach(function (question, index) {
        question.isActive = index === questionIndex;
      });
      _this.setState({
        sections: updatedSections
      });
    });
    // hide show questions di dalam section
    _defineProperty(_assertThisInitialized(_this), "toggleQuestionsVisibility", function (sectionIndex) {
      var updatedSections = _toConsumableArray(_this.state.sections);
      updatedSections[sectionIndex].isQuestionsVisible = !updatedSections[sectionIndex].isQuestionsVisible;
      _this.setState({
        sections: updatedSections
      });
    });
    // delete section 
    _defineProperty(_assertThisInitialized(_this), "deleteSection", function (sectionIndex) {
      var updatedSections = _toConsumableArray(_this.state.sections);
      updatedSections.splice(sectionIndex, 1);
      _this.setState({
        sections: updatedSections
      });
    });
    _defineProperty(_assertThisInitialized(_this), "populateData", function () {
      var sections = _this.state.sections;
      var updatedSections = _toConsumableArray(sections);
      // Loop melalui setiap section
      updatedSections.forEach(function (section, sectionIndex) {
        // Loop melalui setiap question dalam section
        section.questions.forEach(function (question, questionIndex) {
          // Di sini Anda bisa mengambil data dari komponen Question dan menggantinya
          // Berdasarkan indeks pertanyaan (question index)
          var fieldData = _this.fieldRefs[sectionIndex][questionIndex].state;
          updatedSections[sectionIndex].questions[questionIndex] = fieldData;
        });
      });
      _this.setState({
        sections: updatedSections,
        title: _this.headerRef.state
      });
      return updatedSections;
    });
    _this.state = {
      sections: [],
      title: ""
    };
    _this.fieldRefs = [];
    _this.headerRef = null;
    return _this;
  }
  _createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        sections: initialData[0]['sections'],
        title: initialData[0]['title']
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var sections = this.state.sections;
      return /*#__PURE__*/_react.default.createElement(_indexElement.FormContainer, null, /*#__PURE__*/_react.default.createElement(_header.default, {
        ref: function ref(_ref) {
          _this2.headerRef = _ref;
        },
        title: this.state.title
      }), sections === null || sections === void 0 ? void 0 : sections.map(function (section, sectionIndex) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: sectionIndex
        }, /*#__PURE__*/_react.default.createElement(_section.default, {
          label: section.label,
          section: section,
          onAddField: function onAddField() {
            return _this2.addQuestionToSection(sectionIndex);
          },
          onToggleQustion: function onToggleQustion() {
            return _this2.toggleQuestionsVisibility(sectionIndex);
          },
          onDeleteSection: function onDeleteSection() {
            return _this2.deleteSection(sectionIndex);
          }
        }), /*#__PURE__*/_react.default.createElement("div", {
          style: {
            display: section.isQuestionsVisible ? 'block' : 'none'
          }
        }, section.questions.map(function (question, questionIndex) {
          return /*#__PURE__*/_react.default.createElement(_question.default, {
            key: "".concat(sectionIndex).concat(questionIndex),
            question: question,
            questionIndex: questionIndex,
            onClick: function onClick() {
              return _this2.setActiveQuestion(sectionIndex, questionIndex);
            },
            onRemoveQuestion: function onRemoveQuestion() {
              return _this2.removeQuestionFromSection(sectionIndex, questionIndex);
            },
            ref: function ref(_ref2) {
              if (!_this2.fieldRefs[sectionIndex]) {
                _this2.fieldRefs[sectionIndex] = [];
              }
              _this2.fieldRefs[sectionIndex][questionIndex] = _ref2; // Simpan referensi ke komponen Question
            },

            onAddQuestion: function onAddQuestion() {
              return _this2.addQuestionToSection(sectionIndex);
            }
          });
        })));
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "form-footer"
      }, /*#__PURE__*/_react.default.createElement(_general.StyledButton, {
        onClick: this.addSection
      }, "Add Section")));
    }
  }]);
  return Form;
}(_react.Component);
var _default = Form;
exports.default = _default;