import React, { Component } from 'react';
import Options from './option';
import Scale from './scale';
import Paragraph from './paragraph';
import { FieldsContainer } from './indexElement';
import { Input, StyledButton } from '../../general';


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'paragraph',
      question: '',
    }
  }

  componentDidMount() {
    const question = this.props.question;
    this.setState({
      type: question.type,
    })
  }

  // update data ke props utama
  handleInputQuestion = (e) => {
    this.setState({ question: e.target.value });
  };

  // digunakan untuk mengubah children type
  // saat dirubah maka harus dirubah juga yang sebelumnya ke default
  handleAnswerTypeChange = (e) => {
    this.setState({ type: e.target.value });
  };

  // digunakan untuk render setalah type dirubah
  renderAnswerTypeComponent() {
    const { type } = this.state;
    switch (type) {
      case 'single':
        return <Options type="single"
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
            this.setState({ scale: data })
          }} />;
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
                type="text"
                name="question"
                placeholder='Input Question'
                value={this.state.question || this.props.question.question}
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
            <select
              name="answerType"
              value={this.state.type}
              onChange={this.handleAnswerTypeChange}
            >
              <option value="single">Single</option>
              <option value="multiple">Multiple</option>
              <option value="scale">Scale</option>
              <option value="paragraph">Paragraph</option>
            </select>
            {this.renderAnswerTypeComponent()}
          </div>
        </div>
      </FieldsContainer>
    );
  }
}

export default Question;
