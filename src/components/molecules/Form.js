import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

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

const Form = () => (
  <StyledForm>
    <Input type="text" placeholder="username" name="username" />
    <Input type="password" placeholder="password" name="password" />
    <Button secondary type="submit">
      Sign Up!
    </Button>
  </StyledForm>
);

export default Form;
