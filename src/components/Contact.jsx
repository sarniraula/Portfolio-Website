import React from 'react'
import styled from 'styled-components'
import {AiOutlineMail} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { Container } from './Container.styled'

const Background = styled.div`
    background: rgb(255,255,255);
    background: ${props => props.theme.footerBgColor};

    hr {
        width: 100%;
        border-top: 2px solid black;
    }
`


const Heading = styled.div`
    hr {
        width: 100%;
        border-top: 2px solid black;
    }
`
const Title = styled.h1`
    font-size: 50px;
    text-align: left;
    margin-bottom: 0px;
`

const ContactLink = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
    span {
        margin-left: 5px;
    }
`

function Contact() {
  return (
    <Background>
        <Container>
            <Heading>
                <Title>Let's<br />Discuss<br/>Your Project</Title>
                <hr />
                <ContactLink>
                    <AiOutlineMail /><span>sar.niraula@gmail.com</span> 
                </ContactLink>
                <hr/>
                <ContactLink>
                    <HiOutlineLocationMarker /><span>Pulchowk, Lalitpur</span>
                </ContactLink>
                <hr />
            </Heading>
        </Container>
        <hr />
    </Background>
  )
}

export default Contact