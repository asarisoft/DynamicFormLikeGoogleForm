import styled, { css } from 'styled-components';
import { colors, screensize } from '../../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const Container = styled.div`
    width: 80%;
    .input-wrapper {
        display: flex;
        flex-direcation: column;
        align-items: center;
        column-gap: 4px;
        input {
            width: 43%
        }
        .remove-button {
            background-color: ${colors.red}
        }
    }
`;
