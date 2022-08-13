import React from 'react'
import styled from 'styled-components'
import { Link as LinkRs} from 'react-scroll'

import { motion } from 'framer-motion'
import { Button } from './Button.styled'
import FloatingDiv  from './FloatingDiv'

import myImage from '../assets/images/pp.png'
import crown from '../assets/images/crown.png'

import { FaRegPaperPlane } from 'react-icons/fa'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

const transition = { duration: 2, type: "spring" };

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
    font-family: "gumela";
    font-size: 4rem;
    text-align: left;
    margin-bottom: 20px;

    span {
        color: ${props => props.theme.primaryColor}
    }
`

const Subtitle = styled.h3`
    font-size: 11px;
    font-family: "Poppins";
    font-weight: 400;
    color: ${props => props.theme.textGrey};
    margin-bottom: 1rem;
`

const ButtonItems = styled.div`
    display: flex;
    margin-left: -5px;
    gap: 1rem;
`

const Icons = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 3rem;
    color: ${props => props.theme.secondaryColor};
    cursor: pointer;

    span { 
        margin: 0 5px;
        color: black;
        font-size: 12px;
        font-weight: 500;
    }

`

const I = styled.div`
    &:hover{
        transform: scale(1.2);
        transition: 0.2s;
        color: ${props => props.theme.primaryColor};
    }
`

const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: Right;
    margin-right: 50px;
    position: relative;
`

const Image = styled.img`
    width: 60%;
`

const FDiv = styled.div`
    position: absolute;
    left: 80%;
    top: 20%;
`

function Profile() {
  return (
    <div>
        <Section>
            <div>
                <Heading>
                    <Title>Hi! I Am<br/><span>Saroj</span></Title>

                    <Subtitle>
                        I’m a web developer - creating bold and brave interface for the companies all across the world.
                    </Subtitle>

                    <ButtonItems>
                        <div>
                            <LinkRs to='contact' syp={true} smooth={true} offset={50} duration={500}>
                            <Button>Let's Talk <FaRegPaperPlane /></Button>
                            </LinkRs>
                        </div>
                        <div>
                            <LinkRs to='portfolio' syp={true} smooth={true} offset={50} duration={500}>
                            <Button>Portfolio <AiOutlineArrowUp/></Button>
                            </LinkRs>
                        </div>
                    </ButtonItems>
                    
                    <Icons>
                        <span>Checkout My <hr /></span>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 360}}
                            initial={{y: -50}}
                            whileInView={{ y: 0 }}
                            transition={transition}
                        ><I github><BsGithub size={40}/></I></motion.div>

                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 360}}
                            initial={{y: -100}}
                            whileInView={{ y: 0 }}
                            transition={transition}
                        ><I linkedin><BsLinkedin size={40}/></I></motion.div>

                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 360}}
                            initial={{y: -150}}
                            whileInView={{ y: 0 }}
                            transition={transition}
                        ><I instagram><BsInstagram size={40}/></I></motion.div>
                    </Icons>
                </Heading>
            </div>

            <ImageSection>
                <Image src={myImage}/>

                {/* Animation */}
                <FDiv>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileInView={{ x: 50 }}
                        transition={transition}
                    >
                        <FloatingDiv img={crown} text1="Web" text2="Developer" />
                    </motion.div>
                </FDiv>
                
            </ImageSection>

        </Section>
    </div>
  )
}

export default Profile