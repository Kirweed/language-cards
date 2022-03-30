import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
  width: 100%;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.middleBottom};
  text-align: center;
  color: ${({ theme }) => theme.colors.darkRed};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: #eae7dc;
  border-top: 2px solid ${({ theme }) => theme.colors.darkRed};
`;

const Footer = () => (
  <StyledFooter>designed and created by Michał Plichta</StyledFooter>
);

export default Footer;
