import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/atoms/Button";
import Footer from "../components/atoms/Footer";
import Header from "../components/molecules/Header";
import Heading from "../components/atoms/Heading";
import AddCollectionModal from "../components/organisms/AddCollectionModal";
import ConfirmationModal from "../components/organisms/ConfirmationModal";
import BackButton from "../components/atoms/BackButton";

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
  background-color: ${({ theme }) => theme.colors.brown};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform ease-in-out 0.5s;
  }
`;

const StyledWrapper = styled.div`
    margin-top 120px;
`;

const StyledButton = styled(Button)`
  position: fixed;
  top: 30px;
  right: 30px;
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
    color: #990308;
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
            <>
              <StyledBox>
                <div>
                  <StyledTitle>Uczysz się:</StyledTitle>
                  <StyledTitle>English</StyledTitle>
                </div>

                <div>
                  <StyledP>Animals</StyledP>
                  <StyledP>78 słówka</StyledP>
                </div>
              </StyledBox>
              <StyledBox>
                <div>
                  <StyledTitle>Uczysz się:</StyledTitle>
                  <StyledTitle>English</StyledTitle>
                </div>

                <div>
                  <StyledP>Character trails</StyledP>
                  <StyledP>17 słówka</StyledP>
                </div>
              </StyledBox>
              <StyledBox>
                <div>
                  <StyledTitle>Uczysz się:</StyledTitle>
                  <StyledTitle>Hiszpański</StyledTitle>
                </div>

                <div>
                  <StyledP>Zwierzęta</StyledP>
                  <StyledP>64 słówka</StyledP>
                </div>
              </StyledBox>
            </>
          )}
        </StyledGrid>
        <BackButton secondary big onClick={navigateDashboard}>
          Back to dashboard
          <br />
          <i className="fas fa-long-arrow-alt-left" />
        </BackButton>
        <StyledButton top onClick={() => setModalOpen(true)}>
          Create new Collection
          <br />
          <i className="fas fa-plus" />
        </StyledButton>
      </StyledWrapper>
      <Footer />
    </>
  );
};

export default ManageTemplate;
