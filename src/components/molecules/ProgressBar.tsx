import React from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  width: 80%;
  margin: 150px auto 10px auto;
  position: relative;
`;

const StyledLineWrapper = styled.div`
  position: absolute;
  display: flex;
  z-index: 100;
  width: 100%;
  height: 10px;
`;

const StyledLine = styled.div<{ progress?: boolean }>`
  z-index: 100;
  background-color: white;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  width: 33%;
  height: 10px;

  ${({ progress }) =>
    progress &&
    css`
      background-color: green;
    `}
`;

const StyledCircle = styled.div<{ progress?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ progress }) =>
    progress &&
    css`
      background-color: #32c92c;
    `};
`;

const StyledCircleWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: -25px;
  gap: 28%;
  right: -10px;
  z-index: 101;
  width: 100%;
`;

const ProgressBar = () => (
  <StyledWrapper>
    <StyledLineWrapper>
      <StyledLine progress />
      <StyledLine />
      <StyledLine />
    </StyledLineWrapper>
    <StyledCircleWrapper>
      <StyledCircle progress>1</StyledCircle>
      <StyledCircle>2</StyledCircle>
      <StyledCircle>3</StyledCircle>
    </StyledCircleWrapper>
  </StyledWrapper>
);

export default ProgressBar;
