import React, {useRef} from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';


// import {AiOutlineMail} from 'react-icons/ai'
// import {HiOutlineLocationMarker} from 'react-icons/hi'
import { Container } from './Container.styled'
import { Button } from './Button.styled'

const Background = styled.div`
    background: rgb(255,255,255);
    background: ${props => props.theme.footerBgColor};

    hr {
        width: 100%;
        border-top: 2px solid black;
    }
`


const CLeft = styled.div`
    hr {
        width: 100%;
        border-top: 2px solid black;
    }
`
const Title = styled.h1`
    font-size: 50px;
    text-align: left;
    margin-bottom: 0px;
    color: ${props => props.theme.textGrey};

    span{
        color: ${props => props.theme.primaryColor  };
    }
`

// const ContactLink = styled.div`
//     margin: 20px;
//     display: flex;
//     align-items: center;
//     font-size: 20px;
//     span {
//         margin-left: 5px;
//     }
// `

const CRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 4rem;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    Button {
        border: 2px solid ${props => props.theme.primaryColor};
        width: 20rem;
    }
`

const Input = styled.input`
    width: 20rem;
    height: 2rem;
    padding: 0.3em;
    outline: none;
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 8px;
    font-size: 16px;
`

const TextArea = styled.textarea`
    width: 20rem;
    height: 6rem;
    padding: 0.3em;
    outline: none;
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 8px;
    font-size: 16px;
`

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y17sanu','template_80fyaqc', form.current, 'fVT1rCi5MTSKQqXPq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return (
        <Background className='contact'>
            <Container>
                <CLeft>
                    <Title>Get in Touch <br /> <span>Contact Me</span></Title>
                    {/* <hr />
                    <ContactLink>
                        <AiOutlineMail /><span>sar.niraula@gmail.com</span> 
                    </ContactLink>
                    <hr/>
                    <ContactLink>
                        <HiOutlineLocationMarker /><span>Pulchowk, Lalitpur</span>
                    </ContactLink>
                    <hr /> */}
                </CLeft>

                <CRight>
                    <form ref={form} onSubmit={sendEmail}>
                        <Input type="text" name="user_name" placeholder="Your Name"/>
                        <Input type="email" name="user_email" placeholder="Your Email"/>
                        <TextArea name="message" className="user" placeholder="Your Message"/>
                        <Button type="submit">Send Message</Button>
                    </form>
                </CRight>
            </Container>
        </Background>
    )
}

export default Contact