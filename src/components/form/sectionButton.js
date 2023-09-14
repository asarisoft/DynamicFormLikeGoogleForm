// button.js
import React from 'react';

const SectionButton = ({ onAddField, onAddSection }) => {
  return (
    <div>
      <button onClick={onAddField}>Tambah Field</button>
    </div>
  );
}

export default SectionButton;
