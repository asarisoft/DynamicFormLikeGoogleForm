// header.js
import React, { Component } from 'react';

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
      <div>
        <label>Judul Form</label>
        <input
          type="text"
          value={title}
          onChange={this.handleTitleChange}
        />

        <label>Deskripsi Form</label>
        <textarea
          value={description}
          onChange={this.handleDescriptionChange}
        />
      </div>
    );
  }
}

export default HeaderForm;
