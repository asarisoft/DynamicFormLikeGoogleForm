// components/form/scale.js
import React, { Component } from 'react';
import { Container } from './scaleElement'
import { Input, StyledButton } from '../../general'

class Scale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '', // Nilai awal
      to: '', // Nilai akhir
      label_start: '',
      label_to: ''
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
        to: this.props.question.scale.to,
        label_start: this.props.question.scale.label_start,
        label_to: this.props.question.scale.label_to,
      })
  }

  render() {
    const { start, to, label_start, label_to } = this.state;

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
            name="to"
            value={to}
            onChange={this.handleInputChange}
            placeholder="Finish"
          />
          <br/>
          <Input
            type="string"
            name="label_start"
            value={label_start}
            onChange={this.handleInputChange}
            placeholder="Left String"
          />
          <Input
            type="string"
            name="label_to"
            value={label_to}
            onChange={this.handleInputChange}
            placeholder="Right String"
          />
        </div>
      </Container>
    );
  }
}

export default Scale;
