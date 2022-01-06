import styled, { css } from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 130px;
  background-color: #e85a4f;
  border: none;
  border-radius: 10px;
  color: #eae7dc;
  font-size: 1.4rem;
  font-weight: 700;
  transition: transform ease-in-out 0.4s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      width: 130px;
      height: 80px;
      background-color: #8e8d8a;
    `}
`;

export default Button;
