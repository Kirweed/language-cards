import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import TokenContext from "../../context";

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

const Form = () => {
  const { setTokens } = useContext(TokenContext);

  const handleLogin = (e: any) => {
    
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    axios
      .post("http://127.0.0.1:8000/api/auth/token/", {
        username,
        password,
      })
      .then(({ data }) => {
        if (data.access && data.refresh) {
          setTokens({ access: data.access, refresh: data.refresh });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledForm onSubmit={(e) => handleLogin(e)}>
      <Input type="text" placeholder="username" name="username" />
      <Input type="password" placeholder="password" name="password" />
      <Button secondary type="submit">
        Sign Up!
      </Button>
    </StyledForm>
  );
};

export default Form;
