import React, { Component } from 'react';
import Options from './option';
import Scale from './scale';
import Paragraph from './paragraph';
import { FieldsContainer } from './indexElement';
import { Input, StyledButton } from '../../general';
import ReactQuill from 'react-quill'; // Import Quill React Component
import 'react-quill/dist/quill.snow.css'; // Import styles
import 'react-quill/dist/quill.bubble.css';
import { connect } from 'react-redux';


import {
  updateQuestion,
  setActiveQuestion
} from '../../../redux/formSlice';
import Sorting from './sorting';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
  ]
};

class Question extends Component {
  constructor(props) {
    super(props);
    this.sectionIndex = this.props.sectionIndex;
    this.questionIndex = this.props.questionIndex;
  }

  handleInput = (e) => {
    const name = e.target.name; // Mengakses nilai name dari elemen input
    const value = e.target.value; // Mengakses nilai value dari elemen input
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { [name]: value }
    })
  };


  handleRequiredChange = (e) => {
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { required: e.target.checked }
    })
  };

  handleDefaultOptions = (e) => {
    let defaultOptions = [
      { label: 'Sangat tidak baik', action: '' },
      { label: 'Tidak baik', action: '' },
      { label: 'Baik', action: '' },
      { label: 'Sangat baik', action: '' }
    ]

    if (e.target.value == "setuju") {
      defaultOptions = [
        { label: 'Sangat tidak setuju', action: '' },
        { label: 'Tidak setuju', action: '' },
        { label: 'Setuju', action: '' },
        { label: 'Sangat Setuju', action: '' }
      ]
    }
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { options: defaultOptions }
    })
  };

  // digunakan untuk render setalah type dirubah
  renderAnswerTypeComponent() {
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
    const type = question?.type;
    switch (type) {
      case 'choice':
        return <Options type="choice"
          questionIndex={this.questionIndex}
          sectionIndex={this.sectionIndex}/>;
      case 'multiple':
        return <Options type="multiple"
          questionIndex={this.questionIndex}
          sectionIndex={this.sectionIndex}/>
      case 'sorting':
        return <Sorting type="sorting"
          questionIndex={this.questionIndex}
          sectionIndex={this.sectionIndex} />;
      case 'scale':
        return <Scale
          questionIndex={this.questionIndex}
          sectionIndex={this.sectionIndex}
          onUpdateState={(data) => {
            this.setState({ scale: { ...data } })
          }} />;
   ;
      case 'info':
        return <Paragraph />;
      case 'paragraph':
        return <Paragraph />;
      default:
        return null;
    }
  }

  onToggleQustion = () => {
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { isActive: !question.isActive }
    })
  };



  render() {
    const { sectionIndex, questionIndex, onAddQuestion, onRemoveQuestion } = this.props;
    const sections = this.props.form.sections;
    const question = this.props.form.sections[sectionIndex].questions[questionIndex];
    return (
      <FieldsContainer
        className={question?.isActive && 'active'}>
        <div>
          <span>{questionIndex + 1}</span>
        </div>
        <div>
          <div className='type-wrapper'>
            <div className='required-wrapper'>
              <label> Required:</label>
              <input
                type="checkbox"
                name="required"
                checked={question.required}
                onChange={this.handleRequiredChange}
              />
            </div>
            <select
              name="type"
              value={question.type}
              onChange={(e) => this.handleInput(e)}
              style={{ marginRight: '8px' }}
            >
              <option value="choice">Radio Button</option>
              <option value="multiple">Checkboxes</option>
              <option value="scale">Linear Scale</option>
              <option value="paragraph">Paragraph</option>
              <option value="sorting">Sorting</option>
              <option value="info">Info</option>
            </select>
            {question.type === 'multiple' &&
              <>
                <label className='label'>Min To Select</label>
                <Input
                  type="number"
                  name="min_to_select"
                  placeholder='Min to select'
                  value={question.min_to_select}
                  onChange={(e) => this.handleInput(e)}
                  style={{ width: '35px', marginLeft: '8px', marginRight: '8px' }}
                />
                <label className='label'>Max To Select</label>
                <Input
                  type="number"
                  name="max_to_select"
                  placeholder='Max to select'
                  value={question.max_to_select}
                  onChange={(e) => this.handleInput(e)}
                  style={{ width: '35px', marginLeft: '8px', marginRight: '8px' }}
                />
              </>
            }
            {question.type === 'choice' &&
              <select
                name="answerType"
                onChange={this.handleDefaultOptions}
                style={{ marginRight: '8px' }}
              >
                <option value=""> Pilih Default </option>
                <option value="baik">Baik - Tidak Baik</option>
                <option value="setuju">Setuju - Tidak Setuju</option>
              </select>
            }
            <StyledButton
              className='toggle-button'
              onClick={this.onToggleQustion}>{question.isActive ? "Hide" : "Show"}</StyledButton>
          </div>


          <div className='question' >
            <Input
              type="hidden"
              name="question"
              placeholder='Input ID'
              value={question._id}
            />
            <div onClick={() => this.props.setActiveQuestion({ sectionIndex, questionIndex })}>
              <ReactQuill
                theme={"snow"}
                value={question?.title}
                onChange={(v) => this.props.updateQuestion({
                  questionIndex,
                  sectionIndex,
                  data: { title: v }
                })}
                modules={modules}
              />
            </div>
            <div>
              <StyledButton
                className='toggle-button'
                onClick={() => onAddQuestion()}>+</StyledButton>
              <StyledButton
                className='delete-button'
                onClick={() => onRemoveQuestion(questionIndex)}>x</StyledButton>
            </div>
          </div>

          <div className='body' style={{ display: question?.isActive ? 'block' : 'none' }}>
            <div className='description' >
              <Input
                type="text"
                name="descriptions"
                placeholder='Description'
                value={question.descriptions}
                onChange={(e) => this.handleInput(e)}
              />
              <div style={{ width: '30px',  }}>&nbsp;</div>
            </div>

            {this.renderAnswerTypeComponent()}
          </div>
        </div>
      </FieldsContainer >
    );
  }
}


const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

const mapDispatchToProps = {
  updateQuestion,
  setActiveQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
