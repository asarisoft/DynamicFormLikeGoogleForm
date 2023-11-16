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
import {removeHTMlTag} from '../../../utils'

class Options extends Component {
  constructor(props) {
    super(props);
    this.sectionIndex = this.props.sectionIndex;
    this.questionIndex = this.props.questionIndex;
  }

  componentDidMount = () => {
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
    if (question.options.length === 0) {
      this.addOption()
    }
  }

  addOption = () => {
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
    const options = [...question.options, { label: '', action: '' }]
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { options }
    })
  };

  removeOption = (index) => {
    Swal.fire({
      title: '',
      text: 'Are you sure to delete this option?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'custom-yes-button', // Apply the custom CSS class to the Yes button
        cancelButton: 'cancel-button', // Apply the custom CSS class to the Yes button
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
        const updatedOptions = [...question.options];
        updatedOptions.splice(index, 1); // Menghapus elemen pada indeks tertentu
        this.props.updateQuestion({
          questionIndex: this.questionIndex,
          sectionIndex: this.sectionIndex,
          data: { options: updatedOptions }
        });
      }
    });
  };

  handleOptionChange = (index, e) => {
    const { name, value } = e.target;
    const section = this.props.form.sections[this.sectionIndex];
    const question = section.questions[this.questionIndex];
    const updatedOptions = [...question.options]; // Buat salinan objek options
    updatedOptions[index] = { ...updatedOptions[index], [name]: value }; // Perbarui salinan objek
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { options: updatedOptions }
    });
  };

  handleOtherOptionsChange = (e) => {
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { other_options: e.target.checked }
    });
  };

  render() {
    const { sectionIndex, questionIndex } = this.props;
    const sections = this.props.form.sections;
    const question = this.props.form.sections[sectionIndex].questions[questionIndex];
    const options = question.options;

    return (
      <Container>
        {options?.map((option, index) => (
          <div key={index} className='input-wrapper'>
            <Input
              type="text"
              name="label"
              placeholder="Option Text"
              value={option?.label}
              onChange={(e) => this.handleOptionChange(index, e)}
            />
            <select
              name="action"
              value={option.action}
              onChange={(e) => this.handleOptionChange(index, e)}
            >
              <option value="">Pilih Section</option>
              {sections.map((section, idx) => {
                if (sectionIndex >= idx)
                  return null
                else if (!section.subsection)
                  return null
                else
                  return <option key={idx} value={idx}>
                    Section {idx + 1} - {removeHTMlTag(section.section_title)}
                  </option>
              }
              )}
            </select>

            <StyledButton onClick={() => this.removeOption(index)}
              className='remove-button'>x</StyledButton>
            {index === options.length - 1 &&
              <StyledButton onClick={this.addOption}>+</StyledButton>
            }
          </div>
        ))}
        <div className='last-wrapper'>
          <input
            type="checkbox"
            name="other_options"
            required={true}
            checked={question.other_options}
            onChange={this.handleOtherOptionsChange}
          />
          <label className='label-last-options'>
            Set last option as other options</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(Options);
