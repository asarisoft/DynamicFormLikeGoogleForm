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
    this.dataReceivedFromIframe = false;
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
    };

    // Menentukan apakah data telah diterima dari iframe
    // Fungsi untuk menangani pesan yang diterima dari dokumen utama
    const handleMessageFromIframe = (event) => {
      const receivedData = event.data;
      if (!receivedData.json_form) {
        return;
      }
      // Mengatur dataReceivedFromIframe menjadi true ketika data diterima
      this.dataReceivedFromIframe = true;
      const formData = this.buildStateFromListQuestion(receivedData.json_form);
      this.setState({ sections: formData, title: receivedData.title });
    };

    // Menambahkan event listener untuk mendengarkan pesan dari iframe
    window.addEventListener('message', handleMessageFromIframe);
    // Jika data dari props dan tidak ada data dari iframe, maka inisialisasi state
    setTimeout(() => {
      if (!this.dataReceivedFromIframe) {
        if (this.props.formData) {
          const data = this.props.formData;
          const formData = this.buildStateFromListQuestion(data.json_form);
          this.setState({ sections: formData, title: data.title });
        } else {
          this.setState({ sections: initialData.sections, title: initialData.title });
        }
      }
    }, 1000)
    // For Test
    // const uu = [
    //   {
    //     "_id": "1697092737554",
    //     "title": "sdfdsfds",
    //     "section_title": "sdfsdf",
    //     "section": 1,
    //     "questionNumber": 1,
    //     "descriptions": "ssssss",
    //     "required": true,
    //     "form": {
    //       "type": "single",
    //       "option": [
    //         "Sangat tidak setuju",
    //         "Tidak setuju",
    //         "Setuju",
    //         "Sangat Setuju"
    //       ]
    //     }
    //   }
    // ]
    // const kkk = this.buildStateFromListQuestion(uu);
    // this.setState({ sections: kkk, title: "data.title" });
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
  addQuestionToSection = (sectionIndex, questionIndex) => {
    const updatedSections = [...this.state.sections];
    updatedSections[sectionIndex].questions.forEach((question) => {
      question.isActive = false;
    });
    updatedSections[sectionIndex].questions.splice(questionIndex+1, 0, { isActive: true, _id: `${Date.now()}`, });
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
      let questionNumber = 1;
      section.questions.forEach((question, questionIndex) => {
        const fieldData = this.fieldRefs[sectionIndex][questionIndex].state;
        updatedSections[sectionIndex].questions[questionIndex] = fieldData;
        const dataQuestion = this.buildFormQuestionFromState(
          fieldData,
          sectionIndex,
          updatedSections[sectionIndex].section_title,
          questionNumber
        )
        questionNumber++;
        result.push(dataQuestion)
      });
    });
    // update local state
    this.setState({ sections: updatedSections, title: this.headerRef.state.title });
    // send to iframe
    console.log("resuls", result)
    this.sendDataToParent({
      title: this.headerRef.state.title || this.state.title,
      json_form: result
    });
    // 
    return {
      title: this.headerRef.state.title || this.state.title,
      jsonForm: result
    }
  }

  // before submit
  buildFormQuestionFromState = (fieldData, sectionIndex, sectionTitle, questionNumber) => {
    const dataQuestion = {
      _id: fieldData._id,
      title: fieldData.title,
      section_title: sectionTitle,
      section: sectionIndex + 1,
      questionNumber: questionNumber,
      descriptions: fieldData.descriptions,
      required: fieldData.required,
      other_options: fieldData.other_options
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
        other_options: fieldData.other_options,
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
        other_options: item.other_options
      };

      if (item.form.type === 'choice') {
        question.options = item.form.option.map((option, idx) => ({
          label: option,
          action: item.form.action[idx], // Assuming the first action is correct
        }));
      } else if (item.form.type === 'multiple') {
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

  // send data to iframe
  sendDataToParent = (data) => {
    window.parent.postMessage(data, '*'); // '*' mengizinkan dari semua sumber
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
              onAddField={() => this.addQuestionToSection(sectionIndex, -1)}
              onToggleQustion={() => this.toggleQuestionsVisibility(sectionIndex)}
              onDeleteSection={() => this.deleteSection(sectionIndex)}
              onUpdateTitle={(title) => this.onUpdateTitleSection(title, sectionIndex)}
              title={section.section_title}
            />
            <div style={{ display: section.isQuestionsVisible ? 'block' : 'none' }}>
              {section.questions.map((question, questionIndex) => (
                <Question
                  key={`${sectionIndex}-${question._id}`}
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
                  onAddQuestion={() => this.addQuestionToSection(sectionIndex, questionIndex)}
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