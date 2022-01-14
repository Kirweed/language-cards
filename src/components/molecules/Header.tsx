import React from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.darkRed};
  position: fixed;
  z-index: 90;
  top: 0;
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => <StyledHeading>Language-cards.pl</StyledHeading>;

export default Header;
