import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { addCollectionAction } from "../../store";

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

const AddCollectionForm = ({ handleModalFn }: { handleModalFn: any }) => {
  const dispatch = useDispatch();

  const addCollection = (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("ACCESS_TOKEN");
    const name = e.target.name.value;
    const nativeLanguage = e.target.native_language.value;
    const learnLanguage = e.target.learning_language.value;
    dispatch(
      addCollectionAction(
        {
          native_language: nativeLanguage,
          learn_language: learnLanguage,
          owner: null,
          name
        },
        token
      )
    );
    handleModalFn(false);
  };

  return (
    <StyledForm onSubmit={(e) => addCollection(e)}>
      <Input type="text" placeholder="name" name="name" />
      <Input type="text" placeholder="native language" name="native_language" />
      <Input
        type="text"
        placeholder="learning language"
        name="learning_language"
      />
      <Button small type="submit">
        Add collection
      </Button>
    </StyledForm>
  );
};

export default AddCollectionForm;
