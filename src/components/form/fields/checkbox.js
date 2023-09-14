// components/form/checkbox.js
import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: [],
      options: ['Option 1'], // Opsi awal
    };
  }

  addOption = () => {
    this.setState((prevState) => ({
      options: [...prevState.options, `Option ${prevState.options.length + 1}`],
    }));
  };

  removeOption = (index) => {
    this.setState((prevState) => {
      const updatedOptions = [...prevState.options];
      updatedOptions.splice(index, 1);
      return { options: updatedOptions };
    });
  };

  handleCheckboxChange = (e, option) => {
    const { selectedOptions } = this.state;
    const isChecked = e.target.checked;

    if (isChecked) {
      selectedOptions.push(option);
    } else {
      const index = selectedOptions.indexOf(option);
      if (index !== -1) {
        selectedOptions.splice(index, 1);
      }
    }

    this.setState({ selectedOptions });
  };

  render() {
    const { options } = this.state;

    return (
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => this.handleCheckboxChange(e, option)}
              />
              {option}
            </label>
            <button onClick={() => this.removeOption(index)}>Hapus</button>
          </div>
        ))}
        <button onClick={this.addOption}>Tambah Pilihan</button>
      </div>
    );
  }
}

export default Checkbox;
