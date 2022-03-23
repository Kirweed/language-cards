import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CollectionCard from "../molecules/CollectionCard";

const StyledWrapper = styled.div`
  margin: 10px auto 50px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  justify-items: center;
  justify-content: center;
  gap: 30px;
  padding: 25px;
`;

const CollectionGrid = () => {
  const reducer: any = useSelector<any>((state) => state.rootReducer);

  return (
    <StyledWrapper>
      {Object.keys(reducer).length ? (
        reducer.collections.map((item: any) => <CollectionCard {...item} />)
      ) : (
        <>
          <h1>Brak kolekcji!</h1>
        </>
      )}
    </StyledWrapper>
  );
};

export default CollectionGrid;
