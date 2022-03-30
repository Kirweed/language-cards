interface CardInterface {
  nativeWord: string;
  learnWord: string;
}

export interface DataToRegister {
  username: string;
  password: string;
  password2: string;
  email: string;
  collectionName: string;
  nativeLanguage: string;
  learnLanguage: string;
  languageCards?: CardInterface[];
}
