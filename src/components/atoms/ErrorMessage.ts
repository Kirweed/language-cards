import styled from "styled-components";

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0;
  padding: 0;
`;

export default ErrorMessage;
