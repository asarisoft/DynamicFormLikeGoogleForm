import styled, { css } from 'styled-components';
import { screensize } from '../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const SectionContainer = styled.div`
    border: 1px solid #ccc;
    border-left: 4px solid blue;
    border-radius: 4px;
    padding: 8px;
    margin-top: 8px;
    position: relative;
    display: flex;
    justify-content: space-between;
    h3 {
        color: blue;
        font-size: 14px;
        margin: 0;
    }
    .button-wrapper {
        text-align: right
    }
`;
