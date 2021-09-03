import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    max-height: 1000px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(orange, black);
`
export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));

    @media screen and (max-width: 400px) {
        height: 100%;
    }
`
export const Icon = styled(Link)`
    display: flex;
    justify-content: center;
    margin-top: 32px;
    text-decoration: none;
    color: white;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 400px) {
        margin-left: 16px;
        margin-top: 60px;
    }
`
export const FormContent = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        padding: 10px;
    }
`
export const Form = styled.form`
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`
export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: white;
    font-size: 20px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 400px) {
        display: none;
    }
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: white;
`
export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 50px;
`
export const FormButton = styled.button`
    background-color: transparent;
    padding: 16px 0;
    border: 2px solid gray;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        background-color: orange;
    }
`
export const Text = styled.span`
    text-align: center;
    font-size: 14px;
    margin-top: 24px;
    color: white;
`