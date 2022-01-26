import React from "react";
import PropTypes from "prop-types";
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

const SignUpModal = ({
  showed,
  handleModalFn
}: {
  showed: boolean;
  handleModalFn: any;
}) =>
  showed ? (
    <>
      <DarkOverlay onClick={handleModalFn} />
      <StyledFormWrapper>
        <Heading>Sign Up</Heading>
        <Form />
      </StyledFormWrapper>
    </>
  ) : null;
SignUpModal.propTypes = {
  showed: PropTypes.bool.isRequired,
  handleModalFn: PropTypes.func.isRequired
};

export default SignUpModal;
