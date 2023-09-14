// button.js
import React from 'react';

const FormButton = ({ onAddField, onAddSection }) => {
  return (
    <div>
      <button onClick={onAddSection}>Tambah Section</button>
    </div>
  );
}

export default FormButton;
