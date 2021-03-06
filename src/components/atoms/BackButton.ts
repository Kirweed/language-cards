import styled from "styled-components";
import Button from "./Button";

const BackButton = styled(Button)`
  z-index: ${({ theme }) => theme.zIndex.middle};
  position: fixed;
  top: 1vh;
  left 30px;
  height: 50px;
  width: 130px;
`;

export default BackButton;
