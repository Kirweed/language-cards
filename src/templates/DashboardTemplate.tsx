import React from "react";
import styled from "styled-components";
import Footer from "../components/atoms/Footer";
import Header from "../components/molecules/Header";
import { useAuth } from "../context";

const StyledGrid =  styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
    gap: 60px;
    width: 100%;
    margin: 200px auto;
    padding: 0 80px;
`;

const StyledBox = styled.div`
    background-color: ${({ theme }) => theme.colors.brown};
    width: 250px;
    height: 250px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: transform ease-in-out .5s;
    }

    i {
        display: block;
        font-size: ${({theme}) => theme.fontSize.xxl};
    }

    span {
        display: block;
        font-size: ${({theme}) => theme.fontSize.l};
        font-weight: ${({theme}) => theme.fontWeight.bold}
    }
`;

const DashboardTemplate = () => {
    const auth = useAuth();

    const handleLogout = () => {
        auth.logOut();
    }
    return (
        <>
        <Header />
        <StyledGrid>
            <StyledBox><span>Mange</span><i className="fas fa-sitemap" /></StyledBox>
            <StyledBox><span>Learn</span><i className="fas fa-graduation-cap"/></StyledBox>
            <StyledBox><span>Settings</span><i className="fas fa-cogs" /></StyledBox>
            <StyledBox onClick={handleLogout}><span>Sign out</span><i className="fas fa-sign-out-alt"/></StyledBox>
        </StyledGrid>
        <Footer />
        </>
    );
}
export default DashboardTemplate;
