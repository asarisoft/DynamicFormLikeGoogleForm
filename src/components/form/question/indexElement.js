import styled, { css } from 'styled-components';
import { screensize, colors } from '../../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const FieldsContainer = styled.div`
    text-align: left;
    display: grid;
    grid-template-columns: 20px 1fr;
    border-radius: 4px;
    margin: 4px 0 16px;
    border: 1px solid #ccc;
    padding: 8px;
    position: relative;
    &.active {
        background-color: ${colors.blue1}
    }
    div {
        .question {
            display: grid;
            grid-template-columns: 1fr 40px;
            column-gap: 8px;
            div {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                span {
                    width: 40px;
                    display: block;
                    text-align: center;
                    font-weight: bold;
                }
                input {
                    flex: 1
                } 
            }
            button {
                background-color: red;
            }
        }
        .body {
            margin-top: 4px;
            positon: relative;
            select {
                padding: 4px;
                background-color: ${colors.blue4};
                color: white;
                border-radius: 4px;
                margin: 4px 0px 10px;
            }
            .btn-add-question {
                position: absolute;
                bottom: 8px;
                right: 8px;
            }
        }
    }
`;
