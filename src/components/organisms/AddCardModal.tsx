import React from "react";
import styled from "styled-components";
import DarkOverlay from "../atoms/DarkOverlay";
import Heading from "../atoms/Heading";
import AddCardForm from "../molecules/AddCardForm";

const StyledFormWrapper = styled.div`
  position: fixed;
  z-index: 102;
  height: 70vh;
  width: 45%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: white;
  border-radius: 20px;
  padding: 10px;
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
      <DarkOverlay onClick={() => handleModalFn(false)} />
      <StyledFormWrapper>
        <Heading>Add new card to this collection</Heading>
        <AddCardForm handleModalFn={handleModalFn} />
      </StyledFormWrapper>
    </>
  ) : null;

export default AddCardModal;
