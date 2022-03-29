import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/atoms/Button";
import Heading from "../components/atoms/Heading";
import Input from "../components/atoms/Input";
import LanguageCard from "../components/molecules/LanguageCard";

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

  const goBack = () => {
    setStage(1);
  };

  const createCard = (e: React.MouseEvent) => {
    e.preventDefault();
    if (beforeData.languageCards.length > 0) {
      setDataFn({
        ...beforeData,
        languageCards: [...beforeData.languageCards, { nativeWord, learnWord }]
      });
    } else {
      setDataFn({
        ...beforeData,
        languageCards: [{ nativeWord, learnWord }]
      });
    }
    setNativeWord("");
    setLearnWord("");
  };

  const goNext = () => {
    setStage(3);
  };

  return (
    <>
      <StyledForm>
        <Heading>Create your cards!</Heading>
        <Input
          type="text"
          placeholder="native word"
          name="nativeWord"
          value={nativeWord}
          onChange={(e) => setNativeWord(e.target.value)}
        />
        <Input
          type="text"
          placeholder="learning word"
          name="learningWord"
          value={learnWord}
          onChange={(e) => setLearnWord(e.target.value)}
        />
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
      <StyledGrid>
        {beforeData.languageCards.length > 0 ? (
          beforeData.languageCards.map((item: any) => (
            <LanguageCard
              native_word={item.nativeWord}
              learn_word={item.learnWord}
              id={0}
              simple
              key={item.languageWord}
            />
          ))
        ) : (
          <p>You havent any cards in this collection yet</p>
        )}
      </StyledGrid>
    </>
  );
};

export default RegisterCardsCreator;
