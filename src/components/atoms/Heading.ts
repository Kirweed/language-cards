import styled from "styled-components";

const Heading = styled.h1`
  margin: 10px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: 1.5px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
`;

export default Heading;
