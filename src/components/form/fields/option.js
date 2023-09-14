// components/form/option.js
import React, { Component } from 'react';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [{ label: '', action: '' }],
    };
  }

  addOption = () => {
    this.setState((prevState) => ({
      options: [...prevState.options, { label: '', action: '' }],
    }));
  };

  removeOption = (index) => {
    this.setState((prevState) => {
      const updatedOptions = [...prevState.options];
      updatedOptions.splice(index, 1);
      return { options: updatedOptions };
    });
  };

  handleOptionChange = (index, e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const updatedOptions = [...prevState.options];
      updatedOptions[index][name] = value;
      return { options: updatedOptions };
    });
  };

  render() {
    const { options } = this.state;

    return (
      <div>
        <h4>Opsi Jawaban:</h4>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              name="label"
              placeholder="Jawaban"
              value={option.label}
              onChange={(e) => this.handleOptionChange(index, e)}
            />
            <input
              type="text"
              name="action"
              placeholder="Action (opsional)"
              value={option.action}
              onChange={(e) => this.handleOptionChange(index, e)}
            />
            <button onClick={() => this.removeOption(index)}>Hapus</button>
          </div>
        ))}
        <button onClick={this.addOption}>Tambah Opsi</button>
      </div>
    );
  }
}

export default Options;
