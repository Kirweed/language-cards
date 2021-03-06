import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Input from "../atoms/Input";
import ErrorMessage from "../atoms/ErrorMessage";
import Button from "../atoms/Button";
import { addLanguageCard } from "../../store";

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

const StyledButtons = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;
`;

const AddCardForm = ({ handleModalFn }: { handleModalFn: any }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<string[]>([]);
  const { id } = useParams();

  const addCard = (e: any) => {
    e.preventDefault();
    if (id) {
      const validId = parseInt(id, 10);
      const token = localStorage.getItem("ACCESS_TOKEN");
      const nativeWord = e.target.native_word.value;
      const learnWord = e.target.learn_word.value;
      const errorsArr = [];

      if (nativeWord.length < 1 || nativeWord.length > 50) {
        errorsArr.push(
          "Native word must have less than 50 characters and must not be blank"
        );
      }
      if (learnWord.length < 1 || learnWord.length > 50) {
        errorsArr.push(
          "Learn word must have less than 50 characters and must not be blank"
        );
      }

      setErrors(errorsArr);

      if (errorsArr.length === 0) {
        dispatch(
          addLanguageCard(
            {
              collection: validId,
              native_word: nativeWord,
              learn_word: learnWord
            },
            token
          )
        );
      }

      if (e.nativeEvent.submitter.name === "submitBttn") {
        handleModalFn(false);
      } else {
        e.target.reset();
        handleModalFn(true);
      }
    }
  };

  return (
    <StyledForm onSubmit={(e) => addCard(e)}>
      <Input type="text" placeholder="native word" name="native_word" />
      <Input type="text" placeholder="learn word" name="learn_word" />
      {errors.length !== 0 &&
        errors.map((item) => <ErrorMessage>{item}</ErrorMessage>)}
      <StyledButtons>
        <Button small type="submit" name="submitBttn">
          Add card and finish
        </Button>
        <Button small type="submit" name="nextBttn">
          Add next card
        </Button>
      </StyledButtons>
    </StyledForm>
  );
};

export default AddCardForm;
