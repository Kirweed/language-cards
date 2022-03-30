import React from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.darkRed};
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.middleBottom};
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkRed};
`;

const Header = () => <StyledHeading>Language-cards.pl</StyledHeading>;

export default Header;
