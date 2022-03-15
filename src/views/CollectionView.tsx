import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Footer from "../components/atoms/Footer";
import Heading from "../components/atoms/Heading";
import Header from "../components/molecules/Header";
import { RootState, CollectionInterface, editCollection } from "../store";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import ErrorMessage from "../components/atoms/ErrorMessage";
import LanguageCard from "../components/molecules/LanguageCard";
import AddCardModal from "../components/organisms/AddCardModal";

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 200px;
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.dark};
`;

const StyledInlineBox = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-weight: inherit;
  }
`;

const StyledButton = styled(Button)<{ right?: boolean; left?: boolean }>`
  position: fixed;
  top: 30px;

  ${({ right }) =>
    right &&
    css`
      right: 30px;
    `};

  ${({ left }) =>
    left &&
    css`
      left: 30px;
    `}
`;

const StyledEditButton = styled.button`
  width: 80px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    color: black;
    border: 1px solid black;
    border-radius: 15px;
  }
`;

const StyledGrid = styled.div`
  margin: 10px auto 50px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 180px));
  justify-items: center;
  justify-content: center;
  gap: 30px;
  padding: 25px;
`;

const StyledSubmitButton = styled(Button)`
  align-self: center;
  width: 100px;
  height: 60px;
  margin-top: 20px;
`;

const StyledInput = styled(Input)`
  height: 50px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const CollectionView = () => {
  const [isCollectionEdit, setCollectionEdit] = useState(false);
  const [isModalOpen, handleModal] = useState(false);
  const [editData, setEditData] = useState({ name: "", learn_language: "" });
  const [errorMessages, setError] = useState<string[]>([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rootReducer = useSelector((state: RootState) => state.rootReducer);
  const [collectionData, setCollectionData] = useState<CollectionInterface>({
    id: null,
    native_language: "",
    learn_language: "",
    name: "",
    language_card: []
  });

  useEffect(() => {
    if (Object.keys(rootReducer).length) {
      const [data] = rootReducer.collections.filter(
        (item: any) => item.id.toString() === id
      );
      if (data) {
        setCollectionData(data);
      }
    }
  }, [rootReducer]);

  const redirectManageView = () => {
    navigate("/manage");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "collectionName") {
      setEditData({ ...editData, name: e.target.value });
    } else if (e.target.name === "collectionLanguage") {
      setEditData({ ...editData, learn_language: e.target.value });
    }
  };

  const handleCollectionEdit = () => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    let validFlag = true;
    const errorsTab = [];
    if (id) {
      const validId = parseInt(id, 10);
      setError([]);

      if (editData.name.length > 50 || editData.name.length < 3) {
        const error = "Name must have less than 51 chars and more then 2!";
        errorsTab.push(error);
        validFlag = false;
      }

      if (
        editData.learn_language.length > 35 ||
        editData.learn_language.length < 3
      ) {
        const error = "Language must have less than 36 chars and more then 2!";
        errorsTab.push(error);
        validFlag = false;
      }

      if (validFlag) {
        setError([]);

        dispatch(
          editCollection(
            {
              id: validId,
              editData
            },
            token
          )
        );
        setCollectionEdit(false);
      } else {
        setError([...errorsTab]);
      }
    }
  };

  const handleModalFn = () => handleModal(!isModalOpen);

  return (
    <>
      <Header />
      <>
        {collectionData.id !== null ? (
          <>
            <StyledWrapper>
              <StyledEditButton
                onClick={() => {
                  setCollectionEdit(!isCollectionEdit);
                  setError([]);
                }}
              >
                {isCollectionEdit ? (
                  <>
                    <i
                      className="fas fa-window-close"
                      style={{ margin: "0 5px 0 0" }}
                    />{" "}
                    Anuluj
                  </>
                ) : (
                  <>
                    <i className="fas fa-pen" style={{ margin: "0 5px 0 0" }} />
                    Edytuj
                  </>
                )}
              </StyledEditButton>
              <Heading>Collection view</Heading>
              <StyledInlineBox>
                <h3>Language you learn: </h3>
                {isCollectionEdit ? (
                  <StyledInput
                    type="text"
                    placeholder={collectionData.learn_language}
                    name="collectionLanguage"
                    onChange={handleInputChange}
                  />
                ) : (
                  <h3>{collectionData.learn_language}</h3>
                )}
              </StyledInlineBox>
              <StyledInlineBox>
                <h3>Collection name: </h3>
                {isCollectionEdit ? (
                  <StyledInput
                    type="text"
                    placeholder={collectionData.name}
                    name="collectionName"
                    onChange={handleInputChange}
                  />
                ) : (
                  <h3>{collectionData.name}</h3>
                )}
              </StyledInlineBox>
              {isCollectionEdit && (
                <>
                  <p>
                    {errorMessages.length > 0 &&
                      errorMessages.map((item) => (
                        <ErrorMessage key={item}>{item}</ErrorMessage>
                      ))}
                  </p>
                  <StyledSubmitButton secondary onClick={handleCollectionEdit}>
                    Save
                  </StyledSubmitButton>
                </>
              )}
            </StyledWrapper>
            <StyledGrid>
              {collectionData.language_card.length > 0 ? (
                collectionData.language_card.map((item) => (
                  <LanguageCard {...item} />
                ))
              ) : (
                <p>You havent any cards in this collection yet</p>
              )}
            </StyledGrid>
          </>
        ) : (
          <StyledWrapper>
            <Heading>Nothing there!</Heading>
          </StyledWrapper>
        )}
      </>
      <StyledButton secondary left big onClick={redirectManageView}>
        Back to choose collection
        <br />
        <i className="fas fa-long-arrow-alt-left" />
      </StyledButton>
      <StyledButton right onClick={() => handleModal(!isModalOpen)}>
        Create new language card
        <br />
        <i className="fas fa-plus" />
      </StyledButton>
      <AddCardModal showed={isModalOpen} handleModalFn={handleModalFn} />
      <Footer />
    </>
  );
};

export default CollectionView;
