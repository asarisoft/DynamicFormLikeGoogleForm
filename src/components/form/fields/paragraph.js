// components/form/paragraph.js
import React, { Component } from 'react';

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '', // Jawaban berbentuk paragraf
    };
  }

  handleAnswerChange = (e) => {
    this.setState({ answer: e.target.value });
  };

  render() {
    const { answer } = this.state;
    return (
      <div >
        {/* <textarea
          rows="4"
          cols="50"
          value={answer}
          onChange={this.handleAnswerChange}
          placeholder="Tulis jawaban Anda di sini"
        /> */}
      </div>
    );
  }
}

export default Paragraph;
