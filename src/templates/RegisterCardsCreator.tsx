import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Button from "../components/atoms/Button";
import ErrorMessage from "../components/atoms/ErrorMessage";
import Heading from "../components/atoms/Heading";
import Input from "../components/atoms/Input";
import Paragraph from "../components/atoms/Paragraph";
import LanguageCard from "../components/molecules/LanguageCard";

const StyledWrapper = styled.div`
  padding: 10vh 0 10vh 0;
`;

const StyledForm = styled.form`
  height: 80%;
  width: 100%;
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

const StyledGridWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.dark};
  margin: 20px 60px 10px 60px;
`;

const StyledGrid = styled.div`
  margin: 10px auto 50px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 180px));
  justify-items: center;
  justify-content: center;
  gap: 30px;
  padding: 25px;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
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

const RegisterCardsCreator = ({
  setDataFn,
  beforeData,
  setStage
}: {
  setDataFn: (data: any) => void;
  beforeData: any;
  setStage: (stage: number) => void;
}) => {
  const [nativeWord, setNativeWord] = useState("");
  const [learnWord, setLearnWord] = useState("");
  const [errors, setError] = useState({
    nativeWord: false,
    learnWord: false
  });
  const [correctInput, setCorrectInput] = useState({
    nativeWord: false,
    learnWord: false
  });

  const goBack = () => {
    setStage(1);
  };

  const checkCard = () => {
    let check = true;
    const errorsObj = {
      nativeWord: false,
      learnWord: false
    };

    if (nativeWord.length < 3 || nativeWord.length > 50) {
      errorsObj.nativeWord = true;
      check = false;
    }
    if (learnWord.length < 3 || learnWord.length > 50) {
      errorsObj.learnWord = true;
      check = false;
    }

    setError(errorsObj);
    return check;
  };

  const createCard = (e: React.MouseEvent) => {
    e.preventDefault();

    if (checkCard()) {
      if (beforeData.languageCards.length > 0) {
        setDataFn({
          ...beforeData,
          languageCards: [
            ...beforeData.languageCards,
            { nativeWord, learnWord }
          ]
        });
      } else {
        setDataFn({
          ...beforeData,
          languageCards: [{ nativeWord, learnWord }]
        });
      }
      setNativeWord("");
      setLearnWord("");
    }
  };

  const goNext = () => {
    setStage(3);
  };

  useEffect(() => {
    if (nativeWord.length >= 3 && nativeWord.length <= 50) {
      setError({ ...errors, nativeWord: false });
      setCorrectInput({ ...correctInput, nativeWord: true });
    } else {
      setCorrectInput({ ...correctInput, nativeWord: false });
    }
  }, [nativeWord]);

  useEffect(() => {
    if (learnWord.length >= 3 && learnWord.length <= 35) {
      setError({ ...errors, learnWord: false });
      setCorrectInput({ ...correctInput, learnWord: true });
    } else {
      setCorrectInput({ ...correctInput, learnWord: false });
    }
  }, [learnWord]);

  return (
    <StyledWrapper>
      <StyledForm>
        <Heading>Create your cards!</Heading>
        <StyledInputWrapper>
          <Input
            type="text"
            placeholder="native word"
            name="nativeWord"
            value={nativeWord}
            onChange={(e) => setNativeWord(e.target.value)}
          />
          {correctInput.nativeWord && (
            <StyledIcon>
              <FontAwesomeIcon size="2x" icon={faCheck} />
            </StyledIcon>
          )}
          {errors.nativeWord && (
            <StyledIcon error>
              <FontAwesomeIcon size="2x" icon={faExclamation} />
            </StyledIcon>
          )}
        </StyledInputWrapper>
        {errors.nativeWord && (
          <ErrorMessage>
            The collection name must be 3 to 50 characters long
          </ErrorMessage>
        )}
        <StyledInputWrapper>
          <Input
            type="text"
            placeholder="learning word"
            name="learningWord"
            value={learnWord}
            onChange={(e) => setLearnWord(e.target.value)}
          />
          {correctInput.learnWord && (
            <StyledIcon>
              <FontAwesomeIcon size="2x" icon={faCheck} />
            </StyledIcon>
          )}
          {errors.learnWord && (
            <StyledIcon error>
              <FontAwesomeIcon size="2x" icon={faExclamation} />
            </StyledIcon>
          )}
        </StyledInputWrapper>
        {errors.learnWord && (
          <ErrorMessage>
            The collection name must be 3 to 50 characters long
          </ErrorMessage>
        )}
        <Button small onClick={(e) => createCard(e)}>
          Create card
        </Button>
        <StyledButtonsWrapper>
          <Button type="button" small onClick={goNext}>
            Finish and go next
          </Button>

          <Button type="button" small secondary onClick={goBack}>
            Go back
          </Button>
        </StyledButtonsWrapper>
      </StyledForm>
      <StyledGridWrapper>
        <Heading>Your cards:</Heading>
        {beforeData.languageCards.length > 0 ? (
          <StyledGrid>
            {beforeData.languageCards.map((item: any) => (
              <LanguageCard
                native_word={item.nativeWord}
                learn_word={item.learnWord}
                id={0}
                simple
                key={item.languageWord}
              />
            ))}
          </StyledGrid>
        ) : (
          <StyledParagraph>
            You havent any cards in this collection yet, <br />
            if you add a card you will see it here.
          </StyledParagraph>
        )}
      </StyledGridWrapper>
    </StyledWrapper>
  );
};

export default RegisterCardsCreator;
