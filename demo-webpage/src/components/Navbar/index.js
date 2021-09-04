import React from 'react'
import {Nav, NavbarContainer, NavLogo, WebIcon, MobileIcon, NavSmallContainer, NavBtnLink, Left, Right} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Navbar = ({toggle}) => {
    return (
        <>
            <IconContext.Provider value={{color: 'white'}}>
                <Nav>
                    <NavbarContainer>
                        <Left>
                        <WebIcon onClick={toggle}>
                            <FaBars/>
                        </WebIcon>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        </Left>
                        <NavLogo to="/">N</NavLogo>
                        <Right>
                        <NavSmallContainer>
                            <NavBtnLink >Search</NavBtnLink>
                            <NavBtnLink >Profile</NavBtnLink>
                            <NavBtnLink >Inbox</NavBtnLink>
                        </NavSmallContainer>
                        </Right>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;

// rafce