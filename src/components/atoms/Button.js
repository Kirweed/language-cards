import styled, { css } from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.darkRed};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
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
      background-color: ${({ theme }) => theme.colors.dark};
    `}
`;

export default Button;
