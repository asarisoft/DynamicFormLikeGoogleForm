import styled, { css } from 'styled-components';
import { screensize } from '../../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const FieldsContainer = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    margin: 4px 0;
    border: 1px solid #ccc;
    padding: 8px;
    background-color: #ccc;
    position: relative;

    .question {
        text-align: center;
        font-size: 14px;
        display: flex;
        align-items: center;
        span {
            width: 40px;
        }
        input {
            width: 100%;
        }
    }
    .body {
        margin-left: 39px;
        margin-top: 4px;
        positon: relative;
        select {
            position: absolute;
            right: 10px;
            padding: 4px;
            background-color: blue;
            color: white;
            border-radius: 4px;
        }
    }
`;
