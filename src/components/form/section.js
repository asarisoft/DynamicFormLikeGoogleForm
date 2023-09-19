import React from 'react';
import { SectionContainer } from './sectionElement';
import { StyledButton } from '../general'

const SectionForm = ({ section, label, onAddField, onToggleQustion, onDeleteSection }) => {
  return (
    <SectionContainer>
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
    </SectionContainer>
  );
}

export default SectionForm;
