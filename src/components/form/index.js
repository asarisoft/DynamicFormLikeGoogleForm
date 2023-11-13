import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Section from './section';
import Question from './question';
import Header from './header';
import { FormContainer } from './indexElement';
import { StyledButton } from '../general';
import Swal from 'sweetalert2';
import './global.css'
import sampleData from './sample';

import { connect } from 'react-redux';
import {
  updateTitleForm,
  setInitialData,

  addSection,
  removeSection,

  addQuestion,
  removeQuestion,
  setActiveQuestion,
  toggleQuestionsVisibility,
  reorderQuestions

} from '../../redux/formSlice';


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
    // Fungsi untuk menangani pesan yang diterima dari dokumen utama
    const handleMessageFromIframe = (event) => {
      const receivedData = event.data;
      if (!receivedData.json_form) {
        return;
      }
      // Mengatur dataReceivedFromIframe menjadi true ketika data diterima
      this.dataReceivedFromIframe = true;
      const formData = this.buildStateFromListQuestion(receivedData.json_form);
      this.props.setInitialData(formData)
    };

    // Menambahkan event listener untuk mendengarkan pesan dari iframe
    window.addEventListener('message', handleMessageFromIframe);

    // // sample data untuk transpile form
    // const kkk = this.buildStateFromListQuestion(sampleData);
    // this.props.setInitialData(kkk)
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
        this.props.removeQuestion({
          sectionIndex,
          questionIndex
        })
      }
    });
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
        this.props.removeSection({ sectionIndex })
      }
    });
  }

  populateData = () => {
    const { title, sections } = this.props.form;
    const updatedSections = [...sections];
    const result = [];
    let isFormValid = title ? true : false;
    console.log("aaaa", this.props.form)

    updatedSections.forEach((section, sectionIndex) => {
      let questionNumber = 1;
      if (!section.section_title) {
        isFormValid = false;
      }
      section.questions.forEach((question, questionIndex) => {
        if (!question.title) {
          isFormValid = false;
        }
        const dataQuestion = this.buildFormQuestionFromState(
          title,
          question,
          sectionIndex,
          section,
          questionNumber
        )
        questionNumber++;
        result.push(dataQuestion)
      });
    });
    console.log("resulst", result);

    if (isFormValid) {
      // send to iframe
      this.sendDataToParent({
        title: "OK",
        json_form: result
      });
      // 
      return {
        title: "OK",
        jsonForm: result
      }
    } else {
      Swal.fire({
        // icon: 'error',
        title: '',
        text: 'Please fill all required fields',
      });
      return null; // Atau kembalikan null jika ada kesalahan validasi
    }
  }

  // before submit, change format form to BE format
  buildFormQuestionFromState = (surveyTitle, fieldData, sectionIndex, section, questionNumber) => {
    const dataQuestion = {
      _id: fieldData._id,
      title: fieldData.title,
      section_title: section.section_title,
      section: sectionIndex,
      next_section_index: section.nextIndex,
      sub_section: section.subsection,
      questionNumber: questionNumber,
      descriptions: fieldData.descriptions,
      required: fieldData.required,
      other_options: fieldData.other_options,
      min_to_select: fieldData.min_to_select,
      max_to_select: fieldData.max_to_select,
      survey_title: surveyTitle
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
      const actions = []
      fieldData.options?.map(dt => {
        options.push(dt.label)
        actions.push(dt.action)
      })
      dataQuestion.form = {
        type: fieldData.type,
        option: options,
        action: actions,
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

  // before edit, change BE format to form Format
  buildStateFromListQuestion = (inputData) => {
    const sectionMap = new Map();
    const transformedData = [];
    let surveyTitle = ""

    inputData.forEach(item => {
      const sectionId = item.section;
      let sectionData = sectionMap.get(sectionId);
      surveyTitle = item.survey_title


      if (!sectionData) {
        sectionData = {
          label: `Section ${sectionId}`,
          section_title: item.section_title,
          questions: [],
          isQuestionsVisible: true,
          nextIndex: item.next_section_index,
          subsection: item.sub_section
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
        other_options: item.other_options,
        min_to_select: item.min_to_select,
        max_to_select: item.max_to_select
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
    return {
      title: surveyTitle,
      sections: transformedData
    }
  }

  // send data to iframe
  sendDataToParent = (data) => {
    window.parent.postMessage(data, '*'); // '*' mengizinkan dari semua sumber
  }

  onDragEnd = (result) => {
    if (!result.destination) {
      return; // Drag tidak selesai atau tidak ada perubahan
    }
    const { source, destination } = result;
    this.props.reorderQuestions({ source, destination })
  }

  render() {
    const { form } = this.props;
    return (
      <FormContainer>
        <Header ref={(ref) => { this.headerRef = ref }}
          title={form.title}
          onChangetTitle={(value) => this.props.updateTitleForm({ title: value })}
        />
        <DragDropContext onDragEnd={this.onDragEnd}>
          {form.sections?.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <Section label={section.label}
                onAddField={() => this.props.addQuestion({ sectionIndex, questionIndex: -1 })}
                onToggleQustion={() => this.props.toggleQuestionsVisibility({ sectionIndex })}
                onDeleteSection={() => this.deleteSection(sectionIndex)}
                sectionIndex={sectionIndex}
              />
              <div style={{ display: section.isQuestionsVisible ? 'block' : 'none' }}>
                <Droppable droppableId={`section-${sectionIndex}`}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {section.questions.map((question, questionIndex) => (
                        <Draggable
                          key={`${sectionIndex}-${question._id}`}
                          draggableId={`${sectionIndex}-${question._id}`}
                          index={questionIndex}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Question
                                question={question}
                                questionIndex={questionIndex}
                                sectionIndex={sectionIndex}
                                onRemoveQuestion={() => this.removeQuestionFromSection(sectionIndex, questionIndex)}
                                ref={(ref) => {
                                  if (!this.fieldRefs[sectionIndex]) {
                                    this.fieldRefs[sectionIndex] = [];
                                  }
                                  this.fieldRefs[sectionIndex][questionIndex] = ref; // Simpan referensi ke komponen Question
                                }}
                                onAddQuestion={() => this.props.addQuestion({ sectionIndex, questionIndex })}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          ))}
        </DragDropContext>
        <div className='form-footer'>
          <StyledButton onClick={() => this.props.addSection()}>Add Section</StyledButton>
          <StyledButton onClick={this.populateData}>Generate & Submit</StyledButton>
        </div>
      </FormContainer>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

const mapDispatchToProps = {
  updateTitleForm,
  setInitialData,

  addSection,
  removeSection,

  addQuestion,
  removeQuestion,
  setActiveQuestion,
  toggleQuestionsVisibility,
  reorderQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);