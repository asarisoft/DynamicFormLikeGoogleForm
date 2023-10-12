"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _optionElement = require("./optionElement");
var _general = require("../../general");
var _sweetalert = _interopRequireDefault(require("sweetalert2"));
require("../global.css");
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
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // components/form/option.js
var Options = /*#__PURE__*/function (_Component) {
  _inherits(Options, _Component);
  var _super = _createSuper(Options);
  function Options(props) {
    var _this;
    _classCallCheck(this, Options);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "addOption", function () {
      _this.setState(function (prevState) {
        return {
          options: [].concat(_toConsumableArray(prevState.options), [{
            label: '',
            action: ''
          }])
        };
      });
      _this.props.onUpdateState(_this.state);
    });
    _defineProperty(_assertThisInitialized(_this), "handleOtherOptionsChange", function (e) {
      var _e$target = e.target,
        name = _e$target.name,
        checked = _e$target.checked;
      _this.setState(_defineProperty({}, name, checked), function () {
        _this.props.onUpdateState(_this.state);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "removeOption", function (index) {
      _sweetalert.default.fire({
        title: '',
        text: 'Are you sure to delete this option?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        customClass: {
          confirmButton: 'custom-yes-button',
          // Apply the custom CSS class to the Yes button
          cancelButton: 'cancel-button' // Apply the custom CSS class to the Yes button
        }
      }).then(function (result) {
        if (result.isConfirmed) {
          _this.setState(function (prevState) {
            var updatedOptions = _toConsumableArray(prevState.options);
            updatedOptions.splice(index, 1);
            return {
              options: updatedOptions
            };
          }, function () {
            _this.props.onUpdateState(_this.state);
          });
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleOptionChange", function (index, e) {
      var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;
      _this.setState(function (prevState) {
        var updatedOptions = _toConsumableArray(prevState.options);
        updatedOptions[index][name] = value;
        return {
          options: updatedOptions
        };
      }, function () {
        _this.props.onUpdateState(_this.state);
      });
    });
    _this.state = {
      options: [{
        label: '',
        action: ''
      }],
      other_options: false
    };
    return _this;
  }
  _createClass(Options, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      console.log("this.props.question.options", this.props.question);
      if (this.props.question.options) {
        this.setState({
          options: this.props.question.options,
          other_options: this.props.question.other_options
        }, function () {
          _this2.props.onUpdateState(_this2.state);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var options = this.state.options;
      var type = this.props.type;
      return /*#__PURE__*/_react.default.createElement(_optionElement.Container, null, options.map(function (option, index) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: index,
          className: "input-wrapper"
        }, /*#__PURE__*/_react.default.createElement(_general.Input, {
          type: "text",
          name: "label",
          placeholder: "Option Text",
          value: option.label,
          onChange: function onChange(e) {
            return _this3.handleOptionChange(index, e);
          }
        }), /*#__PURE__*/_react.default.createElement(_general.StyledButton, {
          onClick: _this3.addOption
        }, "+"), /*#__PURE__*/_react.default.createElement(_general.StyledButton, {
          onClick: function onClick() {
            return _this3.removeOption(index);
          },
          className: "remove-button"
        }, "x"));
      }), type == 'choice' && /*#__PURE__*/_react.default.createElement("div", {
        className: "last-wrapper"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        name: "other_options",
        checked: this.state.other_options,
        onChange: this.handleOtherOptionsChange
      }), /*#__PURE__*/_react.default.createElement("label", {
        className: "label-last-options"
      }, "Set last option as other options")));
    }
  }]);
  return Options;
}(_react.Component);
var _default = Options;
exports.default = _default;