import React, { Component } from 'react';
import Section from './section';
import Header from './header';
import { FormContainer } from './indexElement';
import { StyledButton } from '../general';
import Field from './fields';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          label: 'Section 1',
          fields: [
            { title: 'Question 1', isActive: true },
          ],
        },
      ],
    };
  }

  // Fungsi untuk menambah section baru
  addSection = () => {
    const newSection = {
      label: `Section ${this.state.sections.length + 1}`,
      fields: [],
    };
    this.setState((prevState) => ({
      sections: [...prevState.sections, newSection],
    }));
  }

  // Fungsi untuk menambah pertanyaan baru ke dalam section
  addQuestionToSection = (sectionIndex) => {
    const newQuestion = `Question ${
      this.state.sections[sectionIndex].fields.length + 1
    }`;
    // Set semua pertanyaan dalam section sebagai non-aktif saat pertanyaan baru ditambahkan
    const updatedSections = [...this.state.sections];
    updatedSections[sectionIndex].fields.forEach((field) => {
      field.isActive = false;
    });
    updatedSections[sectionIndex].fields.push({ question: newQuestion, isActive: true });
    this.setState({ sections: updatedSections });
  }

  // Fungsi untuk mengatur pertanyaan sebagai aktif saat diklik
  setActiveQuestion = (sectionIndex, questionIndex) => {
    const updatedSections = [...this.state.sections];
    updatedSections[sectionIndex].fields.forEach((field, index) => {
      field.isActive = index === questionIndex;
    });
    this.setState({ sections: updatedSections });
  }

  render() {
    const { sections } = this.state;

    return (
      <FormContainer>
        <Header />
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <Section label={section.label} 
              onAddField={() => this.addQuestionToSection(sectionIndex)} />
            {section.fields.map((field, questionIndex) => (
              <Field
                key={field.question}
                field={field}
                onClick={() => this.setActiveQuestion(sectionIndex, questionIndex)}
              />
            ))}
          </div>
        ))}
        <div className='form-footer'>
          <StyledButton onClick={this.addSection}>Add Section</StyledButton>
        </div>
      </FormContainer>
    );
  }
}

export default Form;
