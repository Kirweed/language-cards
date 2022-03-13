import React from "react";
import styled from "styled-components";

const StyledLanguageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  gap: 30%;
  background-color: ${({ theme }) => theme.colors.brown};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform ease-in-out 0.5s;
  }
`;

const LanguageCard = ({
  native_word,
  learn_word
}: {
  native_word: string;
  learn_word: string;
}) => (
  <StyledLanguageCard>
    <h2>{native_word}</h2>
    <h4>{learn_word}</h4>
  </StyledLanguageCard>
);

export default LanguageCard;
