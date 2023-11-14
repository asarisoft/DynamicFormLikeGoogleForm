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

class Sorting extends Component {
  constructor(props) {
    super(props);
    this.sectionIndex = this.props.sectionIndex;
    this.questionIndex = this.props.questionIndex;
  }

  componentDidMount = () => {
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
    if (question.sorting.length === 0) {
      this.addOption()
    }
  }

  addOption = () => {
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
    const sorting = [...question.sorting, { label: '', action: '' }]
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { sorting }
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
        const updatedsorting = [...question.sorting];
        updatedsorting.splice(index, 1); // Menghapus elemen pada indeks tertentu
        this.props.updateQuestion({
          questionIndex: this.questionIndex,
          sectionIndex: this.sectionIndex,
          data: { sorting: updatedsorting }
        });
      }
    });
  };

  handleOptionChange = (index, e) => {
    const { name, value } = e.target;
    const section = this.props.form.sections[this.sectionIndex];
    const question = section.questions[this.questionIndex];
    const updatedsorting = [...question.sorting]; // Buat salinan objek sorting
    updatedsorting[index] = { ...updatedsorting[index], [name]: value }; // Perbarui salinan objek
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { sorting: updatedsorting }
    });
  };

  handleOthersortingChange = (e) => {
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { other_sorting: e.target.checked }
    });
  };

  render() {
    const { sectionIndex, questionIndex } = this.props;
    const sections = this.props.form.sections;
    const question = this.props.form.sections[sectionIndex].questions[questionIndex];
    const sorting = question.sorting;

    return (
      <Container>
        {sorting?.map((option, index) => (
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
                    Section {idx + 1}
                  </option>
              }
              )}
            </select>
            <StyledButton onClick={this.addOption}>+</StyledButton>
            <StyledButton onClick={() => this.removeOption(index)}
              className='remove-button'>x</StyledButton>
          </div>
        ))}
        <div className='last-wrapper'>
          <label className='label-last-sorting'>
            Set last option as other sorting</label>
          <input
            type="number"
            name="top_to_show"
            required={true}
            checked={question.other_sorting}
            onChange={this.handleOthersortingChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
