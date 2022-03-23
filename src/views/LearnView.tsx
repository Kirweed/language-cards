import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import BackButton from "../components/atoms/BackButton";
import Button from "../components/atoms/Button";
import Footer from "../components/atoms/Footer";
import Heading from "../components/atoms/Heading";
import Input from "../components/atoms/Input";
import Header from "../components/molecules/Header";
import { RootState } from "../store";
import getRandomInt from "../utilities/getRandomInt";

const StyledWrapper = styled.div`
    margin-top 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LearnView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cardArr, setCardArr] = useState([]);
  const [currentRecord, setRecord] = useState({
    id: 0,
    learn_word: "",
    native_word: ""
  });
  const [isWaitingForWord, setWaitingForWord] = useState(false);

  const getRandomCard = () => {
    const randomRecord = getRandomInt(0, cardArr.length - 1);
    setRecord(cardArr[randomRecord]);
  };

  if (id) {
    const numId = parseInt(id, 10);
    const reducer = useSelector((state: RootState) => state.rootReducer);

    useEffect(() => {
      if (reducer.collections)
        setCardArr(
          reducer.collections.filter((item: any) => item.id === numId)[0]
            .language_card
        );
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
          <Input type="text" />
          <Button secondary onClick={() => setWaitingForWord(true)}>
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
