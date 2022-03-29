import React, { useEffect, useState } from "react";
import Footer from "../components/atoms/Footer";
import Header from "../components/molecules/Header";
import ProgressBar from "../components/molecules/ProgressBar";
import RegisterCardsCreator from "../templates/RegisterCardsCreator";
import RegisterCollectionCreator from "../templates/RegisterCollectionCreator";
import RegisterMainCreator from "../templates/RegisterMainForm";

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
  languageCards?: CardInterface[];
}

const RegisterView = () => {
  const [dataToRegister, setDataToRegister] = useState<DataToRegister>({
    username: "",
    password: "",
    password2: "",
    collectionName: "",
    nativeLanguage: "",
    learnLanguage: "",
    languageCards: []
  });
  const [stage, setStage] = useState(1);

  useEffect(() => {
    if (stage >= 4) {
      console.log(dataToRegister);
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
