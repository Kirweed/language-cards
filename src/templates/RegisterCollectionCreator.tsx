import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../components/atoms/Button";
import ErrorMessage from "../components/atoms/ErrorMessage";
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
  const [errors, setErrors] = useState({
    name: false,
    nativeLanguage: false,
    learnLanguage: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    setName(beforeData.collectionName);
    setNativeLanguage(beforeData.nativeLanguage);
    setLearnLanguage(beforeData.learnLanguage);
  }, []);

  const cancel = () => {
    navigate("/");
  };

  const checkData = () => {
    let check = true;
    const errorsObj = {
      name: false,
      nativeLanguage: false,
      learnLanguage: false
    };
    if (name.length > 50 || name.length < 3) {
      errorsObj.name = true;
      check = false;
    }
    if (nativeLanguage.length > 35 || nativeLanguage.length < 3) {
      errorsObj.nativeLanguage = true;
      check = false;
    }
    if (learnLanguage.length > 35 || learnLanguage.length < 3) {
      errorsObj.learnLanguage = true;
      check = false;
    }
    setErrors(errorsObj);
    return check;
  };

  const goNext = () => {
    if (checkData()) {
      setDataFn({
        ...beforeData,
        collectionName: name,
        nativeLanguage,
        learnLanguage
      });
      setStage(2);
    }
  };

  useEffect(() => {
    if (name.length >= 3 && name.length <= 50) {
      setErrors({ ...errors, name: false });
    }
  }, [name]);

  useEffect(() => {
    if (learnLanguage.length >= 3 && learnLanguage.length <= 35) {
      setErrors({ ...errors, learnLanguage: false });
    }
  }, [learnLanguage]);

  useEffect(() => {
    if (nativeLanguage.length >= 3 && nativeLanguage.length <= 35) {
      setErrors({ ...errors, nativeLanguage: false });
    }
  }, [nativeLanguage]);

  return (
    <StyledForm>
      <Heading>Create your first collection!</Heading>
      <Input
        type="text"
        placeholder="collection name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && (
        <ErrorMessage>
          The collection name must be 3 to 50 characters long
        </ErrorMessage>
      )}
      <Input
        type="text"
        placeholder="native language"
        name="native_language"
        value={nativeLanguage}
        onChange={(e) => setNativeLanguage(e.target.value)}
      />
      {errors.nativeLanguage && (
        <ErrorMessage>
          Your native languge name must be 3 to 35 characters long
        </ErrorMessage>
      )}
      <Input
        type="text"
        placeholder="learning language"
        name="learning_language"
        value={learnLanguage}
        onChange={(e) => setLearnLanguage(e.target.value)}
      />
      {errors.learnLanguage && (
        <ErrorMessage>
          Your learn languge name must be 3 to 35 characters long
        </ErrorMessage>
      )}
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
