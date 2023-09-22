import React, { Component } from 'react';
import Section from './section';
import Question from './question';
import Header from './header';
import { FormContainer } from './indexElement';
import { StyledButton } from '../general';


const initialData = [{
  "sections": [
    {
      "label": "Section 1",
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
}]

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
    this.setState({ sections: initialData[0]['sections'], title: initialData[0]['title'] })
  }

  // Fungsi untuk menambah section baru
  addSection = () => {
    const newSection = {
      label: `Section ${this.state.sections.length + 1}`,
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

  // digunakan untuk menghapus question
  removeQuestionFromSection = (sectionIndex, questionIndex) => {
    const updatedSections = [...this.state.sections];
    const section = updatedSections[sectionIndex];

    if (section) {
      const updatedquestions = section.questions.filter((question, index) => index !== questionIndex);
      section.questions = updatedquestions;
      this.setState({ sections: updatedSections });
    }
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
    const updatedSections = [...this.state.sections];
    updatedSections.splice(sectionIndex, 1);
    this.setState({ sections: updatedSections });
  }

  populateData = () => {
    const { sections } = this.state;
    const updatedSections = [...sections];
    // Loop melalui setiap section
    const result = []
    updatedSections.forEach((section, sectionIndex) => {
      // Loop melalui setiap question dalam section
      section.questions.forEach((question, questionIndex) => {
        // Di sini Anda bisa mengambil data dari komponen Question dan menggantinya
        // Berdasarkan indeks pertanyaan (question index)
        const fieldData = this.fieldRefs[sectionIndex][questionIndex].state;
        updatedSections[sectionIndex].questions[questionIndex] = fieldData;
        const dataQuestion = this.buildFormQuestionFromState(fieldData, questionIndex)
        result.push(dataQuestion)
      });
    });
    console.log(result);
    this.setState({ sections: updatedSections, title: this.headerRef.state });
    return result
  }

  buildFormQuestionFromState = (fieldData, section) => {
    const dataQuestion = {
      _id: fieldData._id,
      title: fieldData.title,
      section: section + 1,
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
    else if (fieldData.type === "multiple") {
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
        start: fieldData.start,
        to: fieldData.to,
        label_start: fieldData.label_start,
        label_to: fieldData.label_to,
      }
    } else { //paragraph, info
      dataQuestion.form = {
        type: fieldData.type
      }
    }
    return dataQuestion
  }

  render() {
    const { sections } = this.state;
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
          <StyledButton onClick={this.addSection}>Add Section</StyledButton>
          <StyledButton onClick={this.populateData}>Generate & Submit</StyledButton>
        </div>
      </FormContainer>
    );
  }
}

export default Form;