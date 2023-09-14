// header.js
import React, { Component } from 'react';
import {
  Input,
  TextArea
} from '../general';
import { HeaderFormContainer} from './headerElement';


class HeaderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  render() {
    const { title, description } = this.state;

    return (
      <HeaderFormContainer>
        <Input
          type="text"
          value={title}
          placeholder='form title'
          onChange={this.handleTitleChange}
        />
        {/* <TextArea
          value={description}
          placeholder='form description'
          onChange={this.handleDescriptionChange}
        /> */}
      </HeaderFormContainer>
    );
  }
}

export default HeaderForm;
