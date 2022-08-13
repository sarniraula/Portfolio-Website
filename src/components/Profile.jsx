import React from 'react'
import styled from 'styled-components'

import { Button } from './Button.styled'

import { FaRegPaperPlane } from 'react-icons/fa'
import { AiOutlineArrowUp } from 'react-icons/ai'
import myImage from '../assets/images/pp.png'

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
`

const Heading = styled.div`

`

const Title = styled.h1`
    font-size: 50px;
    text-align: left;
    margin-bottom: 0px;
`

const Subtitle = styled.h3`
    font-size: 11px;
    font-family: "Poppins";
    font-weight: 400;
    color: ${props => props.theme.textGrey};
`

const ButtonItems = styled.div`
    display: flex;
`

const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: Right;
    margin-right: 50px;
`

const Image = styled.img`
    width: 60%;
`

function Profile() {
  return (
    <div>
        <Section>
            <div>
                <Heading>
                    <Title>We'have<br />Design<br/>Experience</Title>

                    <Subtitle>
                        Hi I’m a UX/UI designer - creating bold and brave interface for the companies all across the world.
                    </Subtitle>

                    <ButtonItems>
                        <div>
                            <Button>Let's Talk <FaRegPaperPlane /></Button>
                        </div>
                        <div>
                            <Button>Portfolio <AiOutlineArrowUp/></Button>
                        </div>
                    </ButtonItems>
                </Heading>
            </div>

            <ImageSection>
                <Image src={myImage}/>
            </ImageSection>

        </Section>
    </div>
  )
}

export default Profile