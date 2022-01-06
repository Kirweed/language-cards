import React, { useEffect } from "react";
import axios from "axios";
import Footer from "./components/atoms/Footer";
import Header from "./components/molecules/Header";
import Paragraph from "./components/atoms/Paragraph";
import GlobalStyles from "./theme/GlobalStyles";
import styled, { css } from "styled-components";
import Button from "./components/atoms/Button";

const yourJWTToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQxNDE1ODk2LCJpYXQiOjE2NDE0MTU1OTYsImp0aSI6ImFjNzY1YTQwZDU4YjQ3ZWM4MzhiM2MwNzc3ZjM5YTZiIiwidXNlcl9pZCI6MX0.ktIuSTZGCusZDZelOT_LvqLRcvYM67NPjHPt2UGWSNA";

const getData = () => {
  axios
    .get("http://127.0.0.1:8000/language-cards/", {
      headers: {
        Authorization: "Bearer " + yourJWTToken,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

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

const StyledWrapper = styled.div`
  height: 60vh;
  border-left: 2px solid #e85a4f;

  ${({ left }) =>
    left &&
    css`
      width: 70%;
      border: none;
      border-right: 2px solid #e85a4f;
    `}

  ${({ right }) =>
    right &&
    css`
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const App = () => {
  useEffect(() => getData());

  return (
    <>
      <GlobalStyles />
      <StyledButton secondary>Sign up!</StyledButton>
      <Header />
      <StyledMainWrapper>
        <StyledWrapper left>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            voluptatibus quo ex modi reprehenderit recusandae suscipit officiis
            incidunt laboriosam maiores, culpa beatae neque animi, ipsam fuga
            odit, accusantium optio laudantium! Deserunt maxime aperiam,
            inventore impedit dolore, dolorem explicabo laboriosam odit
            exercitationem sapiente saepe eligendi quos voluptas, error ut
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

export default App;
