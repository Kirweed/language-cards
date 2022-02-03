import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Footer from "../components/atoms/Footer";
import Heading from "../components/atoms/Heading";
import Header from "../components/molecules/Header";
import { RootState, CollectionInterface } from "../store";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const CollectionView = () => {
  const { id } = useParams();
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
        console.log(data);
      }
    }
  });

  return (
    <>
      <Header />
      <>
        {collectionData.id !== null ? (
          <StyledWrapper>
            <Heading>Collection data:</Heading>
            <h3>{collectionData.learn_language}</h3>
            <h2>{collectionData.name}</h2>
          </StyledWrapper>
        ) : (
          <StyledWrapper>
            <Heading>Nothing there!</Heading>
          </StyledWrapper>
        )}
      </>
      <Footer />
    </>
  );
};

export default CollectionView;
