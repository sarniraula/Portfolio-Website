import React from 'react'
import styled from 'styled-components'
import { Link as LinkRs } from 'react-scroll'

import {TbSkateboard} from 'react-icons/tb'
import { BiSearch } from 'react-icons/bi'

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 20px auto;

    a {
        text-decoration: none;
        color: black;
    }
`

const Logo = styled.div`
    /* logo text */
    /* span {
        margin-left: .5rem;
        font-size: 18px;
    } */
`

//pages styles
const Links = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;

    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
        text-decoration: none;
        list-style: none;
        font-size: 13px;
        font-weight: 300;

        li {
            cursor: pointer;

            &:hover{
                transform: scale(1.2);
                transition: 0.2s;
                font-weight: 500;
            }
        }

        a {
            text-decoration: none;
            color: #2c2c0a;
        }
    }
`

//Search Bar
const SearchBar = styled.div`
    position: relative;
    margin: auto;
`

const Input = styled.input`
    border: 3px solid;
    border-color: #ACACAC;
    border-radius: 18px;
    padding: 10px;
    width: 80%;
    outline: none;

    &:focus {
        border-color: ${props => props.theme.primaryColor};
    }
`

const Button = styled.button`
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translate(-50%,-50%);
    transition: .2s;
    border: none;
    background-color: transparent;
`

function Navbar() {
  return (
    <div>
        <NavBar>
            <a href="/">
                <Logo>
                    <TbSkateboard size={50} color="#FCA61F"/>
                    {/* <span>Saroj<br/>Niraula</span> */}
                </Logo>
            </a>
            <Links>
                <ul>
                    <li>
                        <LinkRs to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</LinkRs>
                    </li>
                    <li>
                        <LinkRs to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</LinkRs>
                    </li>
                    <li>
                        <LinkRs to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</LinkRs>
                    </li>
                </ul>
            </Links>

            <form>   
                {/* <label for="default-search">Search</label> */}
                    <SearchBar>
                        <Input type="search" placeholder="Search" />
                        <div>
                            <Button type="submit"><BiSearch  size={20} color="#ACACAC"/></Button>
                        </div>
                     </SearchBar>
            </form>
        </NavBar>
    </div>
  )
}

export default Navbar


