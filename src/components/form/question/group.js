// components/form/option.js
import React, { Component } from 'react';
import { Container } from './optionElement';
import { Input, StyledButton } from '../../general';
import Swal from 'sweetalert2';
import '../global.css';
import { connect } from 'react-redux';
import {
  updateQuestion,
} from '../../../redux/formSlice';

class Options extends Component {
  constructor(props) {
    super(props);
    this.sectionIndex = this.props.sectionIndex;
    this.questionIndex = this.props.questionIndex;
  }


  componentDidMount = () => {
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];

    if (question.childrens.length === 0) {
      this.add('childrens');
    }

    if (question.options.length === 0) {
      this.add('options');
    }
  }

  add = (type) => {
    console.log("tpe", type)
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
    let newData;

    if (type === 'options') {
      newData = { options: [...question.options, { label: '', action: '' }] };
    } else if (type === 'childrens') {
      newData = { childrens: [...question.childrens, { label: '',  _id: `${Date.now()}`, }] };
    }

    if (newData) {
      this.props.updateQuestion({
        questionIndex: this.questionIndex,
        sectionIndex: this.sectionIndex,
        data: newData
      });
    }
  };


  removeItem = (index, type) => {
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
    const itemKey = type === 'options' ? 'options' : 'childrens';
    const itemName = type === 'options' ? 'option' : 'child';

    Swal.fire({
      title: '',
      text: `Are you sure to delete this ${itemName}?`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'custom-yes-button',
        cancelButton: 'cancel-button',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedItems = [...question[itemKey]];
        updatedItems.splice(index, 1);

        this.props.updateQuestion({
          questionIndex: this.questionIndex,
          sectionIndex: this.sectionIndex,
          data: { [itemKey]: updatedItems }
        });
      }
    });
  };

  handleChange = (index, type, e) => {
    const { name, value } = e.target;
    const section = this.props.form.sections[this.sectionIndex];
    const question = section.questions[this.questionIndex];
    const itemKey = type === 'options' ? 'options' : 'childrens';
  
    const updatedItems = [...question[itemKey]];
    updatedItems[index] = { ...updatedItems[index], [name]: value };
  
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { [itemKey]: updatedItems }
    });
  };
  

  render() {
    const { sectionIndex, questionIndex } = this.props;;
    const question = this.props.form.sections[sectionIndex].questions[questionIndex];
    const options = question.options;
    const childrens = question.childrens;

    return (
      <Container>
        <label>Rows</label>
        {childrens?.map((option, index) => (
          <div key={index} className='input-wrapper'>
            <Input
              type="text"
              name="label"
              placeholder="Option Text"
              value={option?.label}
              onChange={(e) => this.handleChange(index, 'childrens', e)}
            />
            <StyledButton onClick={() => this.removeItem(index, 'childrens')}
              className='remove-button'>x</StyledButton>
            {index === childrens.length - 1 &&
              <StyledButton onClick={()=>this.add('childrens')}>+</StyledButton>
            }
          </div>
        ))}
        <br />
        <label>Answer</label>
        {options?.map((option, index) => (
          <div key={index} className='input-wrapper'>
            <Input
              type="text"
              name="label"
              placeholder="Option Text"
              value={option?.label}
              onChange={(e) => this.handleChange(index, 'options', e)}
            />
            <StyledButton onClick={() => this.removeItem(index, 'options')}
              className='remove-button'>x</StyledButton>
            {index === options.length - 1 &&
              <StyledButton onClick={()=>this.add('options')}>+</StyledButton>
            }

          </div>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Options);
