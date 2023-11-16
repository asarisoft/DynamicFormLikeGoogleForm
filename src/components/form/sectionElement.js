import styled, { css } from 'styled-components';
import { screensize, colors } from '../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const SectionContainer = styled.div`
  border: 1px solid #ccc;
  background-color: #f8f9fa;
  border-left: 4px solid ${colors.blue4};
  border-radius: 4px;
  padding: 8px;
  margin-top: 8px;
  position: relative;
  
  margin-top: 24px;
  .top-section {
    display: flex;
    justify-content: space-between;

    .left {
      text-align: left;
      flex: 1;

      .next-wrapper {
        display: flex;
        align-items: center;
        margin-top: 10px;
        div {
          height: 40px;
          display: flex;
          align-items: center;
        }
        select {
          // padding: 9px 0px;
          border-radius: 4px;
          border: 1px solid grey;
          width: 120px;
        }
      }
    }
  }
  .inputTitle { 
    width: calc(100% - 24px); /* Adjusted width calculation */
    margin-top: 8px;
  }
  h3 {
    color: ${colors.blue4};
    font-size: 16px;
    margin: 0;
  }
  .button-wrapper {
    text-align: right;
    button {
      margin-left: 10px;
    }
    .delete-button {
      background-color: ${colors.red};
    }
  },
`;

