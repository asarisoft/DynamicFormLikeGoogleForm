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

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <HeaderFormContainer>
        <Input
          type="text"
          value={this.props.title}
          placeholder='Survey Title*'
          onChange={(e)=>this.props.onChangetTitle(e.target.value)}
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
