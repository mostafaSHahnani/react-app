import React from "react";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLable, FormWrap, Icon, TextEnd } from "./SigninElements";

function SigninForm() {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to="/">
                <BsFillArrowLeftCircleFill/>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your accunt</FormH1>
                        <FormLable htmlfor="for">Email :</FormLable>
                        <FormInput type="email" required/>
                        <FormLable htmlfor="for">Password :</FormLable>
                        <FormInput type="password" required/>
                        <FormButton type="submit">Continue</FormButton>
                        <TextEnd>Forget Password</TextEnd>
                    </Form>
                </FormContent>
            </Icon>
        </FormWrap>
      </Container>
    </>
  );
}

export default SigninForm;
