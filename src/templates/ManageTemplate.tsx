import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/atoms/Footer";
import Header from "../components/molecules/Header";
import Heading from "../components/atoms/Heading";
import AddCollectionModal from "../components/organisms/AddCollectionModal";
import ConfirmationModal from "../components/organisms/ConfirmationModal";
import BackButton from "../components/atoms/BackButton";
import CreateButton from "../components/atoms/CreateButton";

const StyledGrid = styled.div`
  margin: 10px auto 50px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  justify-items: center;
  justify-content: center;
  gap: 50px;
  padding: 25px;
`;

const StyledBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 20px;
  gap: 30%;
  background-color: ${({ theme }) => theme.colors.dark};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform ease-in-out 0.5s;
  }
`;

const StyledWrapper = styled.div`
    margin-top 120px;
`;

const StyledTitle = styled.h2`
  margin: 5px;
  text-align: center;
`;

const StyledIconWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.error};
  }
`;

const StyledP = styled.p`
  margin: 5px;
  text-align: center;
`;

const ManageTemplate = () => {
  const navigate = useNavigate();
  const reducer: any = useSelector<any>((state) => state.rootReducer);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalShowed, showConfirmationModal] = useState(false);
  const [collectionToDelete, setCollectionToDelete] = useState<null | number>(
    null
  );

  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  const redirectToCollection = (id: number) => {
    navigate(`/manage/collection/${id}`);
  };
  return (
    <>
      <Header />
      <AddCollectionModal showed={isModalOpen} handleModalFn={setModalOpen} />
      <StyledWrapper>
        <Heading>Your Collections:</Heading>
        <StyledGrid>
          <ConfirmationModal
            showed={isModalShowed}
            ShowModalFn={showConfirmationModal}
            itemId={collectionToDelete}
            collection
          />
          {Object.keys(reducer).length ? (
            reducer.collections.map((item: any) => (
              <StyledBox
                key={item.name}
                onClick={() => redirectToCollection(item.id)}
              >
                <StyledIconWrapper
                  onClick={(e) => {
                    e.stopPropagation();
                    showConfirmationModal(true);
                    setCollectionToDelete(item.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </StyledIconWrapper>
                <div>
                  <StyledTitle>Uczysz się:</StyledTitle>
                  <StyledTitle>{item.learn_language}</StyledTitle>
                </div>

                <div>
                  <StyledP>{item.name}</StyledP>
                  <StyledP>{item.language_card.length} słówka</StyledP>
                </div>
              </StyledBox>
            ))
          ) : (
            <Heading>Nothing there!</Heading>
          )}
        </StyledGrid>
        <BackButton secondary big onClick={navigateDashboard}>
          Back
          <br />
          <i className="fas fa-long-arrow-alt-left" />
        </BackButton>
        <CreateButton top onClick={() => setModalOpen(true)}>
          Add collection
          <br />
          <i className="fas fa-plus" />
        </CreateButton>
      </StyledWrapper>
      <Footer />
    </>
  );
};

export default ManageTemplate;
