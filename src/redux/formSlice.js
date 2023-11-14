import { createSlice } from '@reduxjs/toolkit';

const initialFormState = {
  title: '',
  sections: [
    {
      section_title: '',
      questions: [],
      isQuestionsVisible: true,
      nextIndex: 'default',
      subsection: false,
    }
  ]
};

export const formSlice = createSlice({
  name: 'form',
  initialState: initialFormState,
  reducers: {
    setInitialData: (state, action) => {
      const { sections, title } = action.payload;
      state.sections = sections;
      state.title = title;
    },
    updateTitleForm: (state, action) => {
      const { title } = action.payload;
      state.title = title;
    },
    addSection: (state) => {
      const newSection = {
        section_title: '',
        questions: [],
        isQuestionsVisible: true,
        nextIndex: 'default',
        subsection: false,
      };
      state.sections.push(newSection);
    },
    updateSection: (state, action) => {
      const { sectionIndex, data } = action.payload;
      const section = state.sections[sectionIndex];
      state.sections[sectionIndex] =  { ...section, ...data };
    },
    removeSection: (state, action) => {
      const { sectionIndex } = action.payload;
      state.sections.splice(sectionIndex, 1);
    },

    addQuestion: (state, action) => {
      const { sectionIndex, questionIndex } = action.payload;
      const section = state.sections[sectionIndex];

      // Setel semua pertanyaan sebelumnya dalam section menjadi isActive: false
      section.questions.forEach((question) => {
        question.isActive = false;
      });

      // Tambahkan pertanyaan baru dengan isActive: true
      section.questions.splice(questionIndex + 1, 0, {
        isActive: true,
        _id: `${Date.now()}`,
        required: true,
        title: "",
        type: 'choice',
        descriptions: '',
        min_to_select: 1,
        max_to_select: 10,
        other_options: false,
        options: [],
        scale: {},
        sorting: [],
      });

      section.isQuestionsVisible = true;
    },
    updateQuestion: (state, action) => {
      const { sectionIndex, questionIndex, data } = action.payload;
      const section = state.sections[sectionIndex];
      if (section && section.questions[questionIndex]) {
        section.questions[questionIndex] = { ...section.questions[questionIndex], ...data };
      }
    },
    removeQuestion: (state, action) => {
      const { sectionIndex, questionIndex } = action.payload;
      const section = state.sections[sectionIndex];
      if (section) {
        section.questions.splice(questionIndex, 1);
      }
    },
    setActiveQuestion: (state, action) => {
      const { sectionIndex, questionIndex } = action.payload;
      const section = state.sections[sectionIndex];
      section.questions.forEach((question, index) => {
        question.isActive = index === questionIndex;
      });
    },
    toggleQuestionsVisibility: (state, action) => {
      const { sectionIndex } = action.payload;
      const section = state.sections[sectionIndex];
      if (section) {
        section.isQuestionsVisible = !section.isQuestionsVisible;
      }
    },
    reorderQuestions: (state, action) => {
      const { source, destination } = action.payload;
      if (source.droppableId === destination.droppableId) {
        // Pengurutan dalam satu Droppable (sama dengan satu section)
        const sectionIndex = parseInt(source.droppableId.replace('section-', ''));
        const section = state.sections[sectionIndex];
        if (section) {
          const [movedQuestion] = section.questions.splice(source.index, 1);
          section.questions.splice(destination.index, 0, movedQuestion);
        }
      } else {
        // Pengurutan antar Droppable (misalnya, antara dua section)
        const sourceSectionIndex = parseInt(source.droppableId.replace('section-', ''));
        const destSectionIndex = parseInt(destination.droppableId.replace('section-', ''));
        const sourceSection = state.sections[sourceSectionIndex];
        const destSection = state.sections[destSectionIndex];
        if (sourceSection && destSection) {
          const [movedQuestion] = sourceSection.questions.splice(source.index, 1);
          destSection.questions.splice(destination.index, 0, movedQuestion);
        }
      }
    }

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
  updateTitleForm,
  setInitialData,

  addSection,
  updateSection,
  removeSection,

  addQuestion,
  updateQuestion,
  removeQuestion,
  setActiveQuestion,
  toggleQuestionsVisibility,
  reorderQuestions,

  changeFormTitle,
  changeSectionTitle,
  changeQuestion
} = formSlice.actions;

export default formSlice.reducer;
