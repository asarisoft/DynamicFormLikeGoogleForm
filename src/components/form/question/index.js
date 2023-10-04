import React, { Component } from 'react';
import Options from './option';
import Likert from './likert';
import Scale from './scale';
import Paragraph from './paragraph';
import { FieldsContainer } from './indexElement';
import { Input, StyledButton } from '../../general';


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: `${Date.now()}`,
      type: 'likert',
      title: '',
      descriptions: '',
      required: true,
    }
  }

  componentDidMount() {
    const question = this.props.question;
    // by default likert will be first 
    const defaultOptions = [
      { label: 'Sangat tidak setuju', action: '' },
      { label: 'Tidak setuju', action: '' },
      { label: 'Setuju', action: '' },
      { label: 'Sangat Setuju', action: '' }
    ]

    this.setState({
      _id: question._id || `${Date.now()}`,
      type: question.type || 'likert',
      title: question.title || '',
      descriptions: question.descriptions || '',
      required: question.required || true,
      scale: question.scale,
      options: question.options || defaultOptions
    })
  }

  // update data ke props utama
  handleInputQuestion = (e) => {
    this.setState({ title: e.target.value });
  };

  handleAnswerTypeChange = (e) => {
    this.setState({ type: e.target.value });
  };

  handleRequiredChange = (e) => {
    this.setState((prevState) => ({ required: !prevState.required }));
  };

  // digunakan untuk render setalah type dirubah
  renderAnswerTypeComponent() {
    const { type } = this.state;
    switch (type) {
      case 'likert':
        return <Likert 
          type="likert"
          question={this.props.question}
          onUpdateState={(data) => {
            this.setState({ options: data })
          }} />;
      case 'choice':
        return <Options type="choice"
          // digunakan untuk update state pas edit
          question={this.props.question}
          onUpdateState={(data) => {
            this.setState({ options: data })
          }} />;
      case 'multiple':
        return <Options type="multiple"
          // digunakan untuk update state pas edit
          question={this.props.question}
          onUpdateState={(data) => {
            this.setState({ options: data })
          }} />;
      case 'scale':
        return <Scale
          // digunakan untuk update state pas edit
          question={this.props.question}
          onUpdateState={(data) => {
            this.setState({ scale: { ...data } })
          }} />;
      case 'info':
        return <Paragraph />;
      case 'paragraph':
        return <Paragraph />;
      default:
        return null;
    }
  }


  render() {
    const { question, questionIndex, onAddQuestion, onRemoveQuestion } = this.props;
    return (
      <FieldsContainer
        className={question?.isActive && 'active'}>
        <div>
          <span>{questionIndex + 1}</span>
        </div>
        <div>
          <div className='question' >
            <div onClick={this.props.onClick}>
              <Input
                type="hidden"
                name="question"
                placeholder='Input Question'
                value={this.state._id}
                onChange={this.handleInputQuestion}
              />

              <Input
                type="text"
                name="question"
                placeholder='Input Question'
                value={this.state.title}
                onChange={this.handleInputQuestion}
              />
            </div>
            <StyledButton
              onClick={() => onRemoveQuestion(questionIndex)}>x</StyledButton>
          </div>
          <div className='body' style={{ display: question?.isActive ? 'block' : 'none' }}>
            <StyledButton
              className='btn-add-question'
              onClick={() => onAddQuestion()}>+ Question</StyledButton>

            <div className='type-wrapper'>
            <div className='required-wrapper'>
                <label> Required:</label>
                <input
                  type="checkbox"
                  name="required"
                  disabled={true}
                  checked={this.state.required}
                  onChange={this.handleRequiredChange}
                />
              </div>
              
              <select
                name="answerType"
                value={this.state.type}
                onChange={this.handleAnswerTypeChange}
              >
                <option value="likert">Likert</option>
                <option value="paragraph">Paragraph</option>
                <option value="choice">Single</option>
                <option value="multiple">Multiple</option>
                <option value="scale">Scale</option>
                <option value="info">Info</option>
              </select>

              
            </div>
            {this.renderAnswerTypeComponent()}
          </div>
        </div>
      </FieldsContainer>
    );
  }
}

export default Question;
