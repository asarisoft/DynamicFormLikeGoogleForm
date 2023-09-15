import React from 'react';
import { SectionContainer } from './sectionElement';
import { StyledButton } from '../general'

const SectionForm = ({ label, onAddField }) => {
  return (
    <SectionContainer>
      <h3>{label}</h3>
      <div className='button-wrapper'>
        <StyledButton
          className='add-button'
          onClick={onAddField}>+ Question</StyledButton>
      </div>
    </SectionContainer>
  );
}

export default SectionForm;
