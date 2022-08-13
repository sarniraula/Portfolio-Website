import styled from "styled-components";

export const Button = styled.button`
    padding: 20px;
    margin: 5px;
    border: none;
    border-radius: 20px;
    font-size: 12px;
    font-family: "Poppins";
    font-weight: 400;
    color: ${props => props.theme.textGrey};
    box-shadow: ${props => props.theme.boxShadow};


    &:hover{
        background-color: ${props => props.theme.secondaryColor};
        color: white;
    }
`