import React, { useState } from "react";
import styled, { css } from "styled-components";
import Footer from "../components/atoms/Footer";
import Header from "../components/molecules/Header";
import Paragraph from "../components/atoms/Paragraph";
import Button from "../components/atoms/Button";
import SignInModal from "../components/organisms/SignInModal";

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  position: absolute;
  z-index: 100;
  top: 30px;
  right: 30px;
`;

const StyledWrapper = styled.div<{ left?: boolean; right?: boolean }>`
  height: 60vh;
  border-left: 2px solid ${({ theme }) => theme.colors.darkRed};

  ${({ left }) =>
    left
      ? css`
          width: 70%;
          border: none;
          border-right: 2px solid ${({ theme }) => theme.colors.darkRed};
        `
      : ""}

  ${({ right }) =>
    right
      ? css`
          width: 30%;
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : ""}
`;

const HomePageTemplate = () => {
  const [isModalOpen, changeModalStatus] = useState(false);

  const handleModal = () => {
    changeModalStatus((prevState) => !prevState);
  };

  return (
    <>
      <StyledButton secondary onClick={handleModal}>
        Sign in!
      </StyledButton>
      <SignInModal showed={isModalOpen} handleModalFn={handleModal} />
      <Header />
      <StyledMainWrapper>
        <StyledWrapper left>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            voluptatibus quo ex modi reprehenderit recusandae suscipit officiis
            incidunt laboriosam maiores, culpa beatae neque animi, ipsam fuga
            odit, accusantium optio laudantium! Deserunt maxime aperiam,
            inventore impedit dolore, dolorem explicabo laboriosam
            oditexercitationem sapiente saepe eligendi quos voluptas, error ut
            deleniti quas. Soluta officiis quis commodi dignissimos ducimus
            laudantium est. Exercitationem, non. Molestiae animi culpa, qui
            dicta totam, tenetur voluptatibus aliquid maxime facere delectus
            nulla quod, assumenda quo. Doloribus voluptas similique quaerat
            placeat quas veritatis perferendis esse? Accusamus veritatis dolores
            fugit alias?
          </Paragraph>
        </StyledWrapper>
        <StyledWrapper right>
          <Button>Try for free!</Button>
        </StyledWrapper>
      </StyledMainWrapper>
      <Footer />
    </>
  );
};

export default HomePageTemplate;
