import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { deleteLanguageCard } from "../../store";
import Button from "../atoms/Button";
import DarkOverlay from "../atoms/DarkOverlay";

const StyledAlert = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 102;
  top: 40%;
  height: 30vh;
  width: 60%;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 40px;
`;

const ConfirmationModal = ({
  showed,
  ShowModalFn,
  cardId
}: {
  showed: boolean;
  ShowModalFn: any;
  cardId: number;
}) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const removeCard = () => {
    if (id) {
      console.log(cardId);
      const collectionId = parseInt(id, 10);
      const token = localStorage.getItem("ACCESS_TOKEN");
      dispatch(deleteLanguageCard(cardId, token, collectionId));
      ShowModalFn(false);
    }
  };

  return showed ? (
    <>
      <DarkOverlay onClick={() => ShowModalFn(false)} />
      <StyledAlert>
        <h2>Are you sure, that you want to delete this card?</h2>
        <StyledButtons>
          <Button secondary onClick={removeCard}>
            Yes
          </Button>
          <Button secondary onClick={() => ShowModalFn(false)}>
            Cancel
          </Button>
        </StyledButtons>
      </StyledAlert>
    </>
  ) : null;
};

export default ConfirmationModal;
