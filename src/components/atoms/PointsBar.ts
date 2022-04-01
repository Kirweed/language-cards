import styled from "styled-components";

const PointsBar = styled.div`
  position: absolute;
  top: 10vh;
  right: 0;
  width: 150px;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.almostWhite};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.colors.dark};
  border-bottom-left-radius: 30%;
`;

export default PointsBar;
