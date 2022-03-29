import React, { useState } from "react";
import Footer from "../components/atoms/Footer";
import Header from "../components/molecules/Header";
import ProgressBar from "../components/molecules/ProgressBar";
import RegisterCollectionCreator from "../templates/RegisterCollectionCreator";

interface CardInterface {
  nativeWord: string;
  learnWord: string;
}

export interface DataToRegister {
  username: string;
  password: string;
  password2: string;
  collectionName: string;
  nativeLanguage: string;
  learnLanguage: string;
  LanguageCards?: CardInterface[];
}

const RegisterView = () => {
  const [dataToRegister, setDataToRegister] = useState<DataToRegister>({
    username: "",
    password: "",
    password2: "",
    collectionName: "",
    nativeLanguage: "",
    learnLanguage: "",
    LanguageCards: []
  });
  const [stage, setStage] = useState(1);

  return (
    <>
      <Header />
      <ProgressBar />
      {stage === 1 ? (
        <RegisterCollectionCreator
          setDataFn={setDataToRegister}
          beforeData={dataToRegister}
          setStage={setStage}
        />
      ) : null}
      <Footer />
    </>
  );
};

export default RegisterView;
