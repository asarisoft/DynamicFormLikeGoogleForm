// components/form/scale.js
import React, { Component } from 'react';

class Scale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '', // Nilai awal
      finish: '', // Nilai akhir
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { start, finish } = this.state;

    return (
      <div>
        <h4>Masukkan Rentang Nilai:</h4>
        <div>
          <label>Nilai Awal:</label>
          <input
            type="number"
            name="start"
            value={start}
            onChange={this.handleInputChange}
            placeholder="Nilai Awal"
          />
        </div>
        <div>
          <label>Nilai Akhir:</label>
          <input
            type="number"
            name="finish"
            value={finish}
            onChange={this.handleInputChange}
            placeholder="Nilai Akhir"
          />
        </div>
      </div>
    );
  }
}

export default Scale;
