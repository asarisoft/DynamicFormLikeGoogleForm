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

class sorting extends Component {
  constructor(props) {
    super(props);
    this.sectionIndex = this.props.sectionIndex;
    this.questionIndex = this.props.questionIndex;
  }

  componentDidMount = () => {
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
    if (question.sorting.length === 0) {
      this.addSorting()
    }
  }

  addSorting = () => {
    const question = this.props.form.sections[this.sectionIndex].questions[this.questionIndex];
    const newSorting = [...question.sorting, ""]
    console.log("sdfsdfsdfds", question, sorting)

    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: {sorting: newSorting}
    })
  };

  removeOption = (index) => {
    Swal.fire({
      title: '',
      text: 'Are you sure to delete this field?',
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
        const updateSorting = [...question.sorting];
        updateSorting.splice(index, 1); // Menghapus elemen pada indeks tertentu
        this.props.updateQuestion({
          questionIndex: this.questionIndex,
          sectionIndex: this.sectionIndex,
          data: { sorting: updateSorting }
        });
      }
    });
  };

  handleOptionChange = (index, e) => {
    const { value } = e.target;
    const section = this.props.form.sections[this.sectionIndex];
    const question = section.questions[this.questionIndex];
    const updatedsorting = [...question.sorting]; // Buat salinan objek sorting
    updatedsorting[index] = value; // Perbarui salinan objek
    this.props.updateQuestion({
      questionIndex: this.questionIndex,
      sectionIndex: this.sectionIndex,
      data: { sorting: updatedsorting }
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
              value={option}
              onChange={(e) => this.handleOptionChange(index, e)}
            />
            <StyledButton onClick={this.addSorting}>+</StyledButton>
            <StyledButton onClick={() => this.removeOption(index)}
              className='remove-button'>x</StyledButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(sorting);
