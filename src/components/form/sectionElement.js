import styled, { css } from 'styled-components';
import { screensize } from '../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const SectionContainer = styled.div`
    border: 1px solid #ccc;
    border-left: 4px solid blue;
    border-radius: 4px;
    padding: 8px;
    margin-top: 8px;
    position: relative;
    h3 {
        position: absolute;
        top: -16px;
        left: 0px;
        color: blue;
        font-size: 14px;
        padding: 4px 8px;
    }
    .button-wrapper {
        text-align: right
    }
`;
