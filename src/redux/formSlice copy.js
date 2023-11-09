import { createSlice } from '@reduxjs/toolkit';

const initialFormState = {
  title: '',
  sections: [
    {
      label: 'Section 1',
      section_title: '',
      questions: [
        {
          type: '',
          title: '',
          required: true
        }
      ],
      isQuestionsVisible: true
    }
  ]
};

export const formSlice = createSlice({
  name: 'form',
  initialState: initialFormState,
  reducers: {
    addSection: (state, action) => {
      state.sections.push(action.payload);
    },
    // removeSection: (state, action) => {
    //   state.sections.splice(action.payload, 1);
    // },
    // addQuestion: (state, action) => {
    //   state.sections[action.payload.sectionIndex].questions.push(action.payload.questionData);
    // },
    // removeQuestion: (state, action) => {
    //   state.sections[action.payload.sectionIndex].questions.splice(action.payload.questionIndex, 1);
    // },
    // changeFormTitle: (state, action) => {
    //   state.title = action.payload;
    // },
    // changeSectionTitle: (state, action) => {
    //   state.sections[action.payload.sectionIndex].section_title = action.payload.title;
    // },
    // changeQuestion: (state, action) => {
    //   state.sections[action.payload.sectionIndex].questions[action.payload.questionIndex] = action.payload.questionData;
    // }
  }
});

export const {
  addSection,
  removeSection,
  addQuestion,
  removeQuestion,
  changeFormTitle,
  changeSectionTitle,
  changeQuestion
} = formSlice.actions;

export default formSlice.reducer;
