import React from "react";
import styled from "styled-components";

const FDiv = styled.div`
    justify-content: space-around;
    background: white;
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 17px;
    display: flex;
    align-items: center;
    padding: 0px 28px 0px 0px;
    height: 4.5rem;
    box-shadow: ${props => props.theme.boxShadow};

    img{
        transform: scale(0.4);
    }

    span{
        font-size: 17px;
        font-weight: 500;;
        /* This color added here to use in dark mode later */
        color: black;
    }
`

const FloatingDiv = ({img, text1, text2}) => {
  return (
    // darkMode
    <FDiv>
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </FDiv>
  );
};

export default FloatingDiv;