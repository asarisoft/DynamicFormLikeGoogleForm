import styled from 'styled-components';
import { screensize, colors } from '../../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const FieldsContainer = styled.div`
    box-sizing: border-box;
    text-align: left;
    display: grid;
    grid-template-columns: 20px 1fr;
    border-radius: 4px;
    margin: 0 0 16px;
    border: 1px solid #ccc;
    padding: 8px;
    position: relative;
    &.active {
        border-bottom-width: 4px;
        border-bottom-color: ${colors.blue4}
    }

    .type-wrapper {
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
        position: relative;
        select {
            padding: 4px;
            background-color: ${colors.blue4};
            color: white;
            border-radius: 4px;
        }
        .label {
            font-size: 14px;
        }
        .required-wrapper {
            background-color: ${colors.blue4};
            width: 100px;
            max-width: 100px;
            border-radius: 4px;
            color: white;
            display: flex;
            height: 25px;
            margin-right: 10px;
            border: 1px solid grey;
            font-size: 14px;
            justify-content: center;
            align-items: center;
        }
        .toggle-button {
            position: absolute;
            right: 0;
            background:  ${colors.blue3};
        }
    }

    div {
        .question {
            display: grid;
            grid-template-columns: 1fr 40px;
            column-gap: 8px;
            bacgkround-color: white;
            .delete-button {
                background-color: ${colors.red}
            }
            .toggle-button {
                width: 100%;
                margin-bottom: 10px;
            }
        }
        .body {
            margin-top: 4px;
            positon: relative;
            
            .btn-add-question {
                position: absolute;
                bottom: 2px;
                right: 8px;
            }
            
            
        }
    }
`;
