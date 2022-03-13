import React from "react";
import styled from "styled-components";
import DarkOverlay from "../atoms/DarkOverlay";
import Heading from "../atoms/Heading";
import AddCardForm from "../molecules/AddCardForm";

const StyledFormWrapper = styled.div`
  position: absolute;
  z-index: 102;
  top: 0;
  height: 70vh;
  width: 60%;
  background-color: white;
  transform: translateX(25%) translateY(25%);
  border-radius: 20px;
  padding: 20px;
`;

const AddCardModal = ({
  showed,
  handleModalFn
}: {
  showed: boolean;
  handleModalFn: any;
}) =>
  showed ? (
    <>
      <DarkOverlay onClick={handleModalFn} />
      <StyledFormWrapper>
        <Heading>Add new card to this collection</Heading>
        <AddCardForm />
      </StyledFormWrapper>
    </>
  ) : null;

export default AddCardModal;
