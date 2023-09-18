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
    this.props.onUpdateState(this.state)
  };

  componentDidMount () {
    if (this.props.question.scale)
      this.setState({
        start: this.props.question.scale.start,
        finish: this.props.question.scale.finish
      })
  }

  render() {
    const { start, finish } = this.state;

    return (
      <Container>
        <div className='input-wrapper'>
          <Input
            type="number"
            name="start"
            value={start}
            onChange={this.handleInputChange}
            placeholder="Start"
          />
          <Input
            type="number"
            name="finish"
            value={finish}
            onChange={this.handleInputChange}
            placeholder="Finish"
          />
        </div>
      </Container>
    );
  }
}

export default Scale;
