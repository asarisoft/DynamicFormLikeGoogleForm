// header.js
import React, { Component } from 'react';
import {
  Input,
  // TextArea
} from '../general';
import { HeaderFormContainer} from './headerElement';


class HeaderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      descriptions: ''
    };
  }

  componentDidMount () {
    this.setState({title: this.props.title})
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <HeaderFormContainer>
        <Input
          type="text"
          value={this.state.title || this.props.title}
          placeholder='Survey Title'
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
