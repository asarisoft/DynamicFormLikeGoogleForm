import React, { Component } from 'react';
import Section from './section';
import Question from './question';
import Header from './header';
import { FormContainer } from './indexElement';
import { StyledButton } from '../general';
import Swal from 'sweetalert2';
import './global.css'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      title: ""
    };
    this.fieldRefs = [];
    this.headerRef = null;
  }

  componentDidMount() {
    const initialData = {
      "sections": [
        {
          "label": "Section 1",
          "section_title": "",
          "questions": [
            {
              "type": "",
              "title": ""
            },
          ],
          "isQuestionsVisible": true
        }
      ],
      "title": ""
    }
    //   const data = this.buildStateFromListQuestion(dataFromServer);
    if (this.props.formData) {
      const data = this.props.formData
      const formData = this.buildStateFromListQuestion(data.json_form);
      this.setState({ sections: formData, title: data.title })
    } else {
      this.setState({ sections: initialData['sections'], title: initialData['title'] })
    }
  }

  // Fungsi untuk menambah section baru
  addSection = () => {
    const newSection = {
      label: `Section ${this.state.sections.length + 1}`,
      section_title: ``,
      questions: [],
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
    updatedSections[sectionIndex].questions.forEach((question) => {
      question.isActive = false;
    });

    // update data question
    updatedSections[sectionIndex].questions.push({
      isActive: true,
    });
    updatedSections[sectionIndex].isQuestionsVisible = true
    this.setState({ sections: updatedSections });
  }

  // Fungsi untuk mengganti title section
  onUpdateTitleSection = (e, sectionIndex) => {
    const updatedSections = [...this.state.sections];
    updatedSections[sectionIndex].section_title = e.target.value
    this.setState({ sections: updatedSections });
  }

  // digunakan untuk menghapus question
  removeQuestionFromSection = (sectionIndex, questionIndex) => {
    Swal.fire({
      title: '',
      text: 'Are you sure to delete this question?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'custom-yes-button', // Apply the custom CSS class to the Yes button
        cancelButton: 'cancel-button', // Apply the custom CSS class to the Yes button
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedSections = [...this.state.sections];
        const section = updatedSections[sectionIndex];
        if (section) {
          const updatedquestions = section.questions.filter((question, index) => index !== questionIndex);
          section.questions = updatedquestions;
          this.setState({ sections: updatedSections });
        }
      }
    });
  }

  // Fungsi untuk mengatur pertanyaan sebagai aktif saat diklik
  setActiveQuestion = (sectionIndex, questionIndex) => {
    const updatedSections = [...this.state.sections];
    updatedSections[sectionIndex].questions.forEach((question, index) => {
      question.isActive = index === questionIndex;
    });
    this.setState({ sections: updatedSections });
  }

  // hide show questions di dalam section
  toggleQuestionsVisibility = (sectionIndex) => {
    const updatedSections = [...this.state.sections];
    updatedSections[sectionIndex].isQuestionsVisible = !updatedSections[sectionIndex].isQuestionsVisible;
    this.setState({ sections: updatedSections });
  }

  // delete section 
  deleteSection = (sectionIndex) => {
    Swal.fire({
      title: '',
      text: 'Are you sure to delete this section?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'custom-yes-button', // Apply the custom CSS class to the Yes button
        cancelButton: 'cancel-button', // Apply the custom CSS class to the Yes button
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedSections = [...this.state.sections];
        updatedSections.splice(sectionIndex, 1);
        this.setState({ sections: updatedSections });
      }
    });
  }

  populateData = () => {
    const { sections } = this.state;
    const updatedSections = [...sections];
    const result = []
    updatedSections.forEach((section, sectionIndex) => {
      section.questions.forEach((question, questionIndex) => {
        const fieldData = this.fieldRefs[sectionIndex][questionIndex].state;
        updatedSections[sectionIndex].questions[questionIndex] = fieldData;
        const dataQuestion = this.buildFormQuestionFromState(
          fieldData, sectionIndex, updatedSections[sectionIndex].section_title)
        result.push(dataQuestion)
      });
    });
    console.log("result", result)
    this.setState({ sections: updatedSections, title: this.headerRef.state.title });
    return {
      title: this.headerRef.state.title || this.state.title,
      jsonForm: result
    }
  }

  // before submit
  buildFormQuestionFromState = (fieldData, sectionIndex, sectionTitle) => {
    const dataQuestion = {
      _id: fieldData._id,
      title: fieldData.title,
      section_title: sectionTitle,
      section: sectionIndex + 1,
      descriptions: fieldData.descriptions,
      required: fieldData.required,
      descriptions: fieldData.descriptions
    }

    if (fieldData.type === "choice") {
      const options = []
      const actions = []
      fieldData.options?.map(dt => {
        options.push(dt.label)
        actions.push(dt.action)
      })
      dataQuestion.form = {
        type: fieldData.type,
        option: options,
        action: actions
      }
    }
    else if (fieldData.type === "multiple" || fieldData.type === "likert") {
      const options = []
      fieldData.options?.map(dt => {
        options.push(dt.label)
      })
      dataQuestion.form = {
        type: fieldData.type,
        option: options,
      }
    } else if (fieldData.type === "scale") {
      dataQuestion.form = {
        type: fieldData.type,
        start: fieldData.scale.start,
        to: fieldData.scale.to,
        label_start: fieldData.scale.label_start,
        label_to: fieldData.scale.label_to,
      }
    } else { //paragraph, info
      dataQuestion.form = {
        type: fieldData.type
      }
    }
    return dataQuestion
  }

  // before edit
  buildStateFromListQuestion = (inputData) => {
    const sectionMap = new Map();
    const transformedData = [];

    inputData.forEach(item => {
      const sectionId = item.section;
      let sectionData = sectionMap.get(sectionId);

      if (!sectionData) {
        sectionData = {
          label: `Section ${sectionId}`,
          section_title: item.section_title,
          questions: [],
          isQuestionsVisible: true,
        };
        sectionMap.set(sectionId, sectionData);
        transformedData.push(sectionData);
      }

      const question = {
        _id: item._id,
        type: item.form.type,
        title: item.title,
        descriptions: item.descriptions,
        required: item.required,
      };

      if (item.form.type === 'choice') {
        question.options = item.form.option.map((option, idx) => ({
          label: option,
          action: item.form.action[idx], // Assuming the first action is correct
        }));
      } else if (item.form.type === 'multiple' || item.form.type === 'likert') {
        question.options = item.form.option.map(option => ({
          label: option,
          action: '',
        }));
      } else if (item.form.type === 'scale') {
        question.scale = {
          start: item.form.start,
          to: item.form.to,
          label_start: item.form.label_start,
          label_to: item.form.label_to
        }
      }

      sectionData.questions.push(question);
    });
    return transformedData;
  }


  render() {
    const { sections } = this.state;
    console.log("sections", sections)
    return (
      <FormContainer>
        <Header ref={(ref) => { this.headerRef = ref }}
          title={this.state.title}
        />
        {sections?.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <Section label={section.label}
              section={section}
              onAddField={() => this.addQuestionToSection(sectionIndex)}
              onToggleQustion={() => this.toggleQuestionsVisibility(sectionIndex)}
              onDeleteSection={() => this.deleteSection(sectionIndex)}
              onUpdateTitle={(title) => this.onUpdateTitleSection(title, sectionIndex)}
              title={section.section_title}
            />
            <div style={{ display: section.isQuestionsVisible ? 'block' : 'none' }}>
              {section.questions.map((question, questionIndex) => (
                <Question
                  key={`${sectionIndex}${questionIndex}`}
                  question={question}
                  questionIndex={questionIndex}
                  onClick={() => this.setActiveQuestion(sectionIndex, questionIndex)}
                  onRemoveQuestion={() => this.removeQuestionFromSection(sectionIndex, questionIndex)}
                  ref={(ref) => {
                    if (!this.fieldRefs[sectionIndex]) {
                      this.fieldRefs[sectionIndex] = [];
                    }
                    this.fieldRefs[sectionIndex][questionIndex] = ref; // Simpan referensi ke komponen Question
                  }}
                  onAddQuestion={() => this.addQuestionToSection(sectionIndex)}
                />
              ))}
            </div>
          </div>
        ))}
        <div className='form-footer'>
          {/* <StyledButton onClick={this.addSection}>Add Section</StyledButton>
          <StyledButton onClick={this.populateData}>Generate & Submit</StyledButton> */}
        </div>
      </FormContainer>
    );
  }
}

export default Form;