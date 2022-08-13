import React from 'react'
import styled from 'styled-components'
import { Container } from './Container.styled'

const Background = styled.div`
    background: rgb(255,255,255);
    /* background: ${props => props.theme.primaryBgColor}; */
`

const ColOne = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 50px;
    text-align: left;
    margin: 40px;
    margin-bottom: 0;
`
const Card = styled.div`
    display:flex;
    flex-direction: column;
    align-items: left;
    margin: 40px;
    margin-top: ${props=> props.margin || "20px"};

    hr {
        border-top: 2px solid;
        width: 100%;
        margin: 10px 0;
    }

    span {
        font-size: 25px;
        margin-bottom: 20px;
    }
`

const Image = styled.img`
    width: 100%;
`

function LatestProjects() {
  return (
    <Background className="portfolio">
        <Container>
            <ColOne>
                <Title>Latest<br />Projects</Title>
                <Card>
                    <hr />
                    <span>WEATHER APP</span>
                    <Image src="https://img.freepik.com/free-vector/weather-concept-illustration_114360-7370.jpg?w=740&t=st=1660322296~exp=1660322896~hmac=652ce3a0481602bf5945bbebf96179fb6add1816a6c70a80855db193dd4a405f"></Image>
                </Card>
            </ColOne>
                <Card margin="120px">
                    <hr />
                    <span>STORY BOOK</span>
                    <Image src="https://img.freepik.com/free-vector/world-book-day-illustration_23-2149323889.jpg?w=740&t=st=1660323792~exp=1660324392~hmac=f7ec880150a71051bd7e40b70dc5800950dd2e83aeca90088e7c7d88ecbf2944"></Image>
                </Card>

                <Card>
                    <hr />
                    <span>TODO APP</span>
                    <Image src="https://img.freepik.com/free-vector/task-management-concept-illustration_335657-5485.jpg?w=740&t=st=1660323280~exp=1660323880~hmac=fbd87cce09ecfadc85bb8440accddde908ef0ae941fa1fd3d23dc1b263d7e4a0"></Image>
                </Card>
        </Container>
    </Background>
  )
}

export default LatestProjects