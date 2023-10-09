import React from 'react';
import { SectionContainer } from './sectionElement';
import { StyledButton, Input } from '../general'

const SectionForm = ({ section, label, onAddField, onToggleQustion, onDeleteSection, onUpdateTitle, title }) => {
  return (
    <SectionContainer>
      <div className='top-section'>
        <h3>{label}</h3>
        <div className='button-wrapper'>
          {section.questions.length === 0 &&
            <StyledButton
              className='add-button'
              onClick={onAddField}>+ Question</StyledButton>
          }
          {section.questions.length > 0 &&
            <StyledButton
              className='add-button'
              onClick={onToggleQustion}>{section.isQuestionsVisible ? "Hide" : "Show"}</StyledButton>
          }
          <StyledButton
            className='delete-button'
            onClick={onDeleteSection}>-</StyledButton>
        </div>
      </div>
      <Input
        name="title"
        placeholder='Section Title'
        value={title}
        onChange={onUpdateTitle}
      />
    </SectionContainer>
  );
}

export default SectionForm;
