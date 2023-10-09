// components/form/option.js
import React, { Component } from 'react';
import { Container } from './optionElement';
import { Input, StyledButton } from '../../general';
import Swal from 'sweetalert2';
import '../global.css'

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [{ label: '', action: '' }],
    };
  }

  componentDidMount () {
    if (this.props.question.options)
      this.setState({
        options: this.props.question.options
      })
  }
   
  addOption = () => {
    this.setState((prevState) => ({
      options: [...prevState.options, { label: '', action: '' }],
    }));
    this.props.onUpdateState(this.state.options)
  };

  removeOption = (index) => {
    Swal.fire({
      title: '',
      text: 'Are you sure to delete this option?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'custom-yes-button', // Apply the custom CSS class to the Yes button
        cancelButton: 'cancel-button', // Apply the custom CSS class to the Yes button
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState((prevState) => {
          const updatedOptions = [...prevState.options];
          updatedOptions.splice(index, 1);
          return { options: updatedOptions };
        });
        this.props.onUpdateState(this.state.options)
      }
    });
  };

  handleOptionChange = (index, e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const updatedOptions = [...prevState.options];
      updatedOptions[index][name] = value;
      return { options: updatedOptions };
    });
    this.props.onUpdateState(this.state.options)
  };

  render() {
    const { options } = this.state;
    const { type } = this.props;

    return (
      <Container>
        {options.map((option, index) => (
          <div key={index} className='input-wrapper'>
            <Input
              type="text"
              name="label"
              placeholder="Option Text"
              value={option.label}
              onChange={(e) => this.handleOptionChange(index, e)}
            />
            {/* {type == 'choice' &&
              <Input
                type="number"
                name="action"
                placeholder="Go To Section"
                value={option.action}
                onChange={(e) => this.handleOptionChange(index, e)}
              />
            } */}
            <StyledButton onClick={this.addOption}>+</StyledButton>
            <StyledButton onClick={() => this.removeOption(index)} 
              className='remove-button'>x</StyledButton>
          </div>
        ))}
      </Container>
    );
  }
}

export default Options;
