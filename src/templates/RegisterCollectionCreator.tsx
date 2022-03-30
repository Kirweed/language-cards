import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";
import Button from "../components/atoms/Button";
import ErrorMessage from "../components/atoms/ErrorMessage";
import Heading from "../components/atoms/Heading";
import Input from "../components/atoms/Input";

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
  const [correctInput, setCorrectInput] = useState({
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
      setCorrectInput((prevState) => ({ ...prevState, name: true }));
    } else {
      setCorrectInput((prevState) => ({ ...prevState, name: false }));
    }
  }, [name]);

  useEffect(() => {
    if (learnLanguage.length >= 3 && learnLanguage.length <= 35) {
      setErrors({ ...errors, learnLanguage: false });
      setCorrectInput((prevState) => ({ ...prevState, learnLanguage: true }));
    } else {
      setCorrectInput((prevState) => ({ ...prevState, learnLanguage: false }));
    }
  }, [learnLanguage]);

  useEffect(() => {
    if (nativeLanguage.length >= 3 && nativeLanguage.length <= 35) {
      setErrors({ ...errors, nativeLanguage: false });
      setCorrectInput((prevState) => ({ ...prevState, nativeLanguage: true }));
    } else {
      setCorrectInput((prevState) => ({ ...prevState, nativeLanguage: false }));
    }
  }, [nativeLanguage]);

  return (
    <StyledForm>
      <Heading>Create your first collection!</Heading>
      <StyledInputWrapper>
        <Input
          type="text"
          placeholder="collection name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {correctInput.name && (
          <StyledIcon>
            <FontAwesomeIcon size="2x" icon={faCheck} />
          </StyledIcon>
        )}
        {errors.name && (
          <StyledIcon error>
            <FontAwesomeIcon size="2x" icon={faExclamation} />
          </StyledIcon>
        )}
      </StyledInputWrapper>
      {errors.name && (
        <ErrorMessage>
          The collection name must be 3 to 50 characters long
        </ErrorMessage>
      )}
      <StyledInputWrapper>
        <Input
          type="text"
          placeholder="native language"
          name="native_language"
          value={nativeLanguage}
          onChange={(e) => setNativeLanguage(e.target.value)}
        />
        {correctInput.nativeLanguage && (
          <StyledIcon>
            <FontAwesomeIcon size="2x" icon={faCheck} />
          </StyledIcon>
        )}
        {errors.nativeLanguage && (
          <StyledIcon error>
            <FontAwesomeIcon size="2x" icon={faExclamation} />
          </StyledIcon>
        )}
      </StyledInputWrapper>
      {errors.nativeLanguage && (
        <ErrorMessage>
          Your native languge name must be 3 to 35 characters long
        </ErrorMessage>
      )}
      <StyledInputWrapper>
        <Input
          type="text"
          placeholder="learning language"
          name="learning_language"
          value={learnLanguage}
          onChange={(e) => setLearnLanguage(e.target.value)}
        />
        {correctInput.learnLanguage && (
          <StyledIcon>
            <FontAwesomeIcon size="2x" icon={faCheck} />
          </StyledIcon>
        )}
        {errors.learnLanguage && (
          <StyledIcon error>
            <FontAwesomeIcon size="2x" icon={faExclamation} />
          </StyledIcon>
        )}
      </StyledInputWrapper>
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
