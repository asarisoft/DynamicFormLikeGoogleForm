// form/section.js
import React from 'react';

const SectionForm = ({ label, children }) => {
  return (
    <div>
      <h2>{label}</h2>
      {children}
    </div>
  );
}

export default SectionForm;
