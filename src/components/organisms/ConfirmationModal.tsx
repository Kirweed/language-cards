import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteLanguageCard } from "../../store";
import Button from "../atoms/Button";
import DarkOverlay from "../atoms/DarkOverlay";

const StyledAlert = styled.div`
  position: fixed;
  z-index: 102;
  top: 0;
  height: 30vh;
  width: 60%;
  background-color: white;
  transform: translateX(25%) translateY(25%);
  border-radius: 20px;
  padding: 20px;
`;

const ConfirmationModal = ({
  showed,
  unShowModalFn,
  cardId
}: {
  showed: boolean;
  unShowModalFn: any;
  cardId: number;
}) => {
  const dispatch = useDispatch();
  const removeCard = () => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    dispatch(deleteLanguageCard(cardId, token));
  };

  return showed ? (
    <>
      <DarkOverlay onClick={() => unShowModalFn(false)} />
      <StyledAlert>
        <h2>Are you sure, that you want to delete this card?</h2>
        <Button secondary onClick={removeCard}>
          Yes
        </Button>
        <Button secondary onClick={() => unShowModalFn(false)}>
          Cancel
        </Button>
      </StyledAlert>
    </>
  ) : null;
};

export default ConfirmationModal;
