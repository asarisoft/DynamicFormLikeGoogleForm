import React, { Component } from 'react';
import Section from './section';
import Field from './fields';
import Header from './header';
import { FormContainer } from './indexElement';
import { StyledButton } from '../general';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          label: 'Section 1',
          fields: [
            {
              isActive: true,
              // res data will be populated by populate button
            }
          ],
          isQuestionsVisible: true, // Tambahkan ini
        },
      ],
    };
    this.fieldRefs = [];
  }

  // Fungsi untuk menambah section baru
  addSection = () => {
    const newSection = {
      label: `Section ${this.state.sections.length + 1}`,
      fields: [],
      isQuestionsVisible: true, // Tambahkan ini
    };
    this.setState((prevState) => ({
      sections: [...prevState.sections, newSection],
    }));
  }

  // Fungsi untuk menambah pertanyaan baru ke dalam section
  addQuestionToSection = (sectionIndex) => {
    // Set semua pertanyaan dalam section sebagai non-aktif saat pertanyaan baru ditambahkan
    const updatedSections = [...this.state.sections];
    updatedSections[sectionIndex].fields.forEach((field) => {
      field.isActive = false;
    });

    // update data question
    updatedSections[sectionIndex].fields.push({
      isActive: true,
    });
    updatedSections[sectionIndex].isQuestionsVisible = true
    this.setState({ sections: updatedSections });
  }

  // digunakan untuk menghapus question
  removeQuestionFromSection = (sectionIndex, questionIndex) => {
    const updatedSections = [...this.state.sections];
    const section = updatedSections[sectionIndex];

    if (section) {
      const updatedFields = section.fields.filter((field, index) => index !== questionIndex);
      section.fields = updatedFields;
      this.setState({ sections: updatedSections });
    }
  }

  // Fungsi untuk mengatur pertanyaan sebagai aktif saat diklik
  setActiveQuestion = (sectionIndex, questionIndex) => {
    const updatedSections = [...this.state.sections];
    updatedSections[sectionIndex].fields.forEach((field, index) => {
      field.isActive = index === questionIndex;
    });
    this.setState({ sections: updatedSections });
  }

  // hide show questions di dalam section
  toggleQuestionsVisibility = (sectionIndex) => {
    const updatedSections = [...this.state.sections];
    updatedSections[sectionIndex].isQuestionsVisible = !updatedSections[sectionIndex].isQuestionsVisible;
    this.setState({ sections: updatedSections });
  }

  populateData = () => {
    const { sections } = this.state;
    const updatedSections = [...sections];
    // Loop melalui setiap section
    updatedSections.forEach((section, sectionIndex) => {
      // Loop melalui setiap field dalam section
      section.fields.forEach((field, questionIndex) => {
        // Di sini Anda bisa mengambil data dari komponen Field dan menggantinya
        // Berdasarkan indeks pertanyaan (question index)
        const fieldData = this.fieldRefs[sectionIndex][questionIndex].state;
        updatedSections[sectionIndex].fields[questionIndex] = fieldData;
      });
    });
    this.setState({ sections: updatedSections });
  }


  render() {
    const { sections } = this.state;
    console.log(sections)
    return (
      <FormContainer>
        <Header />
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <Section label={section.label}
              section={section}
              onAddField={() => this.addQuestionToSection(sectionIndex)}
              onToggleQustion={() => this.toggleQuestionsVisibility(sectionIndex)}
            />
            {section.isQuestionsVisible && section.fields.map((field, questionIndex) => (
              <Field
                key={`${sectionIndex}${questionIndex}`}
                field={field}
                questionIndex={questionIndex}
                onClick={() => this.setActiveQuestion(sectionIndex, questionIndex)}
                onRemoveQuestion={() => this.removeQuestionFromSection(sectionIndex, questionIndex)}
                ref={(ref) => {
                  if (!this.fieldRefs[sectionIndex]) {
                    this.fieldRefs[sectionIndex] = [];
                  }
                  this.fieldRefs[sectionIndex][questionIndex] = ref; // Simpan referensi ke komponen Field
                }}
              />
            ))}
          </div>
        ))}
        <div className='form-footer'>
          <StyledButton onClick={this.addSection}>Add Section</StyledButton>
          <StyledButton onClick={this.populateData}>Generate & Submit</StyledButton>
        </div>
      </FormContainer>
    );
  }
}

export default Form;
