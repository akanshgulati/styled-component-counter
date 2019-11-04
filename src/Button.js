import styled from "styled-components"

const Button = styled.button`
    background-color: #cbd5e0;
    color: #2d3748;
    font-weight: 600;
    outline: 0;
    transition: all 500ms linear;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin: 0 20px;
    border-radius: 0.25rem;
    border: 0 solid #e2e8f0;
    &:hover {
        background-color: #a0aec0;
    }
`;

export default Button;
