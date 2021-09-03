import React from 'react'
import {Nav, NavbarContainer, NavLogo, WebIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavSmallContainer, NavBtnLink, Left, Right} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Navbar = ({ toggle}) => {
    return (
        <>
            <IconContext.Provider value={{color: 'white'}}>
                <Nav>
                    <NavbarContainer>
                        <Left>
                        <WebIcon onClick={toggle}>
                            <FaBars/>
                        </WebIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about">News</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="forecast">Forecast</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup">SignUp</NavLinks>
                            </NavItem>
                        </NavMenu>
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