import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import BackButton from "../components/atoms/BackButton";
import Button from "../components/atoms/Button";
import CharBox from "../components/atoms/CharBox";
import Footer from "../components/atoms/Footer";
import Heading from "../components/atoms/Heading";
import Header from "../components/molecules/Header";
import { RootState } from "../store";
import getRandomInt from "../utilities/getRandomInt";

const StyledWrapper = styled.div`
    margin-top 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledGuessWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const LearnView = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement[]>([]);
  const [inputValues, setInputValues] = useState<string[]>([]);
  const { id } = useParams();
  const [cardArr, setCardArr] = useState<any>([]);
  const [currentRecord, setRecord] = useState({
    id: 0,
    learn_word: "",
    native_word: ""
  });
  const [isWaitingForWord, setWaitingForWord] = useState(false);
  const [shake, setShake] = useState(false);

  const getRandomCard = () => {
    const randomRecord = getRandomInt(0, cardArr.length - 1);
    setRecord(cardArr[randomRecord]);
    const tempArr: string[] = [];
    cardArr[randomRecord].learn_word.split("").forEach(() => tempArr.push(""));
    setInputValues(tempArr);
  };

  if (id) {
    const numId = parseInt(id, 10);
    const reducer = useSelector((state: RootState) => state.rootReducer);

    useEffect(() => {
      if (reducer.collections) {
        setCardArr(
          reducer.collections.filter((item: any) => item.id === numId)[0]
            .language_card
        );
        setWaitingForWord(true);
      }
    }, [reducer]);

    useEffect(() => {
      if (isWaitingForWord) {
        getRandomCard();
        setWaitingForWord(false);
      }
    }, [isWaitingForWord]);
  }

  const navigateLearnChoosing = () => {
    navigate("/learn");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const tempValues = [...inputValues];
    tempValues[index] = e.target.value;
    if (e.target.value === "" && index !== 0 && inputRef.current[index - 1]) {
      inputRef.current[index - 1].focus();
    } else if (
      index < inputRef.current.length - 1 &&
      e.target.value !== "" &&
      inputRef.current[index + 1]
    ) {
      inputRef.current[index + 1].focus();
    }
    setInputValues(tempValues);
  };

  const checkSubmission = () => {
    let finalAnswear = "";
    inputValues.forEach((item) => {
      finalAnswear = `${finalAnswear}${item}`;
    });
    if (finalAnswear.toUpperCase() === currentRecord.learn_word.toUpperCase()) {
      setWaitingForWord(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return id ? (
    <>
      <Header />
      <BackButton secondary big onClick={navigateLearnChoosing}>
        Back to choosing collection
        <br />
        <i className="fas fa-long-arrow-alt-left" />
      </BackButton>
      {currentRecord && (
        <StyledWrapper>
          <Heading>{currentRecord.native_word}</Heading>
          <StyledGuessWrapper>
            {currentRecord.learn_word
              .split("")
              .map((item: string, index: number) => (
                <CharBox
                  type="text"
                  shake={shake}
                  key={item}
                  maxLength={1}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, index)
                  }
                  value={inputValues[index]}
                  ref={(el: HTMLInputElement) => {
                    inputRef.current[index] = el;
                    return inputRef.current[index];
                  }}
                />
              ))}
          </StyledGuessWrapper>
          <Button secondary onClick={checkSubmission}>
            Check
          </Button>
        </StyledWrapper>
      )}
      <Footer />
    </>
  ) : (
    <h1>NOTHING HERE</h1>
  );
};

export default LearnView;
