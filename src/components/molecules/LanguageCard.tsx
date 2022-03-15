import React, { useState } from "react";
import styled from "styled-components";
import ConfirmationModal from "../organisms/ConfirmationModal";

const StyledLanguageCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 170px;
  border-radius: 20px;
  gap: 30%;
  background-color: ${({ theme }) => theme.colors.brown};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform ease-in-out 0.5s;
  }
`;

const StyledBin = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: #990308;
  }
`;

const LanguageCard = ({
  native_word,
  learn_word,
  id
}: {
  native_word: string;
  learn_word: string;
  id: number;
}) => {
  const [isModalShowed, showConfirmationModal] = useState(false);

  return (
    <>
      <ConfirmationModal
        showed={isModalShowed}
        unShowModalFn={showConfirmationModal}
        cardId={id}
      />
      <StyledLanguageCard>
        <StyledBin onClick={() => showConfirmationModal(true)}>
          <i className="fas fa-trash-alt" />
        </StyledBin>
        <h2>{native_word}</h2>
        <h4>{learn_word}</h4>
      </StyledLanguageCard>
    </>
  );
};

export default LanguageCard;
