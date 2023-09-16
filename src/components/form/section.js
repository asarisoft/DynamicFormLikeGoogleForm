import React from 'react';
import { SectionContainer } from './sectionElement';
import { StyledButton } from '../general'

const SectionForm = ({ section, label, onAddField, onToggleQustion }) => {
  return (
    <SectionContainer>
      <h3>{label}</h3>
      <div className='button-wrapper'>
        <StyledButton
          className='add-button'
          onClick={onAddField}>+ Question</StyledButton>
        {section.fields.length > 0 &&
          <StyledButton
            className='add-button'
            onClick={onToggleQustion}>{section.isQuestionsVisible ? "Hide" : "Show"}</StyledButton>
        }
      </div>
    </SectionContainer>
  );
}

export default SectionForm;
