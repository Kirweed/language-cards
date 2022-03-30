import React from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  width: 80%;
  margin: 16vh auto 0 auto;
  position: relative;
  color: ${({ theme }) => theme.colors.dark};
`;

const StyledLineWrapper = styled.div`
  position: absolute;
  display: flex;
  z-index: ${({ theme }) => theme.zIndex.superBottom};
  width: 100%;
  height: 10px;
`;

const StyledLine = styled.div<{ progress?: boolean }>`
  z-index: 98;
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
      color: #fff;
    `};
`;

const StyledCircleWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: -25px;
  gap: 27%;
  right: -10px;
  z-index: ${({ theme }) => theme.zIndex.bottom};
  width: 100%;
`;

const ProgressBar = ({ stage }: { stage: number }) => (
  <StyledWrapper>
    <StyledLineWrapper>
      {stage >= 1 ? <StyledLine progress /> : <StyledLine />}
      {stage >= 2 ? <StyledLine progress /> : <StyledLine />}
      {stage >= 3 ? <StyledLine progress /> : <StyledLine />}
    </StyledLineWrapper>
    <StyledCircleWrapper>
      {stage >= 2 ? (
        <StyledCircle progress>1</StyledCircle>
      ) : (
        <StyledCircle>1</StyledCircle>
      )}
      {stage >= 3 ? (
        <StyledCircle progress>2</StyledCircle>
      ) : (
        <StyledCircle>2</StyledCircle>
      )}
      {stage >= 4 ? (
        <StyledCircle progress>3</StyledCircle>
      ) : (
        <StyledCircle>3</StyledCircle>
      )}
    </StyledCircleWrapper>
  </StyledWrapper>
);

export default ProgressBar;
