import styled from "styled-components";
import Button from "./Button";

const BackButton = styled(Button)`
  z-index: ${({ theme }) => theme.zIndex.middle};
  position: fixed;
  top: 30px;
  left 30px;
`;

export default BackButton;
