import React from 'react'
import styled from 'styled-components'
import { Container } from './Container.styled'

const Background = styled.div`
    background: ${props => props.theme.primaryBgColor};
`

const Title = styled.h1`
    font-size: 50px;
    text-align: left;
    margin-bottom: 0;
`

const Skills = styled.div`
    hr {
        border-top: 2px solid;
    }
`

const Experience = styled.div`
    
`

const SubTitle = styled.h2`
    font-size: 30px;
    
`

function SkillsAndExperience() {
  return (
    <Background className='skills'>
        <Container>
            <Skills>
                <Title>Skills &<br />Experience</Title>
                <hr />
                <SubTitle>Skills</SubTitle>
            </Skills>

            <Experience>
                <Experience>
                    <SubTitle>Experience</SubTitle>
                </Experience>
            </Experience>
        </Container>
    </Background>
  )
}

export default SkillsAndExperience