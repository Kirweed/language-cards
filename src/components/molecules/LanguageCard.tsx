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
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.almostWhite};

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
    color: ${({ theme }) => theme.colors.error};
  }
`;

const LanguageCard = ({
  native_word,
  learn_word,
  id,
  simple
}: {
  native_word: string;
  learn_word: string;
  id: number;
  // eslint-disable-next-line react/require-default-props
  simple?: boolean;
}) => {
  const [isModalShowed, showConfirmationModal] = useState(false);

  return simple ? (
    <StyledLanguageCard>
      <h2>{native_word}</h2>
      <h4>{learn_word}</h4>
    </StyledLanguageCard>
  ) : (
    <>
      <ConfirmationModal
        showed={isModalShowed}
        ShowModalFn={showConfirmationModal}
        itemId={id}
        collection={false}
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
