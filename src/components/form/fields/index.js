import React, { Component } from 'react';
import Options from './option';
import Scale from './scale';
import Paragraph from './paragraph';
import { FieldsContainer } from './indexElement';
import { Input, TextArea } from '../../general';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerType: 'single', // Jenis jawaban awal
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
      case 'single':
        return <Options type="single"/>;
      case 'multiple':
          return <Options type="multiple" />;
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
      <FieldsContainer onClick={this.props.onClick} 
        className={field?.isActive&&'active'}>
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
              <option value="single">Single</option>
              <option value="multiple">Multiple</option>
              <option value="scale">Scale</option>
              <option value="paragraph">Paragraph</option>
            </select>
            {this.renderAnswerTypeComponent()}
          </div>
        )}
      </FieldsContainer>
    );
  }
}

export default Field;
