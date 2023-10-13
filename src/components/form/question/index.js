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
      _id: `${Date.now()}`,
      type: 'choice',
      title: '',
      descriptions: '',
      required: true,
    }
  }

  componentDidMount() {
    const question = this.props.question;
    // untuk default data bukan di kirim ke component
    this.setState({
      _id: question._id || `${Date.now()}`,
      type: question.type || 'choice',
      title: question.title || '',
      descriptions: question.descriptions || '',
      required: question.required || true,
      scale: question.scale,
      options: question.options
    })
  }

  // update data ke props utama
  handleInputQuestion = (e) => {
    this.setState({ title: e.target.value }, () => {
      // this.props.onUpdateQuestion(this.state)
    });
  };

  handleInputDescription = (e) => {
    this.setState({ descriptions: e.target.value });
  };

  handleAnswerTypeChange = (e) => {
    this.setState({ type: e.target.value });
  };

  handleRequiredChange = (e) => {
    this.setState((prevState) => ({ required: !prevState.required }));
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
    this.setState({ options: defaultOptions });
  };

  // digunakan untuk render setalah type dirubah
  renderAnswerTypeComponent() {
    const { type, options } = this.state;
    switch (type) {
      case 'choice':
        return <Options type="choice"
          question={this.props.question}
          defaultOptions = {this.state.options}
          onUpdateState={(data) => {
            this.setState({
              options: data.options,
              other_options: data.other_options
            })
          }} />;
      case 'multiple':
        return <Options type="multiple"
          question={this.props.question}
          onUpdateState={(data) => {
            this.setState({ options: data.options })
          }} />;
      case 'scale':
        return <Scale
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
            <Input
              type="hidden"
              name="question"
              placeholder='Input Question'
              value={this.state._id}
              onChange={this.handleInputQuestion}
            />
            <div onClick={this.props.onClick}>
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
            <div className='question' >
              <Input
                type="text"
                name="question"
                placeholder='Description'
                value={this.state.descriptions}
                onChange={this.handleInputDescription}
              />
              <div style={{ width: '30px' }}>&nbsp;</div>
            </div>
            <StyledButton
              className='btn-add-question'
              onClick={() => onAddQuestion()}>+ Question</StyledButton>

            <div className='type-wrapper'>
              <div className='required-wrapper'>
                <label> Required:</label>
                <input
                  type="checkbox"
                  name="required"
                  checked={this.state.required}
                  onChange={this.handleRequiredChange}
                />
              </div>
              <select
                name="answerType"
                value={this.state.type}
                onChange={this.handleAnswerTypeChange}
                style={{ marginRight: '8px' }}
              >
                <option value="choice">Multiple choice</option>
                <option value="multiple">Checkboxes</option>
                <option value="scale">Linear Scale</option>
                <option value="paragraph">Paragraph</option>
                <option value="info">Info</option>
              </select>
              {this.state.type === 'choice' &&
                < select
                  name="answerType"
                  value={this.state.defaultOptions}
                  onChange={this.handleDefaultOptions}
                  style={{ marginRight: '8px' }}
                >
                  <option value=""> Pilih Default </option>
                  <option value="baik">Baik - Tidak Baik</option>
                  <option value="setuju">Setuju - Tidak Setuju</option>
                </select>
              }
            </div>
            {this.renderAnswerTypeComponent()}
          </div>
        </div>
      </FieldsContainer >
    );
  }
}

export default Question;
