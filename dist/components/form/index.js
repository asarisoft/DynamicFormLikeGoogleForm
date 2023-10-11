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
var _sweetalert = _interopRequireDefault(require("sweetalert2"));
require("./global.css");
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
        section_title: "",
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
    // Fungsi untuk mengganti title section
    _defineProperty(_assertThisInitialized(_this), "onUpdateTitleSection", function (e, sectionIndex) {
      var updatedSections = _toConsumableArray(_this.state.sections);
      updatedSections[sectionIndex].section_title = e.target.value;
      _this.setState({
        sections: updatedSections
      });
    });
    // digunakan untuk menghapus question
    _defineProperty(_assertThisInitialized(_this), "removeQuestionFromSection", function (sectionIndex, questionIndex) {
      _sweetalert.default.fire({
        title: '',
        text: 'Are you sure to delete this question?',
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
        }
      });
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
      _sweetalert.default.fire({
        title: '',
        text: 'Are you sure to delete this section?',
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
          var updatedSections = _toConsumableArray(_this.state.sections);
          updatedSections.splice(sectionIndex, 1);
          _this.setState({
            sections: updatedSections
          });
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "populateData", function () {
      var sections = _this.state.sections;
      var updatedSections = _toConsumableArray(sections);
      var result = [];
      updatedSections.forEach(function (section, sectionIndex) {
        var questionNumber = 1;
        section.questions.forEach(function (question, questionIndex) {
          var fieldData = _this.fieldRefs[sectionIndex][questionIndex].state;
          updatedSections[sectionIndex].questions[questionIndex] = fieldData;
          var dataQuestion = _this.buildFormQuestionFromState(fieldData, sectionIndex, updatedSections[sectionIndex].section_title, questionNumber);
          questionNumber++;
          result.push(dataQuestion);
        });
      });
      console.log("updatedSections", updatedSections);
      // update local state
      _this.setState({
        sections: updatedSections,
        title: _this.headerRef.state.title
      });
      // send to iframe
      console.log("resuls", result);
      _this.sendDataToParent({
        title: _this.headerRef.state.title || _this.state.title,
        json_form: result
      });
      // 
      return {
        title: _this.headerRef.state.title || _this.state.title,
        jsonForm: result
      };
    });
    // before submit
    _defineProperty(_assertThisInitialized(_this), "buildFormQuestionFromState", function (fieldData, sectionIndex, sectionTitle, questionNumber) {
      var dataQuestion = {
        _id: fieldData._id,
        title: fieldData.title,
        section_title: sectionTitle,
        section: sectionIndex + 1,
        questionNumber: questionNumber,
        descriptions: fieldData.descriptions,
        required: fieldData.required,
        other_options: fieldData.other_options
      };
      if (fieldData.type === "choice") {
        var _fieldData$options;
        var options = [];
        var actions = [];
        (_fieldData$options = fieldData.options) === null || _fieldData$options === void 0 || _fieldData$options.map(function (dt) {
          options.push(dt.label);
          actions.push(dt.action);
        });
        dataQuestion.form = {
          type: fieldData.type,
          option: options,
          action: actions
        };
      } else if (fieldData.type === "multiple" || fieldData.type === "likert") {
        var _fieldData$options2;
        var _options = [];
        (_fieldData$options2 = fieldData.options) === null || _fieldData$options2 === void 0 || _fieldData$options2.map(function (dt) {
          _options.push(dt.label);
        });
        dataQuestion.form = {
          type: fieldData.type,
          option: _options,
          other_options: fieldData.other_options
        };
      } else if (fieldData.type === "scale") {
        dataQuestion.form = {
          type: fieldData.type,
          start: fieldData.scale.start,
          to: fieldData.scale.to,
          label_start: fieldData.scale.label_start,
          label_to: fieldData.scale.label_to
        };
      } else {
        //paragraph, info
        dataQuestion.form = {
          type: fieldData.type
        };
      }
      return dataQuestion;
    });
    // before edit
    _defineProperty(_assertThisInitialized(_this), "buildStateFromListQuestion", function (inputData) {
      var sectionMap = new Map();
      var transformedData = [];
      inputData.forEach(function (item) {
        var sectionId = item.section;
        var sectionData = sectionMap.get(sectionId);
        if (!sectionData) {
          sectionData = {
            label: "Section ".concat(sectionId),
            section_title: item.section_title,
            questions: [],
            isQuestionsVisible: true
          };
          sectionMap.set(sectionId, sectionData);
          transformedData.push(sectionData);
        }
        var question = {
          _id: item._id,
          type: item.form.type,
          title: item.title,
          descriptions: item.descriptions,
          required: item.required,
          other_options: item.other_options
        };
        if (item.form.type === 'choice') {
          question.options = item.form.option.map(function (option, idx) {
            return {
              label: option,
              action: item.form.action[idx] // Assuming the first action is correct
            };
          });
        } else if (item.form.type === 'multiple' || item.form.type === 'likert') {
          question.options = item.form.option.map(function (option) {
            return {
              label: option,
              action: ''
            };
          });
        } else if (item.form.type === 'scale') {
          question.scale = {
            start: item.form.start,
            to: item.form.to,
            label_start: item.form.label_start,
            label_to: item.form.label_to
          };
        }
        sectionData.questions.push(question);
      });
      return transformedData;
    });
    // send data to iframe
    _defineProperty(_assertThisInitialized(_this), "sendDataToParent", function (data) {
      window.parent.postMessage(data, '*'); // '*' mengizinkan dari semua sumber
    });
    _this.state = {
      sections: [],
      title: ""
    };
    _this.fieldRefs = [];
    _this.headerRef = null;
    _this.dataReceivedFromIframe = false;
    return _this;
  }
  _createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var initialData = {
        "sections": [{
          "label": "Section 1",
          "section_title": "",
          "questions": [{
            "type": "",
            "title": ""
          }],
          "isQuestionsVisible": true
        }],
        "title": ""
      };

      // Menentukan apakah data telah diterima dari iframe
      // Fungsi untuk menangani pesan yang diterima dari dokumen utama
      var handleMessageFromIframe = function handleMessageFromIframe(event) {
        var receivedData = event.data;
        if (!receivedData.json_form) {
          return;
        }
        // Mengatur dataReceivedFromIframe menjadi true ketika data diterima
        _this2.dataReceivedFromIframe = true;
        var formData = _this2.buildStateFromListQuestion(receivedData.json_form);
        _this2.setState({
          sections: formData,
          title: receivedData.title
        });
      };

      // Menambahkan event listener untuk mendengarkan pesan dari iframe
      window.addEventListener('message', handleMessageFromIframe);
      // Jika data dari props dan tidak ada data dari iframe, maka inisialisasi state
      setTimeout(function () {
        if (!_this2.dataReceivedFromIframe) {
          if (_this2.props.formData) {
            var data = _this2.props.formData;
            var formData = _this2.buildStateFromListQuestion(data.json_form);
            _this2.setState({
              sections: formData,
              title: data.title
            });
          } else {
            _this2.setState({
              sections: initialData.sections,
              title: initialData.title
            });
          }
        }
      }, 1000);
      // For Test
      // const uu = [
      //   {
      //     "_id": "1696996749326",
      //     "title": "qqq",
      //     "section_title": "qq",
      //     "section": 1,
      //     "questionNumber": 1,
      //     "descriptions": "",
      //     "required": true,
      //     "form": {
      //       "type": "likert",
      //       "option": [
      //         "Sangat tidak setuju",
      //         "Tidak setuju",
      //         "Setuju",
      //         "Sangat Setuju"
      //       ]
      //     }
      //   },
      //   {
      //     "_id": "1696999469076",
      //     "title": "edd",
      //     "section_title": "qq",
      //     "section": 1,
      //     "questionNumber": 2,
      //     "descriptions": "",
      //     "required": true,
      //     "other_options": true,
      //     "form": {
      //       "type": "choice",
      //       "option": [
      //         "2",
      //         "3"
      //       ],
      //       "action": [
      //         "",
      //         ""
      //       ]
      //     }
      //   },
      //   {
      //     "_id": "1696999477458",
      //     "title": "dddd",
      //     "section_title": "qq",
      //     "section": 1,
      //     "questionNumber": 3,
      //     "descriptions": "",
      //     "required": true,
      //     "other_options": false,
      //     "form": {
      //       "type": "choice",
      //       "option": [
      //         "b",
      //         "f"
      //       ],
      //       "action": [
      //         "",
      //         ""
      //       ]
      //     }
      //   }
      // ]
      // const kkk = this.buildStateFromListQuestion(data.json_form);
      // this.setState({ sections: kkk, title: data.title });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var sections = this.state.sections;
      console.log("sections", sections);
      return /*#__PURE__*/_react.default.createElement(_indexElement.FormContainer, null, /*#__PURE__*/_react.default.createElement(_header.default, {
        ref: function ref(_ref) {
          _this3.headerRef = _ref;
        },
        title: this.state.title
      }), sections === null || sections === void 0 ? void 0 : sections.map(function (section, sectionIndex) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: sectionIndex
        }, /*#__PURE__*/_react.default.createElement(_section.default, {
          label: section.label,
          section: section,
          onAddField: function onAddField() {
            return _this3.addQuestionToSection(sectionIndex);
          },
          onToggleQustion: function onToggleQustion() {
            return _this3.toggleQuestionsVisibility(sectionIndex);
          },
          onDeleteSection: function onDeleteSection() {
            return _this3.deleteSection(sectionIndex);
          },
          onUpdateTitle: function onUpdateTitle(title) {
            return _this3.onUpdateTitleSection(title, sectionIndex);
          },
          title: section.section_title
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
              return _this3.setActiveQuestion(sectionIndex, questionIndex);
            },
            onRemoveQuestion: function onRemoveQuestion() {
              return _this3.removeQuestionFromSection(sectionIndex, questionIndex);
            },
            ref: function ref(_ref2) {
              if (!_this3.fieldRefs[sectionIndex]) {
                _this3.fieldRefs[sectionIndex] = [];
              }
              _this3.fieldRefs[sectionIndex][questionIndex] = _ref2; // Simpan referensi ke komponen Question
            },

            onAddQuestion: function onAddQuestion() {
              return _this3.addQuestionToSection(sectionIndex);
            }
          });
        })));
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "form-footer"
      }, /*#__PURE__*/_react.default.createElement(_general.StyledButton, {
        onClick: this.addSection
      }, "Add Section"), /*#__PURE__*/_react.default.createElement(_general.StyledButton, {
        onClick: this.populateData
      }, "Generate & Submit")));
    }
  }]);
  return Form;
}(_react.Component);
var _default = Form;
exports.default = _default;