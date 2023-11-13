// components/form/scale.js
import React, { Component } from 'react';
import { Container } from './scaleElement';
import { Input, StyledButton } from '../../general';
import { connect } from 'react-redux';
import {
  updateQuestion,
} from '../../../redux/formSlice';


class Scale extends Component {
  constructor(props) {
    super(props);
    this.sectionIndex = this.props.sectionIndex;
    this.questionIndex = this.props.questionIndex;
  }


  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: {
        scale: {
          ...this.props.form.sections[this.sectionIndex].questions[this.questionIndex].scale,
          [name]: value
        }
      }
    });
  };


  render() {
    const { sectionIndex, questionIndex } = this.props;
    const question = this.props.form.sections[sectionIndex].questions[questionIndex];
    console.log("questiosssn", question)
    const { start, to, label_start, label_to } = question.scale;

    return (
      <Container>
        <div className='input-wrapper'>
          <Input
            type="number"
            name="start"
            value={start}
            onChange={this.handleInputChange}
            placeholder="Start*"
          />
          <Input
            type="number"
            name="to"
            value={to}
            onChange={this.handleInputChange}
            placeholder="Finish*"
          />
          <br />
          <Input
            type="string"
            name="label_start"
            value={label_start}
            onChange={this.handleInputChange}
            placeholder="Left String (optional)"
          />
          <Input
            type="string"
            name="label_to"
            value={label_to}
            onChange={this.handleInputChange}
            placeholder="Right String (optional)"
          />
        </div>
      </Container>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Scale);
