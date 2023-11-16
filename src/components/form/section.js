import React, { Component } from 'react';
import { SectionContainer } from './sectionElement';
import { StyledButton, Input } from '../general';
import { updateSection } from '../../redux/formSlice';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faEyeSlash, faPlus, faAdd } from '@fortawesome/free-solid-svg-icons';
import ReactQuill from 'react-quill'; // Import Quill React Component


const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ]
};


class SectionForm extends Component {
  render() {
    const {
      onAddField,
      onToggleQustion,
      onDeleteSection,
      sectionIndex
    } = this.props;

    const sections = this.props.form.sections;
    const section = this.props.form.sections[sectionIndex];

    return (
      <SectionContainer>
        <div className='top-section'>
          <div className='left'>
            <h3>Section: {sectionIndex + 1}</h3>
            <div className='next-wrapper'>
              <div style={{ marginRight: '16px' }}>
                <input
                  type="checkbox"
                  name="required"
                  checked={section.subsection}
                  onChange={(e) => this.props.updateSection({
                    sectionIndex,
                    data: { subsection: e.target.checked }
                  })}
                />
                <label>Subsection</label>
              </div>
              {!section.subsection &&
                <div>
                  <select
                    name="action"
                    value={section?.nextIndex}
                    onChange={(e) => this.props.updateSection({
                      sectionIndex,
                      data: { nextIndex: parseInt(e.target.value) }
                    })}
                  >
                    <option value="">Next Sections</option>
                    {sections.map((section, idx) => {
                      if (idx <= sectionIndex)
                        return null
                      else if (section.subsection)
                        return null
                      else
                        return <option key={idx} value={idx}>
                          Section {idx + 1} - {section.section_title}
                        </option>
                    })}
                  </select>
                </div>
              }
            </div>
          </div>
          <div className='button-wrapper'>
            {section.questions.length === 0 &&
              <StyledButton
                className='add-button'
                onClick={onAddField}><FontAwesomeIcon icon={faAdd} /> Question</StyledButton>
            }
            {section.questions.length > 0 &&
              <StyledButton
                className='add-button'
                onClick={onToggleQustion}>
                {section.isQuestionsVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                {` Section`}
              </StyledButton>
            }
            <StyledButton
              className='delete-button'
              onClick={onDeleteSection}>
              <FontAwesomeIcon icon={faTrash} />
            </StyledButton>
          </div>
        </div>
        <div>
          <ReactQuill
            theme={"snow"}
            value={section?.section_title}
            onChange={(v) => this.props.updateSection({
              sectionIndex,
              data: { section_title: v }
            })}
            modules={modules}
          />

        </div>
      </SectionContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

const mapDispatchToProps = {
  updateSection,
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionForm);

