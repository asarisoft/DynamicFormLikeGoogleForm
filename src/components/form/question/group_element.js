import styled from 'styled-components';
import { colors, screensize } from '../../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const Container = styled.div`
    width: 100%;
    .input-wrapper {
        display: flex;
        flex-direcation: column;
        align-items: center;
        column-gap: 4px;
        input {
            width: 60%
        }
        select {
            width: 40%;
            padding: 9px 0px;
            border-radius: 4px;
            border: 1px solid #ccc;
        },
        .remove-button {
            background-color: ${colors.red}
        }
    }
    .last-wrapper {
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    .label-last-options {
        font-size: 14px;
        max-width: 60%;
        display: block;
        margin-left: 10px;
    }
`;
