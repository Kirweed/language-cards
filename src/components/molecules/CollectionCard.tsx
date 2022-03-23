import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 20px;
  gap: 30%;
  background-color: ${({ theme }) => theme.colors.brown};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform ease-in-out 0.5s;
  }
`;

const StyledTitle = styled.h2`
  margin: 5px;
  text-align: center;
`;

const StyledP = styled.p`
  margin: 5px;
  text-align: center;
`;

const CollectionCard = ({
  name,
  learn_language,
  language_card
}: {
  name: string;
  learn_language: string;
  language_card: any;
}) => (
  <StyledWrapper key={name}>
    <div>
      <StyledTitle>Uczysz się:</StyledTitle>
      <StyledTitle>{learn_language}</StyledTitle>
    </div>

    <div>
      <StyledP>{name}</StyledP>
      <StyledP>{language_card.length} słówka</StyledP>
    </div>
  </StyledWrapper>
);

export default CollectionCard;
