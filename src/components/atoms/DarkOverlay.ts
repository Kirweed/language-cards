import styled from "styled-components";

const DarkOverlay = styled.div`
    position: fixed;
    z-index: 101;
    width: 100%;
    height: 100vh;
    top: 0;
    left 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    background-color: black;
    opacity: 0.5;
`;

export default DarkOverlay;
