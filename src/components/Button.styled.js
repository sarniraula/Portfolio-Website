import styled from "styled-components";

export const Button = styled.button`
    padding: 20px;
    margin: 5px;
    border: none;
    border-radius: 25px;
    font-size: 15px;

    &:hover{
        background-color: ${props => props.theme.secondaryColor};
        color: white;
    }
`