"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _option = _interopRequireDefault(require("./option"));
var _likert = _interopRequireDefault(require("./likert"));
var _scale = _interopRequireDefault(require("./scale"));
var _paragraph = _interopRequireDefault(require("./paragraph"));
var _indexElement = require("./indexElement");
var _general = require("../../general");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var Question = /*#__PURE__*/function (_Component) {
  _inherits(Question, _Component);
  var _super = _createSuper(Question);
  function Question(props) {
    var _this;
    _classCallCheck(this, Question);
    _this = _super.call(this, props);
    // update data ke props utama
    _defineProperty(_assertThisInitialized(_this), "handleInputQuestion", function (e) {
      _this.setState({
        title: e.target.value
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleAnswerTypeChange", function (e) {
      _this.setState({
        type: e.target.value
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleRequiredChange", function (e) {
      _this.setState(function (prevState) {
        return {
          required: !prevState.required
        };
      });
    });
    _this.state = {
      _id: "".concat(Date.now()),
      type: 'likert',
      title: '',
      descriptions: '',
      required: true
    };
    return _this;
  }
  _createClass(Question, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var question = this.props.question;
      // by default likert will be first 
      var defaultOptions = [{
        label: 'Sangat tidak setuju',
        action: ''
      }, {
        label: 'Tidak setuju',
        action: ''
      }, {
        label: 'Setuju',
        action: ''
      }, {
        label: 'Sangat Setuju',
        action: ''
      }];
      this.setState({
        _id: question._id || "".concat(Date.now()),
        type: question.type || 'likert',
        title: question.title || '',
        descriptions: question.descriptions || '',
        required: question.required || true,
        scale: question.scale,
        options: question.options || defaultOptions
      });
    }
  }, {
    key: "renderAnswerTypeComponent",
    value:
    // digunakan untuk render setalah type dirubah
    function renderAnswerTypeComponent() {
      var _this2 = this;
      var type = this.state.type;
      switch (type) {
        case 'likert':
          return /*#__PURE__*/_react.default.createElement(_likert.default, {
            type: "likert",
            question: this.props.question,
            onUpdateState: function onUpdateState(data) {
              _this2.setState({
                options: data
              });
            }
          });
        case 'choice':
          return /*#__PURE__*/_react.default.createElement(_option.default, {
            type: "choice"
            // digunakan untuk update state pas edit
            ,
            question: this.props.question,
            onUpdateState: function onUpdateState(data) {
              _this2.setState({
                options: data
              });
            }
          });
        case 'multiple':
          return /*#__PURE__*/_react.default.createElement(_option.default, {
            type: "multiple"
            // digunakan untuk update state pas edit
            ,
            question: this.props.question,
            onUpdateState: function onUpdateState(data) {
              _this2.setState({
                options: data
              });
            }
          });
        case 'scale':
          return /*#__PURE__*/_react.default.createElement(_scale.default
          // digunakan untuk update state pas edit
          , {
            question: this.props.question,
            onUpdateState: function onUpdateState(data) {
              _this2.setState({
                scale: _objectSpread({}, data)
              });
            }
          });
        case 'info':
          return /*#__PURE__*/_react.default.createElement(_paragraph.default, null);
        case 'paragraph':
          return /*#__PURE__*/_react.default.createElement(_paragraph.default, null);
        default:
          return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        question = _this$props.question,
        questionIndex = _this$props.questionIndex,
        onAddQuestion = _this$props.onAddQuestion,
        onRemoveQuestion = _this$props.onRemoveQuestion;
      return /*#__PURE__*/_react.default.createElement(_indexElement.FieldsContainer, {
        className: (question === null || question === void 0 ? void 0 : question.isActive) && 'active'
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, questionIndex + 1)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "question"
      }, /*#__PURE__*/_react.default.createElement("div", {
        onClick: this.props.onClick
      }, /*#__PURE__*/_react.default.createElement(_general.Input, {
        type: "hidden",
        name: "question",
        placeholder: "Input Question",
        value: this.state._id,
        onChange: this.handleInputQuestion
      }), /*#__PURE__*/_react.default.createElement(_general.Input, {
        type: "text",
        name: "question",
        placeholder: "Input Question",
        value: this.state.title,
        onChange: this.handleInputQuestion
      })), /*#__PURE__*/_react.default.createElement(_general.StyledButton, {
        onClick: function onClick() {
          return onRemoveQuestion(questionIndex);
        }
      }, "x")), /*#__PURE__*/_react.default.createElement("div", {
        className: "body",
        style: {
          display: question !== null && question !== void 0 && question.isActive ? 'block' : 'none'
        }
      }, /*#__PURE__*/_react.default.createElement(_general.StyledButton, {
        className: "btn-add-question",
        onClick: function onClick() {
          return onAddQuestion();
        }
      }, "+ Question"), /*#__PURE__*/_react.default.createElement("div", {
        className: "type-wrapper"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "required-wrapper"
      }, /*#__PURE__*/_react.default.createElement("label", null, " Required:"), /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        name: "required",
        disabled: true,
        checked: this.state.required,
        onChange: this.handleRequiredChange
      })), /*#__PURE__*/_react.default.createElement("select", {
        name: "answerType",
        value: this.state.type,
        onChange: this.handleAnswerTypeChange
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: "likert"
      }, "Likert"), /*#__PURE__*/_react.default.createElement("option", {
        value: "paragraph"
      }, "Paragraph"), /*#__PURE__*/_react.default.createElement("option", {
        value: "choice"
      }, "Single"), /*#__PURE__*/_react.default.createElement("option", {
        value: "multiple"
      }, "Multiple"), /*#__PURE__*/_react.default.createElement("option", {
        value: "scale"
      }, "Scale"), /*#__PURE__*/_react.default.createElement("option", {
        value: "info"
      }, "Info"))), this.renderAnswerTypeComponent())));
    }
  }]);
  return Question;
}(_react.Component);
var _default = Question;
exports.default = _default;