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
          fields: [], // Pertanyaan awal di Section 1
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
    const newQuestion = `Question ${this.state.sections[sectionIndex].fields.length + 1}`;
    const updatedSections = [...this.state.sections];
    updatedSections[sectionIndex].fields.push(newQuestion);
    this.setState({ sections: updatedSections });
  }

  render() {
    const { sections } = this.state;
    console.log("sss", sections)
    return (
      <FormContainer>
        <Header />
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <Section label={section.label} 
              onAddField={()=>this.addQuestionToSection(sectionIndex)} />
            {section.fields.map((question, questionIndex) => (
                <Field key={question} label={question} />
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
