import styled from "styled-components";

const Input = styled.input`
  width: 250px;
  height: 60px;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 10px;
`;

export default Input;
