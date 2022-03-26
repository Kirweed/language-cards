import styled, { css } from "styled-components";

const CharBox = styled.input<{ shake?: boolean }>`
  width: 60px;
  height: 60px;
  display: block;
  border: none;
  background-color: inherit;
  border-bottom: 2px solid black;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  ${({ shake }) =>
    shake &&
    css`
      border-bottom: 2px solid #911717;
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    `}
`;

export default CharBox;
