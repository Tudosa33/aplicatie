import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Cevaaaaaa</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">News</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Forecast</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            <div id="body">
                <main class="top">
                    <div class="wrapper">
                        <form>
                            <div class="content">
                                <label for="name">Name</label>
                                <input type='text' id="name" name="name"/>
                            </div>
                            <div class="content">
                                <label for="email">Email</label>
                                <input type='email' id="email" name="mail"/>
                            </div>
                            <div class="content">
                                <button type="submit">Continue</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Navbar;

// rafce