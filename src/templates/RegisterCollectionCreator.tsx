import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
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

const RegisterCollectionCreator = ({
  setDataFn,
  beforeData,
  setStage
}: {
  setDataFn: (data: any) => void;
  beforeData: any;
  setStage: (stage: number) => void;
}) => {
  const [name, setName] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [learnLanguage, setLearnLanguage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(beforeData.collectionName);
    setNativeLanguage(beforeData.nativeLanguage);
    setLearnLanguage(beforeData.learnLanguage);
  }, []);

  const cancel = () => {
    navigate("/");
  };

  const goNext = () => {
    setDataFn({
      ...beforeData,
      collectionName: name,
      nativeLanguage,
      learnLanguage
    });
    setStage(2);
  };

  return (
    <StyledForm>
      <Heading>Create your first collection!</Heading>
      <Input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="native language"
        name="native_language"
        value={nativeLanguage}
        onChange={(e) => setNativeLanguage(e.target.value)}
      />
      <Input
        type="text"
        placeholder="learning language"
        name="learning_language"
        value={learnLanguage}
        onChange={(e) => setLearnLanguage(e.target.value)}
      />
      <StyledButtonsWrapper>
        <Button type="button" small onClick={goNext}>
          Next
        </Button>

        <Button type="button" small secondary onClick={cancel}>
          Cancel
        </Button>
      </StyledButtonsWrapper>
    </StyledForm>
  );
};

export default RegisterCollectionCreator;
