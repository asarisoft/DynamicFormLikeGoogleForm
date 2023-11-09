import styled from 'styled-components';
import {  screensize } from '../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const FormContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    .form-footer {
        text-align: center;
        margin-top: 8px;
        width: 100%;
        button {
            margin: 0 8px;
        }
    }
    @media ${screensize.desktopUp} {
        width: 80%;
        margin: 0 auto;
    }
`;
