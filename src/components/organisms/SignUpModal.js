import React from "react";
import styled from "styled-components";
import DarkOverlay from "../atoms/DarkOverlay";
import Form from "../molecules/Form";
import Heading from "../atoms/Heading";

const StyledFormWrapper = styled.div`
  position: absolute;
  z-index: 102;
  height: 70vh;
  width: 60%;
  background-color: white;
  transform: translateX(25%) translateY(25%);
  border-radius: 20px;
  padding: 20px;
`;

const SignUpModal = () => (
  <>
    <DarkOverlay />
    <StyledFormWrapper>
      <Heading>Sign Up</Heading>
      <Form />
    </StyledFormWrapper>
  </>
);

export default SignUpModal;
