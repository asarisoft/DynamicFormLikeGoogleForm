import styled from 'styled-components';
// import { screensize } from '../../../utils'; // Gantilah 'path-to-your-utils' dengan path yang benar ke utils Anda

export const Container = styled.div`
    width: 80%;
    .input-wrapper {
        display: flex;
        justify-content: space-between;
        flex-direcation: column;
        align-items: center;
        column-gap: 4px;
        input {
            width: 43%
        }
    }
`;
