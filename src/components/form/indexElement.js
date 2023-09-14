import styled, { css } from 'styled-components';
import { screensize } from '../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const FormContainer = styled.div`
    width: 100%;
    .form-footer {
        text-align: center;
        margin-top: 8px;
        width: 100%;
    }
    @media ${screensize.desktopUp} {
        width: 65%;
        margin: 0 auto;
    }
`;
