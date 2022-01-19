import React from "react";
import Button from "../components/atoms/Button";
import { useAuth } from "../context";

const DashboardTemplate = () => {
    const auth = useAuth();

    const handleLogout = () => {
        auth.logOut();
    }
return (
    <>
    <h1>You are log in</h1>
    <Button onClick={handleLogout}>log out</Button>
    </>
);
}
export default DashboardTemplate;
