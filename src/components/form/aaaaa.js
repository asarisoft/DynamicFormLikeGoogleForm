populateData2 = () => {
    const { sections } = this.state;
    const result = []
    sections.forEach((section, sectionIndex) => {
      section.questions.forEach((question, questionIndex) => {
        const fieldData = this.fieldRefs[sectionIndex][questionIndex].state;
        const dataQuestion = {
          _id: fieldData._id,
          title: fieldData.title,
          section: sectionIndex+1,
          descriptions: fieldData.descriptions,
          required: fieldData.required,
          descriptions: fieldData.descriptions
        }
        // delete fieldData.title;
        // delete fieldData.descriptions;
        // delete fieldData.required;
        // delete fieldData._id;
        dataQuestion.form = fieldData
        result.push(dataQuestion)
      });
    });
    console.log(result);
    return result;
  }