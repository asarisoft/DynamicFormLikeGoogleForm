// components/form/scale.js
import React, { Component } from 'react';
import { Container } from './scaleElement'
import { Input, StyledButton } from '../../general'

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
      <Container>
        <div className='input-wrapper'>
          <Input
            type="number"
            name="start"
            value={start || 1}
            onChange={this.handleInputChange}
            placeholder="Start"
          />
          <Input
            type="number"
            name="finish"
            value={finish || 5}
            onChange={this.handleInputChange}
            placeholder="Finish"
          />
        </div>
      </Container>
    );
  }
}

export default Scale;
