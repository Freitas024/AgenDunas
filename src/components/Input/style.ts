import styled from "styled-components"

export const Wrapper = styled.main `
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 12px; 

    label {
        color: blue;
        font-weight: 600;
    }
    ::placeholder {
        color: red;
        font-weight: normal;
    }
`;