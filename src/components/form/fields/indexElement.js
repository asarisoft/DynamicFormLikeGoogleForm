import styled, { css } from 'styled-components';
import { screensize, colors } from '../../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const FieldsContainer = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    margin: 4px 0 16px;;
    border: 1px solid #ccc;
    padding: 8px;
    position: relative;
    &.active {
        background-color: ${colors.blue1}
    }

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
    }
    .body {
        margin-top: 4px;
        positon: relative;
        select {
            position: absolute;
            right: 10px;
            padding: 4px;
            background-color: ${colors.blue4};
            color: white;
            border-radius: 4px;
        }
    }
`;
