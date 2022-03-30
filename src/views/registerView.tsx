import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/atoms/Footer";
import Header from "../components/molecules/Header";
import ProgressBar from "../components/molecules/ProgressBar";
import { registerUser } from "../store";
import RegisterCardsCreator from "../templates/RegisterCardsCreator";
import RegisterCollectionCreator from "../templates/RegisterCollectionCreator";
import RegisterMainCreator from "../templates/RegisterMainForm";
import { DataToRegister } from "../types";

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
  const dispatch = useDispatch();

  useEffect(() => {
    if (stage >= 4) {
      console.log(dataToRegister);
      dispatch(registerUser(dataToRegister));
    }
  }, [stage]);

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
      {stage >= 3 && (
        <RegisterMainCreator
          setDataFn={setDataToRegister}
          beforeData={dataToRegister}
          setStage={setStage}
        />
      )}
      <Footer />
    </>
  );
};

export default RegisterView;
