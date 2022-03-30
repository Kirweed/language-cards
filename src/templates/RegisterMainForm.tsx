import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Button from "../components/atoms/Button";
import Heading from "../components/atoms/Heading";
import Input from "../components/atoms/Input";
import ErrorMessage from "../components/atoms/ErrorMessage";
import validateEmail from "../utilities/validateEmail";

const StyledForm = styled.form`
  height: 80%;
  width: 100%;
  padding: 10vh 0 10vh 0;
  gap: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 50px;

  button {
    min-width: 100px;
  }
`;

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledIcon = styled.div<{ error?: boolean }>`
  color: green;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(50%, -50%);

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`;

const RegisterMainCreator = ({
  setDataFn,
  beforeData,
  setStage
}: {
  setDataFn: (data: any) => void;
  beforeData: any;
  setStage: (stage: number) => void;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setError] = useState({
    username: false,
    email: false,
    password: false,
    password2: false
  });
  const [inputsCorrectness, setInputsCorrectnes] = useState({
    username: false,
    email: false,
    password: false,
    password2: false
  });

  useEffect(() => {
    setUsername(beforeData.username);
    setEmail(beforeData.email);
  }, []);

  useEffect(() => {
    if (username.length >= 3 && username.length <= 25) {
      setError({ ...errors, username: false });
      setInputsCorrectnes((prevState) => ({ ...prevState, username: true }));
    } else {
      setInputsCorrectnes((prevState) => ({ ...prevState, username: false }));
    }
  }, [username]);

  useEffect(() => {
    if (validateEmail(email)) {
      setError({ ...errors, email: false });
      setInputsCorrectnes((prevState) => ({ ...prevState, email: true }));
    } else {
      setInputsCorrectnes((prevState) => ({ ...prevState, email: false }));
    }
  }, [email]);

  useEffect(() => {
    if (password.length <= 30 && password.length >= 6) {
      setError({ ...errors, password: false });
      setInputsCorrectnes((prevState) => ({ ...prevState, password: true }));
    } else {
      setInputsCorrectnes((prevState) => ({ ...prevState, password: false }));
    }
  }, [password]);

  useEffect(() => {
    if (password === password2 && password.length > 0) {
      setError({ ...errors, password2: false });
      setInputsCorrectnes((prevState) => ({ ...prevState, password2: true }));
    } else {
      setInputsCorrectnes((prevState) => ({ ...prevState, password2: false }));
    }
  }, [password2]);

  const checkForm = () => {
    let check = true;
    if (username.length > 25 || username.length < 3) {
      check = false;
      setError((prevState) => ({ ...prevState, username: true }));
    }
    if (!validateEmail(email)) {
      check = false;
      setError((prevState) => ({ ...prevState, email: true }));
    }
    if (password.length < 6 || password.length > 30) {
      check = false;
      setError((prevState) => ({ ...prevState, password: true }));
    }
    if (password !== password2) {
      check = false;
      setError((prevState) => ({ ...prevState, password2: true }));
    }
    return check;
  };

  const goBack = () => {
    setStage(2);
  };

  const goSubmit = () => {
    if (checkForm()) {
      setDataFn({
        ...beforeData,
        username,
        email,
        password,
        password2
      });
      setStage(4);
    }
  };

  return (
    <StyledForm>
      <Heading>Set username and password!</Heading>
      <StyledInputWrapper>
        <Input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {inputsCorrectness.username && (
          <StyledIcon>
            <FontAwesomeIcon size="2x" icon={faCheck} />
          </StyledIcon>
        )}
        {errors.username && (
          <StyledIcon error>
            <FontAwesomeIcon size="2x" icon={faExclamation} />
          </StyledIcon>
        )}
      </StyledInputWrapper>
      {errors.username && (
        <ErrorMessage>Username must be 3 to 25 characters long</ErrorMessage>
      )}
      <StyledInputWrapper>
        <Input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {inputsCorrectness.email && (
          <StyledIcon>
            <FontAwesomeIcon size="2x" icon={faCheck} />
          </StyledIcon>
        )}
        {errors.email && (
          <StyledIcon error>
            <FontAwesomeIcon size="2x" icon={faExclamation} />
          </StyledIcon>
        )}
      </StyledInputWrapper>
      {errors.email && <ErrorMessage>This is not correct email</ErrorMessage>}
      <StyledInputWrapper>
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {inputsCorrectness.password && (
          <StyledIcon>
            <FontAwesomeIcon size="2x" icon={faCheck} />
          </StyledIcon>
        )}
        {errors.password && (
          <StyledIcon error>
            <FontAwesomeIcon size="2x" icon={faExclamation} />
          </StyledIcon>
        )}
      </StyledInputWrapper>
      {errors.password && (
        <ErrorMessage>Password must be 6 to 30 characters long</ErrorMessage>
      )}
      <StyledInputWrapper>
        <Input
          type="password"
          placeholder="reapeat password"
          name="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />{" "}
        {inputsCorrectness.password2 && (
          <StyledIcon>
            <FontAwesomeIcon size="2x" icon={faCheck} />
          </StyledIcon>
        )}
        {errors.password2 && (
          <StyledIcon error>
            <FontAwesomeIcon size="2x" icon={faExclamation} />
          </StyledIcon>
        )}
      </StyledInputWrapper>
      {errors.password2 && (
        <ErrorMessage>Passwords must be the same!</ErrorMessage>
      )}
      <StyledButtonsWrapper>
        <Button type="button" small onClick={goSubmit}>
          Next
        </Button>

        <Button type="button" small secondary onClick={goBack}>
          Go back
        </Button>
      </StyledButtonsWrapper>
    </StyledForm>
  );
};

export default RegisterMainCreator;
