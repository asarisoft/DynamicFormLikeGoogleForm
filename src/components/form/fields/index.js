import React, { Component } from 'react';
import Options from './option';
import Checkbox from './checkbox';
import Scale from './scale';
import Paragraph from './paragraph';
import { FieldsContainer } from './indexElement';
import { Input, TextArea } from '../../general';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerType: 'options', // Jenis jawaban awal
    };
  }


  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAnswerTypeChange = (e) => {
    this.setState({ answerType: e.target.value });
  };

  renderAnswerTypeComponent() {
    const { answerType } = this.state;
    switch (answerType) {
      case 'options':
        return <Options />;
      case 'checkbox':
        return <Checkbox />;
      case 'scale':
        return <Scale />;
      case 'paragraph':
        return <Paragraph />;
      default:
        return null;
    }
  }

  render() {
    const { field, questionIndex } = this.props;
    return (
      <FieldsContainer onClick={this.props.onClick}>
        <div className='question'>
          <span>{questionIndex + 1}</span>
          <Input
            type="text"
            name="question"
            placeholder='question'
            value={field?.title}
            onChange={this.handleInputChange}
          />
        </div>
        
        {field?.isActive && (
          <div className='body'>
            <select
              name="answerType"
              value={this.state.answerType}
              onChange={this.handleAnswerTypeChange}
            >
              <option value="options">Opsi</option>
              <option value="checkbox">Checkbox</option>
              <option value="scale">Skala</option>
              <option value="paragraph">Paragraf</option>
            </select>
            {this.renderAnswerTypeComponent()}
          </div>
        )}
      </FieldsContainer>
    );
  }
}

export default Field;
