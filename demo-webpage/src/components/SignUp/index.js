import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './signUpElements'

const SignUpCompenents = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">N</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Create your Account</FormH1>
                            <FormLabel htmlFor='for'>Name</FormLabel>
                            <FormInput type='text'/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email'/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password'/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Terms & conditions</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignUpCompenents
