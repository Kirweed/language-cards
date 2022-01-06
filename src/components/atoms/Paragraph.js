import styled from "styled-components";

const Paragraph = styled.p`
  padding: 30px;
  margin: 10px;
  text-align: justify;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.dark};
`;

export default Paragraph;
