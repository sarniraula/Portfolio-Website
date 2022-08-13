import React from 'react'
import styled from 'styled-components'


import { CgShapeHexagon } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'

const NavBar = styled.nav`
    display: flex;
    aligin-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 20px auto;

    a {
        text-decoration: none;
        color: black;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;

    span {
        margin-left: 1rem;
        font-size: 18px;
    }
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

        a {
            text-decoration: none;
            color: black;

            // &:hover{
            //     color: ${props => props.theme.textGrey};
            //     transform: scale(1.1);
            //     // transition: 0.2s ease-out;
            //     font-weight: 500;
            // }
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
                    <CgShapeHexagon size={40}/>
                    <span>Saroj<br/>Niraula</span>
                </Logo>
            </a>
            <Links>
                <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Portfolio</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
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


