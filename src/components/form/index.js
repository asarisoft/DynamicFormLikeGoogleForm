// form/index.js
import React, { Component } from 'react';
import Field from './fields/index';
import FormButton from './formButton';
import SectionButton from './sectionButton';
import SectionForm from './sectionForm';
import HeaderForm from './headerForm';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          label: 'Section 1',
          fields: ['Field1'] // Field awal di Section 1
        }
      ]
    };
  }

  // Fungsi untuk menambah section baru
  addSection = () => {
    const newSection = {
      label: `Section ${this.state.sections.length + 1}`,
      fields: []
    };
    this.setState((prevState) => ({
      sections: [...prevState.sections, newSection]
    }));
  }

  // Fungsi untuk menambah field baru ke dalam section
  addFieldToSection = (sectionIndex) => {
    const newField = `Field${this.state.sections[sectionIndex].fields.length + 1}`;
    this.setState((prevState) => {
      const updatedSections = [...prevState.sections];
      updatedSections[sectionIndex].fields.push(newField);
      return { sections: updatedSections };
    });
  }

  render() {
    const { sections } = this.state;

    return (
      <div>
        <HeaderForm />
        {sections.map((section, sectionIndex) => (
          <SectionForm key={sectionIndex} label={section.label}>
            {section.fields.map((fieldName, fieldIndex) => (
              <Field key={fieldName} label={fieldName} />
            ))}
            <SectionButton
              onAddField={() => this.addFieldToSection(sectionIndex)}
            />
          </SectionForm>
        ))}
        <FormButton
          onAddSection={this.addSection}
        />
      </div>
    );
  }
}

export default Form;
