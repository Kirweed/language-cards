import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useAuth } from "../../context";

const StyledForm = styled.form`
  height: 80%;
  width: 100%;
  gap: 5vh;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledError = styled.p`
  color: red;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  margin: 0;
  padding: 0;
`;

const Form = () => {
  const auth = useAuth();

  const handleLogin = (e: any) => {
    
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    auth.logIn(username, password);
  };

  return (
    <StyledForm onSubmit={(e) => handleLogin(e)}>
      <Input type="text" placeholder="username" name="username" />
      <Input type="password" placeholder="password" name="password" />
      {auth.formError && <StyledError>Wrong credentials</StyledError>}
      <Button secondary type="submit">
        Sign Up!
      </Button>
    </StyledForm>);
};

export default Form;
