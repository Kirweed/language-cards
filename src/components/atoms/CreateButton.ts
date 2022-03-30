import styled from "styled-components";
import Button from "./Button";

const CreateButton = styled(Button)`
  z-index: ${({ theme }) => theme.zIndex.middle};
  position: fixed;
  top: 1vh;
  width: 180px;
  height: 50px;
  right: 30px;
`;

export default CreateButton;
