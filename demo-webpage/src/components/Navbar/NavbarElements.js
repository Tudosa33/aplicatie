//How to create a component

import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'



export const Nav = styled.nav`
    background: orangered;
    height: 80px;
    margin-top: -80ppx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 30px;
    max-width: 1300px;
`
export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: 800;


`
export const WebIcon = styled.div`
    transform: rotate(90deg);
    font-size: 1.6rem;
    color: white;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`

export const NavSmallContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled.li`
    white-space: nowrap;
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 30px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: orange;
    }
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;

   /* @media screen and (max-width: 768px) {
       display: none;
       
   } */

`
export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    /* @media screen and (max-width: 768px) {
        display: none;
    } */
`