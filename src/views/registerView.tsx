import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/atoms/Button";
import Footer from "../components/atoms/Footer";
import Paragraph from "../components/atoms/Paragraph";
import Header from "../components/molecules/Header";
import ProgressBar from "../components/molecules/ProgressBar";
import { registerUser } from "../store";
import RegisterCardsCreator from "../templates/RegisterCardsCreator";
import RegisterCollectionCreator from "../templates/RegisterCollectionCreator";
import RegisterMainCreator from "../templates/RegisterMainForm";
import { DataToRegister } from "../types";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

const RegisterView = () => {
  const [dataToRegister, setDataToRegister] = useState<DataToRegister>({
    username: "",
    password: "",
    password2: "",
    email: "",
    collectionName: "",
    nativeLanguage: "",
    learnLanguage: "",
    languageCards: []
  });
  const [stage, setStage] = useState(1);
  const [recordExsistMessage, setRecordExsistMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (stage >= 4) {
      console.log(dataToRegister);
      dispatch(registerUser(dataToRegister, setRecordExsistMessage));
    }
  }, [stage]);

  useEffect(() => {
    if (recordExsistMessage) {
      setStage(3);
    }
  }, [recordExsistMessage]);

  return (
    <>
      <Header />
      <ProgressBar stage={stage} />
      {stage === 1 && (
        <RegisterCollectionCreator
          setDataFn={setDataToRegister}
          beforeData={dataToRegister}
          setStage={setStage}
        />
      )}
      {stage === 2 && (
        <RegisterCardsCreator
          setDataFn={setDataToRegister}
          beforeData={dataToRegister}
          setStage={setStage}
        />
      )}
      {stage === 3 && (
        <RegisterMainCreator
          setDataFn={setDataToRegister}
          beforeData={dataToRegister}
          setStage={setStage}
          recordExsistMessage={recordExsistMessage}
        />
      )}
      {stage >= 4 && (
        <StyledWrapper>
          <Paragraph style={{ textAlign: "center" }}>
            Thank you for register! <br /> Your account is ready, you can sign
            in now!
          </Paragraph>
          <Link to="/">
            <Button secondary style={{ width: "250px" }}>
              Back to home page
            </Button>
          </Link>
        </StyledWrapper>
      )}
      <Footer />
    </>
  );
};

export default RegisterView;
