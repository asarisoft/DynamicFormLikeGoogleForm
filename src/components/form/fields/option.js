// components/form/option.js
import React, { Component } from 'react';
import { Container } from './optionElement'
import { Input, StyledButton } from '../../general'

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
            {type == 'single' &&
              <Input
                type="number"
                name="action"
                placeholder="Go To Section"
                value={option.action}
                onChange={(e) => this.handleOptionChange(index, e)}
              />
            }
            <StyledButton onClick={() => this.removeOption(index)}>x</StyledButton>
            <StyledButton onClick={this.addOption}>+</StyledButton>
          </div>
        ))}
      </Container>
    );
  }
}

export default Options;
