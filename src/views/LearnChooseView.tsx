import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import BackButton from "../components/atoms/BackButton";
import Footer from "../components/atoms/Footer";
import Header from "../components/molecules/Header";
import CollectionGrid from "../components/organisms/CollectionGrid";

const StyledWrapper = styled.div`
    margin-top 120px;
`;

const LearnChooseView = () => {
  const navigate = useNavigate();

  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <Header />
      <BackButton secondary big onClick={navigateDashboard}>
        Back to dashboard
        <br />
        <i className="fas fa-long-arrow-alt-left" />
      </BackButton>
      <StyledWrapper>
        <CollectionGrid />
      </StyledWrapper>
      <Footer />
    </>
  );
};

export default LearnChooseView;
