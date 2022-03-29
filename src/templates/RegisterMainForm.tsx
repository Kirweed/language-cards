import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/atoms/Button";
import Heading from "../components/atoms/Heading";
import Input from "../components/atoms/Input";

const StyledForm = styled.form`
  height: 80%;
  width: 100%;
  padding-top: 10vh;
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

  useEffect(() => {
    setUsername(beforeData.username);
  }, []);

  const goBack = () => {
    setStage(2);
  };

  const goSubmit = () => {
    setDataFn({
      ...beforeData,
      username,
      password,
      password2
    });
    setStage(4);
  };

  return (
    <StyledForm>
      <Heading>Create your first collection!</Heading>
      <Input
        type="text"
        placeholder="username"
        name="sername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        name="native_language"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="reapeat password"
        name="password2"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
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
