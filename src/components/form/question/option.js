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
      other_options: false,
    };
  }

  componentDidMount() {
    if (this.props.question.options) {
      this.setState({
        options: this.props.question.options,
        other_options: this.props.question.other_options
      }, () => {
        this.props.onUpdateState(this.state)
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.defaultOptions && this.props.defaultOptions !== prevProps.defaultOptions) {
      this.setState({
        options: this.props.defaultOptions,
      })
    }
  }

  addOption = () => {
    this.setState((prevState) => ({
      options: [...prevState.options, { label: '', action: '' }],
    }));
    this.props.onUpdateState(this.state)
  };

  handleOtherOptionsChange = (e) => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked }, () => {
      this.props.onUpdateState(this.state)
    });

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
        }, () => {
          this.props.onUpdateState(this.state)
        });
      }
    });
  };

  handleOptionChange = (index, e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const updatedOptions = [...prevState.options];
      updatedOptions[index][name] = value;
      return { options: updatedOptions };
    }, () => {
      this.props.onUpdateState(this.state)
    });
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
        {type == 'choice' &&
          <div className='last-wrapper'>
            <input
              type="checkbox"
              name="other_options"
              checked={this.state.other_options}
              onChange={this.handleOtherOptionsChange}
            />
            <label className='label-last-options'>
              Set last option as other options</label>
          </div>
        }
      </Container>
    );
  }
}

export default Options;
